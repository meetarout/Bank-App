import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ApiServiceService {

  constructor(
    private http: HttpClient
  ) { }


  getTotalSum(){
    //return this.http.get("http://localhost:9090/getTotalSum");
    return Observable.of("2500");
  }

  getTotalCredit(){
   // return this.http.get("http://localhost:9090/getTotalCredit");
  
  return Observable.of("30000");
  }
}
