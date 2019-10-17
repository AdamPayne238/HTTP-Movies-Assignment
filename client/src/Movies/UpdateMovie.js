// - Create a component with a form to update the chosen movie

import React, { useState, useEffect } from "react";

const initialValue = {
    id: "",
    title: "",
    director: "",
    metascore: "",
    stars: []
};

const UpdateMovie = props => {
    console.log("Update Props", props);
    const [ movies, setMovies ] = useSate(initialValue);

    
}