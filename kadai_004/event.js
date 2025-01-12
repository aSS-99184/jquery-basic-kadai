
  // HTMLドキュメントが読み込み完了したとき
  $(window).on('load', function(){
    console.log('loadイベントが発生しました');
  });

// 画面をスクロールしたと
  $(window).on('scroll',function(){
    console.log('scrollイベントが発生しました');
  });




// jQuery 「load」「scroll」のイベント処理を使用して、
// ・HTMLドキュメントが読み込み完了したときに「loadイベントが発生しました」とコンソールに出力する
// ・画面をスクロールしたときに「scrollイベントが発生しました」とコンソールに出力する
// 参考：$(window).on(イベント, () => {});


// $(function() {
//   // HTMLドキュメントが読み込み完了したとき

//   $(window).on('load', function(){
//     console.log('loadイベントが発生しました');
//   });

// // 画面をスクロールしたと
//   $(window).on('scroll',function(){
//     console.log('scrollイベントが発生しました');
//   });

// });

// // これだとload時にコンソールに表示されない　
// $function()({});　いらない？



  // $('window').on({
  //   'load':() => {
  //   console.log('loadイベントが発生しました');
  //   },

  // 'scroll':() =>{
  //   console.log('scrollイベントが発生しました');
  //   },
  // });
  // これだとコンソールに表示されない　なぜ？？