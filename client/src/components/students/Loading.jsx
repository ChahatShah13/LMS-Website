import React from "react";
import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-cyan-100/70">
      <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg">
        <Loader2 className="w-16 h-16 animate-spin text-blue-500" />
        <h1 className="mt-4 text-xl font-bold text-gray-700">Please Wait...</h1>
        <p className="text-sm text-gray-500">Fetching data for you</p>
      </div>
    </div>
  );
};

export default Loading;