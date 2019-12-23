const PDFDocument = require("pdfkit");
const fs = require("fs");
 
// Create a document
const doc = new PDFDocument();
 
// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('MyFile.pdf'));

// Embed a font, set the font size, and render some text
//doc.fontSize(25).text('Some text with an embedded font!', 100, 100);

doc.save().moveTo(25, 20).lineTo(25, 400).lineTo(590, 400).lineTo(590, 20).fill('#FF3300');

doc.image('images/NeenaPortfolioPic.png', 235, 25, {width: 150, height: 175, align: 'center', valign: 'center'})
    .rect(235, 25, 150, 175);

    doc.circle(100, 50, 50)
    .lineWidth(3)
    .fillOpacity(0.8)
    .fillAndStroke("red", "#900")
   

doc.end();