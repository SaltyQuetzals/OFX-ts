///
/** FI Profile - OFX section 7 */
///

import { Serializable } from "../serialization/Serializable";
import {
  BANKMSGSET,
  CREDITCARDMSGSET,
  INTERXFERMSGSET,
  WIREXFERMSGSET,
} from "./banking/msgsets";
import { Aggregate } from "./base/typing";
import { TransactionRequest, TransactionResponse } from "./base/wrappers";
import { MSGSETCORE, OFXEXTENSION, STATUS } from "./common";
import { EMAILMSGSET } from "./email";
import { CountryCodes } from "./i18n";
import { INVSTMTMSGSET, SECLISTMSGSET } from "./investment/msgsets";
import { SIGNONMSGSET } from "./signon";

interface IPROFMSGSETV1 {
  msgsetcore: MSGSETCORE;
}

/** OFX section 7.3 */
export class PROFMSGSETV1
  extends Aggregate<IPROFMSGSETV1>
  implements IPROFMSGSETV1
{
  @Serializable
  msgsetcore!: MSGSETCORE;
}

interface IPROFMSGSET {
  profmsgsetv1: PROFMSGSETV1;
}

/** OFX section 7.3 */
export class PROFMSGSET extends Aggregate<PROFMSGSET> implements IPROFMSGSET {
  @Serializable
  profmsgsetv1!: PROFMSGSETV1;
}

interface IMSGSETLIST {
  signonmsgset?: SIGNONMSGSET[];
  // signupmsgset?: SIGNUPMSGSET[]
  bankmsgset?: BANKMSGSET[];
  creditcardmsgset?: CREDITCARDMSGSET[];
  invstmtmsgset?: INVSTMTMSGSET[];
  interxfermsgset?: INTERXFERMSGSET[];
  wirexfermsgset?: WIREXFERMSGSET[];
  // billpaymsgset?: BILLPAYMSGSET[]
  emailmsgset?: EMAILMSGSET[];
  seclistmsgset?: SECLISTMSGSET[];
  // presdirmsgset
  // presdlvmsgset
  profmsgset?: PROFMSGSET[];
  // tax1099msgset?: TAX1099MSGSET[]
}

/** OFX section 7.2 */
export class MSGSETLIST extends Aggregate<IMSGSETLIST> implements IMSGSETLIST {
  @Serializable
  signonmsgset?: SIGNONMSGSET[];
  // signupmsgset?: SIGNUPMSGSET[]
  @Serializable
  bankmsgset?: BANKMSGSET[];
  @Serializable
  creditcardmsgset?: CREDITCARDMSGSET[];
  @Serializable
  invstmtmsgset?: INVSTMTMSGSET[];
  @Serializable
  interxfermsgset?: INTERXFERMSGSET[];
  @Serializable
  wirexfermsgset?: WIREXFERMSGSET[];
  // billpaymsgset?: BILLPAYMSGSET[]
  @Serializable
  emailmsgset?: EMAILMSGSET[];
  @Serializable
  seclistmsgset?: SECLISTMSGSET[];
  // presdirmsgset
  // presdlvmsgset
  @Serializable
  profmsgset?: PROFMSGSET[];
  // tax1099msgset?: TAX1099MSGSET[]
}

export type PasswordCharacterType =
  | "ALPHAONLY"
  | "NUMERICONLY"
  | "ALPHAORNUMERIC"
  | "ALPHAANDNUMERIC";

interface ISIGNONINFO {
  signonrealm: String;
  min: number;
  max: number;
  chartype: PasswordCharacterType;
  casesen: boolean;
  special: boolean;
  spaces: boolean;
  pinch: boolean;
  usercred1label: String;
  usercred2label: String;
  clientuidreq?: boolean;
  authtokenfirst?: boolean;
  authtokenlabel?: String;
  authtokeninfourl?: String;
  mfachallengesupt?: boolean;
  mfachallengefirst?: boolean;
  accesstokenreq?: boolean;
}

