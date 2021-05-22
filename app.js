$(function() {
  $("h1").on("click",function(){
    $("p").css("color","#f00");
  });
  $(".hoge").text("ほげじゃありません");
  $("#btn").on("click",function(){
    let str=$("#t1").val();
    alert(str);
  });
  $("#t1").attr("type","checkbox");
});