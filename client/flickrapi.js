(function() {
            var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
            $.getJSON( flickerAPI, {
	            tags: document.getElementById('content').getElementsByTagName('h1')[0].innerHTML,
	            tagmode: "any",
	            format: "json"
	        })
        .done(function( data ) {
       		$.each( data.items, function( i, item ) {
        		$( "<img>" ).attr( "src", item.media.m ).appendTo( "#background" );
        		if ( i === 0 ) {
        			return false;
        		}
        	});
        });
})();