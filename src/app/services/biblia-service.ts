
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {inject, Injectable} from '@angular/core';

export interface VersiculoResponse {
  reference: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})

export class BibliaService {


  private apiUrl: string = "https://api.midvash.com/v1/votd?language=pt-br&version=nvi"

  private httpClient: HttpClient = inject(HttpClient);

  getBibliaAPI():Observable<VersiculoResponse>{
    return this.httpClient.get<VersiculoResponse>(this.apiUrl,{responseType:"json"})
  }

}
