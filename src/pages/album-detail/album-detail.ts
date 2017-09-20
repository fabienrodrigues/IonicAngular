import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { Artist } from '../../models/artist';
import { Album } from '../../models/album';
import { Track } from '../../models/track';
import { PlayerService } from '../../providers/providers';

@IonicPage()
@Component({
	selector: 'page-album-detail',
	templateUrl: './album-detail.html'
})

export class AlbumDetailPage {
	artist: Artist;
	album: Album;
	tracks: Track[];

	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public playerService: PlayerService) {
		this.album = this.navParams.get('album');
		this.artist = this.navParams.get('artist');

		if(this.album) {
			this.tracks = this.album.tracks;
		}
	}


	/**
    * Navigate to artist's albums.
    */
    openAlbums() {
        this.navCtrl.push('AlbumsPage', {artist: this.artist});
	}
	
	playTrack(item) {
									// isInit = true, isPlaying = false, datas									
		this.playerService.setPlayer(true, false, item);
	}
}
