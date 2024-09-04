import { Component, Input, OnInit } from '@angular/core';
import { TranslocoService, TranslocoPipe, TranslocoDirective } from '@jsverse/transloco';
import { Router } from '@angular/router';
import { NgClass} from '@angular/common'

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [TranslocoPipe, TranslocoDirective, NgClass],
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent {
  @Input() title: string | undefined;
  @Input() url!: string;

  constructor(private translocoService: TranslocoService, private router: Router) {
  }


  getActive(): boolean {
    return this.router.isActive(this.url, true) || (this.router.url.includes('/project') && this.title === 'projects');
  }
}
