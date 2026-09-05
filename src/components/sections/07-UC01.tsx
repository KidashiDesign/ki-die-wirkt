import UseCaseSection from "./UseCaseSection";
import Fig01Diagram from "../diagrams/Fig01Diagram";

export default function UC01() {
  return (
    <UseCaseSection
      id="uc-01"
      kickerLabel="UC/01 — Aus der Umsetzung"
      kickerMeta="Maschinenbau · Produktion"
      kickerStatus="Im Einsatz"
      headline={
        <>
          KI, DIE <span className="accent-em">IM HAUS</span>
          <br />
          BLEIBT.
        </>
      }
      subline="Automatisierung dort, wo sie Marge bringt — ohne dass ein Byte Produktionswissen das Unternehmen verlässt."
      ghostNumber="01"
      bgIllustration="/M2-Waben-Illustration.svg"
      beatLabel="0"
      beatBody={
        <>
          <span className="font-semibold">Sensible Daten nach draußen.</span> Die
          Verarbeitung läuft lokal — auf eigener Infrastruktur.
        </>
      }
      diagramCaption="Fig. 01 — Sensible Verarbeitung lokal, Abfluss gesperrt"
      diagram={<Fig01Diagram />}
      stats={[
        { title: "LOKAL", body: "Sensible Verarbeitung auf eigener Infrastruktur." },
        { title: "0", body: "Produktionskritische Daten in fremden Modellen." },
        { title: "FOKUS", body: "Automatisiert wird nur, was rechnet." },
      ]}
      textBlocks={[
        {
          heading: "01 · Ausgangslage — Warum teuer",
          quote:
            "„KI? Damit schreiben meine Leute E-Mails und basteln lustige Bildchen.“",
          body: (
            <>
              Gleichzeitig die reale Sorge: Kunden- und Produktionsdaten, die in
              fremden Modellen landen — im schlimmsten Fall bei der Konkurrenz.
              Die Alternative, eine eigene sichere KI-Infrastruktur, wirkt
              erschlagend. Also passiert: nichts. Im Zweifel wird für manuelle
              Prozesse noch jemand eingestellt —{" "}
              <span className="font-semibold text-fg">
                den der Arbeitsmarkt längst nicht mehr hergibt.
              </span>
            </>
          ),
        },
        {
          heading: "02 · Rahmenbedingungen",
          body: (
            <>
              Zuerst eine nüchterne Priorisierung: Welche Prozesse bringen
              automatisiert echten Wertbeitrag — und welche sind Spielerei? Dann
              eine klare Datenarchitektur mit lokalen KI-Systemen als
              Zwischenschicht. Und offene Worte zur Angst vor dem
              Arbeitsplatzverlust,{" "}
              <span className="font-semibold text-fg">
                bevor sie zum stillen Widerstand wird.
              </span>
            </>
          ),
        },
        {
          heading: "03 · Lösung",
          body: (
            <>
              Ausgewählte Kernprozesse werden automatisiert. Die Verarbeitung
              sensibler Daten läuft lokal, unkritische Schritte laufen über
              Standard-Werkzeuge. Umgesetzt von IT-Consultants, die selbst bauen —{" "}
              <span className="font-semibold text-fg">
                kein Konzept, das auf externe Entwickler wartet.
              </span>
            </>
          ),
        },
        {
          heading: "04 · Ergebnis",
          body: (
            <>
              Automatisierung wirkt dort, wo sie Marge und Kapazität bringt — ohne
              Datenrisiko und ohne Big-Bang-Infrastrukturprojekt. Der
              Personalengpass wird konkret entlastet,{" "}
              <span className="font-semibold text-fg">
                die Investitionsentscheidung wird kalkulierbar statt erschlagend.
              </span>
            </>
          ),
        },
      ]}
    />
  );
}
