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
        name: 'Bumthangkha',
        nameT: 'Bumthangkha',
        iso3: 'kjz',
        wiki: 'Bumthang_language',
        names: 'Bhumtam,Bumtang,Bumtangkha,Bumtanp,Bumthang,Bumthapkha,Kebumtamp'
    });
});
//# sourceMappingURL=kjz.js.map