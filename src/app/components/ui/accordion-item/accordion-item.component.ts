import { Component, Input, OnInit } from '@angular/core';
import {NgClass} from "@angular/common";
// import * as bootstrap from 'bootstrap';
import { TranslocoService, TranslocoPipe, TranslocoDirective } from '@jsverse/transloco';
import {AccordionModule} from "primeng/accordion";

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  imports: [NgClass, TranslocoPipe, TranslocoDirective, AccordionModule],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.css'
})
export class AccordionItemComponent implements OnInit {
  @Input() title: string | undefined;

  expanded: boolean = false;

  content = [];
  contentClick(content: string): void{
    // @ts-ignore
    this.content.includes(content) ? this.content.splice(this.content.indexOf(content), 1) : this.content.push(content);
  }


  ngOnInit() {
  }
}
