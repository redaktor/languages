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
        name: 'Tohono O’odham',
        nameT: 'O’odham',
        iso3: 'ood',
        wiki: 'O%27odham_language',
        names: 'Nebome,Nevome,O’odham,O’othham,Papago-Pima,Tohono O’otham,Upper Piman'
    });
});
//# sourceMappingURL=ood.js.map