import { distinctUntilChanged, filter, from, fromEvent } from "rxjs";

const overLayElem: HTMLElement = document.getElementById(
  "overlay"
) as HTMLElement;
const btnLayElem: HTMLElement = document.getElementById(
  "button"
) as HTMLElement;

btnLayElem.addEventListener("drag", (pos1) => {
  console.log(pos1);
  console.log("something");
});

let offsetX;
let offsetY;

const changeColor = (event: DragEvent) => {
  const maxY = window.innerHeight / 2;
  const y = Math.abs(event.clientY - maxY);
  const pY = y / maxY;

  const maxX = window.innerWidth / 2;
  const x = Math.abs(event.clientX - maxX);
  const pX = x / maxX;

  overLayElem.style.opacity = String(Math.max(pY, pX));
  // btnLayElem.clie
};

fromEvent(document, "drag")
  .pipe(
    // filter((event: DragEvent) => event.target == btnLayElem),
    distinctUntilChanged(
      (prev: DragEvent, curr: DragEvent) =>
        prev.clientX === curr.clientX && prev.clientY === curr.clientY
    )
  )
  .subscribe(changeColor);

// // only output distinct values, based on the last emitted value
// const source$ = from([
//   { name: "Brian" },
//   { name: "Joe" },
//   { name: "Joe" },
//   { name: "Sue" },
//   { name: "Joe" },
// ]);

// source$
//   .pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name))
//   .subscribe(console.log);
