import { Component, Input, OnInit } from '@angular/core';
import { Rival } from '../../../interfaces/rival';
import { RivalService } from '../../services/rival.service';

@Component({
  selector: 'app-rival',
  templateUrl: './rival.component.html',
  styleUrls: ['./rival.component.css']
})
export class RivalComponent implements OnInit {

  @Input() rival_id!: number;

  rival!: Rival;

  constructor(private rs: RivalService) { }

  ngOnInit(): void {
    console.log(this.rival_id);

    this.rs.getRival(this.rival_id).
    subscribe(res => this.rival = res)
  }

}
