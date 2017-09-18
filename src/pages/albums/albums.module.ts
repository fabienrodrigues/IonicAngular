import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { AlbumsPage } from './albums';

@NgModule({
  declarations: [
    AlbumsPage,
  ],
  imports: [
    IonicPageModule.forChild(AlbumsPage),
    TranslateModule.forChild()
  ],
  exports: [
    AlbumsPage
  ]
})
export class AlbumsModule { }
