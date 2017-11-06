window.addEventListener('scroll', function (e) {

        if (document.documentElement.scrollTop || document.body.scrollTop > 50) {
            $('.navbar').attr('style', 'background-color: rgba(175, 60, 229, 1) !important');
            }
        else{
        	$('.navbar').attr('style', 'background-color: transparent !important');
        }
    });