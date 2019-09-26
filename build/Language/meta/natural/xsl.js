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
        name: 'Slavey, South',
        nameT: 'ᑌᓀᒐ',
        iso3: 'xsl',
        wiki: 'Slavey_language',
        OT: 'SSL',
        names: 'Acha’otinne,Deh Gáh Ghotie Zhatie,Dene,Dené,Dene Tha’,Denetha,Mackenzian ("Slave","Slavi")'
    });
});
//# sourceMappingURL=xsl.js.map