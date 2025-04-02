import {Component, Input, input, InputSignal} from '@angular/core';
import {Project} from '../../../interfaces/project.interface';
import {fadeInTopAnimation} from "../../../animations/fade-in.animation";
import {AnimateOnScrollDirective} from "../../../animations/animate-on-scroll.directive";
import {TranslatePipe} from "@ngx-translate/core";
import {NgClass} from "@angular/common";

@Component({
    selector: 'app-project-card',
    standalone: true,
    imports: [
        AnimateOnScrollDirective,
        TranslatePipe,
        NgClass
    ],
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.scss',
    animations: [fadeInTopAnimation]
})
export class ProjectCardComponent {
    projectData: InputSignal<Project> = input.required<Project>();

    @Input() selectedProject!: Project | null;

    protected isSelected(){
        return this.selectedProject?.title == this.projectData().title;
    }
}
