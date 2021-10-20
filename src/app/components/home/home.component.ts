import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DandelionService } from 'src/app/services/dandelion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tokenString: string = '';
  valid: boolean = false;
  invalid: boolean = false;
  tokenExists: boolean = false;

  constructor(private dandelion: DandelionService) { }

  ngOnInit(): void {
    if (this.dandelion.apiToken) {
      this.tokenExists = true;
    }
  }

  onSubmit(): void {
    this.dandelion.checkTokenValidity(this.tokenString).subscribe(
      () => {
        this.valid = true;
        this.invalid = false;
        this.dandelion.apiToken = this.tokenString;
        this.tokenExists = true;
        this.dandelion.sendMessage(true);
      },
      error => {
        if (error instanceof HttpErrorResponse) {
          console.log(error.message)
          this.valid = false;
          this.invalid = true;
        }
      }
    )
  }

}
