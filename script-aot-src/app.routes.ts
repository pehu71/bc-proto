import {IndexComponent} from "./index.component";
import {Routes} from "@angular/router";

export const routes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'feature', loadChildren: './feature.module#FeatureModule'}
];
