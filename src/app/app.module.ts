import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatGridListModule,
    CommonModule,
        BrowserModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
        
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
