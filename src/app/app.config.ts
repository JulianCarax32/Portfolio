import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, HttpClient } from '@angular/common/http';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

// Funzione per caricare le traduzioni da "assets/i18n/".
// Chiede ogni volta al server la versione aggiornata: i file non hanno un hash nel nome e, dopo un rilascio,
// il browser userebbe ancora per settimane la copia in cache (le chiavi nuove comparirebbero non tradotte).
export function createTranslateLoader(http: HttpClient): TranslateLoader {
    return {
        getTranslation: (lang: string) =>
            http.get(`./assets/i18n/${lang}.json`, { headers: { 'Cache-Control': 'no-cache' } }),
    };
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(
            routes,
            withInMemoryScrolling({
                scrollPositionRestoration: "top",
            })
        ),
        importProvidersFrom([
            BrowserAnimationsModule,
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [HttpClient],
                },
                defaultLanguage: 'it' // Impostiamo ITALIANO come predefinito
            }),
        ]),
        provideHttpClient(),
    ]
};
