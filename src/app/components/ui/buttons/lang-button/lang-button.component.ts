import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-lang-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './lang-button.component.html',
  styleUrl: './lang-button.component.css'
})
export class LangButtonComponent {
  @Input() title: string | undefined;
  @Input() side: string  = '';

  constructor(private translcoService : TranslocoService) {
  }


  getActive() {
    let a = ((this.translcoService.getActiveLang() === 'en' && this.title === 'ENG') || (this.translcoService.getActiveLang() === 'ru' && this.title === 'RUS'))
    return a;
  }
}
