import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryComponent} from "./category.component";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [CommonModule,
        RouterModule.forChild([
            {path: ':id/:seo', component: CategoryComponent}
        ])
    ],
    declarations: [CategoryComponent],
})
export class CategoryModule {
}
