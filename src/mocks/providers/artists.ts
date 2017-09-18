import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Artist } from '../../models/artist';
import { Album } from '../../models/album';
import { Track } from '../../models/track';

@Injectable()
export class Artists {
  artists: Artist[] = [];
  albums: Album[] = [];
  tracks: Track[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let artists = [
      {
        "name": "Nom de l'artiste 1",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Burt is a Bear.",
        albums: [
          {
            name: 'Album 1',
            thumb: 'assets/img/artists/artist1/albums/album1/thumbAlbum1.jpg',
            tracks : [
              {
                title: 'Music1',
                duration: 3.06,
              },
              {
                title: 'Music2',
                duration: 4.25,
              },
              {
                title: 'Music3',
                duration: 3.35,
              },
              {
                title: 'Music4',
                duration: 4.02,
              }
            ]
          },
          {
            name: 'Album 2',
            thumb: 'assets/img/artists/artist1/albums/album2/thumbAlbum2.jpg',
            tracks : [
              {
                title: 'Music1',
                duration: 3.06,
              },
              {
                title: 'Music2',
                duration: 4.25,
              },
              {
                title: 'Music3',
                duration: 3.35,
              },
              {
                title: 'Music4',
                duration: 4.02,
              }
            ]
          },
          {
            name: 'Album 3',
            thumb: 'assets/img/artists/artist1/albums/album3/thumbAlbum3.jpg',
            tracks : [
              {
                title: 'Music1',
                duration: 3.06,
              },
              {
                title: 'Music2',
                duration: 4.25,
              },
              {
                title: 'Music3',
                duration: 3.35,
              },
              {
                title: 'Music4',
                duration: 4.02,
              }
            ]
          },
          {
            name: 'Album 1',
            thumb: 'assets/img/artists/artist1/albums/album1/thumbAlbum1.jpg',
            tracks : [
              {
                title: 'Music1',
                duration: 3.06,
              },
              {
                title: 'Music2',
                duration: 4.25,
              },
              {
                title: 'Music3',
                duration: 3.35,
              },
              {
                title: 'Music4',
                duration: 4.02,
              }
            ]
          },
          {
            name: 'Album 2',
            thumb: 'assets/img/artists/artist1/albums/album2/thumbAlbum2.jpg',
            tracks : [
              {
                title: 'Music1',
                duration: 3.06,
              },
              {
                title: 'Music2',
                duration: 4.25,
              },
              {
                title: 'Music3',
                duration: 3.35,
              },
              {
                title: 'Music4',
                duration: 4.02,
              }
            ]
          },
          {
            name: 'Album 3',
            thumb: 'assets/img/artists/artist1/albums/album3/thumbAlbum3.jpg',
            tracks : [
              {
                title: 'Music1',
                duration: 3.06,
              },
              {
                title: 'Music2',
                duration: 4.25,
              },
              {
                title: 'Music3',
                duration: 3.35,
              },
              {
                title: 'Music4',
                duration: 4.02,
              }
            ]
          },
          {
            name: 'Album 1',
            thumb: 'assets/img/artists/artist1/albums/album1/thumbAlbum1.jpg',
            tracks : [
              {
                title: 'Music1',
                duration: 3.06,
              },
              {
                title: 'Music2',
                duration: 4.25,
              },
              {
                title: 'Music3',
                duration: 3.35,
              },
              {
                title: 'Music4',
                duration: 4.02,
              }
            ]
          },
          {
            name: 'Album 2',
            thumb: 'assets/img/artists/artist1/albums/album2/thumbAlbum2.jpg',
            tracks : [
              {
                title: 'Music1',
                duration: 3.06,
              },
              {
                title: 'Music2',
                duration: 4.25,
              },
              {
                title: 'Music3',
                duration: 3.35,
              },
              {
                title: 'Music4',
                duration: 4.02,
              }
            ]
          },
          {
            name: 'Album 3',
            thumb: 'assets/img/artists/artist1/albums/album3/thumbAlbum3.jpg',
            tracks : [
              {
                title: 'Music1',
                duration: 3.06,
              },
              {
                title: 'Music2',
                duration: 4.25,
              },
              {
                title: 'Music3',
                duration: 3.35,
              },
              {
                title: 'Music4',
                duration: 4.02,
              }
            ]
          }
        ]
      },
      {
        "name": "Charlie Cheetah",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Charlie is a Cheetah.",
        albums: [
          {
            name: 'Album 1',
            thumb: 'assets/img/artists/artist1/albums/album1/thumbAlbum1.jpg',
            tracks : [
              {
                title: 'Music1',
                duration: 3.06,
              },
              {
                title: 'Music2',
                duration: 4.25,
              },
              {
                title: 'Music3',
                duration: 3.35,
              },
              {
                title: 'Music4',
                duration: 4.02,
              }
            ]
          },
          {
            name: 'Album 2',
            thumb: 'assets/img/artists/artist1/albums/album2/thumbAlbum2.jpg',
            tracks : [
              {
                title: 'Music1',
                duration: 3.06,
              },
              {
                title: 'Music2',
                duration: 4.25,
              },
              {
                title: 'Music3',
                duration: 3.35,
              },
              {
                title: 'Music4',
                duration: 4.02,
              }
            ]
          },
          {
            name: 'Album 3',
            thumb: 'assets/img/artists/artist1/albums/album3/thumbAlbum3.jpg',
            tracks : [
              {
                title: 'Music1',
                duration: 3.06,
              },
              {
                title: 'Music2',
                duration: 4.25,
              },
              {
                title: 'Music3',
                duration: 3.35,
              },
              {
                title: 'Music4',
                duration: 4.02,
              }
            ]
          }
        ]
      },
      {
        "name": "Donald Duck",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Donald is a Duck."
      },
      {
        "name": "Eva Eagle",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "name": "Ellie Elephant",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Ellie is an Elephant."
      },
      {
        "name": "Molly Mouse",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Molly is a Mouse."
      },
      {
        "name": "Paul Puppy",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Paul is a Puppy."
      }
    ];

    for (let artist of artists) {
      this.artists.push(new Artist(artist));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.artists;
    }

    return this.artists.filter((artist) => {
      for (let key in params) {
        let field = artist[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return artist;
        } else if (field == params[key]) {
          return artist;
        }
      }
      return null;
    });
  }

  add(artist: Artist) {
    this.artists.push(artist);
  }

  delete(artist: Artist) {
    this.artists.splice(this.artists.indexOf(artist), 1);
  }
}
