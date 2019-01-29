import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private httpClient: HttpClient) { }

  makeMockRequest(delay){
    return this.httpClient.get(`https://www.mocky.io/v2/5ab2663b2e00003d044cc144?mocky-delay=${delay}ms`)
  }
}
