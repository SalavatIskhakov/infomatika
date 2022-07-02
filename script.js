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
let eventIndex = 2;
initial();

function initial() {
  hexagons.forEach((hexagon, j) => {
    hexagon.querySelector('.hexagon_text').innerHTML = events[j].title;
    hexagon.style.visibility = events[j].visibility;
  })
}

function scrollLeft() {
  if (eventIndex > 3) {
    return;
  }
  let buf = hexagons[0].className;
  for (let i = 0; hexagons[i + 1]; i++) {
    hexagons[i].className = hexagons[i + 1].className;
  }
  hexagons[hexagons.length - 1].className = buf;
  eventIndex++;
  console.log(hexagons, eventIndex)

}

function scrollRight() {
  if (eventIndex < 1) {
    return;
  }
  let buf = hexagons[hexagons.length - 1].className;
  for (let i = hexagons.length - 1; i > 0; i--) {
    hexagons[i].className = hexagons[i - 1].className;
  }
  hexagons[0].className = buf;
  console.log(eventIndex + 2, eventIndex)
  eventIndex--;
}

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
