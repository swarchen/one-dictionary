import {Component ,Input} from '@angular/core';

import {VoterComponent} from './voter.component';

@Component({
    selector: 'word-card',
    template: `
        <div class="card">
        <h3 class="card-header">{{ word }}</h3>
        <div class="card-block">
            <h4 class="card-title">釋義</h4>
            <p class="card-text">{{definition}}</p>   
        </div>
        <div class="card-block">
            <h4 class="card-title">例子</h4>
            <p class="card-text">{{example}}</p>   
        </div>
        <voter 
            [upvotes]="upvotes" 
            [downvotes]="downvotes"
            (vote)="onVote($event)"></voter>
        <br>
        <span *ngFor="let tag of tags" class="label label-info">{{tag}}</span>

        </div>
    `,
    directives: [VoterComponent] 
})
export class WordCardComponent {
    @Input() word = "萬安演惜";
    @Input() definition = "意謂在立法院連署刪除勞基法84-1的限制，侵害勞工權益的立委，卻在華航空服員勞工的罷工現場，演出關心勞工的戲碼。";
    @Input() example = "車輪黨派的高層戕害勞工權益，事情鬧大卻使出萬安演惜絕招。";
    @Input() upvotes = 6;
    @Input() downvotes = 4;
    @Input() tags = ["車輪黨", "KMT", "國民黨"];

    onVote(v){
        console.log(v);
    }

}