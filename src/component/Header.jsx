import { ClipboardCheck } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center p-4 text-background">
      <div className="bg-gradient-to-b from-[#3f3f3f] to-[#1f1f1f] inline-block p-3 rounded-full">
        <ClipboardCheck className="w-12 h-12 text-white/80" />
      </div>
      <h1 className="text-4xl mb-2">Supervisor Review</h1>
      <p className="text-xl text-center">
        Please complete this assessment to provide feedback about your
        supervisor
      </p>
    </header>
  );
};

export default Header;
