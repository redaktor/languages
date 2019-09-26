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
        name: 'Evenki',
        nameT: 'Эвэды̄ турэ̄н',
        iso3: 'evn',
        wiki: 'Evenki_language',
        OT: 'EVK',
        names: 'Ewenk,Ewenke,Ewenki,Khamnigan,Owenke,Solon,Solong,Sulong,Suolun,Tungus,Avanki,Avankil,Chapogir',
        hasDetect: true
    });
});
//# sourceMappingURL=evn.js.map