$.noConflict();

jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
    
  $('#IITLogin').on('submit', function(e){
    if ($('#name-field').val() === 'user' && $('#password-field').val() === 'user') {
          window.location.replace('finances/index.html');
      } else {
          console.log('Bad username');
          $('#IITLogin').prepend('Invalid credentials');
      }
      e.preventDefault();           
  })   
});

