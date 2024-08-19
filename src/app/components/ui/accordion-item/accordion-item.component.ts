import { Component, Input } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.css'
})
export class AccordionItemComponent {
  @Input() title: string | undefined;
  @Input() content: string | undefined;
  // @Input() expanded: boolean | undefined;

  expanded: boolean = false;
  // showContent() {
  //   this.expanded = true;
  // }
}
