System.register(['@angular/core', './voter.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, voter_component_1;
    var WordCardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            }],
        execute: function() {
            WordCardComponent = (function () {
                function WordCardComponent() {
                    this.word = "萬安演惜";
                    this.definition = "意謂在立法院連署刪除勞基法84-1的限制，侵害勞工權益的立委，卻在華航空服員勞工的罷工現場，演出關心勞工的戲碼。";
                    this.example = "車輪黨派的高層戕害勞工權益，事情鬧大卻使出萬安演惜絕招。";
                    this.upvotes = 6;
                    this.downvotes = 4;
                    this.tags = ["車輪黨", "KMT", "國民黨"];
                }
                WordCardComponent.prototype.onVote = function (v) {
                    console.log(v);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], WordCardComponent.prototype, "word", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], WordCardComponent.prototype, "definition", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], WordCardComponent.prototype, "example", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], WordCardComponent.prototype, "upvotes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], WordCardComponent.prototype, "downvotes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], WordCardComponent.prototype, "tags", void 0);
                WordCardComponent = __decorate([
                    core_1.Component({
                        selector: 'word-card',
                        template: "\n        <div class=\"card\">\n        <h3 class=\"card-header\">{{ word }}</h3>\n        <div class=\"card-block\">\n            <h4 class=\"card-title\">\u91CB\u7FA9</h4>\n            <p class=\"card-text\">{{definition}}</p>   \n        </div>\n        <div class=\"card-block\">\n            <h4 class=\"card-title\">\u4F8B\u5B50</h4>\n            <p class=\"card-text\">{{example}}</p>   \n        </div>\n        <voter \n            [upvotes]=\"upvotes\" \n            [downvotes]=\"downvotes\"\n            (vote)=\"onVote($event)\"></voter>\n        <br>\n        <span *ngFor=\"let tag of tags\" class=\"label label-info\">{{tag}}</span>\n\n        </div>\n    ",
                        directives: [voter_component_1.VoterComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WordCardComponent);
                return WordCardComponent;
            }());
            exports_1("WordCardComponent", WordCardComponent);
        }
    }
});
//# sourceMappingURL=word-card.component.js.map