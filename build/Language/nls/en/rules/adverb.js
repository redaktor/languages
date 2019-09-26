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
    zip = { which: { superlative: { matches: /..est$/, tag: 'RBS' },
            comparative: { matches: /..er$/, tag: 'RBR' } },
        adjective: { to: [[/bly$/i, 'ble'],
                [/gically$/i, 'gical'],
                [/([rsdh])ically$/i, '$1ical'],
                [/ically$/i, 'ic'],
                [/uly$/i, 'ue'],
                [/ily$/i, 'y'],
                [/(.{3})ly$/i, '$1']] } };
    return zip;
});
//# sourceMappingURL=adverb.js.map