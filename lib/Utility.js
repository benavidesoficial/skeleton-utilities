const _ = require('lodash');
class Utility {
  constructor() {}
  static parseToJSON() {
    if (!_.isString(json)) return null;
    try {
      return JSON.parse(json);
    } catch (e) {
      return e;
    }
  }
}

module.exports = Utility;