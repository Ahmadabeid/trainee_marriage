import React from 'react';

class PdfGenerator extends React.Component {
  generatePdf = () => {
    const { contentRef } = this;

    if (contentRef.current) {
      const { innerWidth, innerHeight } = window;
      const pdf = window.open('', '_blank');
      const printWindow = pdf.document;
      
      printWindow.open();
      printWindow.write(`
        <html>
          <head>
            <style>
              @page {
                size: ${innerWidth}px ${innerHeight}px;
                margin: 0;
              }
              body {
                margin: 0;
                padding: 0;
              }
            </style>
          </head>
          <body>
            <div style="width: ${innerWidth}px; height: ${innerHeight}px;">
              ${contentRef.current.innerHTML}
            </div>
          </body>
        </html>
      `);
      printWindow.close();
    }
  };

  render() {
    this.contentRef = React.createRef();

    return (
      <div>
        <div ref={this.contentRef}>
          {/* Your content to be converted to PDF */}
        </div>
        <button onClick={this.generatePdf}>Generate PDF</button>
      </div>
    );
  }
}

export default PdfGenerator;

