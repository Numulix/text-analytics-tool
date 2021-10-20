import { Component, OnInit } from '@angular/core';
import { DandelionService } from 'src/app/services/dandelion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tokenExists: boolean = false;

  constructor(private dandelion: DandelionService) { }

  ngOnInit(): void {
    this.dandelion.onMessage().subscribe(flag => {
      this.tokenExists = flag;
    })
  }

}
