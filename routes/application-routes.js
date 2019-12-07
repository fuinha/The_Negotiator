var db = require("../models");

module.exports = app => {
    app.get("/api/applications", (req, res) => {
        var query = {};
        if (req.query.dealer_id) {
            query.dealerId = req.query.dealer_id;
        }
        db.Application.findAll({
            where: query,
            include: [db.dealer]
        }).then(dbApplication => {
            res.json(dbApplication);
        });
    });

    app.get("/api/applications/:id", (req, res) => {
        db.Application.findOne({
            where: {
                id: req.params.id
            },
            include: [db.dealer]
        }).then(dbApplication => {
            res.json(dbApplication)
        })
    })

    app.post("/api/applications", (req, res) => {
        db.Application.create(req.body, {
            dealerId: req.body.dealer_id
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