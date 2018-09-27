import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomTopNavComponent } from './custom-top-nav/custom-top-nav.component';
import { CustomLeftSideNavComponent } from './custom-left-side-nav/custom-left-side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomTopNavComponent,
    CustomLeftSideNavComponent
  ],
  imports: [
    BrowserModule , BrowserAnimationsModule, CustomMaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
