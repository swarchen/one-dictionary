import {Component , Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'search-bar', 
    template: `
    <div class="input-group">
    <form>    
      <input type="text" class="form-control" placeholder="輸入您想找的字詞" #query>
      <span class="input-group-btn">
        <button class="btn btn-default" type="submit" (click)="onSearch(query.value)">搜尋</button>
      </span>
      </form>
    </div>
    `
})

export class SearchBarComponent {
    @Output() search = new EventEmitter();

    onSearch(query){
        this.search.emit({query:query});
    }
}