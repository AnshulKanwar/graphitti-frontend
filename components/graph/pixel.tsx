import { Point } from "@/lib/point";

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
      className={`w-[10px] h-[10px] rounded-[2px] ${color}`}
      onClick={() => handleClick(point)}
    ></div>
  );
}
