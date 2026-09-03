import LiveStatusBar from "./components/ui/LiveStatusBar";
import ProgressRail from "./components/ui/ProgressRail";
import useScrollSpy from "./hooks/useScrollSpy";
import Hero from "./components/sections/01-Hero";
import TrennerSignalbahn from "./components/sections/02-TrennerSignalbahn";
import TheseBeat from "./components/sections/03-TheseBeat";
import MarqueeSection from "./components/sections/04-Marquee";
import DossierIndex from "./components/sections/05-DossierIndex";
import TrennerMessband from "./components/sections/06-TrennerMessband";
import UC01 from "./components/sections/07-UC01";
import TrennerMessband2 from "./components/sections/08-TrennerMessband";
import UC02 from "./components/sections/09-UC02";
import TrennerMessband3 from "./components/sections/10-TrennerMessband";
import UC03 from "./components/sections/11-UC03";
import TrennerSignalbahn2 from "./components/sections/12-TrennerSignalbahn";
import BreakCTA from "./components/sections/13-BreakCTA";
import Footer from "./components/sections/14-Footer";

const RAIL_SECTION_IDS = ["uc-01", "uc-02", "uc-03"];

function App() {
  const activeIndex = useScrollSpy(RAIL_SECTION_IDS);

  return (
    <main className="bg-bg text-fg">
      <LiveStatusBar />
      <ProgressRail steps={["01", "02", "03"]} activeIndex={activeIndex} />
      <Hero />
      <TrennerSignalbahn />
      <TheseBeat />
      <MarqueeSection />
      <DossierIndex />
      <TrennerMessband />
      <UC01 />
      <TrennerMessband2 />
      <UC02 />
      <TrennerMessband3 />
      <UC03 />
      <TrennerSignalbahn2 />
      <BreakCTA />
      <Footer />
    </main>
  );
}

export default App;
