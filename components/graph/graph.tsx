import { Point, getPoint, isInvalidPixel } from "@/lib/point";
import Pixel from "./pixel";

export default function ContributionGraph({
  art,
  handleClick,
}: {
  art: Point[];
  handleClick: (p: Point) => void;
}) {
  const getColor = (point: Point) => {
    if (isInvalidPixel(point)) {
      return "bg-transparent";
    } else if (art.some((p) => p.x === point.x && p.y === point.y)) {
      return "bg-[#40c463]";
    } else {
      return "bg-[#ebedf0]";
    }

    // switch (level) {
    //   case 0:
    //     return "bg-[#ebedf0]";
    //   case 1:
    //     return "bg-[#9be9a8]";
    //   case 2:
    //     return "bg-[#40c463]";
    //   case 3:
    //     return "bg-[#30a14e]";
    //   case 4:
    //     return "bg-[#216e39]";
    // }
  };

  // a graph has 7 rows and 53 columns
  return (
    <div className="flex flex-col flex-wrap gap-[3px] w-[calc(53*10px_+_52*3px)] h-[calc(7*10px_+_6*3px)] ">
      {Array.from({ length: 371 }).map((_, idx) => {
        const point = getPoint(idx);

        return (
          <Pixel
            key={idx}
            point={point}
            color={getColor(point)}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}
