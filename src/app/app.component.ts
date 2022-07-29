import { Component, OnInit } from '@angular/core';
//import { listenerCount } from 'process';
 import { POKEMONS } from './mocks-pokemon-list';
 import { Pokemon } from './pokemon';
@Component({
  selector: 'app-root',
  templateUrl:`app.component.html`
})
export class AppComponent implements OnInit{
  //title = 'application de pokémons';
  PokemonList:Pokemon[]=POKEMONS;
  pokemonSelected:Pokemon=this.PokemonList[0];
  
  ngOnInit(){
console.table(this.PokemonList);
  }

  typePokemon(id: String)
{
  let index =+id;
 index--;
 this.pokemonSelected=this.PokemonList[index];
}

// typePokemon1(id:Key)
// {
//   let index =+(id.target as HTMLInputElement).value;
//  index--;
//  this.pokemonSelected=this.PokemonList[index];
// }

clickPokemon1(pok: MouseEvent)
{
 let index:number=+(pok.target as HTMLInputElement).value;
 index--;
  this.pokemonSelected=this.PokemonList[index];
}

clickPokemon2(pok: number)
{
 pok--;
  this.pokemonSelected=this.PokemonList[pok];
}
}
 