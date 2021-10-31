import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() blogLink!: string;
  linktitle: string = "hello"
  constructor(private router: Router) { }

  ngOnInit(): void {

  this.linktitle = this.title.replace(/\s+/g, '-').toLowerCase();

  }
}
