import {Component, OnInit} from '@angular/core';
import {Moments} from "../../../Moments";
import {MomentService} from "../../../services/moment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../../environments/environment.development";
import {FormGroup,FormControl,Validators} from "@angular/forms";
import {faTimes, faEdit} from "@fortawesome/free-solid-svg-icons";
import {MessagesService} from "../../../services/messages.service";

@Component({
  selector: 'app-moments',
  templateUrl: './moments.component.html',
  styleUrls: ['./moments.component.css']
})
export class MomentsComponent implements OnInit {
  moment?: Moments;
  baseApiUrl = environment.baseApiUrl;
  faTimes = faTimes;
  faEdit = faEdit;

  commentForm! : FormGroup;

  constructor(private momentService: MomentService, private route: ActivatedRoute,
              private messageService: MessagesService,
              private router:Router) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    let moment = this.momentService.getMoment(id);
      this.moment = moment;

    this.commentForm = new FormGroup({
      text: new FormControl('',[Validators.required]),
      username: new FormControl('',[Validators.required]),
    });
  }

   removeHandler(id: number) {
   this.momentService.removeMoment(id);

  this.messageService.add("Momento excluido com sucesso!");
  this.router.navigate(['/'])
  }

  get text(){
    return this.commentForm.get('text')!;
  }





}
