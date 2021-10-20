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

  constructor(private dandelion: DandelionService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.dandelion.checkTokenValidity(this.tokenString).subscribe(
      () => {
        this.valid = true;
        this.invalid = false;
        this.dandelion.apiToken = this.tokenString;
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
