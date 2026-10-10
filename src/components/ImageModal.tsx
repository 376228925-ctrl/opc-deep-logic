import React from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Tag } from 'lucide-react';
import { ImageEvidence } from '../types';

interface ImageModalProps {
  image: ImageEvidence | null;
  allImages: ImageEvidence[];
  onClose: () => void;
  onSelectImage: (img: ImageEvidence) => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  image,
  allImages,
  onClose,
  onSelectImage,
}) => {
  if (!image) return null;

  const currentIndex = allImages.findIndex((item) => item.id === image.id);
  const prevImage = currentIndex > 0 ? allImages[currentIndex - 1] : null;
  const nextImage = currentIndex < allImages.length - 1 ? allImages[currentIndex + 1] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
              [ 参赛申报原版佐证材料 ]
            </span>
            <span className="text-slate-600 text-xs">·</span>
            <span className="text-sm font-semibold text-slate-100">{image.title}</span>
            <span className="text-slate-600 text-xs">·</span>
            <span className="text-xs text-slate-400 font-mono">
              {currentIndex + 1} / {allImages.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title="关闭 (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Image display + context */}
        <div className="flex-1 overflow-auto flex flex-col md:flex-row bg-[#080C14]">
          {/* Main image container */}
          <div className="relative flex-1 flex items-center justify-center p-4 bg-black/50 min-h-[360px] md:min-h-[500px]">
            <img
              src={image.src}
              alt={image.title}
              referrerPolicy="no-referrer"
              className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-lg border border-slate-800"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />

            {/* Navigation buttons overlay */}
            {prevImage && (
              <button
                onClick={() => onSelectImage(prevImage)}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 shadow-lg transition-all cursor-pointer"
                title="上一张 (←)"
              >
                <ChevronLeft className="w-5 h-5 text-cyan-400" />
              </button>
            )}
            {nextImage && (
              <button
                onClick={() => onSelectImage(nextImage)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 shadow-lg transition-all cursor-pointer"
                title="下一张 (→)"
              >
                <ChevronRight className="w-5 h-5 text-cyan-400" />
              </button>
            )}
          </div>

          {/* Right sidebar info */}
          <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-slate-800 p-6 flex flex-col justify-between bg-slate-900/40">
            <div>
              <div className="text-xs uppercase text-slate-500 font-medium mb-1">说明与场景解读</div>
              <h4 className="text-base font-semibold text-white mb-3">{image.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
                {image.caption}
              </p>

              <div className="text-xs uppercase text-slate-400 font-medium mb-2 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-cyan-400" /> 核心亮点与佐证项
              </div>
              <ul className="space-y-2">
                {image.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="text-cyan-400 font-bold shrink-0">✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-800 mt-6 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">顺丰集团 AI 大赛实录原件</span>
              <a
                href={image.src}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer font-medium"
              >
                <Maximize2 className="w-3.5 h-3.5" /> 查看全分辨率原图
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
