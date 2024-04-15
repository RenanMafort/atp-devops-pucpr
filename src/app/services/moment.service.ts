import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.development";
import {Moments} from "../Moments";
import {Response} from "../Response";
import {MessagesService} from "./messages.service";

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;
  private moments:Moments[] = [];
  private static id:number = 1;

  constructor(private http:HttpClient,
              private messageService:MessagesService) { }

  getMoments(){
    return this.moments;
  }

  getMoment(id: number):Moments | undefined{
    return this.moments.find(m => m.id == id);
  }

  async createMoment(formData: FormData){
    const newMoments: Moments = {
      id: MomentService.id++,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      image: "" // Inicialmente, definimos como null
    };

    // Se há uma imagem no formData, leia-a como um URL de dados e atribua-a à propriedade image
    if (formData.get('image')) {
      const imageFile: File = formData.get('image') as File;
      newMoments.image = URL.createObjectURL(imageFile);
    }
      this.moments.push(newMoments);

  }

  removeMoment(id:number){
    this.moments = this.moments.filter(moment => moment.id !== id);
  }
  updateMoment(id: number, formData:FormData){
    this.moments = this.moments.filter(moment => moment.id !== id);
    const newMoments: Moments = {
      id: id,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      image:  formData.get('image') as string // Inicialmente, definimos como null
    };
    this.moments.push(newMoments);

  }
}
