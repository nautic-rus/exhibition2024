import { Routes } from '@angular/router';
import {AboutComponent} from "./pages/about/about.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {ProjectComponent} from "./pages/project/project.component";
import {DesignComponent} from "./pages/design/design.component";
import {ServiceComponent} from "./pages/service/service.component";
import {GalleryComponent} from "./pages/gallery/gallery.component";
// import {ContactsComponent} from "./components/contacts/contacts.component";

export const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'design',
    component: DesignComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  // {
  //   path: 'contacts',
  //   component: ContactsComponent
  // },
  {
    path: 'project/:id',
    component: ProjectComponent
  },
];
