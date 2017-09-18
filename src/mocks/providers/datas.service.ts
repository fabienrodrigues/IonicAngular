import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DatasService {

    private urlDatas : string = 'shared/datas.json';

    constructor(public http: Http) {}

    getDatas() {
        return this.http.get(this.urlDatas).map(response => response.json());
    }

    /*query(params?: any) {
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
    }*/
}