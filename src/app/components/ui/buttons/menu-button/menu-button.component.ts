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
export class MenuButtonComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() isActive: boolean | undefined;

  constructor(private translocoService: TranslocoService, private route: Router) {
  }

  ngOnInit() {
  }

  getActive() {
    return false;
  }
}
