import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { navbarComponent } from './component/Home/navbar/navbar.component';
import {ReactiveFormsModule } from '@angular/forms';
import { NewinvoiceComponent } from './component/newinvoice/newinvoice.component';
import { HeroComponent } from './component/Home/hero/hero.component';
import { CategoryComponent } from './component/Home/product/category/category.component';
import { ItemComponent } from './component/Home/product/item/item.component';
import { SectionComponent } from './component/Home/product/section/section.component';
import { FormComponent } from './component/Home/contact/form/form.component';
import { FooterComponent } from './component/Home/footer/footer.component';
import { LocationComponent } from './component/Home/location/location.component';
import { CommonModule } from '@angular/common';
import { MainComponent } from './component/Home/main/main.component';
import { ContactSectionComponent } from './component/Home/contact/section/section.component';
import { NamesComponent } from './component/Home/company/names/names.component';
import { AboutComponent } from './component/Home/about/about.component';
import { VideoComponent } from './component/Home/shop/video/video.component';
import { PhotoComponent } from './component/Home/shop/photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    NewinvoiceComponent,
    HeroComponent,
    CategoryComponent,
    ItemComponent,
    SectionComponent,
    LocationComponent,
    FormComponent,
    FooterComponent,
    navbarComponent,
    MainComponent,
    ContactSectionComponent,
    NamesComponent,
    AboutComponent,
    VideoComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
],// Ensure this is imported as a standalone component
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
