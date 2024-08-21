"use client";

import {
  ClientSideSuspense,
  LiveblocksProvider,
  RoomProvider,
} from "@liveblocks/react/suspense";

interface RoomProps {
  children: React.ReactNode;
  roomId: string;
}

const Room = ({ children, roomId }: RoomProps) => {
  const public_key = process.env.NEXT_PUBLIC_LIVEBLOCKS_API_KEY;
  return (
    <LiveblocksProvider
      publicApiKey={"pk_prod_DvX6ZHDEE0Z4Qwb3Gd8NMjulFNYUbs9Qt4bfIQBhHcH6pQ"}
    >
      <RoomProvider id={roomId} initialPresence={{}}>
        <ClientSideSuspense fallback={<div>Loading...</div>}>
          {() => children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
};

export default Room;
