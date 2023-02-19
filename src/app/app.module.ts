import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { DirectivesAtributesComponent } from './directives-atributes/directives-atributes.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DataBidingComponent,
    StructuralDirectivesComponent,
    DirectivesAtributesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
