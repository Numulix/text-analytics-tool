import { Component, OnInit } from '@angular/core';
import { Annotation } from 'src/app/models';
import { DandelionService } from 'src/app/services/dandelion.service';

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

<<<<<<< HEAD
=======
  includeArray: string[] = [];
>>>>>>> 94063322da1f683e2582a45ef4022ef103ffbf1b
  entityFormData = {
    text: '',
    min_confidence: 0,
    include: '',
<<<<<<< HEAD
  }

  constructor() { }
=======
  };
  annotations: Annotation[] = [];
  loading: boolean = false;


  constructor(private dandelion: DandelionService) { }
>>>>>>> 94063322da1f683e2582a45ef4022ef103ffbf1b

  ngOnInit(): void {
  }

  setMinConf(value: string) {
    this.entityFormData.min_confidence = parseFloat(value);
  }

  onSubmit(): void {
<<<<<<< HEAD
    
  }

=======
    if (this.includeArray.length != 0) this.entityFormData.include = this.includeArray.join()
    console.log(this.entityFormData);
    this.loading = true;
    this.dandelion.sendEntityExtractionRequest(this.entityFormData).subscribe(
      response => {
        this.annotations = response.annotations
        this.loading = false;
      },
      err => {
        console.error(err);
        this.loading = false;
      }
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

>>>>>>> 94063322da1f683e2582a45ef4022ef103ffbf1b
}
