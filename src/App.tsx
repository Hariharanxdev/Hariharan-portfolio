// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { ThemeProvider } from "@/components/providers/ThemeProvider";
// import { Layout } from "@/components/layout/Layout";
// import { ScrollToTop } from "@/components/layout/ScrollToTop";
// import { SkipToContent } from "@/components/ui/SkipToContent";
// import { LoadingFallback } from "@/components/ui/LoadingFallback";
// import { PageTransition } from "@/components/ui/PageTransition";
// import { ErrorBoundary } from "@/components/ErrorBoundary";
// import { InteractiveBackground } from "@/components/ui/InteractiveBackground";
// import { StarParticles } from "@/components/ui/StarParticles";
// import { AnimatePresence } from "framer-motion";
// import { lazy, Suspense } from "react";

// // Code-split route components for better performance
// const Index = lazy(() => import("./pages/Index"));
// const Portfolio = lazy(() => import("./pages/Portfolio"));
// const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
// const About = lazy(() => import("./pages/About"));
// const Certificates = lazy(() => import("./pages/Certificates"));
// const Contact = lazy(() => import("./pages/Contact"));
// const NotFound = lazy(() => import("./pages/NotFound"));

// const queryClient = new QueryClient();

// function AnimatedRoutes() {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="wait">
//       <Routes location={location} key={location.pathname}>
//         <Route
//           path="/"
//           element={
//             <PageTransition>
//               <Index />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="/portfolio"
//           element={
//             <PageTransition>
//               <Portfolio />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="/project/:slug"
//           element={
//             <PageTransition>
//               <ProjectDetail />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="/about"
//           element={
//             <PageTransition>
//               <About />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="/certificates"
//           element={
//             <PageTransition>
//               <Certificates />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <PageTransition>
//               <Contact />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="*"
//           element={
//             <PageTransition>
//               <NotFound />
//             </PageTransition>
//           }
//         />
//       </Routes>
//     </AnimatePresence>
//   );
// }

// const App = () => (
//   <ErrorBoundary>
//     <QueryClientProvider client={queryClient}>
//       <ThemeProvider>
//         <TooltipProvider>
//           <Toaster />
//           <Sonner />
//           <InteractiveBackground />
//           <StarParticles />
//           <BrowserRouter>
//             <ScrollToTop />
//             <SkipToContent />
//             <Layout>
//               <Suspense fallback={<LoadingFallback />}>
//                 <AnimatedRoutes />
//               </Suspense>
//             </Layout>
//           </BrowserRouter>
//         </TooltipProvider>
//       </ThemeProvider>
//     </QueryClientProvider>
//   </ErrorBoundary>
// );


// export default App;
function App() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <p>Hello, I am Lusifor</p>
    </div>
  )
}

export default App
