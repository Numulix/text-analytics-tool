import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  firstText: string = '';
  secondText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
