import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.css'
})
export class MenuButtonComponent {
  @Input() title: string | undefined;
  @Input() routerLinkActive!: string | undefined;

}
