///
/** Client signon - OFX Section 2.5 */
///

import { Serializable } from "../serialization/Serializable";
import { Aggregate } from "./base/typing";
import { TransactionRequest, TransactionResponse } from "./base/wrappers";
import { MSGSETCORE, OFXEXTENSION, STATUS } from "./common";
import { LanguageCodes } from "./i18n";

export const MFAPhraseIds = {
  MFA1: "City of birth",
  MFA2: "Date of birth, formatted MM/DD/YYYY",
  MFA3: "Debit card number",
  MFA4: "Father's middle name",
  MFA5: "Favorite color",
  MFA6: "First pet's name",
  MFA7: "Five digit ZIP code",
  MFA8: "Grandmother's maiden name on your father's side",
  MFA9: "Grandmother's maiden name on your mother's side",
  MFA10: "Last four digits of your cell phone number",
  MFA11: "Last four digits of your daytime phone number",
  MFA12: "Last four digits of your home phone number",
  MFA13: "Last four digits of your social sescurity number",
  MFA14: "Last four digits of your tax ID",
  MFA15: "Month of birth of youngest sibling, do not abbreviate",
  MFA16: "Mother's maiden name",
  MFA17: "Mother's middle name",
  MFA18: "Name of the company where you had your first job",
  MFA19: "Name of the manufacturer of your first car",
  MFA20: "Name of the street you grew up on",
  MFA21:
    "Name of your high school football team, do not include high school name, e.g. 'Beavers' rather than 'Central High Beavers'",
  MFA22: "Recent deposit or recent withdrawal amount",
  MFA23: "Year of birth, formatted YYYY",
  MFA24: "",
  MFA25: "",
  MFA26: "",
  MFA27: "",
  MFA28: "",
  MFA29: "",
  MFA30: "",
  MFA101: "Datetime, formatted YYYYMMDDHHMMSS",
  MFA102: "Host name",
  MFA103: "IP Address",
  MFA104: "MAC Address",
  MFA105: "Operating System version",
  MFA106: "Processor architecture, e.g. I386",
  MFA107: " UserAgent",
  MFA108: "",
  MFA109: "",
  MFA110: "",
};

interface IFI {
  org: string;
  fid?: string;
}

/** OFX section 2.5.1.8 */
export class FI extends Aggregate<IFI> implements IFI {
  @Serializable
  org!: string;
  @Serializable
  fid?: string | undefined;
}

interface IMFACHALLENGE {
  mfaphraseid: string;
  mfaphraselabel?: string;
}

/** OFX section 2.5.4.2 */
export class MFACHALLENGE
  extends Aggregate<IMFACHALLENGE>
  implements IMFACHALLENGE
{
  @Serializable
  mfaphraseid!: string;
  @Serializable
  mfaphraselabel?: string | undefined;
}

interface IMFACHALLENGEA {
  mfaphraseid: string;
  mfaphrasea: string;
}

/** OFX section 2.5.4.5 */
export class MFACHALLENGEA
  extends Aggregate<IMFACHALLENGEA>
  implements IMFACHALLENGEA
{
  @Serializable
  mfaphraseid!: string;
  @Serializable
  mfaphrasea!: string;
}

interface ISONRQ {
  dtclient: Date;
  userid?: string;
  userpass?: string;
  userkey?: string;
  accesstoken?: string;
  genuserkey?: string;
  language: LanguageCodes;
  fi?: FI;
  sesscookie?: string;
  appid: string;
  appver: string;
  clientuid?: string;
  usercred1?: string;
  usercred2?: string;
  authtoken?: string;
  mfachallenga?: MFACHALLENGEA[];
  //    ofxextension
}

