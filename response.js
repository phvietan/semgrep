/**
 * A Class that wrap response of Express
 */
class ExpressResponse {
  constructor(res) {
    this.res = res;
  }

  redirect(location) {
    this.res.redirect(location);
  }
}

module.exports = ExpressResponse;
