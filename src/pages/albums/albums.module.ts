import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { AlbumsPage } from './albums';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AlbumsPage
  ],
  imports: [
    IonicPageModule.forChild(AlbumsPage),
    TranslateModule.forChild(),
    ComponentsModule
  ],
  exports: [
    AlbumsPage
  ]
})
export class AlbumsModule { }
