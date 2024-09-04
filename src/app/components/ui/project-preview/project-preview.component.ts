import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {LanguageService} from "../../../services/language.service";

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  standalone: true,
  styleUrls: ['./project-preview.component.css']
})
export class ProjectPreviewComponent implements OnInit {
  @Input() data: any;
  // @Output() newItemEvent = new EventEmitter<number>();

  imgSrc: string = '';
  title: string = '';
  previewInfo: string = '';


  constructor(private router: Router, private languageService : LanguageService) { }

  ngOnInit(): void {
    this.previewInfo = this.data.previewInfo;
    this.title = this.data.title;
    this.imgSrc = this.data.previewImage;
  }

  showFullInfo(id: number) {
    // this.router.navigate(['projects', 'project', this.data.id]);
    // this.router.navigate(['/project', this.data.id]);
    this.router.navigate(['/project', this.data.id]);
  }

  t(str : string) {
    return this.languageService.t(str);
  }
}
