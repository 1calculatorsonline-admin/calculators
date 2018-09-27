import { NgModule } from '@angular/core';
import { MatButtonModule ,
         MatMenuModule , MatSidenavModule, MatToolbarModule,
         MatGridListModule, MatListModule, MatIconModule, MatExpansionModule
 } from '@angular/material';

@NgModule({
  imports: [
     MatButtonModule,
     MatMenuModule,
     MatSidenavModule,
     MatToolbarModule,
     MatGridListModule,
     MatListModule,
     MatIconModule, MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
     MatSidenavModule,
     MatToolbarModule,
     MatGridListModule,
     MatListModule,
     MatIconModule, MatExpansionModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
