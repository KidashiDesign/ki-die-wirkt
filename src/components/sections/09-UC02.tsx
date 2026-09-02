import UseCaseSection from "./UseCaseSection";
import Fig02Diagram from "../diagrams/Fig02Diagram";

export default function UC02() {
  return (
    <UseCaseSection
      id="uc-02"
      kickerLabel="UC/02 — Aus der Umsetzung"
      kickerMeta="Maschinenbau · Wissenssicherung"
      kickerStatus="Im Einsatz"
      headline={
        <>
          ERFAHRUNG,
          <br />
          <span className="accent-em">DIE</span>
          <br />
          <span className="accent-em">BLEIBT.</span>
        </>
      }
      subline="Das Wissen langjähriger Mitarbeitender wird abrufbar — bevor es mit ihnen in Rente geht."
      ghostNumber="02"
      beatLabel={
        <>
          IMPLIZIT <span className="text-accent">→</span> EXPLIZIT
        </>
      }
      beatBody={
        <>
          <span className="font-semibold">Bauchgefühl wird abrufbares Wissen.</span>{" "}
          Bevor der Kalender entscheidet, was verloren geht.
        </>
      }
      diagramCaption="Fig. 02 — Vom Bauchgefühl zum abrufbaren Baustein"
      diagram={<Fig02Diagram />}
      stats={[
        { title: "EXTRAHIERT", body: "In Sessions — nicht per „Schreib's doch mal auf“." },
        { title: "IM ALLTAG", body: "Assistent am Arbeitsplatz statt Aktenordner." },
        { title: "ÜBERGABEFÄHIG", body: "Unabhängig von Einzelpersonen." },
      ]}
      textBlocks={[
        {
          heading: "01 · Ausgangslage — Warum teuer",
          quote: "„Wenn der in Rente geht, geht das halbe Unternehmen mit.“",
          body: (
            <>
              Das wertvollste Wissen steht in keinem Handbuch. Warum ein Handgriff
              so erfolgt und nicht anders — das ist Erfahrung und Bauchgefühl, kaum
              formulierbar. Dokumentationsprojekte liest niemand, 1:1-Mentoring
              skaliert nicht und scheitert am Kalender. Neue, zunehmend auch
              fremdsprachige Kolleginnen und Kollegen{" "}
              <span className="font-semibold text-fg">
                brauchen Monate, um anzukommen.
              </span>
            </>
          ),
        },
        {
          heading: "02 · Rahmenbedingungen",
          body: (
            <>
              Strukturierte Sessions mit den erfahrenen Kollegen: vielschichtige
              Fragen und Analysen statt „Schreib doch mal auf, was du weißt.“ Dazu
              ein Vertrauensrahmen — Wissen teilen heißt nicht, ersetzt zu werden,
              sondern{" "}
              <span className="font-semibold text-fg">
                das eigene Können dauerhaft im Unternehmen zu verankern.
              </span>
            </>
          ),
        },
        {
          heading: "03 · Lösung",
          body: (
            <>
              Das extrahierte Erfahrungswissen wird KI-gestützt strukturiert und in
              verständliche, abrufbare Wissensbausteine überführt — aufbereitet
              auch für neue und fremdsprachige Mitarbeitende.{" "}
              <span className="font-semibold text-fg">
                Zugänglich im Arbeitsalltag, nicht als PDF im Ordner.
              </span>
            </>
          ),
        },
        {
          heading: "04 · Ergebnis",
          body: (
            <>
              Wissen bleibt im Unternehmen, auch wenn Menschen gehen. Die
              Einarbeitung verkürzt sich, die Abhängigkeit von Einzelpersonen
              sinkt.{" "}
              <span className="font-semibold text-fg">
                Aus einem tickenden Nachfolge-Risiko wird ein steuerbarer Prozess.
              </span>
            </>
          ),
        },
      ]}
    />
  );
}
