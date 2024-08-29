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
import PeripheralMethodologies from "./Monographs/Peripheral-Methodologies";
import PoliticsOfRecuperation from "./Monographs/Politics-Of-Recuperation";
import RepairBrokennessBreakthrough from "./Monographs/Repair-Brokenness-Breakthrough";
import AestheticsofRepairInContemporaryGeorgia from "./Monographs/Aesthetics-of-Repair-in-Contemporary-Georgia";
import HopelessYouth from "./Monographs/Hopeless-Youth";
import PlaygroundsAndBattlefields from "./Monographs/Playgrounds-And-Battlefields";
import LivingWithAndWithoutThings from "./Monographs/Living-With-And-Without-Things";
import AnthropologyOfAtFromHome from "./Monographs/Anthropology-Of-At-From-Home";
import BoundaryReWork from "./Monographs/Boundary-Re-Work";
import ChangingMargins from "./Monographs/Changing-Margins";
import RethinkingEuroAnthropology from "./Monographs/Rethinking-Euro-Anthropology";

import GarbographyWasteMatter from "./Monographs/Garbography-Waste-Matter";
import HitchhackingPassengerEthnography from "./Monographs/Hitchhacking-Passenger-Ethnography";
import TimeToFix from "./Monographs/Time-To-Fix";
import WhatKindOfDocuments from "./Monographs/What-Kind-Of-Documents";
import MemoryDontSpeak from "./Monographs/Memory-Dont-Speak";
import NarvaAsMethod from "./Monographs/Narva-As-Method";
import WasteAndPostsocialism from "./Monographs/Waste-And-Postsocialism";
import AnaloguePhotoBooths from "./Monographs/Analogue-Photo-Booths";
import DoingNothingAnthropology from "./Monographs/Doing-Nothing-Anthropology";
import ThisPlaceHasPotential from "./Monographs/This-Place-Has-Potential";
import WasteIsNotTheEnd from "./Monographs/Waste-Is-Not-The-End";
import RemainingWithoutPreservation from "./Monographs/Remaining-Without-Preservation";
import CoethnographersInThestorm from "./Monographs/Co-ethnographers-In-The-storm";
import HowToMakeEthnographicResearch from "./Monographs/How-To-Make-Ethnographic-Research";
import FooledIntoFieldwork from "./Monographs/Fooled-Into-Fieldwork";
import VoidsOutOfPlace from "./Monographs/Voids-Out-Of-Place";

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
        <Route
          path="/Peripheral-Methodologies"
          element={<PeripheralMethodologies />}
        />
        <Route
          path="/Politics-Of-Recuperation"
          element={<PoliticsOfRecuperation />}
        />
        <Route
          path="/Repair-Brokenness-Breakthrough"
          element={<RepairBrokennessBreakthrough />}
        />
        <Route
          path="/Aesthetics-of-Repair-in-Contemporary-Georgia"
          element={<AestheticsofRepairInContemporaryGeorgia />}
        />
        <Route path="/Hopeless-Youth" element={<HopelessYouth />} />
        <Route
          path="/Playgrounds-And-Battlefields"
          element={<PlaygroundsAndBattlefields />}
        />

        <Route
          path="/Living-With-And-Without-Things"
          element={<LivingWithAndWithoutThings />}
        />
        <Route
          path="/Anthropology-Of-At-From-Home"
          element={<AnthropologyOfAtFromHome />}
        />
        <Route path="/Boundary-Re-Work" element={<BoundaryReWork />} />
        <Route path="/Changing-Margins" element={<ChangingMargins />} />
        <Route
          path="/Rethinking-Euro-Anthropology"
          element={<RethinkingEuroAnthropology />}
        />

        <Route
          path="/Garbography-Waste-Matter"
          element={<GarbographyWasteMatter />}
        />
        <Route
          path="/Hitchhacking-Passenger-Ethnography"
          element={<HitchhackingPassengerEthnography />}
        />
        <Route path="/Time-To-Fix" element={<TimeToFix />} />
        <Route
          path="/What-Kind-Of-Documents"
          element={<WhatKindOfDocuments />}
        />
        <Route path="/Memory-Dont-Speak" element={<MemoryDontSpeak />} />
        <Route path="/Narva-As-Method" element={<NarvaAsMethod />} />
        <Route
          path="/Waste-And-Postsocialism"
          element={<WasteAndPostsocialism />}
        />
        <Route
          path="/Analogue-Photo-Booths"
          element={<AnaloguePhotoBooths />}
        />
        <Route
          path="/Doing-Nothing-Anthropology"
          element={<DoingNothingAnthropology />}
        />
        <Route
          path="/This-Place-Has-Potential"
          element={<ThisPlaceHasPotential />}
        />
        <Route path="/Waste-Is-Not-The-End" element={<WasteIsNotTheEnd />} />

        <Route
          path="/Remaining-Without-Preservation"
          element={<RemainingWithoutPreservation />}
        />
        <Route
          path="/Co-ethnographers-In-The-storm"
          element={<CoethnographersInThestorm />}
        />
        <Route
          path="/How-To-Make-Ethnographic-Research"
          element={<HowToMakeEthnographicResearch />}
        />
        <Route
          path="/Fooled-Into-Fieldwork"
          element={<FooledIntoFieldwork />}
        />
        <Route path="/Voids-Out-Of-Place" element={<VoidsOutOfPlace />} />
      </Routes>
    </Router>
  );
}

export default App;
