import { Component, ElementRef, ViewChild, AfterViewInit  } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import jsonData from '../../../assets/api/data.json'
import {LanguageService} from "../../services/language.service";
import {ImageModalComponent} from "../../components/image-modal/image-modal.component";
import {DialogService} from 'primeng/dynamicdialog';
import { QRCodeModule } from 'angularx-qrcode';
import {ModelModalComponent} from "../../components/model-modal/model-modal.component";
import {QrsModalComponent} from "../../components/qrs-modal/qrs-modal.component";

@Component({
  selector: 'app-project',
  standalone: true,
  providers: [
    DialogService,
  ],
  templateUrl: './project.component.html',
  imports: [
    QRCodeModule
  ],
  styleUrl: './project.component.css'
})
export class ProjectComponent implements AfterViewInit{

  @ViewChild('projectRoot') projectRoot!: ElementRef;

  // @Input() id: number | undefined;
  id: number | undefined;
  project: any;

  constructor(private router: Router, private activateRoute: ActivatedRoute, private languageService : LanguageService, public dialogService: DialogService) {
    this.id = +activateRoute.snapshot.params['id'];
    this.project = jsonData.filter(x => x.id === this.id)[0];
  }

  ngAfterViewInit(): void {
    this.addVideo();
  }

  addVideo() {
    if (typeof document !== 'undefined') {
      var dv= document.getElementById('video-block')!;
      let v = document.createElement("video");
      v.id = "video";
      v.className = "mb-2vh video1"
      v.controls = true;

      let s = document.createElement("source");
      s.src = this.project.video;
      s.id = 'source';
      v.append(s);
      dv.append(v);
    }

  }

  playVideo() {
    if (typeof document !== 'undefined') {
      // @ts-ignore
      let v: HTMLVideoElement = document.getElementById("video")!;
      let pp = document.getElementById("pp-button")!;
      if(v.paused){
        v.play();
        pp.classList.add("none")
      }
      else{
        v.pause();
      }
    }
  }


  toPrevProject() {
    if (typeof document !== 'undefined') {
      if (this.project != jsonData[0]) {
        let prevProjectId = this.id! - 1;
        this.router.navigate(['/project', prevProjectId]);
        this.id = prevProjectId;
        this.project = jsonData.filter(x => x.id === prevProjectId)[0];
        let v = document.getElementById('video')!;
        v.remove();
        this.addVideo();
      }
    }
  }

  toNextProject() {
    if (typeof document !== 'undefined') {
      if (this.id != jsonData.length) {
        let nextProjectId = this.id! + 1;
        this.router.navigate(['/project', nextProjectId]);
        this.id = nextProjectId;
        this.project = jsonData.filter(x => x.id === nextProjectId)[0];
        let v = document.getElementById('video')!;
        v.remove();
        this.addVideo();
      }
    }
  }

  openImg(imgSrc : any, index : number) {
    this.dialogService.open(ImageModalComponent, {
      data: {
        url: imgSrc,
        index: index,
        images: this.project.images
      },
      modal: true,
      showHeader: false,
    });
  }

  openModel(modelSrc : any) {
    this.dialogService.open(ModelModalComponent, {
      data: {
        url: modelSrc,
      },
      modal: true,
      showHeader: false,
    });
  }

  openQrs(qrs : any) {
    this.dialogService.open(QrsModalComponent, {
      data: {
        qrRus: qrs.qrRus,
        qrEng: qrs.qrEng,
      },
      modal: true,
      showHeader: false,
    });
  }

  t(str : string) {
    return this.languageService.t(str);
  }

  closeProject() {
    this.router.navigate(['/projects']);
  }
}
