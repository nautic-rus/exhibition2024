import { Component } from '@angular/core';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [],
  templateUrl: './design.component.html',
  styleUrl: './design.component.css'
})
export class DesignComponent {
  imagesSrc = [
    'assets/images/design/design_1.png',
    'assets/images/design/design_2.png',
    'assets/images/design/design_3.png',
    'assets/images/design/design_4.png',
    'assets/images/design/design_5.png',
  ]
  imageFullSrc = 'assets/images/design/design_1.png';

  changeFullImage(imgSrc: string) {
    this.imageFullSrc = imgSrc;
  }



}
