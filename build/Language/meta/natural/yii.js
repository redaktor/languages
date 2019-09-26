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
        name: 'Yidiny',
        nameT: 'Yidiny',
        iso3: 'yii',
        wiki: 'Yidiny_language',
        names: 'Boolboora,Deba,Eneby,Gerrah,Gijow,Gillah,Guwamal,Idin Idindji,Idinji,Idin-Wudjar,Indindji,Jidindji,Kitba,Maimbie,Mungera Ohalo,Pegullo-Bura,Warra-Warra,Warryboora,Woggil,Yetinji,Yiddinji,Yidin,Yidindji,Yidini,Yitintyi,Yukkaburra'
    });
});
//# sourceMappingURL=yii.js.map