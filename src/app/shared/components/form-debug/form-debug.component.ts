import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css']
})
export class FormDebugComponent implements OnInit {

  @Input() form;
  @Input() objectForm;

  formulario: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formulario = new FormGroup({
      nome: new FormControl(),
      descricao: new FormControl(),
    });
  }

}
