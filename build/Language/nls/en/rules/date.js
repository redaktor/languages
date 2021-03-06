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
    zip = { range: /(?:\b|^)(?:between|from)(.*)(?:\sand(?= ) |or\s)(.*)|(?:\b|^)(?:between|from)?(.*)(?:(?:\sto\s)|(?: ?\- ?))(.+)/i,
        multi: /(?: |^)(?:and(?= ) |or(?= ) )|(?: ?\& ?)|(?: ?, ?)(?=\d)/i,
        iso: /(?:(\d{4}|[+\-]\d{6})(?:\-)([1-9]|0[1-9]|1[0-2])(?:\-)(3[0-1]|[12][0-9]|0?[1-9])?)(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?/,
        day: { suffix: '(?:st|nd|rd|th)?(?:,\\s| of |$|\\s)',
            nr: /(3[0-1]|[12][0-9]|0?[1-9])(?:st|nd|rd|th)?(?:,\s| of |$|\s)/i,
            weekday: /(?:(sunday|monday|tuesday|wednesday|thursday|friday|saturday|sun|mon|tue|wed|thu|fri|sat,?))/i },
        month: { nr: /([1-9]|0[1-9]|1[0-2])/,
            w: /(?:(january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|jun|jul|aug|sep|sept|oct|nov|dec),?)/i },
        year: { nr: /(?:([0-9]{1,4})+)/,
            neg: /(?:\b| )[b]\s?(?:.?)\s?[c]\s?(?:.?)\s?[e]?\s?(?:.?)\s(?:([0-9]{1,4})+)|(?:([0-9]{1,4})+)(?:\b| )[b]\s?(?:.?)\s?[c]\s?(?:.?)\s?[e]?\s?(?:.?)| before| vor| v./i,
            pos: /(?:\b| )[a|c]\s?(?:.?)\s?[d|e]\s?(?:.?)\s(?:([0-9]{1,4})+)|(?:([0-9]{1,4})+)(?:\b| )[a|c]\s?(?:.?)\s?[d|e]\s?(?:.?)| anno| nach| n./i },
        short: [{ matches: /(?:(\d{4}|[+\-]\d{6})(?:\-)([1-9]|0[1-9]|1[0-2])(?:\-)(3[0-1]|[12][0-9]|0?[1-9])?)(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?/,
                parameters: { pattern: ['year', 'month', 'day'] } },
            { matches: /(?:([1-9]|0[1-9]|1[0-2])\s?(?:\-|\/)+\s?(3[0-1]|[12][0-9]|0?[1-9])\s?(?:\-|\/)+\s?(?:([0-9]{1,4})+)?)/,
                parameters: { pattern: ['month', 'day', 'year'] } },
            { matches: /(?:(3[0-1]|[12][0-9]|0?[1-9])\s?(?:\.|\/)+\s?([1-9]|0[1-9]|1[0-2])\s?(?:\.|\/)+\s?(?:([0-9]{1,4})+)?)/,
                parameters: { pattern: ['day', 'month', 'year'] } }],
        dayFirst: [{ matches: /(?:(?: |^)(?:(?:(3[0-1]|[12][0-9]|0?[1-9])(?:st|nd|rd|th)?(?:,\s| of |$|\s))?)(?:(january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|jun|jul|aug|sep|sept|oct|nov|dec),?)?(?:$| ))(?:(?:.*?)(?:([0-9]{1,4})+)?)/i,
                parameters: { pattern: ['day', 'month', 'year'] } },
            { matches: /(?:(january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|jun|jul|aug|sep|sept|oct|nov|dec),?) (?:([0-9]{1,4})+)/i,
                parameters: { pattern: ['month', 'year'] } },
            { matches: /(?: |^)(?:([0-9]{1,4})+)/i,
                parameters: { pattern: ['year'] } }],
        monthFirst: [{ matches: /(?:(?: |^)(?:(january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|jun|jul|aug|sep|sept|oct|nov|dec),?)(?:$| ))(?:(3[0-1]|[12][0-9]|0?[1-9])(?:st|nd|rd|th)?(?:,\s| of |$|\s))(?:(?:.*?)(?:([0-9]{1,4})+)?)/i,
                parameters: { pattern: ['month', 'day', 'year'] } },
            { matches: /(?:(january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|jun|jul|aug|sep|sept|oct|nov|dec),?) (?:([0-9]{1,4})+)/i,
                parameters: { pattern: ['month', 'year'] } },
            { matches: /(?: |^)(?:([0-9]{1,4})+)/i,
                parameters: { pattern: ['year'] } }],
        relative: [{ matches: /(?:(?: |^)(?:within|in)\s*(?:the\s*)?(?:(?:(?:next |upcoming |coming |following )|(last |previous |closing |past )))([0-9]+)?\s*(?:(millennium(?:s?)|millennia)|(centur(?:y|ies))|(decades?)|(years?)|(months?)|(days?)|(h\.?|hr|hrs|hours?|stunden?|heurs?)|(m(?:\.| )|min(?:ute(?:[sn]?))|mikes?)|(s(?:\.| )|se[ck]\.?(?:(?:[ou])nde?)?|\u0022|\u2033))\s*(?=(?:\W|$)))/i,
                parameters: { fn: 'gregorian', isRange: 1 } },
            { matches: /(?:(?: |^)(?:(?:next |upcoming |coming |following )|(last |previous |closing |past ))([0-9]+)?\s*(?:(millennium(?:s?)|millennia)|(centur(?:y|ies))|(decades?)|(years?)|(months?)|(days?)|(h\.?|hr|hrs|hours?|stunden?|heurs?)|(m(?:\.| )|min(?:ute(?:[sn]?))|mikes?)|(s(?:\.| )|se[ck]\.?(?:(?:[ou])nde?)?|\u0022|\u2033))\s*)/i,
                parameters: { fn: 'gregorian' } },
            { matches: /(?:(?: |^)(tomorrow|tmr)|(yester|y(?:.?)da)|((?:(?:to|2)(?:night|nite|nyt|noc))|tngt)|(morning)|(noon)|(afternoon|aftn)|(eve(?:ning?))|(night|nite|nyt|noc))?/i,
                parameters: { fn: 'dictionary' } }] };
    return zip;
});
//# sourceMappingURL=date.js.map