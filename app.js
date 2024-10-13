(function () {
    "use strict";
    const createError = require("http-errors");
    const express = require("express");
    const path = require("path");

    const app = express();

    app.use(express.static(path.join(__dirname, "public")));

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        // next(createError(404));
        res.sendFile(path.resolve(__dirname, "./public/404.html"));
    });

    module.exports = app;
})();
