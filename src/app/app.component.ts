import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  src = '/assets/test.pdf';

  pageRendered(e: CustomEvent) {
    console.log('(page-rendered)', e);
  }

  onError(error: any) {
    console.log('(error : ', error);
  }
}
