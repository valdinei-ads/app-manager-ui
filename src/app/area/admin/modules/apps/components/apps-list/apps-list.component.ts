import { Component, OnInit } from '@angular/core';
import { AppsService } from '../../apps.service';

@Component({
  selector: 'app-apps-list',
  templateUrl: './apps-list.component.html',
  styleUrls: ['./apps-list.component.css']
})
export class AppsListComponent implements OnInit {
  Apps: [];
  displayedColumns: string[] = ['nome','descricao', 'tipo', 'dataCadastro', 'acoes'];

  constructor(private Appsservice: AppsService) { 
  }

  ngOnInit() {
      this.Appsservice.GetAll().subscribe((res: any) => {
        this.Apps = res.data;
      });;
  }
}