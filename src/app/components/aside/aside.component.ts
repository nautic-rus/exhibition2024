import {Component, inject, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MenuButtonComponent} from "../ui/buttons/menu-button/menu-button.component";
import {LangButtonComponent} from "../ui/buttons/lang-button/lang-button.component";
import { TranslocoService, provideTransloco, TranslocoDirective } from '@jsverse/transloco';


interface ILink {url: string, label: string}

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, MenuButtonComponent, LangButtonComponent, TranslocoDirective],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent implements OnInit{
  links: ILink[] = [
    {url: '/', label: 'About'},
    {url: '/projects', label: 'Projects'},
    {url: '/design', label: 'Design'},
    {url: '/service', label: 'Service'},
    {url: '/gallery', label: 'Gallery'}
  ];
  constructor() {}
  private translocoService = inject(TranslocoService);

  ngOnInit() {}
  onLangChange(lang: string) {
    console.log("Changing language to: " + lang);
    this.translocoService.setActiveLang(lang);
    console.log(this.translocoService.getTranslation('ru'));
    // this.translocoService.selectTranslate('about').subscribe((res) => {console.log(res)})
  }

}