/** OFX section 7.2.2 */
export class SIGNONINFO extends Aggregate<ISIGNONINFO> implements ISIGNONINFO {
  @Serializable
  signonrealm!: String;
  @Serializable
  min!: number;
  @Serializable
  max!: number;
  @Serializable
  chartype!: PasswordCharacterType;
  @Serializable
  casesen!: boolean;
  @Serializable
  special!: boolean;
  @Serializable
  spaces!: boolean;
  @Serializable
  pinch!: boolean;
  @Serializable
  usercred1label!: String;
  @Serializable
  usercred2label!: String;
  @Serializable
  clientuidreq?: boolean | undefined;
  @Serializable
  authtokenfirst?: boolean | undefined;
  @Serializable
  authtokenlabel?: String | undefined;
  @Serializable
  authtokeninfourl?: String | undefined;
  @Serializable
  mfachallengesupt?: boolean | undefined;
  @Serializable
  mfachallengefirst?: boolean | undefined;
  @Serializable
  accesstokenreq?: boolean | undefined;
}

interface ISIGNONINFOLIST {
  signoninfo?: SIGNONINFO[];
}

/** OFX section 7.2 */
export class SIGNONINFOLIST
  extends Aggregate<ISIGNONINFOLIST>
  implements ISIGNONINFOLIST
{
  @Serializable
  signoninfo?: SIGNONINFO[];
}

export type ClientRouting = "NONE" | "SERVICE" | "MSGSET";

interface IPROFRQ {
  clientrouting: ClientRouting;
  dtprofup: Date;
}

/** OFX section 7.1.5 */
export class PROFRQ extends Aggregate<IPROFRQ> implements IPROFRQ {
  @Serializable
  clientrouting!: ClientRouting;
  @Serializable
  dtprofup!: Date;
}

interface IPROFRS {
  msgsetlist: MSGSETLIST;
  signoninfolist: SIGNONINFOLIST;
  dtprofup: Date;
  finame: String;
  addr1: String;
  addr2?: String;
  addr3?: String;
  city: String;
  state: String;
  postalcode: String;
  country: CountryCodes;
  csphone?: String;
  tsphone?: String;
  faxphone?: String;
  url?: String;
  email?: String;
}

/** OFX section 7.2 */
export class PROFRS extends Aggregate<IPROFRS> implements IPROFRS {
  @Serializable
  msgsetlist!: MSGSETLIST;
  @Serializable
  signoninfolist!: SIGNONINFOLIST;
  @Serializable
  dtprofup!: Date;
  @Serializable
  finame!: String;
  @Serializable
  addr1!: String;
  @Serializable
  addr2?: String | undefined;
  @Serializable
  addr3?: String | undefined;
  @Serializable
  city!: String;
  @Serializable
  state!: String;
  @Serializable
  postalcode!: String;
  @Serializable
  country!: CountryCodes;
  @Serializable
  csphone?: String | undefined;
  @Serializable
  tsphone?: String | undefined;
  @Serializable
  faxphone?: String | undefined;
  @Serializable
  url?: String | undefined;
  @Serializable
  email?: String | undefined;
}

interface IPROFTRNRQ extends TransactionRequest {
  profrq: PROFRQ;
}

/** OFX section 7.1.5 */
export class PROFTRNRQ extends Aggregate<IPROFTRNRQ> implements IPROFTRNRQ {
  @Serializable
  profrq!: PROFRQ;
  @Serializable
  trnuid!: string;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  tan?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}

interface IPROFTRNRS extends TransactionResponse {
  profrs?: PROFRS;
}

export class PROFTRNRS extends Aggregate<IPROFTRNRS> implements IPROFTRNRS {
  @Serializable
  profrs?: PROFRS | undefined;
  @Serializable
  trnuid!: string;
  @Serializable
  status!: STATUS;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}

interface IPROFMSGSRQV1 {
  proftrnrq?: PROFTRNRQ[];
}

export class PROFMSGSRQV1
  extends Aggregate<IPROFMSGSRQV1>
  implements IPROFMSGSRQV1
{
  @Serializable
  proftrnrq?: PROFTRNRQ[];
}

interface IPROFMSGSRSV1 {
  proftrnrs?: PROFTRNRS[];
}

export class PROFMSGSRSV1
  extends Aggregate<IPROFMSGSRSV1>
  implements IPROFMSGSRSV1
{
  @Serializable
  proftrnrs?: PROFTRNRS[];
}
