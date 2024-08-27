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
    'assets/images/design/design_1.jpg',
    'assets/images/design/design_2.jpg',
    'assets/images/design/design_3.jpg',
    'assets/images/design/design_4.jpg',
    'assets/images/design/design_5.jpg',
    'assets/images/design/design_6.jpg',
    'assets/images/design/design_7.jpg',
    'assets/images/design/design_8.jpg',
    'assets/images/design/design_9.jpg',
    'assets/images/design/design_10.jpg',
    'assets/images/design/design_11.jpg',
    'assets/images/design/design_12.jpg',
    'assets/images/design/design_13.jpg',
    'assets/images/design/design_14.jpg',
    'assets/images/design/design_15.jpg',
    'assets/images/design/design_16.jpg',
    'assets/images/design/design_17.jpg',
    'assets/images/design/design_18.jpg',
    'assets/images/design/design_19.jpg',
    'assets/images/design/design_20.jpg',
    'assets/images/design/design_21.jpg',
    'assets/images/design/design_22.jpg',
    'assets/images/design/design_23.jpg',
    'assets/images/design/design_24.jpg',
  ]
  imageFullSrc = this.imagesSrc[0];

  changeFullImage(imgSrc: string) {
    this.imageFullSrc = imgSrc;
  }



}
