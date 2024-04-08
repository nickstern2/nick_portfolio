import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { Stack } from "@mui/material";

// You need to configure the workerSrc to point to the PDF worker code.
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  return (
    <Stack alignItems='center'>
      <Document
        file={`${process.env.PUBLIC_URL}/Nicholas_Stern_Resume_pdf.pdf`}
        onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} scale={1.25} pageNumber={index + 1} />
        ))}
      </Document>
    </Stack>
  );
};

export default Resume;
