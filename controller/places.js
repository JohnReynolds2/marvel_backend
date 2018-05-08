var db = require('../models');
var Place = db.place;

function placeIndex(req, res) {
  db.Place.find({}, function(err, places) {
    if (err) res.send(err);
    else res.json(places);
  });
}

function placeIndexID(req, res) {
  db.Place.findOne({place_id: req.params.place_id}, function(err, placeID) {
    if (err) res.send(err);
    else res.json(placeID);
  });
}

function placeCreate(req, res) {
  
}

function placeShow(req, res) {

}

function placeUpdate(req, res) {

}

function placeDestroy(req, res) {

}

module.exports.placeIndex = placeIndex;
module.exports.placeIndexID = placeIndexID;
module.exports.placeCreate = placeCreate;
module.exports.placeShow = placeShow;
module.exports.placeUpdate = placeUpdate;
module.exports.placeDestroy = placeDestroy;