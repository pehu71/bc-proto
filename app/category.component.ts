import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: '../app/tpl/category.html'
})

export class CategoryComponent implements OnInit {

    veryRoot: string = '/c/';
    prefix: string;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        let tree;
        let ser;
        this.route.url.subscribe(
            url => {
                tree = url;
                console.log(tree);
                ser = url.join('/');
                console.log(ser);
                this.prefix = this.veryRoot + ser;
            });
    }

}