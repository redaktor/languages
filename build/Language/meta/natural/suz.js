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
        name: 'Sunwar',
        nameT: 'Sunwar',
        iso3: 'suz',
        wiki: 'Sunwar_language',
        names: 'Bhujuwar,Kiranti-Kõits Lo,Kirati-Koits,Koits Lo,Mukhiya,Pirthwar,Sunuwar,Sunwari'
    });
});
//# sourceMappingURL=suz.js.map