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
        name: 'Mandjak',
        nameT: 'Mandjak',
        iso3: 'mfv',
        wiki: 'Mandjak_language',
        names: 'Kanyop,Mandjaque,Mandyak,Manjaca,Manjack,Manjaco,Manjacu,Manjiak,Ndyak,Manjaku,Manjanku,Mendyako,Majak,Manjaaku,Manjak,Ndjak'
    });
});
//# sourceMappingURL=mfv.js.map