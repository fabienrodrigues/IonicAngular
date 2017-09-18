import { Component } from '@angular/core';

/**
 * Generated class for the PlayerAudioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'player-audio',
  templateUrl: 'player-audio.html'
})
export class PlayerAudioComponent {

  text: string;

  constructor() {
    console.log('Hello PlayerAudioComponent Component');
    this.text = 'Hello World';
  }

}
