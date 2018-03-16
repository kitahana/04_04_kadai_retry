$(document).ready(function(){
//DOM 構築後のタイミングで処理される

  // $('.Box').on('click', function(){
  //   console.log('osaretayo');
  // });

  // $('#id').on('click', function(){
  // var elem = '<a href="#">次ページ</a>';
    // $("#id").html(elem);
    // $("#id").text(elem);
    // $("#id").css("color","#ff0");
    // $("#id").hide(1000);
    //
    // $("#id").show(1000);
    // $("#id").prepend(elem);
    // $("#id").append(elem);
    // $("#id").empty();
  //   $("#id").remove();
  // });
  //
  // $('#hide').on('click', function(){
  // // var elem = '#ex';
  //       $("#ex").hide(2000);
  // });
  // $('#show').on('click', function(){
  // // var elem = '#ex';
  //       $("#ex").show(2000);
  // });


  $('#gu').on('click', function(){
      var random = Math.floor(Math.random()*3);
      if(random == 0){
        $('#exex').text('あいこです！！');
      }else if(random == 1){
        $('#exex').text('相手はチョキを出しました。勝ち！');
      }else{
        $('#exex').text('相手はパーを出しました。負け><');
      }
  });
  $('#choki').on('click', function(){
    var random = Math.floor(Math.random()*3);
    if(random == 0){
      $('#exex').text('あいこです！！');
    }else if(random == 1){
      $('#exex').text('相手はパーを出しました。勝ち！');
    }else{
      $('#exex').text('相手はグーを出しました。負け><');
    }
  });

  $('#pa').on('click', function(){
    var random = Math.floor(Math.random()*3);
    if(random == 0){
      $('#exex').text('あいこです！！');
    }else if(random == 1){
      $('#exex').text('相手はグーを出しました。勝ち！');
    }else{
      $('#exex').text('相手はチョキを出しました。負け><');
    }
  });




  //
  // $('#ex').hide().fadeIn(4000);
  //
  // var kakikukeko = '<p>かきくけこ</p>';
  // $('#ex').append(kakikukeko);
  //
  // $('#ex').css({'background-color':'black','color':'white'});
  //
  // var aiueo = '<p>あいうえお</p>';
  // $('#ex').prepend(aiueo);
  //
  // var sasisuseso = '<p>さしすせそ</p>';
  // $('#ex').append(sasisuseso);
  //
  // $('#ex p:odd').css({'background-color':'white','color':'black'});
  //

});
