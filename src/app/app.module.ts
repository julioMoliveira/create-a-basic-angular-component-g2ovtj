import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './tutorial/header.component';
import { FooterComponent } from './tutorial/footer.component';

import { UserComponent } from './example/user.component';       // Add an import to the component pointing to the place where it was created

@NgModule({
  imports:      [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ])
    NgbModule.forRoot(),
    MarkdownModule.forRoot()
    ReactiveFormsModule,
    ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    UserComponent         // Add the components name to the module 
    ],
  bootstrap: [
    AppComponent
    ]
})

export class AppModule { }
