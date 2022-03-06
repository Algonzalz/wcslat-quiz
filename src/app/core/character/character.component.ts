import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Character } from '../model/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  charactersArray = new Array<Character>();
  constructor(private htttpService: AuthService) { }

  ngOnInit(): void {
    this.getAllCharacterByHouse();
  }


  getAllCharacterByHouse(){
    let method = "/house"
    let house = "/gryffindor"
    this.htttpService.getAllCharacterByHouse(method, house).subscribe(characters =>{
      characters.forEach(element => {
        if(element.image === ""){
          element.image = "http://lh5.ggpht.com/-O97UXKgJn2g/TmspedhwbjI/AAAAAAAAJcY/qUtlXcduCwA/image%25255B3%25255D.png?imgmax=800"
        }
        if(element.patronus === ""){
          element.patronus = "N/A"
        }
        if(element.dateOfBirth === ""){
          element.dateOfBirth = "N/A"
        }
        this.charactersArray.push(element)
      });
    })

  }

}
