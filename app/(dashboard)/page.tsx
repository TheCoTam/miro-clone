import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p className="text-red-400">
        This is screen for authenticated users only
      </p>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
