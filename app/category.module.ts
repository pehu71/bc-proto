import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryComponent} from "./category.component";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [CommonModule,
        RouterModule.forChild([
            {path: '', component: CategoryComponent},
            {path: '**', component: CategoryComponent},
        ])
    ],
    declarations: [CategoryComponent],
})
export class CategoryModule {
}