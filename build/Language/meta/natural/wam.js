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
        name: 'Wampanoag',
        nameT: 'Wampanoag',
        iso3: 'wam',
        wiki: 'Massachusett_language',
        names: 'Massachusett,Massachusetts,Natick,Wôpanâak'
    });
});
//# sourceMappingURL=wam.js.map