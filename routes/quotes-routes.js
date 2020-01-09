//requiring dependencies
var db = require("../models");

//get all quotes
module.exports = app => {
    app.get("/api/quotes", (req, res) => {
        var query = {};
        db.Quotes.findAll({
            where: {
                id: req.user.id
            }
        }).then(dbQuotes => {
            res.json(dbQuotes);
        });
    });

    //get quotes by quote id
    app.get("/api/quotes/:id", (req, res) => {
        db.Quotes.findOne({
            where: {
                dealerId: req.user.id,
                ApplicationId: req.body.Application.id,
                id: req.params.id
            }, include: [db.dealer, db.Application, db.Client]
        }).then(dbQuotes => {
            res.json(dbQuotes);
        });
    });

    //post quotes
    app.post("/api/quotes", (req, res) => {
        //created object for quote
        db.Application.create(req.body).then(dbApplication => {
            res.json(dbQuotes);
        });

        //allows update function for member of id
        app.put("/api/quotes/:id", (req, res) => {
            db.Quotes.update({
                where: {
                    dealerId: req.user.id,
                    id: req.params.id
                }
            })
        });

        //allows only member of id to delete the quote
        app.delete("/api/quotes/:id", (req, res) => {
            db.Application.destroy({
                where: {
                    UserId: req.user.id,
                    id: req.params.id
                }
            }).then(dbQuotes => {
                res.json(dbQuotes)
            });
        })
    });

    //get quotes by quote id
    app.get("/api/clients/:id", (req, res) => {
        db.Clients.findOne({
            where: {
                dealerId: req.user.id,
                ApplicationId: req.body.ApplicationId

            }, include: [db.dealer, db.Application, db.Client]
        }).then(dbQuotes => {
            res.json(dbQuotes);
        });
    });

    //post quotes
    app.post("/api/clients", (req, res) => {
        //created object for quote
        db.Clients.create(req.body, {
            where: {
                dealerId : req.user.id
            }
        }).then(dbApplication => {
            res.json(dbQuotes);
        });

        //allows update function for member of id
        app.put("/api/clients/:id", (req, res) => {
            db.Clients.update({
                where: {
                    dealerId: req.user.id,
                    id: req.params.id
                }
            })
        });

        //allows only member of id to delete the quote
        app.delete("/api/clients/:id", (req, res) => {
            db.Clients.destroy({
                where: {
                    dealerId: req.user.id,
                    id: req.params.id
                }
            }).then(dbQuotes => {
                res.json(dbQuotes)
            });
        })
    });
}