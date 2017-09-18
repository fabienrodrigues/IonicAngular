import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { AlbumDetailPage } from './album-detail';

@NgModule({
  declarations: [
    AlbumDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AlbumDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    AlbumDetailPage
  ]
})
export class AlbumDetailPageModule { }
