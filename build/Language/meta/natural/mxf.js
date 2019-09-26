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
        name: 'Malgbe',
        nameT: 'Malgbe',
        iso3: 'mxf',
        wiki: 'Malgbe_language',
        names: 'Goulfei,Gulfe,Gulfei,Malbe,Malgwe,Ngwalkwe,Sanbalbe,Goulfey,Kotoko-Gulfei'
    });
});
//# sourceMappingURL=mxf.js.map