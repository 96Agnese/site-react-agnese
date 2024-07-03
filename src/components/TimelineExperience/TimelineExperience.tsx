import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio, Timeline } from "antd";

const TimelineExperience: React.FC = () => {
  const [mode, setMode] = useState<"left" | "alternate" | "right">("left");

  const onChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  return (
    <>
      <Radio.Group
        onChange={onChange}
        value={mode}
        style={{
          marginBottom: 20,
        }}
      ></Radio.Group>
      <Timeline mode={"alternate"} style={{ paddingInline: 16 }}>
        <Timeline.Item position="left" color="black">
          <h3 style={{ fontWeight: 700, color: "#036c9a", fontSize: 20, fontFamily: "Verdana" }}>
            Frontend web developer - Rawfish - 06/12/2021 | ATTUALE (Vicenza)
          </h3>
          <p style={{ fontSize: 16, fontFamily: "Verdana" }}>
            - Crazione di interfacce web attraverso l'utilizzo di html, scss, react, javascript,
            typescript
          </p>
          <p style={{ fontSize: 16, fontFamily: "Verdana" }}>
            - Creazione di siti CMS con wordpress e plugin Elementor
          </p>
        </Timeline.Item>
        <Timeline.Item position="right" color="black">
          <p style={{ fontWeight: 700, color: "#036c9a", fontSize: 20, fontFamily: "Verdana" }}>
            Stratega social media - Parco del Sojo - 03/07/2018 | ATTUALE (Lusiana)
          </p>
          <p style={{ fontSize: 16, fontFamily: "Verdana" }}>
            - Pianificazione di strategie di marketing volte ad incrementare l'afflusso di turisti.
          </p>
          <p style={{ fontSize: 16, fontFamily: "Verdana" }}>
            {" "}
            - Inserzioni Google Ads e Facebook Ads
          </p>
          <p style={{ fontSize: 16, fontFamily: "Verdana" }}>
            {" "}
            - Monitoraggio il sito attraverso Google search console
          </p>
          <a
            style={{ fontSize: 16, fontFamily: "Verdana" }}
            href="https://business.notjustanalytics.com/plus/parcosojo"
          >
            Analytics
          </a>
        </Timeline.Item>

        <Timeline.Item position="left" color="black">
          <p style={{ fontWeight: 700, color: "#036c9a", fontSize: 20, fontFamily: "Verdana" }}>
            Post Produttice - Benetton Group - 06/10/2020 | 30/04/2021 (Treviso)
          </p>
          <p style={{ fontSize: 16, fontFamily: "Verdana" }}>
            - Post produzione di indossato e still life per e-commerce attraverso l'utilizzo di
            Photoshop e Capture One
          </p>
          <p style={{ fontSize: 16, fontFamily: "Verdana" }}>
            - Scatti still life attraverso Capture One
          </p>
        </Timeline.Item>

        <Timeline.Item position="right" color="black">
          <p style={{ fontWeight: 700, color: "#036c9a", fontSize: 20, fontFamily: "Verdana" }}>
            Tv7 Triveneta - 21/01/2019 | 21/04/2019 (Padova)
          </p>
          <p style={{ fontSize: 16, fontFamily: "Verdana" }}>
            - Montaggio digitale dei servizi (Adobe Premiere)
          </p>
          <p style={{ fontSize: 16, fontFamily: "Verdana" }}>
            {" "}
            - Gestione dei social network e video editing
          </p>
        </Timeline.Item>
      </Timeline>
    </>
  );
};

export default TimelineExperience;
