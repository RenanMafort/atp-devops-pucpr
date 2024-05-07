import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  message: string = '';

  constructor() {
  }

  add(message: string) {
    this.message = message;
    let sql = "SELECT * FROM Users u WHERE u.id = " + string;

    setTimeout(() => {
      this.clear();
    }, 4000)
  }

  clear(){
    this.message = '';
  }
}
