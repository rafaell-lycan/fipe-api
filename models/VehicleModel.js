const db = require('../db/mongoose');
const VehicleSchema = require('../schemas/VehicleSchema');

module.exports = db.model('Vehicle', VehicleSchema);