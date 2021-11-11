import { Component, OnInit } from '@angular/core';
import { blogs } from '../_blog-data/blogs'
import { ActivatedRoute } from '@angular/router';
import { BlockScrollStrategy } from '@angular/cdk/overlay';
import { TestBed } from '@angular/core/testing';
import { FetcherService } from '../_services/fetcher.service';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {

  constructor(private route: ActivatedRoute, private fetcher: FetcherService) { }

  blogdata: any
  title = "test";
  author = "test"
  publication_date = "test"
  body = "test";

  async ngOnInit() {
    
    const routeParams = this.route.snapshot.paramMap;
    let url = 'http://167.99.158.224:10000/posts/' + String(routeParams.get('title'))
    console.log(url)
    this.blogdata = await this.fetcher.get(url).toPromise()
    this.loadBlog()

    // this.blogdata = await this.fetcher.get('http://localhost:10000/posts').toPromise()
    // const routeParams = this.route.snapshot.paramMap;
    // const title = String(routeParams.get('title'));
    // this.findBlogByTitle(title);
    // console.log(this.title)
    // console.log(this.body)
  }

  async fetchBlog() {
    // let url = 'http://localhost:10000/posts/' + String(routeParams.get('title'));
    this.blogdata = await this.fetcher.get('http://167.99.158.224:10000/posts/').toPromise()
  }


  loadBlog() {
    this.title = this.blogdata.Title
    this.publication_date = this.blogdata.Publication_date
    this.body = this.blogdata.Content
    this.author = this.blogdata.Author
  }

  findBlogByTitle(titlestring: string) {
    for (let i = 0; i < this.blogdata.length; i++) {
      if (this.blogdata[i].Title == titlestring) {
        this.title=titlestring
        this.publication_date=this.blogdata[i].Publication_date
        this.body=this.blogdata[i].Content;
        
      }
    }
  }
}
