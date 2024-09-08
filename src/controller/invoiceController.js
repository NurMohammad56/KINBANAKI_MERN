const {
  createInvoiceService,
  paymentCancelService,
  paymentFailService,
  paymentIPNService,
  paymentSuccessService,
  invoiceListService,
  invoiceProductListService,
} = require("../services/invoiceServices");

exports.createInvoice = async (req, res) => {
  let result = await createInvoiceService(req);
  return res.status(200).json(result);
};

exports.paymentCancel = async (req, res) => {
  let result = await paymentCancelService(req);
  return res.redirect("/orders");
};

exports.paymentFail = async (req, res) => {
  let result = await paymentFailService(req);
  return res.redirect("/orders");
};

exports.paymentIPN = async (req, res) => {
  let result = await paymentIPNService(req);
  return res.redirect("/orders");
};

exports.paymentSuccess = async (req, res) => {
  let result = await paymentSuccessService(req);
  return res.redirect("/orders");
};

exports.invoiceList = async (req, res) => {
  let result = await invoiceListService(req);
  return res.status(200).json(result);
};

exports.invoiceProductList = async (req, res) => {
  let result = await invoiceProductListService(req);
  return res.status(200).json(result);
};