/** OFX section 2.5.1.2 */
export class SONRQ extends Aggregate<ISONRQ> implements ISONRQ {
  @Serializable
  dtclient!: Date;
  @Serializable
  userid?: string | undefined;
  @Serializable
  userpass?: string | undefined;
  @Serializable
  userkey?: string | undefined;
  @Serializable
  accesstoken?: string | undefined;
  @Serializable
  genuserkey?: string | undefined;
  @Serializable
  language!: LanguageCodes;
  @Serializable
  fi?: FI | undefined;
  @Serializable
  sesscookie?: string | undefined;
  @Serializable
  appid!: string;
  @Serializable
  appver!: string;
  @Serializable
  clientuid?: string | undefined;
  @Serializable
  usercred1?: string | undefined;
  @Serializable
  usercred2?: string | undefined;
  @Serializable
  authtoken?: string | undefined;
  @Serializable
  mfachallenga?: MFACHALLENGEA[] | undefined;
}

interface ISONRS {
  status: STATUS;
  dtserver: Date;
  userkey?: string;
  tskeyexpire?: Date;
  language: LanguageCodes;
  dtprofup?: Date;
  dtacctup?: Date;
  fi?: FI;
  sesscookie?: string;
  accesskey?: string;
  //    ofxextension
}

/** OFX section 2.5.1.3 */
export class SONRS extends Aggregate<ISONRS> implements ISONRS {
  @Serializable
  status!: STATUS;
  @Serializable
  dtserver!: Date;
  @Serializable
  userkey?: string | undefined;
  @Serializable
  tskeyexpire?: Date | undefined;
  @Serializable
  language!: LanguageCodes;
  @Serializable
  dtprofup?: Date | undefined;
  @Serializable
  dtacctup?: Date | undefined;
  @Serializable
  fi?: FI | undefined;
  @Serializable
  sesscookie?: string | undefined;
  @Serializable
  accesskey?: string | undefined;
}

interface IPINCHRQ {
  userid: string;
  userpass: string;
}

/** OFX section 2.5.2.1 */
export class PINCHRQ extends Aggregate<IPINCHRQ> implements IPINCHRQ {
  @Serializable
  userid!: string;
  @Serializable
  userpass!: string;
}

interface IPINCHRS {
  userid: string;
  dtchanged?: Date;
}

/** OFX section 2.5.2.2 */
export class PINCHRS extends Aggregate<IPINCHRS> implements IPINCHRS {
  @Serializable
  userid!: string;
  @Serializable
  dtchanged?: Date | undefined;
}

interface IPINCHTRNRQ extends TransactionRequest {
  pinchrq: PINCHRQ;
}

export class PINCHTRNRQ extends Aggregate<PINCHTRNRQ> implements IPINCHTRNRQ {
  @Serializable
  pinchrq!: PINCHRQ;
  @Serializable
  trnuid!: string;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  tan?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}

interface IPINCHTRNRS extends TransactionResponse {}

/** OFX section 2.5.2.2 */
export class PINCHTRNRS extends Aggregate<IPINCHTRNRS> implements IPINCHTRNRS {
  @Serializable
  trnuid!: string;
  @Serializable
  status!: STATUS;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}

interface ICHALLENGERQ {
  userid: string;
  ficertid?: string;
}

/** OFX section 2.5.3.1 */
export class CHALLENGERQ
  extends Aggregate<ICHALLENGERQ>
  implements ICHALLENGERQ
{
  @Serializable
  userid!: string;
  @Serializable
  ficertid?: string | undefined;
}

interface ICHALLENGERS {
  user: string;
  nonce: string;
  ficertid: string;
}

/** OFX section 2.5.3.2 */
export class CHALLENGERS
  extends Aggregate<ICHALLENGERS>
  implements ICHALLENGERS
{
  @Serializable
  user!: string;
  @Serializable
  nonce!: string;
  @Serializable
  ficertid!: string;
}

interface ICHALLENGETRNRQ extends TransactionRequest {
  challengerq: CHALLENGERQ;
}

/** OFX section 2.5.3.1 */
export class CHALLENGETRNRQ
  extends Aggregate<ICHALLENGETRNRQ>
  implements ICHALLENGETRNRQ
{
  @Serializable
  challengerq!: CHALLENGERQ;
  @Serializable
  trnuid!: string;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  tan?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}

interface ICHALLENGETRNRS extends TransactionResponse {
  challengers: CHALLENGERS;
}

