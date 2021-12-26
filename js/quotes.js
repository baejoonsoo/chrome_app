const quotes = [
  {
    quote: '자신감 있는 표정을 지으면 자신감이 생긴다',
    author: '찰스다윈',
  },
  {
    quote: ' 평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.',
    author: '제임스 딘',
  },
  {
    quote:
      '진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다.',
    author: '아인슈타인',
  },
  {
    quote: '화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라.',
    author: '마크 트웨인',
  },
  {
    quote: ' 고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.',
    author: '헬렌 켈러',
  },
  {
    quote: '사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다',
    author: '생떽쥐베리',
  },
  {
    quote: '당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.',
    author: '헨리 포드',
  },
  {
    quote: '겨울이 오면 봄이 멀지 않으리',
    author: '셸리',
  },
  {
    quote: '언제나 현재에 집중할수 있다면 행복할것이다.',
    author: '파울로 코엘료',
  },
  {
    quote: '행복은 습관이다,그것을 몸에 지니라',
    author: '허버드',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
