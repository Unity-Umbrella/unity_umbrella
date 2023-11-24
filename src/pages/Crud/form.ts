import React from 'react';

const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const campus = document.getElementById('campus');
const college = document.getElementById('college');

form?.addEventListener('submit', e=> {
    e.preventDefault();

    validateInputs();
});

const validateInputs=()=>{
    //const firstNameValue = firstName.value.trim();

}