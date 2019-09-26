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
        name: 'Nagumi',
        nameT: 'Nagumi',
        iso3: 'ngv',
        wiki: 'Nagumi_language',
        names: 'Bama,Gong,Mbama,Ngong,Puuri'
    });
});
//# sourceMappingURL=ngv.js.map