const assert = require("node:assert/strict");
const { test } = require("node:test");
const path = require("node:path");
const source = require(path.join(__dirname, "../src/strings/en-us.json"));
const british = require(path.join(__dirname, "../src/strings/en-gb.json"));

test("British English subtitle extraction advice matches the corrected source", () => {
    assert.equal(
        british.AllowOnTheFlySubtitleExtractionHelp,
        source.AllowOnTheFlySubtitleExtractionHelp
    );
});
