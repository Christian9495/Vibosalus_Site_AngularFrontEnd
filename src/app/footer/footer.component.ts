import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  logRequest: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  userLog(){
    return this.logRequest;
  }

  isLogRequest(){
    this.logRequest = !this.logRequest;
  }

}
