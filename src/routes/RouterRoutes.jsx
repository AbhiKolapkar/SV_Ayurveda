import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Fallback from "../common/Fallback";
import { PATHS } from "../data/constant";

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

const RouterRoutes = () => {
  return (
    <>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path={PATHS.HOME_PATH} Component={Home} />
          <Route path={PATHS.HOME_PAGE} Component={Home} />
          <Route path={PATHS.ABOUT_US_PAGE} Component={About} />
          <Route path={PATHS.TREATMENTS_PAGE} Component={Treatments} />
          <Route path={PATHS.SESSIONS_PAGE} Component={Sessions} />
          <Route path={PATHS.GALLERY_PAGE} Component={Gallery} />
          <Route path={PATHS.PROGRAM_PAGE} Component={Program} />
          <Route path={PATHS.BLOGS_PAGE} Component={Blogs} />
          <Route path={PATHS.BLOG_DETAILS_PAGE} Component={BlogDetails} />
          <Route path={PATHS.UPDATES_PAGE} Component={Updates} />
          <Route path={PATHS.CONTACT_PAGE} Component={Contact} />
        </Routes>
      </Suspense>
    </>
  );
};

export default RouterRoutes;
