

var myAnimation = anime({
  targets: 'div',
  scale: {
    value: 1.2,
    duration: 5000,
    begin: 0,
    easing: 'easeOutExpo'
  },
  translateX: {
    value: '25rem',
    duration: 1000,
    begin: 0,
    easing: 'easeInOutExpo'
  },
  rotate: {
    value: 180,
    duration: 1000,
    begin: 0,
    easing: 'easeInOutExpo'
  },
  scale: {
    value: 0.8,
    duration: 1000,
    begin: 500,
    easing: 'easeInOutExpo'
  },
  direction: 'alternate',
  loop: true
});
