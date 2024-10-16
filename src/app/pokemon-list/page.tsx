import PokemonList from "./PokemonList";

// Server Component that fetches data
export default async function Page({ searchParams }: { searchParams: { page?: string; type?: string } }) {
  const type = searchParams.type || '';
  const page = parseInt(searchParams.page || '1', 20); // Default to page 1 if no page is provided
  const limit = 48; // Number of Pokémon per page
  
  // Fetch Pokémon data
  const pokemonDataRes = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1200`);
  const pokemonData = await pokemonDataRes.json();
  
  // Fetch Pokémon types
  const typesRes = await fetch('https://pokeapi.co/api/v2/type');
  const typesData = await typesRes.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const types = typesData.results.map((type: any) => type.name);

  // If a specific type is selected, filter the results
  let filteredPokemon = pokemonData.results;
  if (type) {
    const typeRes = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const typeData = await typeRes.json();    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filteredPokemon = typeData.pokemon.map((p: any) => p.pokemon);
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredPokemon.length / limit);
  const paginatedPokemon = filteredPokemon.slice((page - 1) * limit, page * limit);

  return (
    <PokemonList
      initialPokemonData={paginatedPokemon}
      types={types}
      currentPage={page}
      totalPages={totalPages}
      type={type} // Optional, in case filtering by type is needed
    />
  );
}