import { Component, OnInit } from '@angular/core';
import { FetcherService } from '../_services/fetcher.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fetcher : FetcherService) { }

  ngOnInit(): void {
    let data = this.fetcher.get('http://localhost:10000/posts')
    console.log("SHNOODLE")
    console.log(data)
  }

}
