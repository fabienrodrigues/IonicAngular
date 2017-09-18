import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { Artist } from '../../models/artist';
import { Album } from '../../models/album';

@IonicPage()
@Component({
    selector: 'albums',
    templateUrl: 'albums.html'
})

export class AlbumsPage {
    artist: Artist;
    albums: Album[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
        this.artist = this.navParams.get('artist');

        if(this.artist) {
            this.albums = this.artist.albums;
        }
    }

    /**
    * The view loaded, let's query our items for the list
    */
    ionViewDidLoad() {
    }

    openSearch() {
        this.navCtrl.push('SearchPage');
    }

    /**
    * Navigate to the detail page for this item.
    */
    openAlbum(item: Album) {
        this.navCtrl.push('AlbumDetailPage', { album: item, artist: this.artist });
    }
}
