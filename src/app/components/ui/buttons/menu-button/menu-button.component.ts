// import {Component, Input} from '@angular/core';
// import {NgClass} from "@angular/common";
//
// @Component({
//   selector: 'app-menu-button',
//   standalone: true,
//   imports: [NgClass],
//   templateUrl: './menu-button.component.html',
//   styleUrl: './menu-button.component.css'
// })
// export class MenuButtonComponent {
//   @Input() title: string | undefined;
//   @Input() routerLinkActive!: string | undefined;
//
// }

import { Component, Input, OnInit } from '@angular/core';
import { TranslocoService, TranslocoPipe, TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [TranslocoPipe, TranslocoDirective],
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent implements OnInit {
  @Input() title: string | undefined;

  constructor(private translocoService: TranslocoService) {
  }

  ngOnInit() {}
}
