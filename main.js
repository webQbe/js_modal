// Get modal element
var modal = document.getElementById('simpleModal');

// Get open modal button
var modalBtn = document.getElementById('modalBtn');

// Get close button
var closeBtn = document.getElementById('closeBtn');

// listen for a click
modalBtn.addEventListener('click', openModal);

// function to open modal
function openModal(){

        modal.style.display = 'block';

        /* The code is making sure the modal (which is hidden initially, 
         with display: 'none') is now visible and takes up 
        the necessary space on the page. */

}