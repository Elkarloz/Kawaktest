function pdfDoc (data) {
  const PDFDocument = require("pdfkit");
  const fs = require("fs");
  let path = require("path");
  path = path.join(__dirname, "../docs/");

  //number ramdom
  let random = Math.floor(Math.random() * 1000000);

  // create date of the pdf
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // Create a document
  const doc = new PDFDocument();

  // Pipe its output somewhere, like to a file or HTTP response
  // See below for browser usage
  doc.pipe(
    fs.createWriteStream(
      `${path}${data.name + "_" + data.lastname}_${data.email}.pdf`
    )
  );

  // Embed a font, set the font size, and render some text
  doc.fontSize(35).fillColor("#4C6E89").text("Kawak", 50, 60);

  doc.fontSize(25).fillColor("#436783").text("Factura N°", 320, 50);
  doc.fontSize(20).text(`${random}`, 450, 55);
  doc.fontSize(15).text("Date: ", 420, 80);
  doc.fontSize(10).text(`${day}-${month}-${year}`, 470, 83);
  doc
    .fontSize(15)
    .fillColor("#728DA2")
    .text(
      "---------------------------------------------------------------------------------------------------",
      30,
      100
    );
  doc.fontSize(15).fillColor("#3B80B9").text("Send to: ", 50, 120);
  doc
    .fontSize(15)
    .fillColor("#2E638D")
    .text(` ${data.name + " " + data.lastname}`, 120, 120);
  doc.fontSize(15).fillColor("#3B80B9").text("Address: ", 50, 140);
  doc.fontSize(15).fillColor("#2E638D").text(`${data.address}`, 125, 140);
  doc.fontSize(15).fillColor("#3B80B9").text("Phone: ", 300, 120);
  doc.fontSize(15).fillColor("#2E638D").text(`${data.phone}`, 360, 120);
  doc.fontSize(15).fillColor("#3B80B9").text("Email: ", 300, 140);
  doc.fontSize(15).fillColor("#2E638D").text(`${data.email}`, 360, 140);

  doc
    .fontSize(15)
    .fillColor("#728DA2")
    .text(
      "---------------------------------------------------------------------------------------------------",
      30,
      160
    );

  // Create a page table with headers
  doc.rect(30, 180, 550, 30).fill("#3F6783"); // header table // x, y, width, height
  doc.rect(30, 180, 550, 30).stroke();

  doc.fontSize(15).fillColor("#fff").text("Product", 100, 190);
  doc.fontSize(15).fillColor("#fff").text("Price", 320, 190);
  doc.fontSize(15).fillColor("#fff").text("Quantity", 400, 190);
  doc.fontSize(15).fillColor("#fff").text("Total", 500, 190);

  // Create a page table body

  // first row

  doc.rect(30, 210, 550, 30).stroke(); // body table // x, y, width, height
  doc
    .fontSize(15)
    .fillColor("#000")
    .text("Crop Tops - Neckline on the back", 50, 220);
  doc.fontSize(15).fillColor("#000").text("$300", 320, 220);
  doc.fontSize(15).fillColor("#000").text("1", 420, 220);
  doc.fontSize(15).fillColor("#000").text("$300", 500, 220);

  // second row

  doc.rect(30, 240, 550, 30).stroke(); // body table // x, y, width, height
  doc.fontSize(15).fillColor("#000").text("Off-Shoulder Tops", 100, 250);
  doc.fontSize(15).fillColor("#000").text("$150", 320, 250);
  doc.fontSize(15).fillColor("#000").text("3", 420, 250);
  doc.fontSize(15).fillColor("#000").text("$450", 500, 250);

  // first row 2

  doc.rect(30, 270, 550, 30).stroke(); // body table // x, y, width, height
  doc
    .fontSize(15)
    .fillColor("#000")
    .text("Crop Tops - Neckline on the back", 50, 280);
  doc.fontSize(15).fillColor("#000").text("$300", 320, 280);
  doc.fontSize(15).fillColor("#000").text("1", 420, 280);
  doc.fontSize(15).fillColor("#000").text("$300", 500, 280);

  // second row 2

  doc.rect(30, 300, 550, 30).stroke(); // body table // x, y, width, height
  doc.fontSize(15).fillColor("#000").text("Off-Shoulder Tops", 100, 310);
  doc.fontSize(15).fillColor("#000").text("$150", 320, 310);
  doc.fontSize(15).fillColor("#000").text("3", 420, 310);
  doc.fontSize(15).fillColor("#000").text("$450", 500, 310);

  // first row 3

  doc.rect(30, 330, 550, 30).stroke(); // body table // x, y, width, height
  doc
    .fontSize(15)
    .fillColor("#000")
    .text("Crop Tops - Neckline on the back", 50, 340);
  doc.fontSize(15).fillColor("#000").text("$300", 320, 340);
  doc.fontSize(15).fillColor("#000").text("1", 420, 340);
  doc.fontSize(15).fillColor("#000").text("$300", 500, 340);

  // second row 3

  doc.rect(30, 360, 550, 30).stroke(); // body table // x, y, width, height
  doc.fontSize(15).fillColor("#000").text("Off-Shoulder Tops", 100, 370);
  doc.fontSize(15).fillColor("#000").text("$150", 320, 370);
  doc.fontSize(15).fillColor("#000").text("3", 420, 370);
  doc.fontSize(15).fillColor("#000").text("$450", 500, 370);

  // total

  doc.rect(30, 390, 550, 40).stroke(); // total // x, y, width, height
  doc.fontSize(20).fillColor("#000").text("Total: ", 100, 400);
  doc.fontSize(20).fillColor("#000").text("$2400", 320, 400);

  // Finalize PDF file
  doc.path = path + data.name + "_" + data.lastname + "_" + data.email + ".pdf";
  
  doc.end();

  return doc;
}

module.exports =  pdfDoc;
