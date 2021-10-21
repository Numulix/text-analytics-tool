import { Component, OnInit } from '@angular/core';
import { DetectedLanguages } from 'src/app/models';
import { DandelionService } from 'src/app/services/dandelion.service';

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  loading: boolean = false;
  text: string = '';
  clean: boolean = false;
  detectedLanguages: DetectedLanguages[] = []

  constructor(private dandelion: DandelionService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loading = true;
    this.dandelion.sendLanguageDetectionRequest({ text: this.text, clean: this.clean })
      .subscribe(response => {
        this.detectedLanguages = response.detectedLangs;
        this.loading = false;
      })
  }

}
