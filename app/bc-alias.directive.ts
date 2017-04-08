/**
 * Breadcrumb alias directive. Sets the text inside anchor with router link to injected BreadcrumbService
 */

import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[bcAlias]'
})

export class BcAliasDirective {

    @Input('bcAlias') alias;

    constructor (private el: ElementRef) {}

    @HostListener('click') onClick(): void {
        if (!this.alias) {
            console.log(this.el.nativeElement.innerText)
        } else console.log(this.alias);
    }

}