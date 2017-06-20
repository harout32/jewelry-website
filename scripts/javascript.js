$("document").ready(function () {
    
$("#logo").hover(function(){
   $("#logo").attr("src","images/logo-n.png");
}
, function(){
   $("#logo").attr("src","images/logo-w.png");

    }); 
    
    
    
    var i = 0;
    var t;
    $("#slide").hover(function(){
        window.clearInterval(t);   
    },
    function(){
         t = window.setInterval(slide,3000);
    }                 
            
                     );
    
    
    
   
    function slide (){
                i++;
        switch (i){
            case 1:
                $("#slide").attr("src","http://res.cloudinary.com/harout/image/upload/c_thumb,g_center,h_360,w_960,x_0,y_0/v1497889580/1_zs40zw.jpg"); 
                break;
            case 2:
                $("#slide").attr("src","http://res.cloudinary.com/harout/image/upload/c_thumb,h_360,w_960/v1497889560/2_cljhro.jpg");
                break;
            case 3:
                $("#slide").attr("src","http://res.cloudinary.com/harout/image/upload/c_thumb,h_360,w_960/v1497889599/4_badtey.jpg");
                i=0;
                break;
               }

    }
    
    
    $("#img-1").on("click",function(){
        $("#img-select").attr("src","http://res.cloudinary.com/harout/image/upload/c_thumb,h_250,w_450/v1497896806/22_eeuhqd.jpg");
        
    });
    
     $("#img-2").on("click",function(){
        $("#img-select").attr("src","http://res.cloudinary.com/harout/image/upload/c_thumb,h_250,w_450/v1497896815/11_v098bv.jpg");
        
    });
     $("#img-3").on("click",function(){
        $("#img-select").attr("src","http://res.cloudinary.com/harout/image/upload/c_thumb,h_250,w_450/v1497896834/44_v3wtgh.jpg");
        
    });
    
    
$("#facebook").hover(
        function(){
        $("#facebook img").attr("src","images/social/facebook.png");}
        
        ,function(){ $("#facebook img").attr("src","images/social/facebook-w.png");}
    
    );
    
$("#twiter").hover(
        function(){
        $("#twiter img").attr("src","images/social/twitter.png");}
        
        ,function(){ $("#twiter img").attr("src","images/social/twitter-w.png");}
    
    );
$("#insta").hover(
        function(){
        $("#insta img").attr("src","images/social/instagram.png");}
        
        ,function(){ $("#insta img").attr("src","images/social/instagram-w.png");}
    
    );
$("#youtube").hover(
        function(){
        $("#youtube img").attr("src","images/social/youtube.png");}
        
        ,function(){ $("#youtube img").attr("src","images/social/youtube-w.png");}
    
    );
$("#app").hover(
        function(){
        $("#app img").attr("src","images/social/app.png");}
        
        ,function(){ $("#app img").attr("src","images/social/app-w.png");}
    
    );

    

    
    
    
});


    
                        


                  
                  
                  