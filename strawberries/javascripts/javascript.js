$( document ).ready(function(){


  // strawberry modal
  $('#become-strawberry .close, #become-strawberry').on('click', function(){
  	$('#become-strawberry').hide();
  });

  $('body').on('keydown', function(e){
  	if(e.which === 27) $('#become-strawberry').click();
  })

  $('#main-nav .modal-trigger').on('click', function(){
  	$('#become-strawberry').show();
  })

});