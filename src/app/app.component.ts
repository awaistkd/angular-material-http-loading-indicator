import { Component } from '@angular/core';
import { DemoService } from './service/demo.service';
import { LoaderService } from './loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  constructor(
    private service: DemoService,
    public loaderService: LoaderService){}
  
  makeAMockRequest(){
    this.service.makeMockRequest(1000).subscribe((data)=>{
      console.log("Request Completed");
      console.log(data);
    })
  }
}
