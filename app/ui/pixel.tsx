import { Point } from "../lib";

export default function Pixel({
  point,
  color,
  handleClick,
}: {
  point: Point;
  color: string;
  handleClick: (p: Point) => void;
}) {
  return (
    <div
      className={`w-[10px] h-[10px] rounded-sm ${color}`}
      onClick={() => handleClick(point)}
    ></div>
  );
}
