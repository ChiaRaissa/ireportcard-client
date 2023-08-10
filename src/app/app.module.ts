import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SharedModule} from "./modules/shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {AppServiceInjectables} from "./injectables/app.service.injectables";
import {HttpClientModule} from "@angular/common/http";
import {AuthInterceptorInjectable, ErrorInterceptorInjectable} from "./injectables/app.interceptor.injectables";
import {ShellComponent} from './components/shell/shell.component';
import {DialogModule} from "primeng/dialog";
import {SwitchComponent} from "./components/switch/switch.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {LandingComponent} from './components/landing/landing.component';
import {ToastModule} from "primeng/toast";
import { ContactComponent } from './components/landing/contact/contact.component';
import { LandingFooterComponent } from './components/landing/footer/landing-footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    SwitchComponent,
    LandingComponent,
    ContactComponent,
    LandingFooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    DialogModule,
    FormsModule,
    ToastModule,
  ],
  providers: [
    AppServiceInjectables,
    AuthInterceptorInjectable,
    ErrorInterceptorInjectable,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
