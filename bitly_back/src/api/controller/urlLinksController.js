const urlLink = require('../models/urlLinks');

exports.create = (req, res) => {

    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }

    const newLinks = new urlLink({
        longUrl: req.body.longUrl,
        shortUrl: req.body.shortUrl,
        urlCode: req.body.shortUrl,
        qrCode: req.body.qrCode,
        title : req.body.title,
        idUser : req.body.idUser,
        date : req.body.dateLink
    });

    urlLink.create(newLinks, (err, data) => {

        if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });

}