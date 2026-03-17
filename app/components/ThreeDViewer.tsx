"use client";

interface ThreeDViewerProps {
  url: string;
}

export default function ThreeDViewer({ url }: ThreeDViewerProps) {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#333333] my-6">
      <iframe 
        src={url} 
        title="3D Model Viewer"
        className="w-full h-full border-none"
        allow="autoplay; fullscreen"
      />
    </div>
  );
}