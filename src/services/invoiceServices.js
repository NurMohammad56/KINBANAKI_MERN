const mongoose = require("mongoose");
const CartModel = require("../model/CartModel");
const ProfileModel = require("../model/ProfileModel");
const InvoiceModel = require("../model/InvoiceModel");
const InvoiceProductModel = require("../model/InvoiceProductModel");
const PaymentSettingModel = require("../model/PaymentSettingModel");
const ObjectID = mongoose.Types.ObjectId;
const FormData = require("form-data");
const Axios = require("axios");

const createInvoiceService = async (req) => {
  try {
    let user_id = new ObjectID(req.headers.user_id);
    let cus_email = req.headers.email;

    // ============Step 01: Calculate Total Payable & Vat==================================================
    let matchStage = { $match: { userID: user_id } };
    let JoinStageProduct = {
      $lookup: {
        from: "products",
        localField: "productID",
        foreignField: "_id",
        as: "product",
      },
    };
    let unwindStage = { $unwind: "$product" };
    let cartProducts = await CartModel.aggregate([
      matchStage,
      JoinStageProduct,
      unwindStage,
    ]);

    let totalAmount = 0;
    cartProducts.forEach((element) => {
      let price;
      if (element["product"]["discount"]) {
        price = parseFloat(element["product"]["discountPrice"]);
      } else {
        price = parseFloat(element["product"]["price"]);
      }
      totalAmount += parseFloat(element["qty"]) * price;
    });

    let vat = totalAmount * 0.05; //5% vat
    let payable = totalAmount + vat;

    // ============Step 02: Prepare Customer Details & Shipping Details==================================================

    let profile = await ProfileModel.aggregate([matchStage]);
    let cus_details = `Name:${profile[0]["cus_name"]}, Email:${cus_email}, Address:${profile[0]["cus_add"]}, City:${profile[0]["cus_city"]}, Phone:${profile[0]["cus_phone"]},`;

    let shipping_details = `Name:${profile[0]["ship_name"]}, City:${profile[0]["ship_city"]}, Address:${profile[0]["ship_add"]}, State:${profile[0]["ship_state"]}, Phone:${profile[0]["ship_phone"]},`;
    // ============Step 03: Transaction & Other's ID==================================================

    let tran_id = Math.floor(1000000 + Math.random() * 9000000);
    let val_id = 0;
    let delivery_status = "Pending";
    let payment_status = "Pending";

    // ============Step 04: Create Invoice==========================================================

    let createInvoice = await InvoiceModel.create({
      userID: user_id,
      payable: payable,
      cus_details: cus_details,
      ship_details: shipping_details,
      tran_id: tran_id,
      val_id: val_id,
      delivery_status: delivery_status,
      payment_status: payment_status,
      total: totalAmount,
      vat: vat,
    });

    // ============Step 05: Create Invoice Product==================================================

    let invoice_id = createInvoice["_id"];

    cartProducts.forEach(async (element) => {
      await InvoiceProductModel.create({
        userID: user_id,
        productID: element["productID"],
        invoiceID: invoice_id,
        qty: element["qty"],
        price: element["product"]["discount"]
          ? element["product"]["discount"]
          : element["product"]["price"],
        color: element["color"],
        size: element["size"],
      });
    });

    // ============Step 01: Remove Cart=====================================================================================

    await CartModel.deleteMany({ userID: user_id });

    // ============Step 01: Preapre SSL Payment=============================================================================

    let paymentSetting = await PaymentSettingModel.find();

    const form = new FormData();
    // ID
    form.append("store_id", paymentSetting[0]["store_id"]);
    form.append("store_passwd", paymentSetting[0]["store_passwd"]);
    form.append("total_amount", payable.toString());
    form.append("currency", paymentSetting[0]["currency"]);
    form.append("tran_id", tran_id);
    form.append("success_url", paymentSetting[0]["success_url"]);
    form.append("fail_url", paymentSetting[0]["fail_url"]);
    form.append("cancel_url", paymentSetting[0]["cancel_url"]);
    form.append("ipn_url", paymentSetting[0]["ipn_url"]);
    form.append("init_url", paymentSetting[0]["init_url"]);

    // Customer

    form.append("cus_name", profile[0]["cus_name"]);
    form.append("cus_email", cus_email);
    form.append("cus_add1", profile[0]["cus_add"]);
    form.append("cus_add2", profile[0]["cus_add"]);
    form.append("cus_city", profile[0]["cus_city"]);
    form.append("cus_state", profile[0]["cus_state"]);
    form.append("cus_postcode", profile[0]["cus_postcode"]);
    form.append("cus_country", profile[0]["cus_country"]);
    form.append("cus_phone", profile[0]["cus_phone"]);
    form.append("cus_fax", profile[0]["cus_fax"]);

    // Shipping

    form.append("shipping_method", "YES");
    form.append("ship_name", profile[0]["ship_name"]);
    form.append("ship_add1", profile[0]["ship_add"]);
    form.append("ship_add2", profile[0]["ship_add"]);
    form.append("ship_add1", profile[0]["ship_add"]);
    form.append("ship_city", profile[0]["ship_city"]);
    form.append("ship_state", profile[0]["ship_state"]);
    form.append("ship_country", profile[0]["ship_country"]);
    form.append("ship_postcode", profile[0]["ship_postcode"]);
    form.append("product_name", "MERN Shop Products");
    form.append("product_category", "According to the invoice");
    form.append("product_profile", "According to the invoice");
    form.append("product_amount", "According to the invoice");

    let SSLRes = await Axios.post(paymentSetting[0]["init_url"], form);

    return { status: "Success", data: SSLRes.data };
  } catch (error) {
    return { status: "fail", message: "Something Went Wrong !" };
  }
};

const paymentFailService = async (req) => {
  try {
  } catch (error) {
    return { status: "fail", message: "Something Went Wrong !" };
  }
};

const paymentCancelService = async (req) => {
  try {
  } catch (error) {
    return { status: "fail", message: "Something Went Wrong !" };
  }
};

const paymentIPNService = async (req) => {
  try {
  } catch (error) {
    return { status: "fail", message: "Something Went Wrong !" };
  }
};

const paymentSuccessService = async (req) => {
  try {
  } catch (error) {
    return { status: "fail", message: "Something Went Wrong !" };
  }
};

const invoiceListService = async (req) => {
  try {
  } catch (error) {
    return { status: "fail", message: "Something Went Wrong !" };
  }
};

const invoiceProductListService = async (req) => {
  try {
  } catch (error) {
    return { status: "fail", message: "Something Went Wrong !" };
  }
};

module.exports = {
  createInvoiceService,
  paymentCancelService,
  paymentFailService,
  paymentIPNService,
  paymentSuccessService,
  invoiceListService,
  invoiceProductListService,
};
