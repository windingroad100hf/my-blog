import { Component, OnInit } from '@angular/core';
import { FetcherService } from '../_services/fetcher.service'
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private baseUrl = environment.baseUrl
  constructor(private fetcher : FetcherService) { }

  ngOnInit(): void {
    let data = this.fetcher.get(this.baseUrl)
    console.log(data)
  }

}
