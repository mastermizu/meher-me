import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ErrorBoundary from "@/components/ErrorBoundary";
import { PortfolioSkeleton, DashboardSkeleton, TestimonialsSkeleton } from "@/components/LoadingStates";

// Lazy load non-critical components
const LogoSlider = lazy(() => import("@/components/LogoSlider"));
const DashboardOverview = lazy(() => import("@/components/dashboard/DashboardOverview"));
const Skills = lazy(() => import("@/components/Skills"));
const About = lazy(() => import("@/components/About"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const AccentQuote = lazy(() => import("@/components/AccentQuote"));
const StrategyCallCTA = lazy(() => import("@/components/StrategyCallCTA"));
const StickyMobileCTA = lazy(() => import("@/components/StickyMobileCTA"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <Header />
        <Hero />
        
        <Suspense fallback={<div className="h-32 bg-gradient-to-r from-gray-900 to-blue-900 animate-pulse" />}>
          <LogoSlider />
        </Suspense>
        
        <Suspense fallback={<DashboardSkeleton />}>
          <DashboardOverview />
        </Suspense>
        
        <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse" />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<PortfolioSkeleton />}>
          <Portfolio />
        </Suspense>
        
        <Suspense fallback={<TestimonialsSkeleton />}>
          <Testimonials />
        </Suspense>
        
        <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse" />}>
          <StrategyCallCTA />
        </Suspense>
        
        <Suspense fallback={<div className="h-48 bg-gray-100 animate-pulse" />}>
          <Footer />
        </Suspense>
        
        <StickyMobileCTA />
      </div>
    </ErrorBoundary>
  );
};

export default Index;
