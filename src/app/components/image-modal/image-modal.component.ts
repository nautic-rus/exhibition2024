import { Component } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
// import images from '../../../assets/images/gallery/galleryImages.json'

@Component({
  selector: 'app-image-modal',
  standalone: true,
  imports: [],
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.css'
})
export class ImageModalComponent {
  // @Input() imageUrl!: string;
  imageUrl!: string;
  currentIndex : number;
  // imgs: {title: string, src: string}[] = images;
  imgs: {title: string, src: string}[] = []
  prevUrl: string = '';
  nextUrl: string = '';

  constructor(public conf: DynamicDialogConfig, public ref: DynamicDialogRef) {
    this.imgs = this.conf.data.images;
    console.log("dialog");
    console.log(this.imgs)
    this.imageUrl = this.conf.data.url;
    this.currentIndex = this.conf.data.index;
    console.log(this.currentIndex);
  }
  // @Output() newItemEvent = new EventEmitter<boolean>();
  closeImageModal() {
    console.log("MODAL closeFullImage")
    this.ref.close();
    // this.newItemEvent.emit(true);
  }


  next(): void {
    if (this.currentIndex < this.imgs.length - 1) {
      this.currentIndex++;
      this.imageUrl = this.imgs[this.currentIndex].src;
      this.updateNavigation();
    }
    console.log("next")
    console.log(this.currentIndex)
  }

  // Перейти к предыдущему элементу
  previous(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.imageUrl = this.imgs[this.currentIndex].src;
      this.updateNavigation();
    }
    console.log("prev")
    console.log(this.currentIndex)

  }

  // Обновить навигацию для кнопок "предыдущий" и "следующий"
  updateNavigation(): void {
    this.prevUrl = (this.currentIndex > 0) ? this.imgs[this.currentIndex - 1].src : '';
    this.nextUrl = (this.currentIndex < this.imgs.length - 1) ? this.imgs[this.currentIndex + 1].src : '';

  }

}
