const events = [
  {
    place: 'Стадион 1',
    day: '30 мая',
    time: '19:00',
    link: '#',
    teams: [
      'Соперник №1',
      'Соперник №3',
    ],
  },
  {
    place: 'Стадион 2',
    day: '17 июня',
    time: '19:00',
    link: '#',
    teams: [
      'Соперник №4',
      'Соперник №5',
    ],
  },
  {
    place: 'Стадион 3',
    day: '26 июня',
    time: '19:00',
    link: 'https://yandex.ru/',
    teams: [
      'Соперник №1',
      'Соперник №2',
    ],
  },
  {
    place: 'Стадион 4',
    day: '16 июля',
    time: '19:00',
    link: '#',
    teams: [
      'Соперник №5',
      'Соперник №2',
    ],
  },
  {
    place: 'Стадион 5',
    day: '30 сентября',
    time: '19:00',
    link: '#',
    teams: [
      'Соперник №3',
      'Соперник №2',
    ],
  },
];

const hexagons = document.querySelectorAll('.events li');
const teams = document.querySelectorAll('main div span');

hexagons[0].style.visibility = 'hidden';
hexagons[6].style.visibility = 'hidden';

let eventIndex = 2;

initial();

function initial() {
  for (let i = 0; i < 5; i++) {
    const hexagon = hexagons[i + 1].querySelector('.hexagon_text').children;
    hexagon[0].innerHTML = events[i].place;
    hexagon[1].innerHTML = events[i].day
    hexagon[2].innerHTML = events[i].time;
    hexagon[3].href = events[i].link;
    // hexagon.innerHTML = events[i].place;
  }
  teams[0].innerHTML = events[eventIndex].teams[0];
  teams[1].innerHTML = events[eventIndex].teams[1];
}

function scrollLeft() {
  if (eventIndex < 1) {
    return;
  }

  let buf = hexagons[0].className;
  for (let i = 0; hexagons[i + 1]; i++) {
    hexagons[i].className = hexagons[i + 1].className;
  }
  hexagons[hexagons.length - 1].className = buf;

  eventIndex--;
}

function scrollRight() {
  if (eventIndex > 3) {
    return;
  }

  let buf = hexagons[hexagons.length - 1].className;
  for (let i = hexagons.length - 1; i > 0; i--) {
    hexagons[i].className = hexagons[i - 1].className;
  }
  hexagons[0].className = buf;

  eventIndex++;
}

hexagons.forEach((hexagon, i) => {
  hexagon.addEventListener('click', () => {
    console.log(i, eventIndex)
    while (i - eventIndex != 1) {
      if (i - eventIndex > 1) {
        scrollRight();
      } else {
        scrollLeft();
      }
      console.log(eventIndex)

    }
  })
});

let flag = true;
document.addEventListener('wheel', (e) => {
  if (flag) {
    flag = false;

    if (e.deltaY < -30) {
      scrollRight();
    }
    if (e.deltaY > 30) {
      scrollLeft();
    }

    teams[0].innerHTML = events[eventIndex].teams[0];
    teams[1].innerHTML = events[eventIndex].teams[1];

    setTimeout(() => flag = true, 300)
  }
}, true);
