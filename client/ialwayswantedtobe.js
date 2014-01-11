if (Meteor.isClient) {
    // on startup, load 10 jobs
    // we're storing the loaded jobs in an array and just moving through it
    // to load 10 jobs would be something like
    // Meteor.call('loadNextTenJobs', function(err, result){
    //  put the resulting 10 jobs into our temporary array
    // });
}
Meteor.subscribe("demodata");
console.log(Demodata.find({}));

alljobs[1].bg.push("elephant");

var preload = function() {
    for (var j = 0; j < alljobs.length; j++) {
        var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        $.getJSON(flickerAPI, {
            tags: alljobs[j].title,
            tagmode: "all",
            format: "json"
        }).done(function(data) {
            $.each(data.items, function(i, item) {
                var sourceLarge = (item.media.m).replace("_m.jpg", "_b.jpg");
                alljobs.replace(alljobs[j].bg, sourceLarge);
                if (i === 0) {
                    return false;
                }
            })
        });
    }
}

var changebackground = function(counter) {
    // var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    // $.getJSON(flickerAPI, {
    //     //tags: document.getElementById("job").innerHTML,
    //     tags: alljobs[counter].title,
    //     tagmode: "all",
    //     format: "json"
    // })
    //     .done(function(data) {
    //         $.each(data.items, function(i, item) {
    //             var sourceLarge = (item.media.m).replace("_m.jpg", "_b.jpg");
    //             //$( "<img>" ).attr( "src", sourceLarge ).appendTo( "#background" );
    //             document.getElementById("bgimg").src = allbkgrds[counter];
    //             if (i === 0) {
    //                 return false;
    //             }
    //         })
    //     });
    document.getElementById("bgimg").src = alljobs[counter].bg;

}

var counter = 2;


Template.slideshow.events({
    'click #nextslide': function() {
        var tempjob = document.getElementById('job');
        var tempdesc = document.getElementById('description');
        counter += 1;
        if (counter < alljobs.length) {
            tempjob.innerHTML = alljobs[counter].title;
            tempdesc.innerHTML = alljobs[counter].description;
            changebackground(counter);
            console.log(counter)
            document.getElementById('previousslide').style.display = "block";
        } else {
            document.getElementById('nextslide').style.display = "none";
            console.log(counter)
        }
        // if (counter = alljobs.length - 5) {
        //load 10 new items in tempdata
        // }
    }
})

Template.slideshow.events({
    'click #previousslide': function() {
        var tempjob = document.getElementById('job');
        var tempdesc = document.getElementById('description');
        counter -= 1;
        if (counter >= 0) {
            tempjob.innerHTML = alljobs[counter].title;
            tempdesc.innerHTML = alljobs[counter].description;
            changebackground(counter);
            document.getElementById('nextslide').style.display = "block";
        } else {
            document.getElementById('previousslide').style.display = "none";
        }
    }
})

Template.slideshow.events({
    'change #job': function() {
        console.log("abc");
        changebackground();
    }
});

Template.form.events({
    'click #submit': function() {
        alljobs.push({
            title: document.getElementById("formword").value,
            description: document.getElementById("formdescription").value
        });
        $('#form').fadeOut(350, function() {
            $("#slideshow").fadeIn(750);
        });
        preload();
    }
})

Template.form.events({
    'click #skip': function() {
        //make sure it's not empty data
        document.getElementById("job").innerHTML = alljobs[2].title;
        document.getElementById("description").innerHTML = alljobs[2].description; //add to collection

        $('#form').fadeOut(350, function() {
            $("#slideshow").fadeIn(750);
        });
        preload();
    }
})

Template.footer.events({
    //show about popup if you click "about"
    'click #abouttype': function() {
        $('#aboutpopup').slideToggle(300);
        document.getElementById("aboutpopup").style.display = "block";
    }
});
//hide about popup if your mouse leaves the popup
Template.footer.events({
    'mouseleave #aboutpopup': function() {
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