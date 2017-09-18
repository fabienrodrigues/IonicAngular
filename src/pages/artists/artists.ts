import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { Artist }  from '../../models/artist';
import { DatasService } from '../../providers/providers';

@IonicPage()
@Component({
    selector: 'artists',
    templateUrl: 'artists.html'
})

export class ArtistsPage {
    currentItems:Artist[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, public datasService: DatasService, public modalCtrl: ModalController) {
        this.datasService.getDatas()
        .subscribe((responseDatas) => this.currentItems = responseDatas);
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
    openAlbums(item: Artist) {        
        this.navCtrl.push('AlbumsPage', {artist : item});
    }
}
