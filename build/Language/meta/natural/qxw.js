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
        name: 'Quechua, Jauja Wanca',
        nameT: 'Quechua, Jauja Wanca',
        iso3: 'qxw',
        wiki: 'Wanka_Quechua',
        names: 'Huanca Jauja Quechua,Shausha Wanka Quechua'
    });
});
//# sourceMappingURL=qxw.js.map