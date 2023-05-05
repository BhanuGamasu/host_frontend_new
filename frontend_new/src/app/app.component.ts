import { Component } from '@angular/core';
import { TestServiceService } from './test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  bhanu:any = {};
  constructor( private testService: TestServiceService) {}

  ngOnInit(){
    this.testService.sendData().subscribe(res =>{
      this.bhanu = res
      console.log(res);
    })
  }
}
