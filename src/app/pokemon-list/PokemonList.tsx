"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonListProps {
  initialPokemonData: Pokemon[];
  types: string[];
  currentPage: number;
  totalPages: number;
  type?: string; // Optional prop for filtering by type
}

const PokemonList: React.FC<PokemonListProps> = ({
  initialPokemonData,
  types,
  currentPage,
  totalPages,
  type,
}) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>(initialPokemonData);
  const [currentType, setCurrentType] = useState<string | null>(type || null);
  const router = useRouter();

  const handleTypeChange = (selectedType: string) => {
    if (currentType === selectedType) {
      setCurrentType(null);
      router.push(`/pokemon-list?page=${currentPage}`); // Reset to page 1 on type change
    } else {
      setCurrentType(selectedType);
      router.push(`/pokemon-list?page=1&type=${selectedType}`); // Reset to page 1 on type change
    }
  };

  // Handle going to the next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      router.push(
        `/pokemon-list?page=${nextPage}${type ? `&type=${type}` : ""}`
      );
    }
  };

  // Handle going to the previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      router.push(
        `/pokemon-list?page=${prevPage}${type ? `&type=${type}` : ""}`
      );
    }
  };

  useEffect(() => {
    setPokemonList(initialPokemonData);
  }, [initialPokemonData]);

  return (
    <div className='p-5'>
      <h1 className='text-black-500 font-bold'>
        Pokemon List (Page {currentPage} in total {totalPages} pages)
      </h1>

      <div className='mb-8'>
        <h2 className='text-black-500 font-bold mr-3'>Types:</h2>
        <div className="flex flex-wrap justify-center ">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => handleTypeChange(type)}
              className={`m-1 px-2 py-2 rounded-lg border transition duration-200 ${
                currentType === type
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-orange-500 border-orange-500"
              }`}>
              {type}
            </button>
          ))}
        </div>
      </div>
      <h1 className='text-black-500 font-bold'>
        {initialPokemonData.length} results found.
      </h1>

      <ul className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-8 gap-8 mb-8'>
        {pokemonList.map((pokemon, index) => (
          <li
            key={index}
            className='bg-white rounded-lg shadow-lg p-4 hover:scale-105 transform transition duration-300'>
            <p className='text-lg font-semibold capitalize text-center mb-2'>
              {pokemon.name}
            </p>
            <div className='flex justify-center'>
              <Image
                src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
                alt={pokemon.name}
                width={100}
                height={100}
              />
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination Buttons */}
      <div className='flex justify-center gap-4'>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-white rounded-lg ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } transition duration-300`}>
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-white rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } transition duration-300`}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
