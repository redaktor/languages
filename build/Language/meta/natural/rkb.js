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
        name: 'Rikbaktsa',
        nameT: 'Rikbaktsa',
        iso3: 'rkb',
        wiki: 'Rikbaktsa_language',
        names: 'Aripaktsá,Canoeiro,Erigbaagtsá,Erigpactsá,Erigpatsá,Erikbatsá,Erikpatsá,Rikpakcá,Rikpaktsá',
        hasDetect: true
    });
});
//# sourceMappingURL=rkb.js.map