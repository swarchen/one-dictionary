System.register(['@angular/core', '@angular/router-deprecated', './words.service', '../shared/word-card.component', '../shared/search-bar.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, words_service_1, word_card_component_1, search_bar_component_1;
    var WordsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (words_service_1_1) {
                words_service_1 = words_service_1_1;
            },
            function (word_card_component_1_1) {
                word_card_component_1 = word_card_component_1_1;
            },
            function (search_bar_component_1_1) {
                search_bar_component_1 = search_bar_component_1_1;
            }],
        execute: function() {
            WordsComponent = (function () {
                function WordsComponent(_wordsService, _routeParam, router) {
                    this._wordsService = _wordsService;
                    this._routeParam = _routeParam;
                    this.router = router;
                    this.words = [];
                    this.exist = false;
                    this.wordQuery = decodeURI(this._routeParam.get('word'));
                }
                WordsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._wordsService.getWord(this.wordQuery)
                        .subscribe(function (words) {
                        if (words)
                            _this.exist = true;
                        for (var word in words) {
                            _this.words.push(words[word]);
                        }
                    });
                };
                WordsComponent.prototype.onSearch = function (event) {
                    this.router.navigate(['Word', { word: event.query }]);
                };
                WordsComponent = __decorate([
                    core_1.Component({
                        selector: 'words',
                        templateUrl: 'app/words/words.template.html',
                        directives: [word_card_component_1.WordCardComponent, search_bar_component_1.SearchBarComponent],
                        providers: [words_service_1.WordsService]
                    }), 
                    __metadata('design:paramtypes', [words_service_1.WordsService, router_deprecated_1.RouteParams, router_deprecated_1.Router])
                ], WordsComponent);
                return WordsComponent;
            }());
            exports_1("WordsComponent", WordsComponent);
        }
    }
});
//# sourceMappingURL=words.component.js.map