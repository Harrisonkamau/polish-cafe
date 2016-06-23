$(document).ready(function()
    {
      $('.carousel').carousel({
        interval: 3000
      });
  $('#contact_form').on('submit', function(e){

  		//place event handling logic here
  		 url = '/';
  		 data = $(this).serialize();

  		$.post(url, data);
  		// alert(Still here?);


  		//prevents the default behvior of the form
  		e.preventDefault();
  	});

  		// validate your form user inputs
  		$('#contact_form').validate(
  		{
  			rules:
  			{
  				name:"required",
  				email: {
  					required: true,
  					email: true,
  					// maxlength: 30
  				}
  			},
  			messages:
  			{
  				name: "Please Enter Your Full Names",
  				email: {
  					required: "Email cannot be Empty!!",
  					email: "Please use this format user@somedomain.com",
  					// maxlength: "Maximum length should be 30"
  				}
  			},
  			highlight: function(element)
  				{
  					$(element).addClass('error');
  				}
  		});
    });
