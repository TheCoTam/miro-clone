"use client";

import { SignInButton } from "@clerk/clerk-react";
import { LockKeyhole, LockKeyholeOpen } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-sky-800">
      <div className="space-y-6">
        <div className="flex gap-2 text-6xl font-semibold text-white drop-shadow-md">
          <LockKeyholeOpen size={55} />
          <span>Auth</span>
        </div>

        <div className="text-white text-xl flex items-center justify-center">
          <SignInButton />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
