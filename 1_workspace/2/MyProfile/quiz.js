    const quiz = [
    {
      question: 'Question1：ゆーやの所属する部活は？？',
      answers: [
        'テニス部',
        'アメフト部',
        'ラグビー部',
        'バスケ部'
        ],
        correct: 'ラグビー部'
    }, {
      question: 'Question2：ゆーやがExメンター「じゅんせい」と行ったことない場所は？',
      answers: [
        '伊豆',
        '名古屋',
        '下呂温泉',
        'スノボ'
        ],
        correct: 'スノボ'
    }, {
      question: 'Question3：ゆーやが最近観たいと思ってる映画は？？',
      answers: [
        '花束みたいな恋をした',
        '「鬼滅の刃」無限列車編',
        'えんとつ町のプペル',
        '銀魂 the final'
        ],
        correct: 'えんとつ町のプペル'
    }
   ];
   
   const quizLength = quiz.length;
   let quizIndex = 0;
   let score =0;
   
   
   const $button = document.getElementsByTagName('button');
   const buttonLength = $button.length;
   
   //クイズの問題、選択肢
   const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
      $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
      buttonIndex++;
    }
   }
   
   setupQuiz();
   
   const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
       window.alert('正解！');
       score++;
    } else {
       window.alert('不正解！');
    }
   
    quizIndex++;
   
    if(quizIndex < quizLength){
      setupQuiz();
    } else {
      window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
   };
   
   //ボタンをクリックしたら正誤判定
   let handlerIndex = 0;
   while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
      clickHandler(e);
    });
    handlerIndex++;
   };