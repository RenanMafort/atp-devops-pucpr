import {Component, OnInit} from '@angular/core';
import {MomentService} from "../../../services/moment.service";
import {Moments} from "../../../Moments";
import {ActivatedRoute, Router} from "@angular/router";
import {MessagesService} from "../../../services/messages.service";

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css']
})
export class EditMomentComponent implements OnInit {
  moment!: Moments
  btnText: string = 'Editar';

  constructor(private momentService: MomentService, private route: ActivatedRoute
    , private messageService: MessagesService,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    let item = this.momentService.getMoment(id);
    this.moment = item!;

  }

  editHandler(momentData: Moments) {
    const id = this.moment.id;

    const formData = new FormData();
    formData.append('title', momentData.title);
    formData.append('description', momentData.description);
    formData.append('image', momentData.image);

    this.momentService.updateMoment(id!, formData);

    this.messageService.add(`Moment ${id} foi atualizado com sucesso!`)
    this.router.navigate(['/']);
  }
}
