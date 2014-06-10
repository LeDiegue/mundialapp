$(document).on('pagebeforeshow', '#index', function(){       
    $(document).on('swipeleft', '#change-page-button', function(){     
        // store some data
        //Change page
        $.mobile.changePage("#second");
    });    
});
$(document).on('swipeleft', '#index', function(){     
        // store some data
        //Change page
        $.mobile.changePage("#second");
    });    

$(document).on('swiperight', '#second', function(){     
        // store some data
        //Change page
        $.mobile.changePage("#index");
    });    
$(document).on('pagebeforeshow', '#second', function(){     
    
});

// Store object
var storeObject = {
    firstname : '',
    lastname : ''
}