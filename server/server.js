//create an array of objects
	//create empty array
	//structure data with Title, description as keys
	var alljobs = [
	{	"title": "Doctor",
		"description": "My mom was a doctor"
	},
 	{	"title": "Barbie",
		"description": "Ken. Obviously."
	}
	]
//function to populate Demodata
	//go through each element of the array 

	for(var i= 0; i < alljobs.length; i++){

	//insert that object into the Demodata collection
		Demodata.insert(alljobs[i]);
		//console.log(alljobs[i]);
	}
	//console.log(Demodata.find().fetch());
//check to see if Demodata is populated YAY!
//push dataset to client
	Meteor.publish("demodata", function(){
		return Demodata.find({});
	});
	  
//subscribe to dataset in client
//create empty array
//write a function to load 5 objects from the dataset into the empty array onload
//write a function to display in slideshow











//for example
// var alljobs = [
// 	{	"title": "Doctor",
// 		"description": "My mom was a doctor"
// 	},
//  	{	"title": "Barbie",
// 		"description": "Ken. Obviously."
// 	}
// ]