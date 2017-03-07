import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent}   from './app.component';
import {IndexComponent} from "./index.component";

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot([
            {path: '', component: IndexComponent}
        ])
    ],
    declarations: [AppComponent, IndexComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
