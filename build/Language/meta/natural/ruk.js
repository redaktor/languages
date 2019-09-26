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
        name: 'Che',
        nameT: 'Che',
        iso3: 'ruk',
        wiki: 'Ce_language',
        names: 'Bace,Bache,Che,Inchazi,Kuche,Rukuba,Sale'
    });
});
//# sourceMappingURL=ruk.js.map