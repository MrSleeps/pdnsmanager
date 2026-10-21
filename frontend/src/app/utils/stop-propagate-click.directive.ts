import { Directive, HostListener } from '@angular/core';

@Directive({
    standalone: false,
    selector: '[appStopPropagateClick]'
})
export class StopPropagateClickDirective {
    @HostListener('click', ['$event'])
    public onClick(event: any): void {
        event.stopPropagation();
    }
}
