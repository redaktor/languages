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
        name: 'Wasco-Wishram',
        nameT: 'Wasco-Wishram',
        iso3: 'wac',
        wiki: 'Upper_Chinook_language',
        names: 'Columbia Chinook,Kiksht,Upper Chinook,Wasco,Wishram'
    });
});
//# sourceMappingURL=wac.js.map