import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() heroDeleted: Hero;

  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
