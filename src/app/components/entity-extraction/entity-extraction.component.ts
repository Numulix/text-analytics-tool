import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  entityFormData = {
    text: '',
    min_confidence: 0,
    include: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  setMinConf(value: string) {
    this.entityFormData.min_confidence = parseFloat(value);
  }

  onSubmit(): void {
    
  }

}
