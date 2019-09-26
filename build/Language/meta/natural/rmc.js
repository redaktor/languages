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
        name: 'Romani, Carpathian',
        nameT: 'Romani, Carpathian',
        iso3: 'rmc',
        wiki: 'Carpathian_Romani',
        names: 'Bashaldo,Hungarian-Slovak Romani,Karpacki Roma,Romungro,Romanes,Sárvika Romá,Ungrike Romá'
    });
});
//# sourceMappingURL=rmc.js.map