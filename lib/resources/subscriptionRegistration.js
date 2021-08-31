"use strict";
/**
 * DOCS: https://razorpay.com/docs/api/recurring-payments/upi/authorization-transaction/#121-create-a-registration-link
 */

module.exports = function subscriptionRegistrationApi(api) {
  const BASE_URL = "/subscription_registration";
  return {
    authLinks(params = {}, callback) {
      /*
       * Creates Registration Link for Recurring Payments.
       *
       * @param {Object} params
       * @param {Function} callback
       *
       * @return {Promise}
       */
      let url = `${BASE_URL}/auth_links`,
        { notes, ...rest } = params,
        data = Object.assign(params);

      return api.post(
        {
          url,
          data,
        },
        callback,
        true
      );
    },
  };
};
