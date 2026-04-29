import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Layout } from "@/components/layout/Layout";
import { Suspense, lazy } from "react";
import { LoadingFallback } from "@/components/ui/LoadingFallback";

// Lazy load page components for better performance
const Home = lazy(() => import("./pages/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const About = lazy(() => import("./pages/About"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ErrorBoundary = lazy(() => import("@/components/ErrorBoundary").then(m => ({ default: m.ErrorBoundary })));
const ScrollToTop = lazy(() => import("@/components/layout/ScrollToTop").then(m => ({ default: m.ScrollToTop })));
const SkipToContent = lazy(() => import("@/components/ui/SkipToContent").then(m => ({ default: m.SkipToContent })));
const InteractiveBackground = lazy(() => import("@/components/ui/InteractiveBackground").then(m => ({ default: m.InteractiveBackground })));
const StarParticles = lazy(() => import("@/components/ui/StarParticles").then(m => ({ default: m.StarParticles })));



const queryClient = new QueryClient();

function App() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <ErrorBoundary>
                <QueryClientProvider client={queryClient}>
                    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
                        <TooltipProvider>
                            <Toaster />
                            <InteractiveBackground />
                            <StarParticles />
                            <BrowserRouter>
                                <ScrollToTop />
                                <SkipToContent />
                                <Layout>
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/portfolio" element={<Portfolio />} />
                                        <Route path="/project/:slug" element={<ProjectDetail />} />
                                        <Route path="/about" element={<About />} />
                                        <Route path="/contact" element={<Contact />} />
                                        <Route path="*" element={<NotFound />} />
                                    </Routes>
                                </Layout>
                            </BrowserRouter>
                        </TooltipProvider>
                    </ThemeProvider>
                </QueryClientProvider>
            </ErrorBoundary>
        </Suspense>
    );
}


export default App;

