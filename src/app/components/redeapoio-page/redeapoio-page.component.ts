import { Component, OnInit } from '@angular/core';
import { ApiModelInstituicoes } from 'src/app/services/api-model-instituicoes';
import { InsitituicoesApiService } from 'src/app/services/instituicoes-api.service';

@Component({
  selector: 'app-redeapoio-page',
  templateUrl: './redeapoio-page.component.html',
  styleUrls: ['./redeapoio-page.component.css']
})
export class RedeapoioPageComponent implements OnInit {

  listaDeInstituicoes: ApiModelInstituicoes[] = [];

  constructor(public instituicoesApi: InsitituicoesApiService) { }

  ngOnInit(): void {
    this.instituicoesApi.get().subscribe({
      next: (retornoDaApi) => {
        this.listaDeInstituicoes = retornoDaApi;
      }
    });
  }

}
