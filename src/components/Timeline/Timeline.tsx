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
      >
        {/* <Radio value="left">Left</Radio>
        <Radio value="right">Right</Radio>
        <Radio value="alternate">Alternate</Radio> */}
      </Radio.Group>
      <Timeline mode={"alternate"} style={{ paddingInline: 16 }}>
        <Timeline.Item position="left" color="black">
          <h3 style={{ fontWeight: 700, color: "#19a9e7", fontSize: 20 }}>
            Frontend web developer - Rawfish - 06/12/2021 | ATTUALE (Vicenza)
          </h3>
          <p style={{ fontSize: 16 }}>
            - Crazione di interfacce web attraverso l'utilizzo di html, scss, react, javascript,
            typescript
          </p>
          <p style={{ fontSize: 16 }}>- Creazione di siti CMS con wordpress e plugin Elementor</p>
        </Timeline.Item>
        <Timeline.Item position="right" color="black">
          <p style={{ fontWeight: 700, color: "#19a9e7", fontSize: 20 }}>
            Stratega social media - Parco del Sojo - 03/07/2018 | ATTUALE (Lusiana)
          </p>
          <p style={{ fontSize: 16 }}>
            - Pianificazione di strategie di marketing volte ad incrementare l'afflusso di turisti.
          </p>
          <p style={{ fontSize: 16 }}> - Inserzioni Google Ads e Facebook Ads</p>
          <p style={{ fontSize: 16 }}> - Monitoraggio il sito attraverso Google search console</p>
          <a style={{ fontSize: 16 }} href="https://business.notjustanalytics.com/plus/parcosojo">
            Analytics
          </a>
        </Timeline.Item>

        <Timeline.Item position="left" color="black">
          <p style={{ fontWeight: 700, color: "#19a9e7", fontSize: 20 }}>
            Post Produttice - Benetton Group - 06/10/2020 | 30/04/2021 (Treviso)
          </p>
          <p style={{ fontSize: 16 }}>
            - Post produzione di indossato e still life per e-commerce attraverso l'utilizzo di
            Photoshop e Capture One
          </p>
          <p style={{ fontSize: 16 }}> - Scatti still life attraverso Capture One</p>
        </Timeline.Item>

        <Timeline.Item position="right" color="black">
          <p style={{ fontWeight: 700, color: "#19a9e7", fontSize: 20 }}>
            Tv7 Triveneta - 21/01/2019 | 21/04/2019 (Padova)
          </p>
          <p style={{ fontSize: 16 }}>- Montaggio digitale dei servizi (Adobe Premiere)</p>
          <p style={{ fontSize: 16 }}> - Gestione dei social network e video editing</p>
        </Timeline.Item>
      </Timeline>
    </>
  );
};

export default TimelineExperience;
