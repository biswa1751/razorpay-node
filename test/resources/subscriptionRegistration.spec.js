"use strict";

const chai = require("chai");
const { assert } = chai;
const rzpInstance = require("../razorpay");
const mocker = require("../mocker");
const equal = require("deep-equal");

describe("SUBSCRIPTION_REGISTRATION", () => {
  describe("Create subscription registration link", () => {
    it("registration link create request", (done) => {
      let params = {
        param1: "something",
        param2: "something else",
        "notes[something]": "something else",
      };
      mocker.mock({
        url: `/subscription_registration/auth_links`,
        method: "POST",
        ignoreParseBody: true,
      });

      rzpInstance.subscriptionRegistration
        .authLinks(params)
        .then((response) => {
          assert.equal(
            response.__JUST_FOR_TESTS__.url,
            "/v1/subscription_registration/auth_links",
            "Create request url formed"
          );

          assert.ok(
            equal(response.__JUST_FOR_TESTS__.requestBody, {
              param1: "something",
              param2: "something else",
              "notes[something]": "something else",
            }),
            "All params are passed in request body"
          );
          done();
        });
    });
  });
});
