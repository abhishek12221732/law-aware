import React from 'react';
import doc from '../assets/doc.pdf';
const PDFViewer = () => {
    return (
      <div>
        <embed src={doc} type="application/pdf" width="100%" height="600px" />
      </div>
    );
  };
  
  export default PDFViewer;
  