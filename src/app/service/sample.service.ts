import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
samvar = 'hgkhg'


  constructor(private http:HttpClient) { }

  setSam(samvar:string){
this.samvar = samvar
  }

  getData():Observable<diseaseres>{

  return this.http.get<diseaseres>('https://disease.sh/v3/covid-19/historical/all?lastdays=all')

  }

}

interface diseaseres {
  cases: any[]
}

