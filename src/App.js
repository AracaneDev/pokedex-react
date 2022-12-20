import React from "react";
import { LogoPokemon } from "./LogoPokemon";
import { TitlePP } from "./TitlePP";
import { SearchPokemon } from "./SearchPokemon";
import "./App.css";

function App() {
    const alt = "Logo Pokemon";
    return (
        <React.Fragment>
            <LogoPokemon alt={alt} />
            <TitlePP />
            <SearchPokemon />
        </React.Fragment>
    );
}

export default App;
