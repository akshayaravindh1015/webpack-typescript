const slideOut = (element: any, duration: any) => {
  const initial = 0;
  const target = window.innerHeight;

  const start = new Date();

  const loop = () => {
    const time = (new Date().getTime() - start.getTime()) / 1000; // in seconds
    const value = (time * target) / duration + initial;

    box.style.transform = `translateY(-${value}px)`;

    if (value >= target) {
      box.style.transform = ``;
      return;
    }

    window.requestAnimationFrame(loop);
  };

  window.requestAnimationFrame(loop);
};

const box = document.getElementById("box");

box.addEventListener("click", (event) => {
  slideOut(event.target, 1);
});

export * from ".";
