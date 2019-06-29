import { Component } from '@angular/core';
import { Message } from './message';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  messageModel = new Message("", "");
  
  submitForm(message: any) {
    console.log(message);
  }

  get values() { 
    return JSON.stringify(this.messageModel);
  }

}
