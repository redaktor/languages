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
        name: 'Anong',
        nameT: 'Anong',
        iso3: 'nun',
        wiki: 'Nung_language_(Sino-Tibetan)',
        names: 'Anoong,Anu,Anung,Fuch’ye,Khanung,Khupang,Kwingsang,Kwinp’ang,Lu,Lutze,Lutzu,Nu,Nung,Fuchve,Khingpang,Naw,Nawpha'
    });
});
//# sourceMappingURL=nun.js.map