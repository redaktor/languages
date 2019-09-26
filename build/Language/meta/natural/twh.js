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
        name: 'Tai Dón',
        nameT: 'Tai Dón',
        iso3: 'twh',
        wiki: 'Tai_D%C3%B3n_language',
        names: 'Bai Dai,Tai Jinping,White Tai,Tai Blanc,Tai Kao,Tai Lai,Thái Tráng,Táy Khao'
    });
});
//# sourceMappingURL=twh.js.map