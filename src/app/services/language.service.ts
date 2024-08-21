import { Injectable } from '@angular/core';
import { TranslocoService, TranslocoPipe, TranslocoDirective } from '@jsverse/transloco';
import rusTranslation from '../../assets/translation/rus.json'
import engTranslation from '../../assets/translation/eng.json'
@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translocoService: TranslocoService) { }
  t(str: string) {
    if (this.translocoService.getActiveLang() === 'ru') {
      let index = engTranslation.indexOf(str);
      if (index != -1) {
        return rusTranslation[index];
      } else
        return 'translation error';
    } else
      return str;
  }
}
