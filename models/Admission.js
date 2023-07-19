const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
  programme: [String],
  reservations: [String],
  basisOfSelection: [String],
  counsellingProcess: [String],
  financialAssistance: [String],
  type:{
    type:String,
    required:[true]
  }
});

const Admission = mongoose.model('admission', admissionSchema);

module.exports = Admission;