/** OFX section 2.5.3.2 */
export class CHALLENGETRNRS
  extends Aggregate<ICHALLENGETRNRS>
  implements ICHALLENGETRNRS
{
  @Serializable
  challengers!: CHALLENGERS;
  @Serializable
  trnuid!: string;
  @Serializable
  status!: STATUS;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}

interface IMFACHALLENGERQ {
  dtclient: Date;
}

/** OFX section 2.5.4.1 */
export class MFACHALLENGERQ
  extends Aggregate<IMFACHALLENGERQ>
  implements IMFACHALLENGERQ
{
  @Serializable
  dtclient!: Date;
}

interface IMFACHALLENGERS {
  mfachallenge?: MFACHALLENGE[];
}

/** OFX section 2.5.4.2 */
export class MFACHALLENGERS
  extends Aggregate<IMFACHALLENGERS>
  implements IMFACHALLENGERS
{
  @Serializable
  mfachallenge?: MFACHALLENGE[];
}

interface IMFACHALLENGETRNRQ extends TransactionRequest {
  mfachallengerq: MFACHALLENGERQ;
}

/** OFX section 2.5.4.1 */
export class MFACHALLENGETRNRQ
  extends Aggregate<IMFACHALLENGETRNRQ>
  implements IMFACHALLENGETRNRQ
{
  @Serializable
  mfachallengerq!: MFACHALLENGERQ;
  @Serializable
  trnuid!: string;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  tan?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}

interface IMFACHALLENGETRNRS extends TransactionResponse {
  mfachallengers: MFACHALLENGERS;
}

/** OFX section 2.5.4.2 */
export class MFACHALLENGETRNRS
  extends Aggregate<IMFACHALLENGETRNRS>
  implements IMFACHALLENGETRNRS
{
  @Serializable
  mfachallengers!: MFACHALLENGERS;
  @Serializable
  trnuid!: string;
  @Serializable
  status!: STATUS;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}

interface ISIGNONMSGSRQV1 {
  sonrq: SONRQ;
  pinchtrnrq?: PINCHTRNRQ;
  challengetrnrq?: CHALLENGETRNRQ;
  mfachallengetrnrq?: MFACHALLENGETRNRQ;
}

/** OFX section 2.5 */
export class SIGNONMSGSRQV1
  extends Aggregate<ISIGNONMSGSRQV1>
  implements ISIGNONMSGSRQV1
{
  @Serializable
  sonrq!: SONRQ;
  @Serializable
  pinchtrnrq?: PINCHTRNRQ | undefined;
  @Serializable
  challengetrnrq?: CHALLENGETRNRQ | undefined;
  @Serializable
  mfachallengetrnrq?: MFACHALLENGETRNRQ | undefined;
}

interface ISIGNONMSGSRSV1 {
  sonrs: SONRS;
  pinchtrnrs?: PINCHTRNRS;
  challengetrnrs?: CHALLENGETRNRS;
  mfachallengetrnrs?: MFACHALLENGETRNRS;
}

/** OFX section 2.5 */
export class SIGNONMSGSRSV1
  extends Aggregate<ISIGNONMSGSRSV1>
  implements ISIGNONMSGSRSV1
{
  @Serializable
  sonrs!: SONRS;
  @Serializable
  pinchtrnrs?: PINCHTRNRS | undefined;
  @Serializable
  challengetrnrs?: CHALLENGETRNRS | undefined;
  @Serializable
  mfachallengetrnrs?: MFACHALLENGETRNRS | undefined;
}

interface ISIGNONMSGSETV1 {
  msgsetcore: MSGSETCORE;
}

/** OFX section 2.5.5 */
export class SIGNONMSGSETV1
  extends Aggregate<ISIGNONMSGSETV1>
  implements ISIGNONMSGSETV1
{
  @Serializable
  msgsetcore!: MSGSETCORE;
}

interface ISIGNONMSGSET {
  signonmsgsetv1: SIGNONMSGSETV1;
}

/** OFX section 2.5.5 */
export class SIGNONMSGSET
  extends Aggregate<SIGNONMSGSET>
  implements SIGNONMSGSET
{
  @Serializable
  signonmsgsetv1!: SIGNONMSGSETV1;
}
