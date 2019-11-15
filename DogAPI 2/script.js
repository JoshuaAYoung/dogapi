//https://dog.ceo/api/breeds/image/random/3 Fetch!


'use strict';

const baseUrl = "https://dog.ceo/api/breeds/image/random/";
let dogNumber = "3";
let url = "";

function displayResults (responseJson) {
    $(".results").empty();
    $(".error").empty();
    for (let i = 0; i < responseJson.message.length; i++) {
        console.log(responseJson.message[i]);
        $(".results").append(
           `<img src="${responseJson.message[i]}"/>`
        )
    }
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
      $('.error').html(`Something went wrong: ${err.message}`);
    });
}

function getInput() {
    $('.form').on('submit', function(event){
        event.preventDefault();
        dogNumber = $(this).find('input[name="number"]').val();
        if (dogNumber <51 && dogNumber >= 1) {
            url = baseUrl + dogNumber;
            getImages();
        }
        else {
            $(".results").empty();
            $('.error').html("Choose a number between 1 and 50")
        }
})
}

$(function(){
    getInput();
})