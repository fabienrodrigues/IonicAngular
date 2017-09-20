import { NgModule} from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PlayerComponent } from './player/player';

@NgModule({
	declarations: [PlayerComponent],
	imports: [
		IonicModule
	],
	exports: [PlayerComponent]
})

export class ComponentsModule {}