//requiring dependencies
var db = require("../models");

//get all quotes
module.exports = app => {
    app.get("/api/quotes", (req, res) => {
        var query = {};
        db.Quotes.findAll({
            where: query,
            include: [db.dealer, db.Application, db.Client]
        }).then(dbQuotes => {
            res.json(dbQuotes);
        });
    });

    //get quotes by quote id
    app.get("/api/quotes/:id", (req, res) => {
        db.Quotes.findOne({
            where: {
                id: req.user.id
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
                    UserId: req.user.id,
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
                id: req.user.id,
                ApplicationId: req.params.clientsId
            }, include: [db.dealer, db.Application, db.Client]
        }).then(dbQuotes => {
            res.json(dbQuotes);
        });
    });

    //post quotes
    app.post("/api/clients", (req, res) => {
        //created object for quote
        db.Clients.create(req.body).then(dbApplication => {
            res.json(dbQuotes);
        });

        //allows update function for member of id
        app.put("/api/clients/:id", (req, res) => {
            db.Clients.update({
                where: {
                    UserId: req.user.id,
                    id: req.params.id
                }
            })
        });

        //allows only member of id to delete the quote
        app.delete("/api/clients/:id", (req, res) => {
            db.Clients.destroy({
                where: {
                    UserId: req.user.id,
                    id: req.params.id
                }
            }).then(dbQuotes => {
                res.json(dbQuotes)
            });
        })
    });
}