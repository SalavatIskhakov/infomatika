const events = [
  {
    title: '1',
    visibility: 'visible',
  },
  {
    title: '2',
    visibility: 'visible',
  },
  {
    title: '3',
    visibility: 'visible',
  },
  {
    title: '4',
    visibility: 'visible',
  },
  {
    title: '5',
    visibility: 'visible',
  },
];

const hexagons = document.querySelectorAll('.events li');
hexagons[0].style.visibility = 'hidden';
hexagons[6].style.visibility = 'hidden';

let eventIndex = 2;

initial();

function initial() {
  for (let i = 0; i < 5; i++) {
    hexagons[i + 1].querySelector('.hexagon_text').innerHTML = events[i].title;
  }
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

    setTimeout(() => flag = true, 300)
  }
}, true);
