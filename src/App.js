import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FrameComponent from "./pages/FrameComponent";
import Edit from "./pages/Edit";
import App from "./pages/App";
import EditSections from "./pages/EditSections";
import Web from "./pages/Web";
import FrameComponent1 from "./pages/FrameComponent1";
import FrameComponent2 from "./pages/FrameComponent2";
import FrameComponent3 from "./pages/FrameComponent3";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/edit":
        title = "";
        metaDescription = "";
        break;
      case "/app":
        title = "";
        metaDescription = "";
        break;
      case "/edit-sections":
        title = "";
        metaDescription = "";
        break;
      case "/web":
        title = "";
        metaDescription = "";
        break;
      case "/frame-394":
        title = "";
        metaDescription = "";
        break;
      case "/frame-396":
        title = "";
        metaDescription = "";
        break;
      case "/frame-393":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FrameComponent />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/app" element={<App />} />
      <Route path="/edit-sections" element={<EditSections />} />
      <Route path="/web" element={<Web />} />
      <Route path="/frame-394" element={<FrameComponent1 />} />
      <Route path="/frame-396" element={<FrameComponent2 />} />
      <Route path="/frame-393" element={<FrameComponent3 />} />
    </Routes>
  );
}
export default App;
