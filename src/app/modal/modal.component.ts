import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { CoursesComponent } from '../courses/courses.component';


@Component({ 
    selector: 'jw-modal', 
    templateUrl: 'modal.component.html', 
    styleUrls: ['modal.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string = '';
    private element: any;

    constructor(private el: ElementRef, private coursesComponent: CoursesComponent) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        document.body.appendChild(this.element);
        this.coursesComponent.add(this);
    }

    ngOnDestroy(): void {
        this.element.remove();
    }

    // open modal
    open(): void {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }

    // close modal
    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }
}