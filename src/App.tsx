import React, { useState, useEffect } from 'react';
import axios from 'axios';

const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin';

const App = () => {
  // return <>Hello World</>;
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getCocktailWithAxios();
  }, []);

  const getCocktailWithAxios = async () => {
    const response = await axios.get(cocktailUrl);
    setUserData(response.data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Cocktail</h2>
      </header>
      <div className="cocktail-container">
        {JSON.stringify(userData)}
      </div>
    </div>
  );
}

export default App;
