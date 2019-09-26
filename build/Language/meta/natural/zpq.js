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
        name: 'Zapotec, Zoogocho',
        nameT: 'Zapoteco de San Bartolomé Zoogocho',
        iso3: 'zpq',
        wiki: 'Zoogocho_Zapotec',
        names: 'Zapoteco de San Bartolomé Zoogocho'
    });
});
//# sourceMappingURL=zpq.js.map