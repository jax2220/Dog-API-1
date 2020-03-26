



'use strict';
function watchForm(){
    $('form').submit(event => {
        event.preventDefault();
        getDogImage();
    });  
}
function getDogImage(){
    let userInput = $('#number-input').val();
    fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'))
};
function displayResults(responseJson){
     console.log(responseJson);
     $('.dog-pictures').html(`<h2>Look at these dogs!</h2>`);
     for (let dog of responseJson.message) {
        $('.dog-pictures').append(
        `<img src="${dog}" class="results-img" width="200" height="auto">`);
      }
    $('.dog-pictures').removeClass('hidden'); 
};


$(function(){
    console.log('App ready to run! Waiting for submit!');
    watchForm();
});