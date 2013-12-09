if (Meteor.isClient) {
  // on startup, load 10 jobs
  // then track when someone scrolls through 5 and fetch 10 more from the server
  // we're storing the loaded jobs in an array and just moving through it

  // to load 10 jobs would be something like
  // Meteor.call('loadNextTenJobs', function(err, result){
  //  put the resulting 10 jobs into our temporary array
  // });
};

var nextslide = function(){
  //ask server for 10 random elements from the collection (Methods;set them up on server, get them on client)

  //change background of template using Flickr API

  //fade out current template

  //fade in new template

}

// Template.slideshow.newbg = function(){
//  return Session.get('slideBackground');
// }


Template.form.events({
  'click #formbutton': function(){
  //make sure it's not empty data

  //add to collection

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