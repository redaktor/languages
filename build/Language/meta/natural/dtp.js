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
        name: 'Dusun, Kadazan',
        nameT: 'Dusun, Kadazan',
        iso3: 'dtp',
        wiki: 'Kadazan_Dusun_language',
        names: 'Central Dusun,Central Kadazan,Dusan,Dusum,Dusun,Dusur,Idaan,Kadasan,Kadayan,Kadazandusun,Kedayan'
    });
});
//# sourceMappingURL=dtp.js.map