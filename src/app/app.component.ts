import { Component } from '@angular/core';
import { SampleService } from './service/sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private samService:SampleService){

  }
  title = 'angular_playground';
  arr = ['dfsd', 'fdfd', '1'];
  func(i: string) {
    console.log(i);
    this.samService.setSam(i)
  }
}
