export type Point = {
  x: number;
  y: number;
};

export const getPoint = (pos: number): Point => {
  const x = Math.floor(pos / 7);
  const y = pos % 7;

  return { x, y };
};

export const isInvalidPixel = (p: Point): boolean => {
  const firstWeekDay = new Date("2019-01-01").getDay();
  const lastWeekDay = new Date("2019-12-31").getDay();

  if (p.x == 0 && p.y < firstWeekDay) {
    return true;
  } else if (p.x == 52 && p.y > lastWeekDay) {
    return true;
  } else {
    return false;
  }
};

export const download = (filename: string) => {
  var a = document.createElement("a");
  a.href = `http://localhost:8080/download/${filename}`;
  document.body.appendChild(a);
  a.click();
  a.remove();
};
