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
        name: 'Teso',
        nameT: 'Teso',
        iso3: 'teo',
        wiki: 'Teso_language',
        names: 'Ateso,Bakedi,Bakidi,Elgumi,Etossio,Ikumama,Iteso,Wamia'
    });
});
//# sourceMappingURL=teo.js.map