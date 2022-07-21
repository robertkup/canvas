import "./styles.scss";
import { fabric } from "./fabric";

const app = document.querySelector("#app");
const canvas = new fabric.Canvas(app.querySelector("canvas"));

// click on eraser button
app.querySelector("#eraser").addEventListener("click", (e) => {
  canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
  canvas.freeDrawingBrush.width = 10;
  canvas.isDrawingMode = !canvas.isDrawingMode;
  e.target.textContent = canvas.isDrawingMode ? "Erasing" : "Erase";
});
// click on draw button
app.querySelector("#draw").addEventListener("click", (e) => {
  canvas.freeDrawingBrush.color = "red";
  canvas.freeDrawingBrush.width = 10;
  canvas.freeDrawingBrush.freeDrawingCursor = "pointer";
  canvas.isDrawingMode = !canvas.isDrawingMode;
  e.target.textContent = canvas.isDrawingMode ? "drawing" : "draw";
});

// click on text button
app.querySelector("#text").addEventListener("click", (e) => {
  var text = new fabric.Textbox("de canvas test", {
    width: 450,
    height: 10,
    top: 100,
    left: 100
  });
  e.target.textContent = canvas.isDrawingMode ? "add text" : "text";
  canvas.add(text);
});
