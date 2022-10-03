import { Serializable } from "../serialization/Serializable";
import { Aggregate } from "./base/typing";
import { CURRENCY, LanguageCodes } from "./i18n";

export type SVCSTATUS = "AVAIL" | "PEND" | "ACTIVE";

export type SEVERITY = "INFO" | "WARN" | "ERROR";

interface ISTATUS {
  code: number;
  severity: SEVERITY;
  message?: string;
}

/**
 * OFX section 3.1.5
 */
export class STATUS extends Aggregate<ISTATUS> implements ISTATUS {
  @Serializable
  code!: number;
  @Serializable
  severity!: SEVERITY;
  @Serializable
  message?: string | undefined;
}

export type BALTYPE = "DOLLAR" | "PERCENT" | "NUMBER";

interface IBAL {
  name: string;
  desc: string;
  baltype: BALTYPE;
  value: number;
  dtasof?: Date;
  currency: CURRENCY;
}

/**
 * OFX section 3.1.4
 */
export class BAL extends Aggregate<IBAL> implements IBAL {
  @Serializable
  name!: string;
  @Serializable
  desc!: string;
  @Serializable
  baltype!: BALTYPE;
  @Serializable
  value!: number;
  @Serializable
  dtasof?: Date | undefined;
  @Serializable
  currency!: CURRENCY;
}

interface IOFXELEMENT {
  tagname: string;
  name?: string;
  tagtype?: string;
  tagvalue: string;
}

/**
 * OFX section 2.7.2
 */

export class OFXELEMENT extends Aggregate<IOFXELEMENT> implements IOFXELEMENT {
  @Serializable
  tagname!: string;
  @Serializable
  name?: string | undefined;
  @Serializable
  tagtype?: string | undefined;
  @Serializable
  tagvalue!: string;
}

interface IOFXEXTENSION {
  ofxelement: OFXELEMENT[];
}

/**
 * OFX section 2.7.2
 */
export class OFXEXTENSION
  extends Aggregate<IOFXEXTENSION>
  implements IOFXEXTENSION
{
  @Serializable
  ofxelement!: OFXELEMENT[];
}

export type OFXSEC = "NONE" | "TYPE1";

export type SYNCMODE = "FULL" | "LITE";

interface IMSGSETCORE {
  ver: number;
  url: string;
  ofxsec: OFXSEC;
  transpec: boolean;
  signonrealm: string;
  language?: LanguageCodes[];
  syncmode: SYNCMODE;
  refreshsupt?: boolean;
  respfileer: boolean;
  spname?: string;
  ofxextension?: OFXEXTENSION;
}

/**
 * OFX section 2.7.2
 */
export class MSGSETCORE extends Aggregate<IMSGSETCORE> implements IMSGSETCORE {
  @Serializable
  ver!: number;
  @Serializable
  url!: string;
  @Serializable
  ofxsec!: OFXSEC;
  @Serializable
  transpec!: boolean;
  @Serializable
  signonrealm!: string;
  @Serializable
  language?: LanguageCodes[] | undefined;
  @Serializable
  syncmode!: SYNCMODE;
  @Serializable
  refreshsupt?: boolean | undefined;
  @Serializable
  respfileer!: boolean;
  @Serializable
  spname?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}
