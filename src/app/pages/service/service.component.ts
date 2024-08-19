import { Component } from '@angular/core';
import {AccordionItemComponent} from "../../components/ui/accordion-item/accordion-item.component";
import itemsData from "../../../assets/api/serviceData.json"

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    AccordionItemComponent
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  items = itemsData;
}
