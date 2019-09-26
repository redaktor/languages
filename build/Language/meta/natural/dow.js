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
        name: 'Doyayo',
        nameT: 'Doyayo',
        iso3: 'dow',
        wiki: 'Dowayo_language',
        names: 'Doayo,Donyanyo,Donyayo,Doohyaayo,Doowaayo,Dooyaangyo,Dooyaayo,Dooyayo,Dowayayo,Dowayo,Doyaayo,Doyau,Nomai,Tunga,Tungbo,Tuuno ("Namchi","Namci","Namshi")'
    });
});
//# sourceMappingURL=dow.js.map