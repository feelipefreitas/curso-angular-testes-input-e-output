import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value: number = 0;

  onValueIncreased(valueIncreased: number) {
    this.value = valueIncreased;
  }
}
