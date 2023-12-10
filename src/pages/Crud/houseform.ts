// import { useState } from "react";

// const houseforms=()=>{

// }

// export default houseforms;

import React from 'react';

const houseform = document.getElementById('houseform');
const houseOwner = document.getElementById('houseOwner');
const houseNumber = document.getElementById('houseNumber');
const street = document.getElementById('street');
const postalcode = document.getElementById('postalcode');
const price = document.getElementById('price');
const bedroom = document.getElementById('bedroom');
const washroom = document.getElementById('washroom');
const description = document.getElementById('description');
const utilitieshydro = document.getElementById('utilitieshydro');
const utilitieswater = document.getElementById('utilitieswater');
const utilitiesheat = document.getElementById('utilitiesheat');
const houselongitude = document.getElementById('houselongitude');
const houselatitude = document.getElementById('houselatitude');
const houselocation = document.getElementById('houselocation');

houseform?.addEventListener('submit', e=> {
    e.preventDefault();

    validateInputs();
});

const validateInputs=()=>{

}