var alljobs = [
	{	"title": "Doctor",
		"description": "My mom was a doctor"
	},
 	{	"title": "Barbie",
		"description": "Ken. Obviously."
	},
	{	"title": "Beyoncé",
		"description": "She's the queen."
	},
	{	"title": "Bill Gates",
		"description": "He cured malaria. Or polio."
	},
	{	"title": "Bum",
		"description": "Just Testing out the site."
	},
	{	"title": "Martha Stewart",
		"description": "yaaaaay."
	}
	]
var printarray = function(){
	for(var i=0; i < 5; i++){
		document.writeln(alljobs[i]);
	}
}
