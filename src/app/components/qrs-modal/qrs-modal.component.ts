import { Component } from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {DomSanitizer} from "@angular/platform-browser";
import {QRCodeModule} from "angularx-qrcode";
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'app-qrs-modal',
  standalone: true,
  imports: [
    QRCodeModule
  ],
  templateUrl: './qrs-modal.component.html',
  styleUrl: './qrs-modal.component.css'
})
export class QrsModalComponent {
  qrRus: string = "";
  qrEng: string = "";
  constructor(public conf: DynamicDialogConfig, public ref: DynamicDialogRef, private sanitizer: DomSanitizer, private languageService : LanguageService) {
    this.qrRus = this.conf.data.qrRus;
    this.qrEng = this.conf.data.qrEng;
    console.log(this.conf.data)
  }

  closeModal() {
    this.ref.close();
  }

  t(str : string) {
    return this.languageService.t(str);
  }
}
