import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Artist } from '../../models/artist';
import { DatasService } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentArtists: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public artists: DatasService) { }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentArtists = [];
      return;
    }
    /*this.currentArtists = this.artists.query({
      name: val
    });*/
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
