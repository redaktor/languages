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
        name: 'Talieng',
        nameT: 'Talieng',
        iso3: 'tdf',
        wiki: 'Tariang_language',
        names: 'Caliang,Calieng,Kaseng,Kasseng,Koseng,Kraseng,Taliang,Tariang,Tarieng,Triang,Trieng'
    });
});
//# sourceMappingURL=tdf.js.map