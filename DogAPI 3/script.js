
//https://dog.ceo/api/breed/hound/images/random

'use strict';

const baseUrl = "https://dog.ceo/api/breed/";
let breed = "hound";
let endpoint = "/images/random"
let url = "";

function displayResults (responseJson) {
    $(".results").empty();
    $(".error").empty();
    $(".results").append(
           `<img src="${responseJson.message}"/>`
    )
}



function getImages() {
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $(".results").empty();
      $('.error').html(`Incorrect breed`);
    });
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