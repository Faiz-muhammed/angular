import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SampleService } from '../service/sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent {
  constructor(private serv:SampleService){

}


  @Input('item') i='';
  @Output() asd = new EventEmitter();
  sam = this.serv.samvar;

  ngOnInit() {
    this.serv.getData().subscribe()
  }

  clicked(i:string){
    this.asd.emit(i);
    this.sam = this.serv.samvar;
  }
  


}
