import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usuarios:any = []
  persona:any = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        ity: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
  };

  constructor(private _datos: DatosService) { }

  ngOnInit(): void {
    this.listarUsuarios()
  }

  async listarUsuarios(){
    this.usuarios = await this._datos.getUsers()
  }

  ObtenerAlumno(user){
    this.persona = user;
  }

}
