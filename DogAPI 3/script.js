
//https://dog.ceo/api/breed/hound/images/random

'use strict';

const baseUrl = "https://dog.ceo/api/breed/";
let breed = "hound";
let endpoint = "/images/random"
let url = "";

function displayResults (responseJson) {
    $(".results").empty();
    $(".results").append(
           `<img src="${responseJson.message}"/>`
    )
}

function getImages() {
    fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'))
}

function getInput() {
    $('.form').on('submit', function(event){
        event.preventDefault();
        breed = $(this).find('input[name="breed"]').val();
        url = baseUrl + breed + endpoint;
        getImages();
})
}

$(function(){
    getInput();
})