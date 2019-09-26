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
        name: 'Izere',
        nameT: 'Izere',
        iso3: 'izr',
        wiki: 'Izere_language',
        names: 'Afizare,Afizarek,Afizere,Afudelek,Afusare,Feserek,Fezere,Fizere,Hill Jarawa,Izarek,Izer,Jarawa,Jarawan Dutse,Jari,Jos-Zarazon',
        hasDetect: true
    });
});
//# sourceMappingURL=izr.js.map