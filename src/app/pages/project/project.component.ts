import { Component, ElementRef, ViewChild, AfterViewInit  } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import jsonData from '../../../assets/api/data.json'
import {LanguageService} from "../../services/language.service";
import {ImageModalComponent} from "../../components/image-modal/image-modal.component";
import {DialogService} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-project',
  standalone: true,
  providers: [
    DialogService,
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements AfterViewInit {

  @ViewChild('projectRoot') projectRoot!: ElementRef;

  // @Input() id: number | undefined;
  id: number | undefined;
  project: any;

  constructor(private router: Router, private activateRoute: ActivatedRoute, private languageService : LanguageService, public dialogService: DialogService) {
    this.id = +activateRoute.snapshot.params['id']; // Convert to number
    this.project = jsonData.filter(x => x.id === this.id)[0];
    console.log(this.project)
  }

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        // behavior: 'smooth'
      });
    }
    // 2nd option
    // this.projectRoot.nativeElement.scrollIntoView()
  }

  toPrevProject() {
    if (this.project != jsonData[0]) {
      console.log("prev project");
      let prevProjectId = this.id! - 1;
      console.log(prevProjectId);
      this.router.navigate(['/project', prevProjectId]);
      this.id = prevProjectId;
      this.project = jsonData.filter(x => x.id === prevProjectId)[0];
    }
  }

  toNextProject() {
    if (this.id != jsonData.length) {
      console.log("next project");
      let nextProjectId = this.id! + 1;
      console.log(nextProjectId);
      this.router.navigate(['/project', nextProjectId]);
      this.id = nextProjectId;
      this.project = jsonData.filter(x => x.id === nextProjectId)[0];
    }
  }

  openImg(imgSrc : any, index : number) {
    console.log("index");
    console.log(index);
    console.log(imgSrc)
    this.dialogService.open(ImageModalComponent, {
      data: {
        url: imgSrc,
        index: index,
        images: this.project.images
      },
      modal: true,
      showHeader: false,
    });

    // this.showModal = true;
  }

  t(str : string) {
    return this.languageService.t(str);
  }

  closeProject() {
    this.router.navigate(['/projects']);
  }
}
