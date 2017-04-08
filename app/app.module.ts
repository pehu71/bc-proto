import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {MegaMenuModule} from 'primeng/primeng';
import {AppComponent} from './app.component';
import {IndexComponent} from "./index.component";
import {routes} from './app.routes';
import {BcAliasDirective} from "./bc-alias.directive";

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot(routes),
        MegaMenuModule
    ],
    declarations: [AppComponent, IndexComponent, BcAliasDirective],
    bootstrap: [AppComponent]
})
export class AppModule {
}
