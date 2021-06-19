import { Component, Input, OnInit } from '@angular/core';
import { ApiModel } from 'src/app/services/api-model';
import { LeisApiService } from 'src/app/services/leis-api.service';

@Component({
  selector: 'app-informacoes-page',
  templateUrl: './informacoes-page.component.html',
  styleUrls: ['./informacoes-page.component.css']
})
export class InformacoesPageComponent implements OnInit {
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
