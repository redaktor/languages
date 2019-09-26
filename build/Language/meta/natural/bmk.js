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
        name: 'Ghayavi',
        nameT: 'Ghayavi',
        iso3: 'bmk',
        wiki: 'Ghayavi_language',
        names: 'Boanai,Boanaki,Boianaki,Boinaki,Galavi'
    });
});
//# sourceMappingURL=bmk.js.map