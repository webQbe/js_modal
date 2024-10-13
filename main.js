// Get modal element
var modal = document.getElementById('simpleModal');

// Get open modal button
var modalBtn = document.getElementById('modalBtn');

// Get close button
var closeBtn = document.querySelector('.closeBtn');

// listen for open click
modalBtn.addEventListener('click', openModal);

// listen for close click
closeBtn.addEventListener('click', closeModal);

// function to open modal
function openModal(){

        modal.style.display = 'block';

        /* The code is making sure the modal (which is hidden initially, 
         with display: 'none') is now visible and takes up 
        the necessary space on the page. */

}


// function to close modal
function closeModal(){

    modal.style.display = 'none';

}
