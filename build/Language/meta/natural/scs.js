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
        name: 'Slavey, North',
        nameT: 'Sahtú Got’ine',
        iso3: 'scs',
        wiki: 'Slavey_language',
        OT: 'SLA',
        names: 'Dene,Dené,Mackenzian,Satúotine Yatí ("Slave","Slavi")'
    });
});
//# sourceMappingURL=scs.js.map