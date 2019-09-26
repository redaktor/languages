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
        name: 'Swati',
        nameT: 'SiSwati',
        iso1: 'ss',
        iso2: 'ssw',
        iso3: 'ssw',
        wiki: 'Swazi_language',
        OT: 'SWZ',
        names: 'Sephuthi,Siswati,Siswazi,Swazi,Tekela,Tekeza,Isiswazi,Ngwane,Phuthi,Thithiza,Yeyeza',
        hasDetect: true
    });
});
//# sourceMappingURL=ss.js.map