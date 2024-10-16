(function () {
    "use strict";
    const createError = require("http-errors");
    const express = require("express");
    const path = require("path");

    const app = express();

    app.use(express.static(path.join(__dirname, "public")));

    app.use(function (req, res, next) {
        res.status(404).sendFile(path.resolve(__dirname, "./public/404.html"));
    });

    module.exports = app;
})();
