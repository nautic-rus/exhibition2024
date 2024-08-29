import {Component, inject, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MenuButtonComponent} from "../ui/buttons/menu-button/menu-button.component";
import {LangButtonComponent} from "../ui/buttons/lang-button/lang-button.component";
import { TranslocoService, provideTransloco, TranslocoDirective } from '@jsverse/transloco';
import { Router, ActivatedRoute } from '@angular/router';


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
    {url: '/projects', label: 'projects'},
    {url: '/design', label: 'design'},
    {url: '/service', label: 'service'},
    {url: '/gallery', label: 'gallery'},
    {url: '/', label: 'about'},
    // {url: '/contacts', label: 'contacts'}
  ];
  currentRoute: string | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {
    // console.log(this.route.url)
    // this.route.url.subscribe(segments => {
    //   this.currentRoute = segments.join('/');
    //   console.log(this.currentRoute);
    // });
  }
  private translocoService = inject(TranslocoService);


  ngOnInit() {}
  onLangChange(lang: string) {
    console.log("Changing language to: " + lang);
    this.translocoService.setActiveLang(lang);
    console.log(this.translocoService.getTranslation(lang));
    // this.translocoService.selectTranslate('about').subscribe((res) => {console.log(res)})
  }

}
