"use client";

import { useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/empty-org";

export default function Home() {
  const { organization } = useOrganization();

  return (
    <div className="flex-1 h-[calc(100vh-80px)] p-6">
      {!organization ? <EmptyOrg /> : <p>Board List!</p>}
    </div>
  );
}
