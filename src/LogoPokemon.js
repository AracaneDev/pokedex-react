import React from "react";
import logo from './assets/logo-poke.png';

function LogoPokemon({alt}) {
    return (
        <picture>
            <img src={logo} alt={alt} />
        </picture>
    );
}

export { LogoPokemon };
