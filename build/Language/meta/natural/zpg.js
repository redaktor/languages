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
    var meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Zapotec, Guevea De Humboldt',
        nameT: 'Zapotec, Guevea De Humboldt',
        iso3: 'zpg',
        wiki: 'Guevea_Zapotec',
        names: 'Northern Isthmus Zapotec,Zapoteco de Guevea de Humboldt'
    });
});
//# sourceMappingURL=zpg.js.map