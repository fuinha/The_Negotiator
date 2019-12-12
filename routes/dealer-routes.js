var db = require("../models");
var express = require("express")
// var router = require(express.Router())
module.exports = router => {

    router.get("/api/contact", (req,res) => {
        db.dealer.findAll({
            include : [db.Application, db.User]
        }).then (dbdealer => {
            res.json(dbdealer);
        });
    });

    router.get("/api/contact/:id", (req,res) => {
        console.log(req.user)
        db.dealer.findOne({
            where : {
                id : req.user.id
            }, include : [db.Application, db.User]
        }).then (dbdealer => {
            res.json(dbdealer);
        });
    });

    router.post("/api/contact", (req, res) => {
        console.log(req.body)
        db.dealer.create(req.body).then(dbdealer => {
            console.log(dbdealer)
            res.json(dbdealer);
        });
    });

    router.put("/api/contact/:id", (req, res)=> {
        db.dealer.update(req.body, {
            where: {
                id: req.user.id
            }
        }).then(dbdealer => {
            res.json(dbdealer);
        });
    });

    router.delete("/api/contact/:id", (req,res) => {
        db.dealer.destroy({
            where: {
                id: req.user.id
            }
        }).then(dbdealer => {
            res.json(dbdealer)
        });
    });

};