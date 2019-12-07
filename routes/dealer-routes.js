var db = require("../models");

module.exports = app => {

    app.get("/api/contact", (req,res) => {
        db.dealer.findAll({
            include : [db.Application]
        }).then (dbdealer => {
            res.json(dbdealer);
        });
    });

    app.get("/api/contact/:id", (req,res) => {
        db.dealer.findOne({
            where : {
                id : req.params.id
            }, include : [db.Application]
        }).then (dbdealer => {
            res.json(dbdealer);
        });
    });

    app.post("/api/contact", (req, res) => {
        console.log(req.body)
        db.dealer.create(req.body).then(dbdealer => {
            console.log(dbdealer)
            res.json(dbdealer);
        });
    });

    app.put("/api/contact/:id", (req, res)=> {
        db.dealer.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(dbdealer => {
            res.json(dbdealer);
        });
    });

    app.delete("/api/contact/:id", (req,res) => {
        db.dealer.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbdealer => {
            res.json(dbdealer)
        });
    });

};