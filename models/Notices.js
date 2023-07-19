const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String
  },
  linkPlaceholder: {
    type: String
  },
  type:{
    type:String,
    required:true
  }
});

const Notice = mongoose.model('Notice', noticeSchema);

module.exports = Notice;
