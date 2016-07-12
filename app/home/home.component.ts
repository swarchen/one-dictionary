import {Component } from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {WordCardComponent} from '../shared/word-card.component';
import {WordsService} from '../words/words.service';
import {SearchBarComponent} from '../shared/search-bar.component';

@Component({
    selector: 'home', 
    templateUrl: 'app/home/home.template.html',
    directives: [WordCardComponent,SearchBarComponent],
    providers: [WordsService]
})
export class HomeComponent {
    words = [];
    
    constructor(
        public router:Router
	) {}

    onSearch(event) {
        this.router.navigate(['Word',{word:event.query}])
	}
}