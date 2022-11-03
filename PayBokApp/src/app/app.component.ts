import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PayBokApp';

  showFirstView: boolean = true;
  showCards: boolean = true;
  showGraphics: boolean = true;

}
