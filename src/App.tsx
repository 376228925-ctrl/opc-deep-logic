import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SymbioticEvolutionSection } from './components/SymbioticEvolutionSection';
import { PipelineSection } from './components/PipelineSection';
import { CoreAdvantagesSection } from './components/CoreAdvantagesSection';
import { SymbioticGenesisSection } from './components/SymbioticGenesisSection';
import { SemanticArchitecture } from './components/SemanticArchitecture';
import { ToolChainSection } from './components/ToolChainSection';
import { CaseStudyWalkthrough } from './components/CaseStudyWalkthrough';
import { AgentSimulator } from './components/AgentSimulator';
import { MetricsAndRoiSection } from './components/MetricsAndRoiSection';
import { EvidenceGallery } from './components/EvidenceGallery';
import { Footer } from './components/Footer';
import { ImageModal } from './components/ImageModal';
import { PresentationMode } from './components/PresentationMode';
import { BackgroundEffects } from './components/BackgroundEffects';
import { IMAGE_EVIDENCE_LIST } from './data/imageGalleryData';
import { ImageEvidence } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageEvidence | null>(null);

  const handleOpenImageById = (id: string) => {
    const found = IMAGE_EVIDENCE_LIST.find((img) => img.id === id);
    if (found) {
      setSelectedImage(found);
    }
  };

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-cyan-900 selection:text-cyan-100 relative">
      {/* Peaceful Starry Cosmic Universe with Flowing Meteor Streaks */}
      <BackgroundEffects />

      {/* Presentation Fullscreen Roadshow Mode */}
      {isPresentationMode ? (
        <PresentationMode
          onExit={() => setIsPresentationMode(false)}
          onOpenImage={handleOpenImageById}
        />
      ) : (
        <div className="relative z-10">
          {/* Main Navigation Bar */}
          <Navbar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isPresentationMode={isPresentationMode}
            setIsPresentationMode={setIsPresentationMode}
          />

          {/* Main Body Showcase Sections */}
          <main>
            {/* Act 1: Hero Section (Contest Title, Identity, Core Stance, Official Blueprint Viewport) */}
            <HeroSection
              onStartPresentation={() => setIsPresentationMode(true)}
              onExploreSemantics={() => scrollToSection('semantics')}
              onViewCaseStudy={() => scrollToSection('case-study')}
              onOpenImage={handleOpenImageById}
            />

            {/* Act 2: Symbiotic Intelligence Evolution History (60-year Methodology & SF Practice) */}
            <SymbioticEvolutionSection onOpenImage={handleOpenImageById} />

            {/* Act 3: Pipeline Section (Closed-loop 5-stage production line & 4 Bento cards) */}
            <PipelineSection onOpenImage={handleOpenImageById} />

            {/* Act 4: Core Advantages & Superiority Comparison Matrix */}
            <CoreAdvantagesSection onOpenImage={handleOpenImageById} />

            {/* Act 5: Symbiotic Genesis Section (Human-GPT Co-creation Dialogue & First-in-SF Implementation) */}
            <SymbioticGenesisSection onOpenImage={handleOpenImageById} />

            {/* Act 6: Semantic Architecture (Interactive 3 layers & YAML configs) */}
            <SemanticArchitecture onOpenImage={handleOpenImageById} />

            {/* Act 7: Dual Carrier ToolChain (FengJingTai & LingHui platforms) */}
            <ToolChainSection onOpenImage={handleOpenImageById} />

            {/* Act 8: Real Case Study Walkthrough */}
            <CaseStudyWalkthrough onOpenImage={handleOpenImageById} />

            {/* Act 9: Agent Whitebox Reasoning Simulator */}
            <div id="simulator">
              <AgentSimulator />
            </div>

            {/* Act 10: Impact Stats & Official Showcase (Metrics & Real Outcomes) */}
            <MetricsAndRoiSection onOpenImage={handleOpenImageById} />

            {/* Act 11: Evidence Center (38 original declaration screenshots with high-res zoom) */}
            <EvidenceGallery onSelectImage={(img) => setSelectedImage(img)} />
          </main>

          {/* Footer */}
          <Footer />

          {/* High-res Image Lightbox Modal */}
          <ImageModal
            image={selectedImage}
            allImages={IMAGE_EVIDENCE_LIST}
            onClose={() => setSelectedImage(null)}
            onSelectImage={(img) => setSelectedImage(img)}
          />
        </div>
      )}
    </div>
  );
}
