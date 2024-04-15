import { Component } from '@angular/core';
import {Moments} from "../../../Moments";
import {MomentService} from "../../../services/moment.service";
import {MessagesService} from "../../../services/messages.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent {
  btnText = "Compartilhar!"


  constructor(private momentService:MomentService,
              private messageService:MessagesService,
              private router:Router) {
  }

  async createHandler(moment: Moments){
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image){
      formData.append('image',moment.image);
    }

    await this.momentService.createMoment(formData);
    this.messageService.add("Momento adicionando com sucesso!");

    await this.router.navigate(['/']);
  }

}
