const mongoose = require("mongoose");

const Banner_pageSchema = {
  name: {
    type: String,
  },
  description: {
    type: String,
  },
};

module.exports = mongoose.model("Banner_Page", Home_pageSchema);
