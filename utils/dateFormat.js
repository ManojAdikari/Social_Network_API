const moment = require("moment");

const dateFormat = (timestamp) => {
  return moment(timestamp).format("DD/MM/YYYY [at] hh:mm a");
};

module.exports = dateFormat;
