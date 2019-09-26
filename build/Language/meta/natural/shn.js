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
        name: 'Shan',
        nameT: 'Shan',
        iso2: 'shn',
        iso3: 'shn',
        wiki: 'Shan_language',
        OT: 'SHN',
        names: 'Dehong,Burmese Shan,Great Thai,Sam,Sha,Shan Bama,Shan Gyi,Tai Long,Tai Luang,Tai Shan,Tai Yai,Tai-Lon,Thai Yai,Tai Yay,Thai Yay ("Ngeo","Ngiao","Ngiaw","Ngio","Ngiow")',
        hasDetect: true
    });
});
//# sourceMappingURL=shn.js.map