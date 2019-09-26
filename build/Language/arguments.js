(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    const defaults = {
        detect: [
            'cmn', 'es', 'en', 'hi', 'ar', 'pt', 'bn', 'ru', 'ja', 'pa',
            'de', 'jv', 'id', 'te', 'vi', 'ko', 'fr', 'mr', 'ta', 'ur',
            'tr', 'it', 'th', 'gu', 'nan', 'fa', 'pl', 'uk', 'ro', 'nl',
            'hu', 'el', 'sv', 'da', 'fi', 'ca'
        ],
        fallback: 'en',
        count: 5,
        minLength: 25,
        minScore: 0.8,
        distance: 0.3
    };
    return defaults;
});
//# sourceMappingURL=arguments.js.map