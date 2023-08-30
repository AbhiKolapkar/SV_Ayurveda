import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { PATHS } from "../data/constant";
import Fallback from "../common/Fallback";
import { Dna } from "react-loader-spinner";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Treatments = lazy(() => import("../pages/Treatments/Treatments"));
const Sessions = lazy(() => import("../pages/Sessions/Sessions"));
const Gallery = lazy(() => import("../pages/Gallery/Gallery"));
const Program = lazy(() => import("../pages/Program/Program"));
const Blogs = lazy(() => import("../pages/Blogs/Blogs"));
const BlogDetails = lazy(() => import("../pages/Blog_Details/BlogDetails"));
const Updates = lazy(() => import("../pages/Updates/Updates"));
const Contact = lazy(() => import("../pages/Contact/Contact"));

const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path={PATHS.HOME_PATH}
          element={
            <Suspense fallback={<Fallback />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={PATHS.HOME_PAGE}
          element={
            <Suspense fallback={<Fallback />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={PATHS.ABOUT_US_PAGE}
          element={
            <Suspense fallback={<Fallback />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path={PATHS.TREATMENTS_PAGE}
          element={
            <Suspense fallback={<Fallback />}>
              <Treatments />
            </Suspense>
          }
        />
        <Route
          path={PATHS.SESSIONS_PAGE}
          element={
            <Suspense fallback={<Fallback />}>
              <Sessions />
            </Suspense>
          }
        />
        <Route
          path={PATHS.GALLERY_PAGE}
          element={
            <Suspense fallback={<Fallback />}>
              <Gallery />
            </Suspense>
          }
        />
        <Route
          path={PATHS.PROGRAM_PAGE}
          element={
            <Suspense fallback={<Fallback />}>
              <Program />
            </Suspense>
          }
        />
        <Route
          path={PATHS.BLOGS_PAGE}
          element={
            <Suspense fallback={<Fallback />}>
              <Blogs />
            </Suspense>
          }
        />
        <Route
          path={PATHS.BLOG_DETAILS_PAGE}
          element={
            <Suspense fallback={<Fallback />}>
              <BlogDetails />
            </Suspense>
          }
        />
        <Route
          path={PATHS.UPDATES_PAGE}
          element={
            <Suspense fallback={<Fallback />}>
              <Updates />
            </Suspense>
          }
        />
        <Route
          path={PATHS.CONTACT_PAGE}
          element={
            <Suspense fallback={<Fallback />}>
              <Contact />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default Router;
