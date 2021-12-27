const quotes = [
  {
    quote: '자신감 있는 표정을 지으면 자신감이 생긴다',
    author: '찰스다윈',
  },
  {
    quote: ' 평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라',
    author: '제임스 딘',
  },
  {
    quote:
      '진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다',
    author: '아인슈타인',
  },
  {
    quote: '화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라',
    author: '마크 트웨인',
  },
  {
    quote: ' 고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오',
    author: '헬렌 켈러',
  },
  {
    quote: '사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다',
    author: '생떽쥐베리',
  },
  {
    quote: '당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다',
    author: '헨리 포드',
  },
  {
    quote: '겨울이 오면 봄이 멀지 않으리',
    author: '셸리',
  },
  {
    quote: '언제나 현재에 집중할수 있다면 행복할것이다',
    author: '파울로 코엘료',
  },
  {
    quote: '행복은 습관이다,그것을 몸에 지니라',
    author: '허버드',
  },
  {
    quote: '당신이 어려움을 겪고 항복하지 않기로 결정할 때, 그것이 힘이다',
    author: '아놀드 슈왈제네거',
  },
  {
    quote: '불가능을 하는 것은 좀 재미있다.',
    author: '월트 디즈니',
  },
  {
    quote:
      '나는 인생에서 몇 번이고 반복해서 실패했고 그것이 내가 성공하는 이유이다',
    author: '마이클 조던',
  },
  {
    quote: '신은 용기있는자를 결코 버리지 않는다',
    author: '켄러',
  },
  {
    quote: ' 먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에',
    author: '엘사 맥스웰',
  },
  {
    quote:
      ' 단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?',
    author: '이드리스 샤흐',
  },
  {
    quote:
      ' 먼저핀꽃은 먼저진다. 남보다 먼저 공을 세우려고 조급히 서둘것이 아니다',
    author: '채근담',
  },
  {
    quote:
      '절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다',
    author: '론허바드',
  },
  {
    quote: '1퍼센트의 가능성, 그것이 나의 길이다',
    author: '나폴레옹',
  },
  {
    quote: '꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다',
    author: '괴테',
  },
];

const quote = document.querySelector('#quote p:first-child');
const author = document.querySelector('#quote p:last-child');

const changeQuote = () => {
  const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = todayQuote.quote;
  author.innerText = todayQuote.author;
};

const quoteScreen = document.querySelector('#quote');
const fadeInBtn = document.querySelector('#fadeInBtn');
const FADE_IN_KEY = 'fadeIn';
const FADE_OUT_KEY = 'fadeOut';

const onPadeIn = () => {
  quoteScreen.classList.remove(FADE_OUT_KEY);
  quoteScreen.classList.add(FADE_IN_KEY);
  changeQuote();
};

const onPadeOut = () => {
  quoteScreen.classList.remove(FADE_IN_KEY);
  quoteScreen.classList.add(FADE_OUT_KEY);
};

fadeInBtn.addEventListener('mouseover', onPadeIn);
fadeInBtn.addEventListener('mouseout', onPadeOut);
