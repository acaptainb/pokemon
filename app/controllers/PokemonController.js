import { pokemonService } from "../services/PokemonService.js";
import { Pop } from "../utils/Pop.js";

export class PokemonController {
    constructor() {
        console.log('controller working');
        this.getPokemons()
    }


    async getPokemons() {
        try {
            await pokemonService.getPokemons()
        } catch (error) {
            Pop.error(error)
            console.error('FAILED TO GET DND SPELLS', error);
        }
    }
}