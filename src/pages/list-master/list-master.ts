import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Artist } from '../../models/artist';
import { DatasService } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentArtists: Artist[];

  constructor(public navCtrl: NavController, public artists: DatasService, public modalCtrl: ModalController) {
    //this.currentArtists = this.artists.query();
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
  openItem(item: Artist) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
