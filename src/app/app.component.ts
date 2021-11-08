import { Component } from '@angular/core';
import { BackendService } from './services/backend.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BackendService]
})
export class AppComponent {
  title = 'cliente';
  constructor(private dataSvc: BackendService){}
  ngOnInit(){
    
  }
}
