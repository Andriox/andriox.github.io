import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartReaderComponent } from './smart-reader/smart-reader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SentenceHighlighterService } from './sentence-highlighter.service';
import { LineExplorerService } from './line-explorer.service';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    SmartReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule
  ],
  providers: [SentenceHighlighterService, LineExplorerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
