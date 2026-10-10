import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  X,
  Clock,
  Eye,
  List,
  Sparkles,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { SLIDES_DATA } from '../data/presentationData';

interface PresentationModeProps {
  onExit: () => void;
  onOpenImage: (id: string) => void;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({ onExit, onOpenImage }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(true);
  const [showSlideDrawer, setShowSlideDrawer] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const totalSlides = SLIDES_DATA.length;
  const currentSlide = SLIDES_DATA[currentSlideIndex];

  // Presentation Timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTimerRunning) {
      timer = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentSlideIndex((prev) => Math.min(totalSlides - 1, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlideIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'Escape') {
        if (showSlideDrawer) {
          setShowSlideDrawer(false);
        } else {
          onExit();
        }
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 't' || e.key === 'T') {
        setShowSlideDrawer((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides, onExit, showSlideDrawer]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#070A10] flex flex-col select-none overflow-hidden text-slate-100 font-sans">
      {/* Top HUD Presentation Bar (Quantum Cyan theme) */}
      <div className="h-14 px-6 border-b border-slate-800 bg-[#080C14]/90 backdrop-blur-md flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-5 bg-cyan-400 rounded-xs shadow-[0_0_10px_#38BDF8]" />
          <span className="text-xs font-mono text-cyan-400 font-bold tracking-wider">
            SF-FINALS // 故事叙事路演
          </span>
          <span className="text-slate-600 text-xs">/</span>
          <span className="text-xs font-mono text-slate-300 font-medium">{currentSlide.chapter}</span>
        </div>

        {/* Center Timer & Chapter Drawer Toggle */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-300">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>演讲计时：{formatTime(elapsedSeconds)}</span>
            <span className="text-slate-600">/ 建议 10:00</span>
          </div>

          <button
            onClick={() => setShowSlideDrawer(!showSlideDrawer)}
            className={`px-3 py-1 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-colors cursor-pointer ${
              showSlideDrawer
                ? 'bg-cyan-950 border-cyan-800 text-cyan-300'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>章节目录 (T)</span>
          </button>
        </div>

        {/* Right Action Tools */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`px-3 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
              showNotes
                ? 'bg-slate-800 border-slate-700 text-slate-200'
                : 'bg-slate-900 border-slate-800 text-slate-500'
            }`}
          >
            {showNotes ? '收起讲述提示' : '展开讲述提示'}
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title="全屏切换 (F)"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>

          <button
            onClick={onExit}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer ml-2"
            title="退出路演 (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Story Slide Stage */}
      <div className="flex-1 relative flex flex-col justify-center px-6 md:px-16 py-4 overflow-y-auto">
        <div className="max-w-6xl mx-auto w-full">
          {/* Slide Kicker */}
          <div className="flex items-center gap-3 mb-3">
            <span className="px-2.5 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-mono font-semibold">
              {currentSlide.tag}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              ACT 0{currentSlide.id} OF 0{totalSlides}
            </span>
          </div>

          {/* Slide Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.12] mb-2">
            {currentSlide.title}
          </h2>
          <div className="text-sm sm:text-base text-cyan-400 font-medium mb-6">
            {currentSlide.subtitle}
          </div>

          {/* Dramatic Story Lead Prose */}
          <div className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl bg-slate-900/70 border border-slate-800 p-5 rounded-2xl mb-8 border-l-4 border-l-cyan-400">
            {currentSlide.thesis}
          </div>

          {/* Spacious Visual Cards (Spacious, clean, not overcrowded) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {currentSlide.keyPoints.map((kp, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-cyan-400/60 hover:bg-slate-900/90 transition-all shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-cyan-500 font-bold">POINT 0{idx + 1}</span>
                    {kp.metric && (
                      <span className="text-xs font-mono font-bold text-cyan-300 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800">
                        {kp.metric}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{kp.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{kp.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Evidence Showcase on Slide */}
          {currentSlide.imageId && (
            <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  onClick={() => onOpenImage(currentSlide.imageId!)}
                  className="w-28 h-16 rounded-xl overflow-hidden border border-slate-700 bg-black/60 shrink-0 cursor-pointer group relative"
                >
                  <img
                    src={`/images/${currentSlide.imageId.replace('img-', 'image')}.jpg`}
                    alt="申报原件"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Eye className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-cyan-400 font-bold mb-0.5">
                    申报材料原始佐证原档 · {currentSlide.imageId}
                  </div>
                  <div className="text-xs text-slate-300">
                    点击缩略图即可放大查验数仓表配置、系统问答及实测报告原件
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenImage(currentSlide.imageId!)}
                className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold flex items-center gap-1.5 cursor-pointer shrink-0 transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>全屏查验证据</span>
              </button>
            </div>
          )}
        </div>

        {/* Presenter Strategic Notes Box (Human Story Delivery Guidance) */}
        {showNotes && (
          <div className="max-w-6xl mx-auto w-full mt-6 p-4 rounded-2xl bg-slate-900/95 border border-slate-800 text-slate-300 text-xs leading-relaxed shadow-2xl backdrop-blur-md">
            <div className="text-[11px] font-mono text-cyan-400 font-bold mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                <span>现场路演讲述导引 (PRESENTER NARRATIVE GUIDE)</span>
              </span>
              <span className="text-slate-500 font-normal">专供孙豪杰答辩参考</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80">
                <div className="text-cyan-400 font-mono mb-1">🎙️ 故事抓手 (Narrative Hook)</div>
                <div className="text-slate-200">{currentSlide.speakerStrategy.opening}</div>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80">
                <div className="text-sky-400 font-mono mb-1">🎯 核心论点 (Core Argument)</div>
                <div className="text-slate-200">{currentSlide.speakerStrategy.coreArgument}</div>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80">
                <div className="text-emerald-400 font-mono mb-1">🛡️ 评委关注点 (Judges Focus)</div>
                <div className="text-slate-200">{currentSlide.speakerStrategy.defenseFocus}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Slide Drawer (Quick Chapter Switcher) */}
      {showSlideDrawer && (
        <div className="absolute inset-y-14 right-0 w-80 bg-slate-900/98 border-l border-slate-800 z-50 p-4 overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
            <span className="text-xs font-mono font-bold text-white">14 幕故事全景导航</span>
            <button
              onClick={() => setShowSlideDrawer(false)}
              className="text-slate-400 hover:text-white text-xs cursor-pointer"
            >
              关闭 ✕
            </button>
          </div>

          <div className="space-y-1.5">
            {SLIDES_DATA.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setCurrentSlideIndex(idx);
                  setShowSlideDrawer(false);
                }}
                className={`w-full p-2.5 rounded-lg text-left transition-all text-xs cursor-pointer flex items-center justify-between ${
                  currentSlideIndex === idx
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="truncate pr-2">
                  <span className="font-mono opacity-60 mr-1.5">0{s.id}.</span>
                  <span>{s.title}</span>
                </div>
                <span className="text-[10px] opacity-60 shrink-0 font-mono">{s.tag}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Control & Pacing Bar */}
      <div className="h-16 px-6 border-t border-slate-800 bg-[#080C14]/90 flex items-center justify-between shrink-0">
        {/* Navigation Dots */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-md py-1">
          {SLIDES_DATA.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentSlideIndex === idx
                  ? 'w-6 bg-cyan-400'
                  : 'w-2 bg-slate-800 hover:bg-slate-700'
              }`}
              title={`跳转至 0${s.id}: ${s.title}`}
            />
          ))}
          <span className="text-xs text-slate-500 font-mono ml-3 shrink-0">
            {currentSlideIndex + 1} / {totalSlides}
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <span className="hidden lg:inline text-xs text-slate-500 font-mono">
            快捷键：[← 上一幕] [→ / 空格 下一幕] [T 目录] [F 全屏]
          </span>

          <div className="flex items-center gap-2">
            <button
              disabled={currentSlideIndex === 0}
              onClick={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer border border-slate-800 text-xs font-medium flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>上一幕</span>
            </button>

            <button
              disabled={currentSlideIndex === totalSlides - 1}
              onClick={() => setCurrentSlideIndex((prev) => Math.min(totalSlides - 1, prev + 1))}
              className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shadow-lg shadow-cyan-500/25 text-xs font-semibold flex items-center gap-1"
            >
              <span>下一幕</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
