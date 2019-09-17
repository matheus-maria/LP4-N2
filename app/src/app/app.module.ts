


/* ANGULAR */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* MATERIAL DESIGN */
import {
   MatCardModule, MatMenuModule,
   MatButtonModule, MatInputModule,
   MatIconModule, MatIconRegistry, MatSnackBarModule, MatSelectModule, MatDialogModule, MatProgressSpinnerModule, MatToolbarModule, MatTableModule, MatCheckboxModule, MatProgressBarModule, MatDividerModule, MatTooltipModule, MatListModule, MatBadgeModule, MatChipsModule, MatSliderModule, MatTabsModule, MatExpansionModule, MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule
} from '@angular/material';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    // Angular Core
    CommonModule, FormsModule, ReactiveFormsModule,    
    BrowserModule, BrowserAnimationsModule, AppRoutingModule,
    HttpClientModule,
    // Angular Material    
    MatTabsModule, MatCardModule, MatToolbarModule, MatMenuModule, MatSnackBarModule, MatDialogModule, MatTableModule, MatListModule, MatBadgeModule, MatExpansionModule,
    MatButtonModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatChipsModule,
    MatProgressSpinnerModule, MatProgressBarModule, MatDividerModule, MatTooltipModule, MatSliderModule, 
    MatIconModule,MatAutocompleteModule,MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.setDefaultFontSetClass("fas");
 }
}
