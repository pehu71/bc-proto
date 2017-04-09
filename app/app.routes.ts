import {IndexComponent} from "./index.component";
import {Routes} from "@angular/router";

export const routes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'c', loadChildren: 'app/category.module#CategoryModule'}
];
