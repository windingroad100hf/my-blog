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
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  
  goTo(str: string) {
    this.router.navigate(['/'+str])
  }
}
