import { Injectable } from '@angular/core';
/*
The service exposes its cache of messages and two methods: one to add() a message to the cache
 and another to clear() the cache.
*/


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor() { }

  //add messages
  add(message: string){
    this.messages.push(message);
  }

  //clear our messages
  clear(){
    this.messages = [];
  }
}
