
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'voter',
    template: `
    <div class="voter">
        <i 
            class="glyphicon glyphicon-thumbs-up vote-button"
            [class.highlighted]="myVote == 1" 
            (click)="upVote()"></i>
            
        <span class="vote-count">{{ upvotes }}</span>
        
        <i 
            class="glyphicon glyphicon-thumbs-down vote-button"
            [class.highlighted]="myVote == -1" 
            (click)="downVote()"></i>

        <span class="vote-count">{{ downvotes }}</span>
    </div>
    `,
    styles: [`
        .voter {
            
            color: #999;
        }
        
        .vote-count {
            font-size: 1.2em;
        }
        
        .vote-button {
            cursor: pointer;
        }
        
        .highlighted {
            font-weight: bold;
            color: orange;
        }
    `]
})
export class VoterComponent {
    @Input() upvotes = 0;
    @Input() downvotes = 0;
    @Input() myVote = 0;

    @Output() vote = new EventEmitter();

    upVote() {
        if (this.myVote == 1)
            return;


        this.upvotes += 1;
        if (this.myVote !== 0)
            this.downvotes -= 1;
        this.myVote = 1;


        this.vote.emit({ myVote: this.myVote });
    }

    downVote() {
        if (this.myVote == -1)
            return;

        if (this.myVote !== 0)
            this.upvotes -= 1;
        this.downvotes += 1;
        this.myVote = -1;

        this.vote.emit({ myVote: this.myVote });
    }
}