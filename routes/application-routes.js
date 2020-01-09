//requiring dependencies
var db = require("../models");

//get all applications
module.exports = app => {
    app.get("/api/applications", (req, res) => {
        var query = {};
        // if (req.query.dealer_id) {
        //     query.dealerId = req.query.dealer_id;
        // }
        db.Application.findAll({
            where: query,
            include: [db.dealer, db.Quotes]
        }).then(dbApplication => {
            res.json(dbApplication);
        });
    });

    //get application by application id
    app.get("/api/applications/:id", (req,res) => {
        db.Application.findOne({

            where : {
                id : req.params.id
            }, include : [db.dealer, db.Quotes]
        }).then (dbdealer => {
            res.json(dbdealer);
        });
    });
    
    //post applications
    app.post("/api/applications", (req,res) => {

        //created object to insert passport id into dealerId field 
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
            dealerId: req.user.id, 
            watching : 0
        }).then(dbApplication => {
            res.json(dbApplication);
        });

        //allows update function for member of id
        app.put("/api/applications/:id", (req, res) => {
            db.Application.update(
                req.body, {
                where: { id: req.params.id, 
                    dealerId : req.user.id}
            }).then(dbApplication => {
                res.json(dbApplication);
            });
        });

        
        //allows only member of id to delete the form
        app.delete("/api/applications/:id", (req, res) => {
            db.Application.destroy({
                where: {
                    dealerId: req.user.id,
                    id: req.params.id
                  }
            }).then(dbApplication => {
                res.json(dbApplication)
            });
        })
    });
}