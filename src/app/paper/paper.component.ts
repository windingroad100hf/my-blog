import { Component, OnInit } from '@angular/core';
import { blogs } from '../_blog-data/blogs'
import { ActivatedRoute } from '@angular/router';
import { BlockScrollStrategy } from '@angular/cdk/overlay';
import { TestBed } from '@angular/core/testing';
import { FetcherService } from '../_services/fetcher.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {

  constructor(private route: ActivatedRoute, private fetcher: FetcherService) { }

  private baseUrl = environment.baseUrl
  blogdata: any
  title = "test";
  author = "test"
  publication_date = "test"
  body = "test";

  async ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    let url = this.baseUrl + '/posts/' + String(routeParams.get('title'))
    console.log(url)
    this.blogdata = await this.fetcher.get(url).toPromise()
    this.loadBlog()
  }

  //don't think this function is used
  async fetchBlog() {
    this.blogdata = await this.fetcher.get(this.baseUrl + '/posts/' ).toPromise()
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
