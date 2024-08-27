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
import Espanol from "./Español";
import Supervision from "./Supervision";
import Navbar2 from "./Navbar2";
import TheFutureOfHiding from "./Monographs/The-Future-Of-Hiding";
import Escondites from "./Monographs/Escondites";
import EthnographicExperiments from "./Monographs/Ethnographic-Experiments-with-Artists";
import RemainsOftheSovietTime from "./Monographs/Remains-of-the-Soviet-Time";

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
        <Route path="/Supervision" element={<Supervision />} />
        <Route path="/Español" element={<Espanol />} />
        <Route path="/The-Future-Of-Hiding" element={<TheFutureOfHiding />} />
        <Route path="/Escondites" element={<Escondites />} />
        <Route
          path="/Ethnographic-Experiments-with-Artists"
          element={<EthnographicExperiments />}
        />
        <Route
          path="/Remains-of-the-Soviet-Time"
          element={<RemainsOftheSovietTime />}
        />
      </Routes>
    </Router>
  );
}

export default App;
