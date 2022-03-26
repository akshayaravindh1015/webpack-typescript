import {
  distinctUntilChanged,
  from,
} from "../node_modules/rxjs/dist/types/index";

const overLayElem: HTMLElement = document.getElementById(
  "overlay"
) as HTMLElement;
const btnLayElem: HTMLElement = document.getElementById(
  "button"
) as HTMLElement;

btnLayElem.addEventListener("dragend", (pos1) => {
  console.log(pos1);
  console.log("something");
});

// only output distinct values, based on the last emitted value
const source$ = from([
  { name: "Brian" },
  { name: "Joe" },
  { name: "Joe" },
  { name: "Sue" },
  { name: "Joe" },
]);

source$
  .pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name))
  .subscribe(console.log);
