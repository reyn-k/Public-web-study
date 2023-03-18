// const list = [
//   'images/01.jpg',
//   'images/02.jpg',
//   'images/03.jpg',
//   'images/04.jpg',
//   'images/05.jpg',
//   'images/06.jpg',
//   'images/07.jpg',
//   'images/08.jpg',
//   'images/09.jpg',
//   'images/10.jpg',
// ];




    // プルリクする
    // loadはwindow! documentではない
    // document.addEventListener('load', () => { // 中は実行されない
    window.addEventListener('DOMContentLoaded', () => {
      const list = [
      'images/01.jpg',
      'images/02.jpg',
      'images/03.jpg',
      'images/04.jpg',
      'images/05.jpg',
      'images/06.jpg',
      'images/07.jpg',
      'images/08.jpg',
      'images/09.jpg',
      'images/10.jpg',
    ];
      const img = document.getElementById('main')
      const [arrowL, arrowR] = document.getElementsByTagName('span');
      console.log(list)
      // img.src = list[1];
    })