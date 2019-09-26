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
        name: 'Pokomchi, Eastern ',
        nameT: 'Pokomchi, Eastern ',
        iso3: 'poh',
        wiki: 'Poqomchi%27_language',
        names: 'Pocomchí,Poconchí,Pokomchí,Pokonchí,Tactic Pokomchí',
        hasDetect: true
    });
});
//# sourceMappingURL=poh.js.map