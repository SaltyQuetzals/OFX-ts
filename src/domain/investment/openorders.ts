import { Investment401kSource } from "../banking/stmt";
import { CURRENCY } from "../i18n";
import { INVSUBACCT } from "./acct";
import { SECID } from "./securities";
import { BUYTYPE, OPTBUYTYPE, SELLTYPE, OPTSELLTYPE } from "./transactions";

export type UNITTYPE = "SHARES" | "CURRENCY";

export type DURATION = "DAY" | "GOODTILCANCEL" | "IMMEDIATE";

export type RESTRICTION = "ALLORNONE" | "MINUNITS" | "NONE";

/** OFX section 13.9.2.5.1 - General open order aggregate */
export interface OO {
  fitid: String;
  srvrtid?: String;
  secid: SECID;
  dtplaced: Date;
  units: number;
  subacct: INVSUBACCT;
  duration: DURATION;
  restriction: RESTRICTION;
  minunits?: number;
  limitprice?: number;
  memo?: String;
  currency?: CURRENCY;
  inv401ksource?: Investment401kSource;
}

/** OFX section 13.9.2.5.2 */
export interface OOBUYDEBT {
  oo: OO;
  auction: boolean;
  dtauction?: Date;
}

/** OFX section 13.9.2.5.2 */
export interface OOBUYMF {
  oo: OO;
  buytype: BUYTYPE;
  unittype: UNITTYPE;
}

/** OFX section 13.9.2.5.2 */
export interface OOBUYOPT {
  oo: OO;
  optbuytype: OPTBUYTYPE;
}

/** OFX section 13.9.2.5.2 */
export interface OOBUYOTHER {
  oo: OO;
  unittype: UNITTYPE;
}

/** OFX section 13.9.2.5.2 */
export interface OOBUYSTOCK {
  oo: OO;
  buytype: BUYTYPE;
}

/** OFX section 13.9.2.5.2 */
export interface OOSELLDEBT {
  oo: OO;
}

/** OFX section 13.9.2.5.2 */
export interface OOSELLMF {
  oo: OO;
  selltype: SELLTYPE;
  unittype: UNITTYPE;
  sellall: boolean;
}

/** OFX section 13.9.2.5.2 */
export interface OOSELLOPT {
  oo: OO;
  optselltype: OPTSELLTYPE;
}

/** OFX section 13.9.2.5.2 */
export interface OOSELLOTHER {
  oo: OO;
  unittype: UNITTYPE;
}

/** OFX section 13.9.2.5.2 */
export interface OOSELLSTOCK {
  oo: OO;
  selltype: SELLTYPE;
}

/** OFX section 13.9.2.5.2 */
export interface SWITCHMF {
  oo: OO;
  secid: SECID;
  unittype: UNITTYPE;
  switchall: boolean;
}

/** OFX section 13.9.2.2 */
export interface INVOOLIST {
  oobuydebt?: OOBUYDEBT[];
  oobuymf?: OOBUYMF[];
  oobuyopt?: OOBUYOPT[];
  oobuyother?: OOBUYOTHER[];
  oobuystock?: OOBUYSTOCK[];
  ooselldebt?: OOSELLDEBT[];
  oosellmf?: OOSELLMF[];
  oosellopt?: OOSELLOPT[];
  oosellother?: OOSELLOTHER[];
  oosellstock?: OOSELLSTOCK[];
  switchmf?: SWITCHMF[];
}
