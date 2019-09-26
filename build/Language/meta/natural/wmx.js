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
        name: 'Womo',
        nameT: 'Womo',
        iso3: 'wmx',
        wiki: 'Womo_language',
        names: 'Agbane,Agbanekundi,Akbana,Gaikundi,Soskundi'
    });
});
//# sourceMappingURL=wmx.js.map