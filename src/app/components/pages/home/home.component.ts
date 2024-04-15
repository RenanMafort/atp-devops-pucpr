import {Component, OnInit} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Moments} from "../../../Moments";
import {MomentService} from "../../../services/moment.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    let moments = this.momentsSerice.getMoments();
    const data = moments;

    data.map(item => {
      item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
    });

    this.allMoments = data;
    this.moments = data;

  }

  allMoments: Moments[] = []
  moments: Moments[] = []

  faSearch = faSearch;

  search(event: Event): void {
    const target = event.target as HTMLInputElement
    const value = target.value;

    this.moments = this.allMoments.filter(moment => {
      return moment.title.toLowerCase().includes(value.toLowerCase());
    })

  }

  constructor(private momentsSerice: MomentService) {
  }
}
