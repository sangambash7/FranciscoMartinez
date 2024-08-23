// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Introduction from "./Introduction";
import Teaching from "./Teaching";
import Publications from "./Publications";
import PublicationEditedVolumes from "./EditedVolumes";
import SpecialIssues from "./SpecialIssues";
import Novel from "./Novel";
import PublicationSelectedArticles from "./SelectedArticles";
import PublicationSelectedChapters from "./SelectedChapters";
import Exhibitions from "./Exhibitions";
import Interviews from "./Interviews";
import TheFutureOfHiding from "./Monographs/The-Future-Of-Hiding";
import Espanol from "./Español";
import Navbar2 from "./Navbar2";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Teaching" element={<Teaching />} />
        <Route path="/Publications" element={<Publications />} />
        <Route path="/EditedVolumes" element={<PublicationEditedVolumes />} />
        <Route path="/SpecialIssues" element={<SpecialIssues />} />
        <Route
          path="/SelectedArticles"
          element={<PublicationSelectedArticles />}
        />
        <Route
          path="/SelectedChapters"
          element={<PublicationSelectedChapters />}
        />
        <Route path="/Novel" element={<Novel />} />
        <Route path="/Exhibitions" element={<Exhibitions />} />
        <Route path="/Interviews" element={<Interviews />} />
        <Route path="/Español" element={<Espanol />} />
        <Route path="/The-Future-Of-Hiding" element={<TheFutureOfHiding />} />
      </Routes>
    </Router>
  );
}

export default App;
