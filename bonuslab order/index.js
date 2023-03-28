$(document).ready(function(){
    $(document).ready(function(){
        $(".button1").click(function(){
          $(".info1").animate({
            height: 'toggle'
          });
        });
        $(".button3").click(function(){
            $(".info3").animate({
              height: 'toggle'
            });
          });
        $(".button2").click(function(){
            $(".info2").animate({
              height: 'toggle'
            });
          });
          
      });
    //show popup
    $("#show-popup-btn").click(function(){
        $("#modal").show(); 
    })
    //close popup
    $("#close-btn").click(function(){
        $("#modal").hide();
    })
    //2
    //show popup
    $("#show-popup-btn1").click(function(){
        $("#modal1").show(); 
    })
    //close popup
    $("#close-btn1").click(function(){
        $("#modal1").hide();
    })
    //3
    //show popup
    $("#show-popup-btn2").click(function(){
        $("#modal2").show(); 
    })
    //close popup
    $("#close-btn2").click(function(){
        $("#modal2").hide();
    })
    //4
    //show popup
    $("#show-popup-btn3").click(function(){
        $("#modal3").show(); 
    })
    //close popup
    $("#close-btn3").click(function(){
        $("#modal3").hide();
    })
    //5
    //show popup
    $("#show-popup-btn4").click(function(){
        $("#modal4").show(); 
    })
    //close popup
    $("#close-btn4").click(function(){
        $("#modal4").hide();
    })
    //6
    //show popup
    $("#show-popup-btn5").click(function(){
        $("#modal5").show(); 
    })
    //close popup
    $("#close-btn5").click(function(){
        $("#modal5").hide();
    })
})