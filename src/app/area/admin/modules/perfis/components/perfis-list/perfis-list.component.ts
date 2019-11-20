import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { PerfisService } from '../../perfis.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-perfis-list',
  templateUrl: './perfis-list.component.html',
  styleUrls: ['./perfis-list.component.css']
})
export class PerfisListComponent implements OnInit {

  perfis: [];
  displayedColumns: string[] = ['nome', 'acoes'];

  constructor(private perfisService: PerfisService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.perfisService.GetAll().subscribe((res: any) => {
      this.perfis = res.data;
    });;
  }

}
