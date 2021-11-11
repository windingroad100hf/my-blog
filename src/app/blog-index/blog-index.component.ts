import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { blogs } from '../_blog-data/blogs'
import { FetcherService } from '../_services/fetcher.service'
@Component({
  selector: 'app-blog-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.css']
})

export class BlogIndexComponent implements OnInit {
  blogs1: any;
  constructor(private fetcher: FetcherService) { }

  async ngOnInit()  {
    this.blogs1 = await this.getAll()
    console.log(this.blogs1)
  }


  getAll() {
    return this.fetcher.get('http://167.99.158.224:10000/posts').toPromise()
  }

  async getSinglePost(id: string) {
    let url: string = ('http://167.99.158.224:10000/posts/'+id)
    return this.fetcher.get(url).toPromise()
   }
}
