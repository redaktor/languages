(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../meta"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Dimbong',
        nameT: 'Dimbong',
        iso3: 'dii',
        wiki: 'Kaalong_language',
        names: 'Bape,Bumbong,Kaalong,Kalong,Lakaalong,Lambong,Mbong,Palong'
    });
});
//# sourceMappingURL=dii.js.map