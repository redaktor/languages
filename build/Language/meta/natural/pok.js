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
        name: 'Pokangá',
        nameT: 'Pokangá',
        iso3: 'pok',
        wiki: 'Waimaj%C3%A3_language',
        names: 'Bará,Bara Sona,Barasano,Bará-Tukano,Pakang,Pokangá-Tapuya,Waipínõmakã'
    });
});
//# sourceMappingURL=pok.js.map