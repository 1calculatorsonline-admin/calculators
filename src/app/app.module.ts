import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomTopNavComponent } from './custom-top-nav/custom-top-nav.component';
import { CustomLeftSideNavComponent } from './custom-left-side-nav/custom-left-side-nav.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CustomTopNavComponent,
    CustomLeftSideNavComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule , BrowserAnimationsModule, CustomMaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
