import {Component, OnInit} from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';

import {WordsService} from './words.service';
import {WordCardComponent} from '../shared/word-card.component';
import {SearchBarComponent} from '../shared/search-bar.component';

@Component({
  selector: 'words',
  templateUrl: 'app/words/words.template.html',
  directives: [WordCardComponent, SearchBarComponent],
  providers: [WordsService]
})
export class WordsComponent implements OnInit {
  words = [];
  exist = false;
  wordQuery = decodeURI(this._routeParam.get('word'));

  constructor(
    private _wordsService: WordsService,
    private _routeParam: RouteParams,
    public router: Router) { }

  ngOnInit() {
    this._wordsService.getWord(this.wordQuery)
      .subscribe(words => {
        if(words)
          this.exist = true;
        for (var word in words) {
          this.words.push(words[word]);
        }
      });
  }

  onSearch(event) {
    this.router.navigate(['Word', { word: event.query }])
  }

}