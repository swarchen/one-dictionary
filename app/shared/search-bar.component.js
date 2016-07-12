System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var SearchBarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SearchBarComponent = (function () {
                function SearchBarComponent() {
                    this.search = new core_1.EventEmitter();
                }
                SearchBarComponent.prototype.onSearch = function (query) {
                    this.search.emit({ query: query });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SearchBarComponent.prototype, "search", void 0);
                SearchBarComponent = __decorate([
                    core_1.Component({
                        selector: 'search-bar',
                        template: "\n    <div class=\"input-group\">\n    <form>    \n      <input type=\"text\" class=\"form-control\" placeholder=\"\u8F38\u5165\u60A8\u60F3\u627E\u7684\u5B57\u8A5E\" #query>\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-default\" type=\"submit\" (click)=\"onSearch(query.value)\">\u641C\u5C0B</button>\n      </span>\n      </form>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchBarComponent);
                return SearchBarComponent;
            }());
            exports_1("SearchBarComponent", SearchBarComponent);
        }
    }
});
//# sourceMappingURL=search-bar.component.js.map