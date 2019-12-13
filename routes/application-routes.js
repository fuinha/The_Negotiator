var db = require("../models");
var express = require("express");
// var app = express.Router();
module.exports = app => {
    app.get("/api/applications", (req, res) => {
        var query = {};
        // if (req.query.dealer_id) {
        //     query.dealerId = req.query.dealer_id;
        // }
        db.Application.findAll({
            where: query,
            include: [db.dealer]
        }).then(dbApplication => {
            res.json(dbApplication);
        });
    });

    app.get("/api/applications/:id", (req,res) => {
        console.log("You are looking at indiv. app.")
        console.log(req.user)
        db.Application.findOne({

            where : {
                id : req.params.id
            }, include : [db.dealer]
        }).then (dbdealer => {
            res.json(dbdealer);
        });
    });
    
    app.post("/api/applications", (req,res) => {
        console.log("You are posting app")
        console.log(req.user)
        console.log(req.body)
        db.Application.create({
            additional_addresses: req.body.additional_addresses,
            businessOpen_years: req.body.businessOpen_years,
            business_nature: req.body.business_nature,  
            dob_employees: req.body.dob_employees,
            drivers_license: req.body.drivers_license,
            employee_title: req.body.employee_title, 
            furnished: req.body.furnished,
            insurance_type: req.body.insurance_type,
            lot_protection: req.body.lot_protection,
            lot_worth: req.body.lot_worth,
            miles_driven: req.body.miles_driven,
            num_employees: req.body.num_employees,
            num_lotCars: req.body.num_lotCars,
            num_plates: req.body.num_plates,
            previous_insuranceClaims: req.body.previous_insuranceClaims,
            previous_insuranceName: req.body.previous_insuranceName, 
            recent_accidents: req.body.recent_accidents,
            years_inBusiness: req.body.years_inBusiness,
            dealerId: req.user.id
        }).then(dbApplication => {
            res.json(dbApplication);
        });

        app.put("/api/applications/:id", (req, res) => {
            db.Application.update(
                req.body, {
                where: { id: req.body.id }
            }).then(dbApplication => {
                res.json(dbApplication);
            });
        });
        app.delete("/api/applications/:id", (req, res) => {
            db.Application.destroy({
                where: {
                    id: req.params.id
                }
            }).then(dbApplication => {
                res.json(dbApplication)
            });
        })
    });
}