import { Component, OnInit } from '@angular/core';
import { DandelionService } from 'src/app/services/dandelion.service';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  text: string = '';
  lang: string = 'auto';
  loading: boolean = false;
  sentiment = {
    score: 0,
    type: ''
  }

  sentimentTest: number = -1;

  private colorRed = { r: 255, g: 0, b: 0 }
  private colorGreen = { r: 0, g: 255, b: 0 }
  sentimentColor = { 
    r: this.colorRed.r + (this.colorGreen.r - this.colorRed.r) * this.normalizeValue(this.sentimentTest), 
    g: this.colorRed.g + (this.colorGreen.g - this.colorRed.g) * this.normalizeValue(this.sentimentTest), 
    b: this.colorRed.b + (this.colorGreen.b - this.colorRed.b) * this.normalizeValue(this.sentimentTest) 
  }

  options = [
    { id: 'auto', name: 'Auto Detect' },
    { id: 'en', name: 'English' },
    { id: 'it', name: 'Italian' },
  ]

  constructor(private dandelion: DandelionService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log({text: this.text, lang: this.lang});
    this.loading = true;
    this.dandelion.sendSentimentAnalysisRequest({ text: this.text, lang: this.lang })
      .subscribe(response => {
        this.sentiment = response.sentiment;
        this.loading = false;
      });
  }

  handleChange(event: any) {
    this.lang = event.target.value;
  }

  normalizeValue(value: number): number {
    return (value - (-1)) / (1 - (-1));
  }

}
