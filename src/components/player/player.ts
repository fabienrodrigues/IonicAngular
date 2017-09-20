import { NgModule } from '@angular/core';
import { Component } from '@angular/core';

import { Artist } from '../../models/artist';
import { Album } from '../../models/album';
import { PlayerService } from '../../providers/providers';

/**
 * Generated class for the PlayerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
	selector: 'player',
	templateUrl: 'player.html'
})
export class PlayerComponent {
	/*artist: Artist;
	album: Album;
	track: Track;*/

	player = {
		artist: {
			name: 'artistName'
		},
		album: {
			name: 'albumName',
			thumb: 'assets/img/artists/artist1/albums/album1/thumbAlbum1.jpg'
		},
		currentTrack: {
			title: 'currentTrack Title'
		}
	}

	constructor(public playerService: PlayerService) {
		var toto = playerService.getPlayer();
		console.log('getPlayer', toto);		
	}
}
