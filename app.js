$(function(){
  let kigo = ['!','#','$','%','&','=','@','+','!','#','$','%','&','=','@','+'];
  let sels = [];
  
  //配列のシャッフル
  for(let i=0; i<20; i++){
    let r1 = Math.floor(Math.random() * 16);
    let r2 = Math.floor(Math.random() * 16);
    let tmp = kigo[r1];
    kigo[r1] = kigo[r2];
    kigo[r2] = tmp; 
  }
  //カードの配布
  for(let i=0; i<16; i++){
    let ko = $("<div>").text(kigo[i]);
    $("#container").append(ko);
  }
  //クリック時イベントの登録
  $("#container div").on("click",function(){
    $(this).css("color","#fff");
    let moji = $(this).text();
    sels.push(moji);
    if(sels.length == 2){
      //比較判定
      if(sels[0] == sels[1]){
        $("#msg").text("OK!");
      }else{
        $("#msg").text("NG!");
      }
      sels = [];//初期化
    }
  });
});