const Flutterwave = require("flutterwave-node-v3");

const wave = new Flutterwave(
  "FLWPUBK_TEST-a37714d3367dce160da8cddcaa975d0b-X", //public key
  "FLWSECK_TEST-65a7cb663a5b985fb47c71fda5234e32-X" //secret key
);

module.exports = wave;
