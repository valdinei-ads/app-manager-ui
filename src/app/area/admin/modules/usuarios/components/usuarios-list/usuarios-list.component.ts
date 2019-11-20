import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../usuarios.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {
  usuarios: [];
  generos:["Feminino", "Masculino"]
  displayedColumns: string[] = ['nome','idade', 'documento', 'tipodocumento', 'genero', 'acoes'];

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit() {
    this.usuarioService.GetAll().subscribe((res: any) => {
      this.usuarios = res.data;
    });;
  }

}
