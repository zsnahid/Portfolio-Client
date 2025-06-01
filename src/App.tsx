import { Layout } from "@/components/Layout";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Lazy load all page components for better performance
const HomePage = lazy(() => import("@/pages/HomePage"));
// const ExperiencePage = lazy(() => import("@/pages/ExperiencePage"));
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage"));
const ColorsPage = lazy(() => import("@/pages/ColorsPage"));
const BlogPage = lazy(() => import("@/pages/BlogPage"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="projects"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ProjectsPage />
              </Suspense>
            }
          />
          <Route
            path="colors"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ColorsPage />
              </Suspense>
            }
          />
          <Route
            path="blog"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <BlogPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
