$.noConflict();

jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
    
  $('#IITLogin').on('submit-button', function(e){
    if ($('#name-field').val() === 'user') {
          window.location.replace('finances/index.html');
      } else {
          console.log('Bad username');
          $('#IITLogin').prepend('<div class="incorrect-credentials">Invalid credentials</div>');
      }
      e.preventDefault();           
  })   
});