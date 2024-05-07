const mongoose = require("mongoose");
const CartModel = require("../model/CartModel");
const ProfileModel = require("../model/ProfileModel");
const InvoiceModel = require("../model/InvoiceModel");
const InvoiceProductModel = require("../model/InvoiceProductModel");
const PaymentSettingModel = require("../model/PaymentSettingModel");
const ObjectID = mongoose.Types.ObjectId;
const FormData = require("form-data");
const Axios = require("axios");

const createInvoiceService = async (req) =>{
    try {
        let user_id=new ObjectID(req.headers.user_id);
        let cus_email=req.headers.email;

// ============Step 01: Calculate Total Payable & Vat==================================================
let matchStage={$match:{userID:user_id}}
let JoinStageProduct={$lookup:{from:"products",localField:"productID",foreignField:"_id",as:"product"}}
let unwindStage={$unwind:"$product"}
let cartProducts=await CartModel.aggregate([matchStage,JoinStageProduct,unwindStage]);

let totalAmount = 0;
cartProducts.forEach((element) => {
    let price;
    if(element['product']['discount']){
        price = parseFloat(element['product']['discountPrice'])
    }else{
        price = parseFloat(element['product']['price']) 
    }
    totalAmount += parseFloat(element['qty'])*price;
});

let vat = totalAmount* 0.05 //5% vat
let payable = totalAmount+vat
// ============Step 01: Calculate Payable and Vat==================================================


// ============Step 01: Calculate Payable and Vat==================================================


// ============Step 01: Calculate Payable and Vat==================================================


// ============Step 01: Calculate Payable and Vat==================================================


// ============Step 01: Calculate Payable and Vat==================================================


// ============Step 01: Calculate Payable and Vat==================================================


// ============Step 01: Calculate Payable and Vat==================================================

        return {status:"Success", data:payable}
    } catch (error) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}

const paymentFailService = async (req) =>{
    try {
        

        
    } catch (error) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}

const paymentCancelService = async (req) =>{
    try {
        

        
    } catch (error) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}

const paymentIPNService = async (req) =>{
    try {
        

        
    } catch (error) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}

const paymentSuccessService = async (req) =>{
    try {
        

        
    } catch (error) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}

const invoiceListService = async (req) =>{
    try {
        

        
    } catch (error) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}

const invoiceProductListService = async (req) =>{
    try {
        

        
    } catch (error) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}

module.exports={
    createInvoiceService,
    paymentCancelService,
    paymentFailService,
    paymentIPNService,
    paymentSuccessService,
    invoiceListService,
    invoiceProductListService
}