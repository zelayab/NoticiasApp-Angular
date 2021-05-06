import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) {

   }

  getNoticias(parametros: any): Observable<any>{
    const URL ='https://newsapi.org/v2/top-headlines?country='+ parametros.pais+'&category='+ parametros.categoria +'&apiKey=159a3d86ecd94e5d94fce72116d0fee7';
    return this.http.get(URL);
  }
}
// 159a3d86ecd94e5d94fce72116d0fee7
