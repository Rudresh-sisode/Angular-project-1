import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { HeaderComponent } from './header.component';
import { ProductComponent } from './products/product.component';

//decorator
@NgModule({

    //all the module will be declare here
    imports: [
        BrowserModule
    ],

    // all the component and pipe
    declarations: [
        AppComponent,
        HeaderComponent,
        ProductComponent
    ],

    //only first component
    bootstrap: [
        AppComponent
    ],

    //all services
    providers: []


})


export class AppModule{

}