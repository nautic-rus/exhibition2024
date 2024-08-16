import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MenuButtonComponent} from "../ui/buttons/menu-button/menu-button.component";
import {LangButtonComponent} from "../ui/buttons/lang-button/lang-button.component";
// @ts-ignore
import { TranslocoService } from "@ngneat/transloco";


interface ILink {url: string, label: string}

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, MenuButtonComponent, LangButtonComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent implements OnInit{
  links: ILink[] = [
    {url: '/', label: 'About'},
    {url: '/projects', label: 'Projects'},
    {url: '/design', label: 'Design'},
    {url: '/service', label: 'Service'}
  ];
  constructor() {}

  ngOnInit() {}
  onLangChange(lang: string) {
    // this.translocoService.setActiveLang(lang);
  }
}
