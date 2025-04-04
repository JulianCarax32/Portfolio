import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { TranslateService } from '@ngx-translate/core';

bootstrapApplication(AppComponent, appConfig)
    .then(appRef => {
        const translate = appRef.injector.get(TranslateService);
        translate.setDefaultLang('it'); // Imposta ITALIANO come lingua predefinita
        translate.use('it'); // Usa 'it' come lingua iniziale
    })
    .catch(err => console.error(err));
