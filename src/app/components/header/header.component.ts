import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostListener,
    OnDestroy, OnInit,
    ViewChild
} from '@angular/core';
import {ActivatedRoute, Event, NavigationEnd, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {
    DURATION_CLOSE_ANIMATION,
    menuOpenCloseAnimation,
    menuOpenCloseHeightAnimation
} from '../../../animations/burger-menu.animation';
import {AppRoutes, RoutesData} from '../../../enums/routes-data.enum';
import { AppConfig } from '../../../enums/app-data';
import { HttpClient } from '@angular/common/http';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import {fadeInBottomAnimation, fadeOutTopAnimation} from "../../../animations/fade-in.animation";
import {AnimateOnScrollDirective} from "../../../animations/animate-on-scroll.directive";
import {TranslatePipe, TranslateService} from "@ngx-translate/core";
import {GlobalStatsService} from "../../services/global-stats/global-stats.service";
import {filter} from "rxjs";


@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        CommonModule,
        TranslatePipe,
    ],
    animations: [
        menuOpenCloseAnimation,
        menuOpenCloseHeightAnimation,
        fadeInBottomAnimation,
        fadeOutTopAnimation
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {

    public navbarOpen = false;
    public linksData = RoutesData;
    public appData = AppConfig;

    protected snapshotUrl: string = "";

    protected isActiveTranslateMessage: boolean = true;
    private timerInterval: any;
    private activeTimeOut: any;

    @ViewChild('navToggle') navToggle!: ElementRef;
    @ViewChild('bars', { static: false }) bars!: ElementRef;

    protected toggleHamburger(e: Event) {
        this.manageToggle();
    }

    protected manageToggle() {
        const barElements: HTMLElement[] = Array.from(this.bars.nativeElement.children);
        barElements.forEach((bar) => bar.classList.toggle('x'));
    }

    protected closeMenu() {
        const barElements: HTMLElement[] = Array.from(this.bars.nativeElement.children);
        barElements.forEach((bar) => bar.classList.remove('x'));
        this.navbarOpen = false;
    }

    protected openMenu() {
        const barElements: HTMLElement[] = Array.from(this.bars.nativeElement.children);
        barElements.forEach((bar) => bar.classList.add('x'));
        this.navbarOpen = true;
    }

    ngOnInit() {
        // setTimeout(() => {
        //     let dioPorco: any = this._router.lastSuccessfulNavigation;
        //     this.snapshotUrl = dioPorco.targetRouterState.snapshot.url;
        //     }, 300);

        this._router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((event: any) => {
                console.log('URL corrente dopo la navigazione:', event.url);

                let dioPorco: any = this._router.lastSuccessfulNavigation;
                this.snapshotUrl = dioPorco.targetRouterState.snapshot.url;
            });
    }

    ngAfterViewInit(): void {
        if (this.navToggle) {
            this.navToggle.nativeElement.addEventListener('click', (e: Event) => this.toggleHamburger(e));
        }

        setTimeout(() => {this.isActiveTranslateMessage = false;}, 3000);

        this.startTranslateMessageTimer();
    }

    ngOnDestroy() {
        // Pulisce l'intervallo quando il componente viene distrutto
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        if (this.activeTimeOut) {
            clearTimeout(this.activeTimeOut);
        }
    }

    constructor(
        protected readonly _router: Router,
        private readonly _httpClient: HttpClient,
        private translate: TranslateService
    ) {
        _router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.navbarOpen && this.toggleNavbar();
            }
        });
    }

    startTranslateMessageTimer() {
        this.timerInterval = setInterval(() => {
            this.isActiveTranslateMessage = true;
            this.activeTimeOut = setTimeout(() => {
                this.isActiveTranslateMessage = false;
            }, 3000);
        }, 18000);
    }

    toggleLanguage() {
        this.translate.use(this.translate.currentLang == 'it' ? 'en' : 'it');
    }

    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event): void {
        if (window.innerWidth > 1024) {
            this.closeMenu()
        }
    }

    public resumeDownload(): void {
        const absolutePath = this.constructAbsolutePath(AssetPaths.RESUME_IT);
        this._httpClient.get(absolutePath, { responseType: 'blob' }).subscribe({
            next: (blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = this.getFileNameFromPath(AssetPaths.RESUME_IT); // Extract the file name
                a.click();
                window.URL.revokeObjectURL(url);
                console.log("Document downloaded successfully.");
            },
            error: (err) => {
                console.error("Error downloading the document: ", err);
            },
        });
    }

    /**
     * I want to perform animation with header (for selected menu element), close header and then navigate to avoid problems
     * with animate on scroll (if router outlet loads page with header not yet closed, elements won't render at right points)
     * @param route to be navigated
     * @protected
     */
    protected browseRouteWithTimeoutForAnimation(route: string){

        this.navbarOpen = false;

        setTimeout(async () => {

            console.log('sleep before route');

            await this._router.navigate([route]);

            let dioPorco: any = this._router.lastSuccessfulNavigation;
            this.snapshotUrl = dioPorco.targetRouterState.snapshot.url;

        }, DURATION_CLOSE_ANIMATION + 150);

        this.manageToggle();
    }

    private constructAbsolutePath(relativePath: string): string {
        return `${window.location.origin}/${relativePath}`;
    }

    private getFileNameFromPath(path: string): string {
        return path.split('/').pop() || 'downloaded_file';
    }

  protected readonly AppRoutes = AppRoutes;
}
