import Base = require('../interfaces');

declare module language {
  export interface Fingerprint {
    id: string;
    name: string;
    trigrams?: Object;
    dependencies?: string[];
    default?: Fingerprint;
  }
  export interface InternalLanguageProps {
    /** detect these machine languages */
    languages?: string[]; // TODO machine lang ENUM
    /** if minimum text length or detection score is not reached ... */
    fallback?: string;
    /** include meta informations for detected languages */
    inclMeta?: boolean;
    /** minimum detection score */
    min?: number;
    /** minimum distance between one and two */
    distance?: number;
    /** anything */
    meta?: any;
  }
  export interface MachineLanguageProps extends InternalLanguageProps {
    /** include highlighted syntax html markup */
    inclMarkup?: boolean;
  }
  export interface NaturalLanguageProps extends InternalLanguageProps {
    /** detect these human languages */
    languages?: string[]; // TODO human lang ENUM
    /** own fingerprint models, not recommended for now */
    models?: Fingerprint[]
  }
  export interface LanguageProps {
    /** maximum for detection results */
    count?: number;
    /** minimum length of the text to start detection */
    minLength?: number;
    /** properties for human languages */
    natural?: NaturalLanguageProps;
    /** properties for machine/code languages */
    machine?: MachineLanguageProps;
  }

  export interface LanguageResult {
    score: number,
    id: string,
    name: string,
    rank: number
  }
  export type Languages = LanguageResult[];
}

export = language;
