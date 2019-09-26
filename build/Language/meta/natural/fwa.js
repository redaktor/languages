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
        name: 'Fwâi',
        nameT: 'Fwâi',
        iso3: 'fwa',
        wiki: 'Fw%C3%A2i_language',
        names: 'Poai,Yehen,Yengen'
    });
});
//# sourceMappingURL=fwa.js.map