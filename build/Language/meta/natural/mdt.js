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
        name: 'Mbere',
        nameT: 'Mbere',
        iso3: 'mdt',
        wiki: 'Mbere_language',
        names: 'Limbede,Mbédé,Mbété,Ambede,Lembaamba,Limbere,Mbaama,Obamba'
    });
});
//# sourceMappingURL=mdt.js.map