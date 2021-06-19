import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiModelInstituicoes } from './api-model-instituicoes';

@Injectable({
  providedIn: 'root'
})
export class InsitituicoesApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://it3-klj-default-rtdb.firebaseio.com/instituicoesMulheres.json';

​  public get(): Observable<ApiModelInstituicoes[]> {
  return this.http.get<ApiModelInstituicoes[]>(this.apiUrl);
  }

}
