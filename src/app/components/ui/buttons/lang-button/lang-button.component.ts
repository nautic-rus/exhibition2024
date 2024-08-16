import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-lang-button',
  standalone: true,
  imports: [],
  templateUrl: './lang-button.component.html',
  styleUrl: './lang-button.component.css'
})
export class LangButtonComponent {
  @Input() title: string | undefined;

}
