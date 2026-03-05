import Slide01Cover from "@/components/sections/Slide01Cover";
import Slide02Proof from "@/components/sections/Slide02Proof";
import Slide03Origin from "@/components/sections/Slide03Origin";
import Slide04Bottleneck from "@/components/sections/Slide04Bottleneck";
import Slide05Demo from "@/components/sections/Slide05Demo";
import Slide06Ecosystem from "@/components/sections/Slide06Ecosystem";
import Slide07Medical from "@/components/sections/Slide07Medical";
import Slide08Commerce from "@/components/sections/Slide08Commerce";
import Slide09Global from "@/components/sections/Slide09Global";
import Slide10Fintech from "@/components/sections/Slide10Fintech";
import Slide11Financial from "@/components/sections/Slide11Financial";
import Slide12TheAsk from "@/components/sections/Slide12TheAsk";
import Slide13Appendix from "@/components/sections/Slide13Appendix";
import Navigation from "@/components/ui/Navigation";
import SectionBridge from "@/components/ui/SectionBridge";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <main className="relative bg-cream">
      <ScrollProgress />
      <Navigation />
      <Slide01Cover />
      <SectionBridge variant="chapter" label="Proof" />
      <Slide02Proof />
      <SectionBridge />
      <Slide03Origin />
      <SectionBridge variant="chapter" label="Breakthrough" />
      <Slide04Bottleneck />
      <SectionBridge />
      <Slide05Demo />
      <SectionBridge variant="chapter" label="Ecosystem" />
      <Slide06Ecosystem />
      <SectionBridge />
      <Slide07Medical />
      <SectionBridge />
      <Slide08Commerce />
      <SectionBridge variant="chapter" label="Global" />
      <Slide09Global />
      <SectionBridge />
      <Slide10Fintech />
      <SectionBridge variant="chapter" label="Finance" />
      <Slide11Financial />
      <SectionBridge />
      <Slide12TheAsk />
      <SectionBridge variant="subtle" />
      <Slide13Appendix />
    </main>
  );
}
