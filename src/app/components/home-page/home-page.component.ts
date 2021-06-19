import { Component, Input, OnInit } from '@angular/core';
import { ApiModel } from 'src/app/services/api-model';
import { LeisApiService } from 'src/app/services/leis-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  listasdeleis: ApiModel[] = [];
 

  constructor(public leis: LeisApiService) { }



  ngOnInit(): void {
    this.leis.get().subscribe({
    next: (retornoDaApi) => {
      this.listasdeleis = retornoDaApi;
    }
  });
  }

  


}
