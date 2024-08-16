import {Component, OnInit} from '@angular/core';
import {ProjectPreviewComponent} from "../../components/ui/project-preview/project-preview.component";
import jsonData from '../../../assets/api/data.json'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectPreviewComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  data:any[] = jsonData;

  ngOnInit(): void {
  }

}
