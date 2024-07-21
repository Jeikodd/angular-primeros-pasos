import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:  string = "Ironman";
  public age:   number = 45;

  // Los getter y setter se manejan como si fueran propiedades en JS
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  changeName( name: string ): void {
    this.name = name;
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeAge( age: number ) {
    this.age = age;
  }

  resetForm() {
    this.name = 'Ironman';
    this.age = 45;
  }

}
