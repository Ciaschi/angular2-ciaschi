import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Person } from './model/Person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ciaschi-angular';
  editMode = false;

person : Person = {
  name : "mario",
  surname : "rossi",
  age : 22,
}
personList : Person[] = [
  {name : "mamma giorgia", surname : "il melone", age : 45},
  {name : "san matteo", surname : "salvietta milanista", age : 3},
]

nPerson : Person = {
  name : "",
  surname : "",
  age : 0,
}
addP = () => {
  if (this.editMode) {
    this.nPerson = {name : "", surname : "", age : 0,}
  } else {
    this.personList.push(this.nPerson)    
  }
}


delP = (index : number) => {
  this.personList.splice(index, 1);
}

edit = (index : number) => {
  this.editMode = true
  this.nPerson = this.personList[index];

}



}
