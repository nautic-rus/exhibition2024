import { Component } from '@angular/core';
import { TranslocoService, TranslocoPipe, TranslocoDirective } from '@jsverse/transloco';
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslocoPipe, TranslocoDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private languageService : LanguageService) {
  }

  t(str : string) {
    return this.languageService.t(str);
  }
}
