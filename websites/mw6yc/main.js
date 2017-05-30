$(document).ready(function(){
  var vH = window.innerHeight;
  $(window).scroll(function () {
    $(".fadeIn").each(function () {
      var pos = $(this).offset().top,
      winTop = $(window).scrollTop();
      if (pos +200< winTop + vH) {

        if($(this).hasClass("profileName")){
          $(this).fadeTo(1500, 1);
        }else{
          $(this).fadeTo(700, 1);
        }
        $(this).removeClass("fadeIn");
      }
    });
  });


  var mobile;
  //fade in title
  $("#titleOfSite").animate({top: 20},{
    queue: false,
    duration: 1000
  });
  $(".title").fadeIn(1500);
  $("#titleNum").delay(300).fadeOut(200,function(){
    $("#titleNum").html("2");
    $("#titleNum").show();
    $("#titleNum").fadeOut(200,function(){
      $("#titleNum").html("3");
      $("#titleNum").show();
      $("#titleNum").fadeOut(200,function(){
        $("#titleNum").html("4");
        $("#titleNum").show();
        $("#titleNum").fadeOut(200,function(){
          $("#titleNum").html("5");
          $("#titleNum").show();
          $("#titleNum").fadeOut(300,function(){
            $("#titleNum").html("6");
            $("#titleNum").fadeIn(1000);
          });
        });
      });
    });
  });
  //about highlight when hover
  $("#missionImg").css("height", $(window).height());
  $("#eventInfoCard").css("top",$(window).height()-150);

  //exec team desc
  $(".execPhoto").on("click",function(e){
    $("#myModal").modal('show');
    $("#thePersonDesc").html($(this).parent().attr("personDesc"));
    $("#thePersonImg").attr("src",$(this).attr("hd"));
    $("#teamMember").html($(this).next().html());
  });


});
