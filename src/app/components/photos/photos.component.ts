import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  posts:any[] = [];
  constructor(private _datos: DatosService) { }

  ngOnInit(): void {
    this.listarPosts();
  }

  async listarPosts(){
    const lista = await this._datos.getPosts()
    const usuarios = await this._datos.getUsers()

    lista.forEach( post => {
      usuarios.forEach(us => {
        if(post.userId === us.id){
          let newPost = {
            name: us.name,
            title: post.title,
            body: post.body
          }
          this.posts.push(newPost);
        }
      })
    })

  }

}
