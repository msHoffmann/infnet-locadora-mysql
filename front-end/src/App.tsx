import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getMovies } from './requests/movies.request';
import { useState } from 'react';
import { IResponseMovie } from "./interfaces/IMovies";

function App() {
  const [ data, setData ] = useState<{ isLoading: boolean, data?: IResponseMovie}>({isLoading: true});
  useEffect(() => {
    if(data.isLoading){
      const fetch = async () => {
        const response = await getMovies();
        setData({ isLoading: false, data: response});
      }
      fetch();
    }
  }, [data.isLoading])
  return (
    <div className="App">
      { data.isLoading ? "Carregando..." : JSON.stringify(data.data?.Movies) }
    </div>
  );
}

export default App;
