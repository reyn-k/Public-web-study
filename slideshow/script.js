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


// addEventListenerの外でlet n
// clickはアロー関数、引数渡さない
// アロー関数の中でconsole.log(n) -> nの値を出力した。OK
// functionの中でconsole.log(n) -> nの値を出力した。OK

// addEventListenerの中でlet n
// clickはアロー関数、引数渡さない
// アロー関数の中でconsole.log(n) -> nの値を出力した。OK

// addEventListenerの中でlet n
// clickはアロー関数、引数はn
// アロー関数の中でconsole.log(n) -> 出力した
// functionの中でconsole.log(n) -> 出力した
// [PointerEvent]というオブジェクト？が返された
// ちなみに外も同じ

// 外の変数はグローバルで、
// アローもfunctionも、無名関数にしていてもそれは引数で渡さなくても読み込めるのでは！
// 無名関数の引数とは？

//続きは明日

let imgIndex;
imgIndex = 0;

    // プルリクする
    // loadはwindow.documentではない
    // document.addEventListener('load', () => { // 中は実行されない
      console.log('j')
    window.addEventListener('DOMContentLoaded', () => {
      // let imgIndex;
      // imgIndex = 0;
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
      const [arrowL, arrowR] = document.getElementsByTagName('span')
      const photoContainer = document.getElementById('photo')
      const photoNum = document.createElement('p')
      photoNum.id = 'photo_num_after'
      photoContainer.after(photoNum)
      // console.log(list)
      img.src = list[imgIndex];
      console.log(list.length)
      let photoNumView = () =>{
        photoNum.textContent = (imgIndex+1) + "/" + list.length;
      }
      photoNumView();
      arrowR.addEventListener('click', () => {
        // console.log(imgIndex)
        if(imgIndex>=list.length-1){
        console.log(imgIndex+" false")
          return false
        }
        else{
        imgIndex++
        img.src = list[imgIndex];
      }
      photoNumView();

      })
      arrowL.addEventListener('click', () => {
        if(imgIndex==0){
          return false
        }else{
        imgIndex--
        img.src = list[imgIndex];

        }
        photoNumView();

      })

    })