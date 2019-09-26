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
        name: 'Siraya',
        nameT: 'Siraya',
        iso3: 'fos',
        wiki: 'Siraya_language',
        names: 'Baksa,Formosan,Sideia,Sideis,Sideisch,Siraia,Siraiya ("Pepohoan","Pepo-Hwan")'
    });
});
//# sourceMappingURL=fos.js.map