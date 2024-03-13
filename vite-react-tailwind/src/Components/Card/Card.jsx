import React, { useState } from 'react';
import './Card.css';

const Card = (props) => {
  const animals = [
    {
      name: "Tiger",
      image: "https://images.pexels.com/photos/2264556/amur-tiger-tiger-captivity-striped-2264556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      details: "Tigers are the largest cats in the world and are known for their strength and beauty."
    },
    {
      name: "Cheetah",
      image: "https://cdn.pixabay.com/photo/2022/08/13/14/30/cheetah-7383852_1280.jpg",
      details: "Cheetahs are the fastest land animals, capable of reaching speeds up to 75 mph."
    },
    {
      name: "Black Panther",
      image: "https://tse2.mm.bing.net/th?id=OIP.rsxXEcS4f9kYzYLXyhUFpwHaE8&pid=Api&P=0&h=180",
      details: "Black panthers are a melanistic color variant of any Panthera species."
    },
   

  ];

  const [selectedAnimal, setSelectedAnimal] = useState(animals[0]);

  const handleAnimalChange = (animal) => {
    setSelectedAnimal(animal);
  }

  return (
    <div className="max-w-sm mx-10 rounded overflow-hidden shadow-lg justify-items-center">
      <img className="w-full" src={selectedAnimal.image} alt={selectedAnimal.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{selectedAnimal.name}</div>
        <p className="text-gray-700 text-base">
          {selectedAnimal.details}
        </p> 
      </div>
      <div className="px-6 pt-4 pb-2">
        {
        animals.map((animal, index) => (
          <button key={index} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1" onClick={() => handleAnimalChange(animal)}>
            {animal.name}
          </button>
        ))
        }
      </div>
    </div>
  );
}

export default Card;
