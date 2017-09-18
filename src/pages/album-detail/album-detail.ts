import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { Artist } from '../../models/artist';
import { Album } from '../../models/album';
import { Track } from '../../models/track';

@IonicPage()
@Component({
	selector: 'page-album-detail',
	templateUrl: './album-detail.html'
})

export class AlbumDetailPage {
	artist: Artist;
	album: Album;
	tracks: Track[];

	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
		this.album = this.navParams.get('album');
		this.artist = this.navParams.get('artist');

		if(this.album) {
			this.tracks = this.album.tracks;
		}
	}


	/**
    * Navigate to the detail page for this item.
    */
    openAlbums() {
        this.navCtrl.push('AlbumsPage', {artist: this.artist});
    }
}
