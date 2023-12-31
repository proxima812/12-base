import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import ru_RU from "@react-pdf-viewer/locales/lib/ru_RU.json";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { setting } from "settings";

function PdfViewer({ path }) {
 const defaultLayoutPluginInstance = defaultLayoutPlugin();
 return (
  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.js">
   <div style={{ width: "100%", height: "100%" }}>
    <Viewer
     fileUrl={setting.site.siteLink && "" + path}
     localization={ru_RU}
     plugins={[defaultLayoutPluginInstance]}
    />
   </div>
  </Worker>
 );
}

export default PdfViewer;
