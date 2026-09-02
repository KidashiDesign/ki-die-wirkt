import UseCaseSection from "./UseCaseSection";
import Fig03Diagram from "../diagrams/Fig03Diagram";

export default function UC03() {
  return (
    <UseCaseSection
      id="uc-03"
      kickerLabel="UC/03 — Einsatzszenario"
      kickerMeta="B2B-Vertrieb · CRM · Sprach-KI"
      kickerStatus="Szenario"
      headline={
        <>
          DAS CRM, DAS SICH
          <br />
          <span className="accent-em">SELBST PFLEGT.</span>
        </>
      }
      subline="Das System arbeitet dem Vertrieb zu, statt Eingaben zu fordern — Briefing vorher, Nachfassung danach, alles im CRM."
      ghostNumber="03"
      beatLabel="3"
      beatBody={
        <>
          <span className="font-semibold">Fragen. Ein Anruf.</span> Und die
          Nachbereitung steht im CRM — strukturiert, automatisch.
        </>
      }
      diagramCaption="Fig. 03 — Vorbereitung und Nachfassung, ohne Mehraufwand"
      diagram={<Fig03Diagram />}
      stats={[
        { title: "VORHER", body: "Briefing als Audio — Historie, offene Punkte, Anlass." },
        { title: "NACHHER", body: "Ein Anruf, drei Fragen — mehr braucht es nicht." },
        { title: "INS CRM", body: "Strukturiert, automatisch — kein Freitext-Friedhof." },
      ]}
      textBlocks={[
        {
          heading: "01 · Ausgangslage — Warum teuer",
          quote: "„Unsere Vertriebler haben das CRM nie gepflegt. Ehrlich gesagt: nie.“",
          body: (
            <>
              CRM-Pflege scheitert nicht an der Software, sondern an der Logik:
              Für den Vertrieb ist Dokumentation Zusatzaufwand ohne eigenen
              Nutzen. Termine bleiben unvorbereitet, Nachbereitung findet nicht
              statt,{" "}
              <span className="font-semibold text-fg">
                die Führung steuert im Blindflug.
              </span>{" "}
              Mehr Prozessdruck und Schulungen haben das Problem teuer nicht
              gelöst.
            </>
          ),
        },
        {
          heading: "02 · Rahmenbedingungen",
          body: (
            <>
              Anbindung an das bestehende CRM und den Kalender — kein neues
              System, keine Parallelwelt. Und eine bewusste Umkehr der Logik:{" "}
              <span className="font-semibold text-fg">
                Das System arbeitet dem Vertrieb zu, statt Eingaben zu fordern.
              </span>{" "}
              Akzeptanz entsteht, weil der Nutzen zuerst spürbar ist.
            </>
          ),
        },
        {
          heading: "03 · Lösung",
          body: (
            <>
              Vor jedem Kundentermin ein automatisch erzeugtes Audio-Briefing aufs
              Handy: Historie, offene Punkte, Gesprächsanlass — anhörbar auf der
              Fahrt. Nach dem Termin ruft ein sprachbasiertes KI-System an, stellt
              drei gezielte Fragen,{" "}
              <span className="font-semibold text-fg">
                und die Antworten landen strukturiert im CRM.
              </span>
            </>
          ),
        },
        {
          heading: "04 · Ergebnis",
          body: (
            <>
              Vorbereitung und Nachbereitung passieren tatsächlich — ohne
              Mehraufwand für den Vertrieb. Und die Führung sieht zum ersten Mal,
              was in den Accounts wirklich läuft:{" "}
              <span className="font-semibold text-fg">steuern statt raten.</span>
            </>
          ),
        },
      ]}
    />
  );
}
