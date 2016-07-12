import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {WordsComponent} from './words/words.component';


@RouteConfig([
    {path:'/', name:'Home', component:HomeComponent, useAsDefault:true},
    {path:'/word/:word', name:'Word', component:WordsComponent },
    {path:'/*others', name:"Others", redirectTo:['Home']}
])
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    directives: [HeaderComponent, ROUTER_DIRECTIVES,HomeComponent,WordsComponent] 
})
export class AppComponent { }