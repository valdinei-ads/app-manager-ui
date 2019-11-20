import { Component, OnInit } from '@angular/core';
import { TiposAppService } from '../../tipos-app.service';

@Component({
  selector: 'app-tipos-app-list',
  templateUrl: './tipos-app-list.component.html',
  styleUrls: ['./tipos-app-list.component.css']
})
export class TiposAppListComponent implements OnInit {

  tiposApp: [];
  displayedColumns: string[] = ['nome', 'acoes'];
  
  constructor(private tipoAppService: TiposAppService) { }

  ngOnInit() {
      this.tipoAppService.GetAll().subscribe((res: any) => {
        this.tiposApp = res.data;
      });;
  }

}
