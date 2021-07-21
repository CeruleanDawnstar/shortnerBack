

const link = require('../models/urlLinks')


exports.findOne = (req, res) => {
    link.findById(req.params.qrCode, (err, data) => {
      if (err) {
        if (err.kind === "not found") {
          res.status(404).send({
            message: `Not found  ${req.params.qrCode}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving qrCode : " + req.params.qrCode
          });
        }
      } else res.send(data);
    });
  };


