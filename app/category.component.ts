import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: '../app/tpl/category.html'
})

export class CategoryComponent implements OnInit {

    fromRootPrefix: string = './';

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        let tree;
        this.route.url.subscribe(
            url => {
                tree = url;
                switch (tree.length) {
                    case 2:
                        this.fromRootPrefix = './';
                        break;
                    case 4:
                        this.fromRootPrefix = '../';
                        break;
                    default:
                        this.fromRootPrefix = './'
                }
                console.log(tree)
            });
    }

}