import { AppState } from "../AppState.js";
import { pokeApi } from "./AxiosService.js"

class PokemonService {

    async getPokemons() {
        console.log('service working');
        const response = await pokeApi.get('?limit=100000&offset=0  ')
        console.log('pokemons', response.data);
        AppState.pokemons = response.data.results
    }
}


export const pokemonService = new PokemonService()