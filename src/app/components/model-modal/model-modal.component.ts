import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {DomSanitizer} from "@angular/platform-browser"

@Component({
  selector: 'app-model-modal',
  standalone: true,
  imports: [],
  templateUrl: './model-modal.component.html',
  styleUrl: './model-modal.component.css'
})
export class ModelModalComponent {
  modelSrc: string = ""

  constructor(public conf: DynamicDialogConfig, public ref: DynamicDialogRef, private sanitizer: DomSanitizer) {
    this.modelSrc = this.conf.data.url;
  }

  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  closeImageModal() {
    this.ref.close();
    // this.newItemEvent.emit(true);
  }
}
