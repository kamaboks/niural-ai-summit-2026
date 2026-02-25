import React from "react";

export default function BrandBar() {
  return (
    <div className="w-full flex justify-center items-center py-6 bg-white border-b border-gray-100">
      <div className="flex items-center gap-3">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dd0c3a7954b36d829e748/2a9e777ab_logomark.png"
          alt="Niural logomark"
          className="w-10 h-10 object-contain"
        />
        <span className="text-[#1a0e3d] text-2xl font-bold tracking-tight">Niural AI</span>
      </div>
    </div>
  );
}