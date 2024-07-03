import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio, Timeline } from "antd";

const TimelineInstruction: React.FC = () => {
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
      <Timeline mode={"left"} style={{ paddingInline: 16 }}>
        <Timeline.Item position="left" color="black">
          <h3 style={{ fontWeight: 700, color: "#036c9a", fontSize: 20, fontFamily: "Verdana" }}>
            15/06/2021 - 16/09/2021 - Padova
          </h3>
          <p style={{ fontSize: 16, fontWeight: 700, fontFamily: "Verdana" }}>
            Progettista App multi devices - Dart & Flutter Specialist | KairosForm
          </p>
          <p style={{ fontSize: 16, fontFamily: "Verdana" }}>
            150 ore di formazione suddivise in:
            <p style={{ fontSize: 16, fontFamily: "Verdana" }}>
              -Progettazione e realizzazione di applicazioni per dispositivi mobili
            </p>
            <p style={{ fontSize: 16, fontFamily: "Verdana" }}>
              -Impostazione dell’ambiente di lavoro per lo sviluppo Android studio, xcode, Visual
              Studio Code
            </p>
            <p style={{ fontSize: 16, fontFamily: "Verdana" }}>
              -Linguaggio Dart e framework Flutter per la realizzare applicazioni per dispositivi
              Android e iOS
            </p>
            <p> -Test e ottimizzazione dell’applicazione su dispositivi reali</p>
          </p>
        </Timeline.Item>
        <Timeline.Item position="left" color="black">
          <h3 style={{ fontWeight: 700, color: "#036c9a", fontSize: 20, fontFamily: "Verdana" }}>
            17/12/2019 - 28/02/2020 - Treviso
          </h3>
          <p style={{ fontSize: 16, fontWeight: 700, fontFamily: "Verdana" }}>
            Formazione specialistica - Fabrica
          </p>
          <p style={{ fontSize: 16, fontFamily: "Verdana" }}>
            200 ore di formazione, finanziate dal progetto "Garanzia Giovani" della regione Veneto,
            divise tra le seguenti attività:
            <p style={{ fontSize: 16 }}>
              {" "}
              * suite Adobe CC (Photoshop, Illustrator, Indesign/ 48 ore)
            </p>
            <p>
              * software per il settore grafico cad 2d (Autocad2020/ 40 ore) * software per il
              settore grafico 3d e visual (Cinema 4D+V-Ray/ 64 ore)
            </p>
            <p style={{ fontSize: 16 }}> * sviluppo soft skills (24 ore) </p>
            <p style={{ fontSize: 16 }}> * la grafica nell'impresa di oggi (24 ore)</p>
            Il progetto conclusivo richiedeva la creazione di un capo d'abbigliamento ispirato alle
            creazioni degli artisti del Bauhaus, completamente virtuale, attraverso i tool di
            modellazione/animazione 3d.
          </p>
        </Timeline.Item>
        <Timeline.Item position="left" color="black">
          <h3 style={{ fontWeight: 700, color: "#036c9a", fontSize: 20, fontFamily: "Verdana" }}>
            2015 - 16/10/2019 - Padova
          </h3>
          <p style={{ fontSize: 16, fontWeight: 700, fontFamily: "Verdana" }}>
            DAMS - Università degli Studi di Padova
          </p>
        </Timeline.Item>
      </Timeline>
    </>
  );
};

export default TimelineInstruction;
