import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ArtistsPage } from './artists';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ArtistsPage
  ],
  imports: [
    IonicPageModule.forChild(ArtistsPage),
    TranslateModule.forChild(),
    ComponentsModule
  ],
  exports: [
    ArtistsPage
  ]
})
export class ArtistsModule { }
