$(document).ready(function(){
	var to = "";
  $(function(){
    $( "#slider1, #slider2, #slider3" ).slider({
		max: 255,
		slide: function() {
			var r = $( "#slider1" ).slider( "value" );
			var g = $( "#slider2" ).slider("value" );
			var b = $( "#slider3" ).slider("value" );
			$("#spinnerr").val(r);
			$("#spinnerg").val(g);
			$("#spinnerb").val(b);
			var color = ("rgb(" + r + "," + g + "," + b + ")");
			$('#color').css("background-color", color);
			$('#code').val(color);
		}
		/*slide: function(){
			var num = $( "#slider1" ).slider( "value" );
			$('#te').val(num);
		}*/
		
	});
	
	
  });
  
  
  $( ".spinner" ).spinner({
      min: 0,
      max: 255,
      step: 5,
      start: 0,
	  stop: function(){ 
		 
		
		 var r = $("#spinnerr").val();
		 var g = $("#spinnerg").val();
		 var b = $("#spinnerb").val();
		 $( "#slider1" ).slider( "option", "value", r );
		  $( "#slider2" ).slider( "option", "value", g );
		   $( "#slider3" ).slider( "option", "value", b );
		   var color = ("rgb(" + r + "," + g + "," + b + ")");
			$('#color').css("background-color", color);
			$('#code').val(color);
		 
	 }
    });
	
	
	  $( "#from, #to" ).datepicker();
	  
	  
	  

    var availableTags = [
      "Milwaukee",
      "Chicago",
      "Denver",
      "Los Angelas",
      "Madison",
      "Phoenix",
      "New York",
      "Tampa",
      "Salt Lake City",
      "Sacremento",
      "Seattle",
      "Portland",
      "Orlando",
      "Nashville",
      "St Louis",
      "Memphis",
      "Boston",
      "Albequerque",
      "Flagstaff",
      "Racine",
      "Bangkok",
      "Managua"
    ];
  
	  $( ".tags" ).autocomplete({
      source: availableTags
    });
	
	$( ".radio" ).checkboxradio();
	
	
  
  
    $('.widget input[type=radio]').change(function(){
		if ($('#to').prop("disabled") == true) {
		$('#to').prop("disabled",false);
		$('#to').val(to);}
		else {$('#to').prop("disabled",true);
				to = $('#to').val();
				$('#to').val('');}
 });
	
	
	
	
});