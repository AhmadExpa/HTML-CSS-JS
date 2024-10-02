function cv_btn() {
  alert("You Have Downloaded The CV");
}

var tl = gsap.timeline();
function time() {
  var num = 0;
  setInterval(function () {
    num = num + Math.floor(Math.random() * 10);
    if (num < 100) {
      document.querySelector(".loader h1").innerHTML = num + "%";
    } else {
      num = 100;
      document.querySelector(".loader h1").innerHTML = num + "%";
    }
  }, 100);
}
tl.to(".loader h1", {
  delay: 0.5,
  duration: 1,
  onStart: time(),
});
tl.to(".loader", {
  delay: 0.5,
  opacity: 0,
  scale: 0,
  borderRadius: "50%",
  duration: 1.5,
});
tl.from(".monogram", {
  y: -50,
  delay: 1,
  duration: 0.1,
});
tl.from(".navbar .left-nav>nav>ul>li", {
  y: -50,
  duration: 0.1,
  stagger: 0.1,
});
tl.from(".right-nav a img", {
  y: -50,
  duration: 0.1,
  stagger: 0.1,
});

tl.from(".inner-box-1 .contentbox-1 h1", {
  x: -1000,
  duration: 0.1,
});
tl.from(".inner-box-1 .contentbox-2 p", {
  x: -1000,
  duration: 0.1,
});

tl.from(".inner-box-1 .contentbox-2 .main-btns", {
  y: 500,
  duration: 0.1,
});
tl.from(".inner-box-2 .image-box", {
  scale: 0,
  duration: 0.2,
});
tl.from(".inner-box-2 .image-box > img", {
  scale: 0,
  duration: 1.3,
});

tl.from(".scroll img", {
  scale: 0,
});
tl.from(".scroll img", {
  delay: 1,
  y: 10,
  duration: 1,
  yoyo: true,
  repeat: -1,
});

const h1 = document.querySelector(".page-2 h1");
const textContent = h1.textContent;
const letters = textContent.split("");

// Wrap each letter in a span element
const spannedText = letters.map((letter) => `<span>${letter}</span>`).join("");
h1.innerHTML = spannedText;

gsap.registerPlugin(ScrollTrigger);

gsap.to(".page-2 h1 span", {
  scrollTrigger: {
    trigger: ".page-2",
    start: "top 70%",
    end: "bottom 70%",
    scroller: "body",
    scrub: 0.5,
    // markers: true,
  },
  opacity: 1,
  stagger: 0.2,
  color: "#3d535f",
});

function canvas() {
  const canvas = document.querySelector(".page-3>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
./frames/01.jpg
./frames/02.jpg
./frames/03.jpg
./frames/04.jpg
./frames/05.jpg
./frames/06.jpg
./frames/07.jpg
`;
    return data.split("\n")[index];
  }

  const frameCount = 8;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `.page-3`,
      start: `top top`,
      end: `250% top`,
      scroller: `body`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: ".page-3",
    pin: true,
    scroller: `body`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas();
