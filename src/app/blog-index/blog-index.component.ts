import { Component, OnInit } from '@angular/core';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { blogs } from '../_blog-data/blogs'

@Component({
  selector: 'app-blog-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.css']
})
export class BlogIndexComponent implements OnInit {

  constructor() { }

  blogs = blogs
  ngOnInit(): void {
  }



  loadBlogCards(){
    this.blogs.push()

  }
}
