import { Component, OnInit } from '@angular/core';
import { Annotation } from 'src/app/models';
import { DandelionService } from 'src/app/services/dandelion.service';

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
  annotations: Annotation[] = [];


  constructor(private dandelion: DandelionService) { }

  ngOnInit(): void {
  }

  setMinConf(value: string) {
    this.entityFormData.min_confidence = parseFloat(value);
  }

  onSubmit(): void {
    if (this.includeArray.length != 0) this.entityFormData.include = this.includeArray.join()
    console.log(this.entityFormData);

    this.dandelion.sendEntityExtractionRequest(this.entityFormData).subscribe(
      response => this.annotations = response.annotations,
      err => console.error(err)
    )
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
