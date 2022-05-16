import React, { useState, useEffect } from 'react';
import axios from 'axios';

const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin';

type Cocktail = {
  strDrink: string,
  strDrinkThumb: string,
  idDrink: string
}[];

const App = () => {
  const [drinks, setDrinks] = useState([] as Cocktail);

  useEffect(() => {
    getCocktailWithAxios();
  }, []);

  const getCocktailWithAxios = async () => {
    const res = await axios.get(cocktailUrl);
    setDrinks(res.data.drinks);
  };

  if (!drinks) return <div>No cocktails</div>

  return (
    <div className="App">
      <header className="App-header">
        <h2>Cocktail</h2>
      </header>
      <div className="cocktail-container">
        {/* {JSON.stringify(drinks)} */}
        {drinks.map((drink) => (
          <div>{JSON.stringify(drink.strDrink)}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
