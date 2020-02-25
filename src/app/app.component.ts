import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  
   totalSum: any ;
   totalCredit : any;

  ngOnInit(): void {
     this.apiService.getTotalSum().subscribe(totalSumAmt => {
       this.totalSum = totalSumAmt;
     } );

     this.apiService.getTotalCredit().subscribe(totalCreditAmt => {
      this.totalCredit = totalCreditAmt;
    } );


  }
  title = 'app';


  constructor(
    private apiService: ApiServiceService,
  ) { }

  


}
