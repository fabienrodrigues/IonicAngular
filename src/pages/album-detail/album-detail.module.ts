import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { AlbumDetailPage } from './album-detail';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    AlbumDetailPage
  ],
  imports: [
    IonicPageModule.forChild(AlbumDetailPage),
    TranslateModule.forChild(),
    ComponentsModule
  ],
  exports: [
    AlbumDetailPage
  ]
})
export class AlbumDetailPageModule { }
