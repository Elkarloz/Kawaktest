const pdfDoc = require("../middlewares/pdfDoc");
let path = require("path");

const data = {
  name: "John",
  lastname: "Doe",
  address: "123 Main St",
  phone: "555-555-5555",
  email: "mail",
};

path = path.join(__dirname, "../docs/");
describe("pdfDoc", () => {
test("route exists", () => {
  let result = pdfDoc(data);
  
  expect(result.path).toBe(`${path}${data.name + "_" + data.lastname}_${data.email}.pdf`);
})});