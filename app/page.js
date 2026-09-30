import Hero from "./components/Hero";
import StageMap from "./components/StageMap";
import Babak from "./components/Babak";
import Pembicara from "./components/Pembicara";
import Penonton from "./components/Penonton";
import FAQ from "./components/FAQ";
import Registration from "./components/Registration";
import Mitra from "./components/Mitra";
import { ACARA, BABAK, SITE } from "@/lib/acara";

const eventLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: `Elevinar Pertunjukan #${ACARA.nomor}: ${ACARA.judul}`,
  startDate: "2026-11-21T09:00:00+07:00",
  endDate: "2026-11-21T17:15:00+07:00",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: { "@type": "VirtualLocation", url: SITE },
  organizer: { "@type": "Organization", name: "Elevinar", url: SITE },
  subEvent: BABAK.map((b) => ({ "@type": "Event", name: `Babak ${b.kode}: ${b.judul}` })),
};

export default function Home() {
  return (
    <main>
      <Hero />
      <StageMap />
      <Babak />
      <Pembicara />
      <Penonton />
      <FAQ />
      <Registration />
      <Mitra />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventLd) }} />
    </main>
  );
}
