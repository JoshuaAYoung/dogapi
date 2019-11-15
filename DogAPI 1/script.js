//https://dog.ceo/api/breeds/image/random/3 Fetch!


'use strict';

const baseUrl = "https://dog.ceo/api/breeds/image/random/";
let dogNumber = "3";
let url = "";

function displayResults (responseJson) {
    $(".results").empty();
    for (let i = 0; i < responseJson.message.length; i++) {
        $(".results").append(
           `<img src="${responseJson.message[i]}"/>`
        )
    }
}

function getImages() {
    fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
}

function getInput() {
    $('.form').on('submit', function(event){
        event.preventDefault();
        dogNumber = $(this).find('input[name="number"]').val();
        url = baseUrl + dogNumber;
        getImages();
})
}

$(function(){
    getInput();
})