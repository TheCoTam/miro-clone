"use client";

import { useOther } from "@liveblocks/react/suspense";
import { MousePointer2 } from "lucide-react";

import { connectionIdToColor } from "@/lib/utils";

interface CursorProps {
  connectionId: number;
}

const Cursor = ({ connectionId }: CursorProps) => {
  const info = useOther(connectionId, (user) => user?.info);
  const cursor = useOther(connectionId, (user) => user.presence.cursor);

  const name = info?.name || "Teammate";
  if (!cursor) {
    return null;
  }

  const { x, y } = cursor;
  return (
    <foreignObject
      className="relative drop-shadow-md"
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
      width={name.length * 10 + 24}
      height={50}
    >
      <MousePointer2
        className="h-5 w-5"
        style={{
          fill: connectionIdToColor(connectionId),
          color: connectionIdToColor(connectionId),
        }}
      />
      <div
        className="absolute left-5 px-1.5 py-0.5 text-white font-semibold rounded-md text-xs"
        style={{ backgroundColor: connectionIdToColor(connectionId) }}
      >
        {name}
      </div>
    </foreignObject>
  );
};

export default Cursor;
