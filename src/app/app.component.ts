import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'laboratoire1';
  artistes: Artiste[] = [];

  a: string = "";
  
  constructor(){
    this.artistes = [new Artiste("Gentle Giant"),
                      new Artiste("Genesis"),
                        new Artiste("Yes")];
  }

  AddArtiste() : void{
  this.artistes.push(new Artiste(this.a));
  }

}

class Artiste {

  constructor(public name: string){

  }
}

