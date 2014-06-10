$(document).on('pagebeforeshow', '#P1', function(){       
    $(document).on('swipeleft', '#change-page-button', function(){     
        // store some data
        //Change page
        $.mobile.changePage("#P2");
    });    
});

$(document).on('swipeleft', '#P1', function(){     
        // store some data
        //Change page
        $.mobile.changePage("#P2");
    });    

$(document).on('swiperight', '#P2', function(){     
        // store some data
        //Change page
        $.mobile.changePage("#P1");
    });    
$(document).on('pagebeforeshow', '#P2', function(){     
    
});

// Store object
var storeObject = {
    firstname : '',
    lastname : ''
}

