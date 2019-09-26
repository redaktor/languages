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
        name: 'Cayubaba',
        nameT: 'Cayubaba',
        iso3: 'cyb',
        wiki: 'Cayuvava_language',
        names: 'Cayuvava,Cayuwaba,Kayuvava'
    });
});
//# sourceMappingURL=cyb.js.map