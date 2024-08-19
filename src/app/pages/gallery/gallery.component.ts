import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
import images from '../../../assets/images/gallery/galleryImages.json'
import {ImageModalComponent} from "../../components/image-modal/image-modal.component";
import {DialogService} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    ImageModalComponent,
    NgClass,
  ],
  providers: [
    DialogService,
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images = images;
  showModal = false;

  constructor(public dialogService: DialogService) {
  }

  // imagesSrc = [
  //   'assets/images/gallery/design_1.png',
  //   'assets/images/gallery/design_2.png',
  //   'assets/images/gallery/design_3.png',
  //   'assets/images/gallery/design_4.png',
  //   'assets/images/gallery/design_5.png',
  // ]

  showFullImage(imgSrc : any, index : number) {
    console.log("index");
    console.log(index);
    console.log(imgSrc)
    this.dialogService.open(ImageModalComponent, {
      data: {
        url: imgSrc,
        index: index
      },
      modal: true,
      showHeader: false,
    });

    // this.showModal = true;
  }

  closeFullImage() {
    this.showModal = false;
    console.log("GALLERY closeFullImage")
  }

}
