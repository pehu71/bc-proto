import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {IndexComponent} from "./index.component";

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot([
            {path: '', component: IndexComponent},
            {path: 'feature', loadChildren: 'app/feature.module#FeatureModule'}
        ])
    ],
    declarations: [AppComponent, IndexComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
