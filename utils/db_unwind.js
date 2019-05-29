var request = require("request-promise");
var _ = require("lodash");
var url = "mongodb://localhost:27017/exhalebrands";
var MongoClient = require("mongodb").MongoClient;
var $ = require("mongo-dot-notation");

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("loyalty");
  dbo
    .collection("products")
    .aggregate([
      {
        $lookup: /** * from - The target collection. * localField - The local join field. * foreignField - The target join field. * as - The name for the results. */ {
          from: "brands",
          localField: "brand_id",
          foreignField: "id",
          as: "brand"
        }
      },
      {
        $lookup: /** * from - The target collection. * localField - The local join field. * foreignField - The target join field. * as - The name for the results. */ {
          from: "strains",
          localField: "strain_id",
          foreignField: "id",
          as: "strain"
        }
      }
    ])
    .toArray(function(err, docs) {
      _.forEach(docs, function(d) {
        if (d.product_type_id === "e6c74e3f-96f7-4288-b773-9b033b8c3e1f") {
          d.product_type = "flower";
        }
        if (d.product_type_id === "5330c6ce-1ca0-4dcb-a150-54c5d4750f1c") {
          d.product_type = "edibles";
        }
        if (d.product_type_id === "aa14b86f-fa9a-47ea-8de4-d214471dee53") {
          d.product_type = "concentrates";
        }
        if (d.product_type_id === "ceb5a8fa-da28-4d5f-99ef-01bbe7385db0") {
          d.product_type = "topicals";
        }
        if (d.product_type_id === "6f3b33cd-1d7d-4972-ba85-fc6e0b3c67df") {
          d.product_type = "merchandise";
        }
        if (d.product_type_id === "609f4ace-4629-4d72-bdb6-2d8563b7b67") {
          d.product_type = "prerolls";
        }
        if (d.product_type_id === "485eb80e-98fd-4d65-b356-8a5fcec8fbd") {
          d.product_type = "display";
        }
        if (d.product_type_id === "37f1b2ca-2c4f-4ad9-b3aa-ef1a9f273ad1") {
          d.product_type = "employeereview";
        }
        if (d.product_type_id === "ad8eaa3f-ae11-44ed-896b-7f947277974d") {
          d.product_type = "cbdedible";
        }
        if (d.product_type_id === "f00856b1-c6b5-42fc-99ec-7fb955e00e93") {
          d.product_type = "cbdtopical";
        }
        if (d.product_type_id === "ed06dc90-e73d-4c5b-ba84-6254a1d06745") {
          d.product_type = "cbdconcentrate";
        }
        if (d.brand.length) {
          d.brandName = d.brand[0].name;
        }
        if (d.strain.length) {
          d.strainName = d.strain[0].name;
        }
        if (d.weight) {
          if (d.weight.unit === 1) {
            d.weightParsed = `${d.weight.value}oz`;
          }
          if (d.weight.unit === 0) {
            d.weightParsed = `${d.weight.value}g`;
          }
        }
        var updateObj = {
          strainName: d.strainName,
          brandName: d.brandName,
          ...d
        };
        var updateObj = $.flatten(updateObj);
        dbo
          .collection("products")
          .updateOne({ _id: d._id }, updateObj, { upsert: true }, function(
            err,
            res
          ) {
            if (err) throw err;
            return;
          });
      });
      db.close();
    });
});
