import { Component, Input, OnInit } from '@angular/core';
import { ApiModelInstituicoes } from 'src/app/services/api-model-instituicoes';

@Component({
  selector: 'app-redeapoio-card',
  templateUrl: './redeapoio-card.component.html',
  styleUrls: ['./redeapoio-card.component.css']
})
export class RedeapoioCardComponent implements OnInit {

  @Input() instituicoes: ApiModelInstituicoes | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
