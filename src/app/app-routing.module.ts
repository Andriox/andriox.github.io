import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentReaderComponent } from './content-reader/content-reader.component';

const routes: Routes = [
  {
    path: '', component: ContentReaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
