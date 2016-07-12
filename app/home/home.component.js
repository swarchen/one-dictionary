System.register(['@angular/core', '@angular/router-deprecated', '../shared/word-card.component', '../words/words.service', '../shared/search-bar.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, word_card_component_1, words_service_1, search_bar_component_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (word_card_component_1_1) {
                word_card_component_1 = word_card_component_1_1;
            },
            function (words_service_1_1) {
                words_service_1 = words_service_1_1;
            },
            function (search_bar_component_1_1) {
                search_bar_component_1 = search_bar_component_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(router) {
                    this.router = router;
                    this.words = [];
                }
                HomeComponent.prototype.onSearch = function (event) {
                    this.router.navigate(['Word', { word: event.query }]);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'app/home/home.template.html',
                        directives: [word_card_component_1.WordCardComponent, search_bar_component_1.SearchBarComponent],
                        providers: [words_service_1.WordsService]
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map