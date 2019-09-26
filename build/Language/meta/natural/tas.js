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
        name: 'Tay Boi',
        nameT: 'Tay Boi',
        iso3: 'tas',
        wiki: 'T%C3%A2y_B%E1%BB%93i_Pidgin_French',
        names: 'Annamite French,Tay Boy,Vietnamese Pidgin French'
    });
});
//# sourceMappingURL=tas.js.map