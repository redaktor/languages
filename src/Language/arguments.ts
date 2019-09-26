/**
 * predefined default OPTIONS <br>
 * for mixin in modules <br>
 * WIP <br>
 * @module src/_options
 */
// TODO - jsDOC
import I = require('./interfaces');
const defaults: I.Options = {
	// defaults to 30 most spoken and a few selected here ...
	detect: [
	  'cmn', 'es', 'en', 'hi', 'ar', 'pt', 'bn', 'ru', 'ja', 'pa',
		'de', 'jv', 'id', 'te', 'vi', 'ko', 'fr', 'mr', 'ta', 'ur',
		'tr', 'it', 'th', 'gu', 'nan', 'fa', 'pl', 'uk', 'ro', 'nl',
		'hu', 'el', 'sv', 'da', 'fi', 'ca'
	],
	fallback: 'en',
	count: 5,
	// recommended:
	minLength: 25, 	// minimum string.length for detection
	minScore: 0.8, 	// minimum detection score
	distance: 0.3 	// minimum distance between one and two
};
export = defaults;
