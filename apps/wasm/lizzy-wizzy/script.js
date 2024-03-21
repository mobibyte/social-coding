const lizzy = document.querySelector('.lizzy');
const eyes = document.querySelectorAll('.lizzy-eyes');

let xMax = 30;
let xMin = -30;

let yMax = 30;
let yMin = -30;

const setConstraints = (xmax, xmin, ymax, ymin) => {
  xMax = xmax;
  xMin = xmin;

  yMax = ymax;
  yMin = ymin;
};

const clamp = (min, val, max) => Math.max(min, Math.min(val, max));

const applyTranslate = (elem, x, y) => {
  elem.animate(
    {
      translate: `${clamp(xMin, x, xMax)}px ${clamp(yMin, y, yMax)}px`,
    },
    {
      duration: 1,
      fill: 'forwards',
      timing: 'ease-in-out',
    }
  );
};

const handleEyePos = (e) => {
  const leftx = e.clientX - window.visualViewport.width / 2 + 50;
  const rightx = e.clientX - window.visualViewport.width / 2 - 100;
  const y = e.clientY - window.visualViewport.height / 1.6;

  applyTranslate(eyes[0], leftx, y);
  applyTranslate(eyes[1], rightx, y);
};

document.addEventListener('mousemove', handleEyePos);

const badElem = document.querySelector('.bad');
badElem.addEventListener('mouseover', () => {
  lizzy.childNodes[1].src = 'public/shock.svg';
  setConstraints(40, -27, 30, -75);
});
badElem.addEventListener('mouseout', () => {
  lizzy.childNodes[1].src = 'public/face.svg';
  setConstraints(30, -30, 30, -30);
});

const goodElem = document.querySelector('.good');
goodElem.addEventListener('mouseover', () => {
  lizzy.childNodes[1].src = 'public/happy.svg';
});
goodElem.addEventListener('mouseout', () => {
  lizzy.childNodes[1].src = 'public/face.svg';
});
