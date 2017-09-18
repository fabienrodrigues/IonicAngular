import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ArtistsPage } from './artists';

@NgModule({
  declarations: [
    ArtistsPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtistsPage),
    TranslateModule.forChild()
  ],
  exports: [
    ArtistsPage
  ]
})
export class ArtistsModule { }
