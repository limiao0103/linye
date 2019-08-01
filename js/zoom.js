// JavaScript Document

jQuery(function(){         
        var x = 22;
        var y = 150;
        jQuery("a.smallimage1").hover(function(e){
                jQuery("body").append('<p id="bigimage1"><img src="'+ this.rel + '" alt="" /></p>');
       /* jQuery(this).find('img').stop().fadeTo('slow',1); */
                widthJudge(e);
            jQuery("#bigimage1").fadeTo('slow',1);
        },function(){
          /*  jQuery(this).find('img').stop().fadeTo('slow',1);*/
                jQuery("#bigimage1").remove();
    });
        jQuery("a.smallimage1").mousemove(function(e){
                widthJudge(e);
        });
        
    function widthJudge(e){
                var marginRight = document.documentElement.clientWidth - e.pageX;
                var imageWidth = jQuery("#bigimage1").width();
                if(marginRight < imageWidth)
                {
                    x = imageWidth + 22;
                        jQuery("#bigimage1").css({top:(e.pageY - y ) + 'px',left:(e.pageX - x ) + 'px'});
     
                }else{
                    x = 22;
                    jQuery("#bigimage1").css({top:(e.pageY - y ) + 'px',left:(e.pageX + x ) + 'px'});
        };
      
        }
});