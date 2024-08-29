import { RectangleLayer } from "@/types/canvas";

interface RectangleProps {
  id: string;
  layer: RectangleLayer;
  onLayerPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

const Rectangle = ({
  id,
  layer,
  onLayerPointerDown,
  selectionColor,
}: RectangleProps) => {
  const { x, y, height, width, fill } = layer;
  return (
    <rect
      className="drop-shadow-md"
      onPointerDown={(e) => onLayerPointerDown(e, id)}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
      x={0}
      y={0}
      width={width}
      height={height}
      fill="#000"
      strokeWidth={1}
      stroke={selectionColor || "transparent"}
    />
  );
};

export default Rectangle;
