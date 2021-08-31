"use strict";
/**
 * DOCS: https://razorpay.com/docs/api/recurring-payments/upi/authorization-transaction/#121-create-a-registration-link
 */

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

module.exports = function subscriptionRegistrationApi(api) {
  var BASE_URL = "/subscription_registration";
  return {
    authLinks: function authLinks() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments[1];

      /*
       * Creates Registration Link for Recurring Payments.
       *
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */
      var url = BASE_URL + "/auth_links",
          notes = params.notes,
          rest = _objectWithoutProperties(params, ["notes"]),
          data = Object.assign(params);


      return api.post({
        url: url,
        data: data
      }, callback, true);
    }
  };
};