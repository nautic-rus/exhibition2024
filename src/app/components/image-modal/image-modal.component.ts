import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-image-modal',
  standalone: true,
  imports: [],
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.css'
})
export class ImageModalComponent {
  imageUrl!: string;
  currentIndex : number;
  imgs: {title: string, src: string}[] = []
  prevUrl: string = '';
  nextUrl: string = '';

  constructor(public conf: DynamicDialogConfig, public ref: DynamicDialogRef) {
    this.imgs = this.conf.data.images;
    this.imageUrl = this.conf.data.url;
    this.currentIndex = this.conf.data.index;
  }
  // @Output() newItemEvent = new EventEmitter<boolean>();
  closeImageModal() {
    this.ref.close();
    // this.newItemEvent.emit(true);
  }


  next(): void {
    if (this.currentIndex < this.imgs.length - 1) {
      this.currentIndex++;
      this.imageUrl = this.imgs[this.currentIndex].src;
      this.updateNavigation();
    }
  }

  // Перейти к предыдущему элементу
  previous(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.imageUrl = this.imgs[this.currentIndex].src;
      this.updateNavigation();
    }
  }

  // Обновить навигацию для кнопок "предыдущий" и "следующий"
  updateNavigation(): void {
    this.prevUrl = (this.currentIndex > 0) ? this.imgs[this.currentIndex - 1].src : '';
    this.nextUrl = (this.currentIndex < this.imgs.length - 1) ? this.imgs[this.currentIndex + 1].src : '';
  }

}
