if (Meteor.isClient) {
  // on startup, load 10 jobs
  // then track when someone scrolls through 5 and fetch 10 more from the server
  // we're storing the loaded jobs in an array and just moving through it

  // to load 10 jobs would be something like
  // Meteor.call('loadNextTenJobs', function(err, result){
  //  put the resulting 10 jobs into our temporary array
  // });
}

Meteor.subscribe("demodata");
console.log(Demodata.find({}));

var nextslide = function(){
  //ask server for 10 random elements from the collection (Methods;set them up on server, get them on client)

  //change background of template using Flickr API

  //fade out current template

  //fade in new template

}

// Template.slideshow.newbg = function(){
//  return Session.get('slideBackground');
// }    


var counter = 2;


Template.slideshow.events({
  'click #nextslide': function(){
    var tempjob = document.getElementById('job');
    var tempdesc = document.getElementById('description');
    if (counter <= alljobs.length) {
      counter += 1;
      tempjob.innerHTML = alljobs[counter].title;
      tempdesc.innerHTML = alljobs[counter].description;    
    }
  }
})

Template.slideshow.events({
  'click #previousslide': function(){
    var tempjob = document.getElementById('job');
    var tempdesc = document.getElementById('description');
    if (counter > 0) {
      counter -= 1;
      tempjob.innerHTML = alljobs[counter].title;
      tempdesc.innerHTML = alljobs[counter].description;
    };
  }
})

Template.form.events({
  'click #submit': function(){
    alljobs.push({
      title: document.getElementById("formword").value,
      description: document.getElementById("formdescription").value
    });
    $('#form').fadeOut(350, function(){
        $("#slideshow").fadeIn(750);
    });
  }
})

Template.form.events({
  'click #skip': function(){
  //make sure it's not empty data
    document.getElementById("job").innerHTML = alljobs[2].title;
    document.getElementById("description").innerHTML = alljobs[2].description;  //add to collection

    $('#form').fadeOut(350, function(){
        $("#slideshow").fadeIn(750);
      });
  }
})

Template.footer.events({
//show about popup if you click "about"
  'click #abouttype': function(){
    $('#aboutpopup').slideToggle(300);
    document.getElementById("aboutpopup").style.display = "block";
  }
});
//hide about popup if your mouse leaves the popup
Template.footer.events({
  'mouseleave #aboutpopup': function(){
    $('#aboutpopup').slideToggle(400);
  }
});

//hide "about" popup if you hit ESCAPE
// $(document).keydown(function(e) {
//  if (document.getElementById("aboutpopup").style.display = "block"){
//    $popup = $("#aboutpopup")
//    if(e.keyCode == 27){ //escape
//      $popup.slideToggle(200)
//    }
//  }
// });