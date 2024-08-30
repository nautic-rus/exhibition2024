import { Component } from '@angular/core';
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  constructor(private languageService : LanguageService) {
  }

  t(str : string) {
    return this.languageService.t(str);
  }

}
