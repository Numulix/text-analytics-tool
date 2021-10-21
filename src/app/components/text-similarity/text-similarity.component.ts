import { Component, OnInit } from '@angular/core';
import { DandelionService } from 'src/app/services/dandelion.service';

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  firstText: string = '';
  secondText: string = '';
  loading: boolean = false;
  similarity: number = 0;

  constructor(private dandelion: DandelionService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loading = true;
    this.dandelion.sendTextSimilarityRequest({
      text1: this.firstText,
      text2: this.secondText
    }).subscribe(response => {
      this.similarity = response.similarity;
      this.loading = false;
    })
  }

}
