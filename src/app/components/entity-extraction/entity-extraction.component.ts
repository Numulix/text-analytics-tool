import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  includeArray: string[] = [];
  entityFormData = {
    text: '',
    min_confidence: 0,
    include: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  setMinConf(value: string) {
    this.entityFormData.min_confidence = parseFloat(value);
  }

  onSubmit(): void {
    
  }

  handleIncludeCheck(event: any) {
    if (event.target.checked) {
      this.includeArray.push(event.target.value);
    } else {
      let index = this.includeArray.indexOf(event.target.value);
      if (index > -1) {
        this.includeArray.splice(index, 1);
      }
    }
    console.log(this.includeArray);
  };

}
