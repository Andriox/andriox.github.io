import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartReaderComponent } from './smart-reader/smart-reader.component';

const routes: Routes = [
  {
    path: '', component: SmartReaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
