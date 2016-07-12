import {HTTP_PROVIDERS, Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WordsService {
    private _BaseUrl = "https://one-dictionary-cfcde.firebaseio.com/rest/words/";

    constructor(private _http: Http) {

    }
    getWord(word) {
        return this._http.get(this.getWordUrl(word))
                .map(res => res.json());
    }

    private getWordUrl(word){
        return this._BaseUrl + word + '.json';
    }
}