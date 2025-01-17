// 課題：ボタンクリックで文字列を様々な形式で表示するプログラムを作ろう
// 1「文字色変化」ボタンを押した際に、文字色が任意の色に更新される
// 2	「文字内容変化」ボタンを押した際に、任意の文字内容に更新される
// 3	「フェードアウト」ボタンを押した際に、フェードアウトで文字が消える
// 4	「フェードイン」ボタンを押した際に、フェードインで文字が現れる


$(function(){
  // 1「文字色変化」ボタンを押した際に、文字色が任意の色に更新される
  $('#change-color').on('click', function () {
  // 文字色を赤色にする
    $('#target').css('color', 'red');
  });

  // 2	「文字内容変化」ボタンを押した際に、任意の文字内容に更新される
  $('#change-text').on('click',function () {
    // テキストを「どうも！」にする
    $('#target').text('どうも！');
  });
  
  // 3	「フェードアウト」ボタンを押した際に、フェードアウトで文字が消える
  $('#fade-out').on('click', function () {
    // フェードアウトする
    $('#target').fadeOut();
  });
  
  // 4	「フェードイン」ボタンを押した際に、フェードインで文字が現れる
  $('#fade-in').on('click', function() {
    // フェードインする
    $('#target').fadeIn();
    });
  
  });





// $(function(){
// // 1「文字色変化」ボタンを押した際に、文字色が任意の色に更新される
// $('#changeColor').on({
//   'click': () => {
// // 文字色を赤色にする
//   $('.target').css('color', 'red');
// },

// // 2	「文字内容変化」ボタンを押した際に、任意の文字内容に更新される
// $('#changeText').on({
//   'click': () => {
//   // テキストを「どうも！」にする
//   $('.target').text('どうも！');
// },


// // 3	「フェードアウト」ボタンを押した際に、フェードアウトで文字が消える
// $('#fadeOut').on('click', function () {
//   $('.target').fadeOut();
// });




// // 4	「フェードイン」ボタンを押した際に、フェードインで文字が現れる
// $('#fadeIn').on('click', function() {
//   $('.target').fadeIn();
//   });


// });