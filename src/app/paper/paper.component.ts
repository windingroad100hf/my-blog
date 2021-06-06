import { Component, OnInit } from '@angular/core';
import { blogs } from '../_blog-data/blogs'
import { ActivatedRoute } from '@angular/router';
import { BlockScrollStrategy } from '@angular/cdk/overlay';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  blogdata = blogs;
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const title = String(routeParams.get('title'));
    this.findBlogByTitle(title);
    console.log(this.title)
    console.log(this.body)
  }
  title = "test";
  body = "test";

  findBlogByTitle(titlestring: string) {
    for (let i = 0; i < this.blogdata.length; i++) {
      if (this.blogdata[i].substance.title == titlestring) {
        this.title=titlestring
        this.body=this.blogdata[i].substance.content;
        
      }
    }
  }
}
