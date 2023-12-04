// Test of a simple module, call it square.js
// for importing using the esm module format
// import {name, draw} from "https://mlamoureux.github.io/jsmodules/square.js"

export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
