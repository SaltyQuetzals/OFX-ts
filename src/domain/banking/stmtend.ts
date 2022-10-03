import { Serializable } from "../../serialization/Serializable";
import { Aggregate } from "../base/typing";
import { TransactionRequest, TransactionResponse } from "../base/wrappers";
import { STATUS, OFXEXTENSION } from "../common";
import { CURRENCY, ORIGCURRENCY, CurrencyCodes } from "../i18n";
import { BANKACCTFROM, REWARDINFO, CCACCTFROM } from "./stmt";

/** OFX section 11.5.2 */
interface ICLOSING {
  fitid: string;
  dtopen?: Date;
  dtclose: Date;
  dtnext: Date;
  balopen?: number;
  balclose: number;
  balmin?: number;
  depandcredit?: number;
  chkanddebit?: number;
  totalfees?: number;
  totalint?: number;
  dtpoststart: Date;
  dtpostend: Date;
  mktginfo?: string;
  currency?: CURRENCY;
  origcurrency?: ORIGCURRENCY;
}

export class CLOSING extends Aggregate<ICLOSING> implements ICLOSING {
  @Serializable
  fitid!: string;
  @Serializable
  dtopen?: Date | undefined;
  @Serializable
  dtclose!: Date;
  @Serializable
  dtnext!: Date;
  @Serializable
  balopen?: number | undefined;
  @Serializable
  balclose!: number;
  @Serializable
  balmin?: number | undefined;
  @Serializable
  depandcredit?: number | undefined;
  @Serializable
  chkanddebit?: number | undefined;
  @Serializable
  totalfees?: number | undefined;
  @Serializable
  totalint?: number | undefined;
  @Serializable
  dtpoststart!: Date;
  @Serializable
  dtpostend!: Date;
  @Serializable
  mktginfo?: string | undefined;
  @Serializable
  currency?: CURRENCY | undefined;
  @Serializable
  origcurrency?: ORIGCURRENCY | undefined;
}

/** OFX section 11.5.1 */
interface ISTMTENDRQ {
  bankacctfrom: BANKACCTFROM;
  dtstart?: Date;
  dtend?: Date;
}

export class STMTENDRQ extends Aggregate<ISTMTENDRQ> implements ISTMTENDRQ {
  @Serializable
  bankacctfrom!: BANKACCTFROM;
  @Serializable
  dtstart?: Date | undefined;
  @Serializable
  dtend?: Date | undefined;
}

/** OFX section 11.5.2 */
interface ISTMTENDRS {
  curdef: CurrencyCodes;
  bankacctfrom: BANKACCTFROM;
  closing?: CLOSING;
}

export class STMTENDRS extends Aggregate<ISTMTENDRS> implements ISTMTENDRS {
  @Serializable
  curdef!: CurrencyCodes;
  @Serializable
  bankacctfrom!: BANKACCTFROM;
  @Serializable
  closing?: CLOSING | undefined;
}

/** OFX section 11.5.1 */
interface ISTMTENDTRNRQ extends TransactionRequest {
  stmtendrq: STMTENDRQ;
}

export class STMTENDTRNRQ
  extends Aggregate<ISTMTENDTRNRQ>
  implements ISTMTENDTRNRQ
{
  @Serializable
  stmtendrq!: STMTENDRQ;
  @Serializable
  trnuid!: string;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  tan?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}

/** OFX section 11.5.2 */
interface ISTMTENDTRNRS extends TransactionResponse {
  stmtendrs?: STMTENDRS;
}

export class STMTENDTRNRS
  extends Aggregate<ISTMTENDTRNRS>
  implements ISTMTENDTRNRS
{
  @Serializable
  stmtendrs?: STMTENDRS | undefined;
  @Serializable
  trnuid!: string;
  @Serializable
  status!: STATUS;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}

/** OFX section 11.3.10 */
interface ILASTPMTINFO {
  lastpmtdate: Date;
  lastpmtamt: number;
}

export class LASTPMTINFO
  extends Aggregate<ILASTPMTINFO>
  implements ILASTPMTINFO
{
  @Serializable
  lastpmtdate!: Date;
  @Serializable
  lastpmtamt!: number;
}

/** OFX section 11.5.4.2 */
interface ICCCLOSING {
  fitid: string;
  dtopen?: Date;
  dtclose: Date;
  dtnext?: Date;
  balopen?: number;
  balclose: number;
  intytd?: number;
  dtpmtdue?: Date;
  minpmtdue?: number;
  pastdueamt?: number;
  latefeeamt?: number;
  finchg?: number;
  intratepurch?: number;
  intratecash?: number;
  intratexfer?: number;
  payandcredit?: number;
  purandadv?: number;
  debadj?: number;
  creditlimit?: number;
  cashadvcreditlimit?: number;
  dtpoststart: Date;
  dtpostend: Date;
  autopay?: boolean;
  lastpmtinfo?: LASTPMTINFO;
  rewardinfo?: REWARDINFO;
  mktginfo?: string;
  // imagedate
  currency?: CURRENCY;
  origcurrency?: ORIGCURRENCY;
}

export class CCCLOSING extends Aggregate<ICCCLOSING> implements ICCCLOSING {
  @Serializable
  fitid!: string;
  @Serializable
  dtopen?: Date | undefined;
  @Serializable
  dtclose!: Date;
  @Serializable
  dtnext?: Date | undefined;
  @Serializable
  balopen?: number | undefined;
  @Serializable
  balclose!: number;
  @Serializable
  intytd?: number | undefined;
  @Serializable
  dtpmtdue?: Date | undefined;
  @Serializable
  minpmtdue?: number | undefined;
  @Serializable
  pastdueamt?: number | undefined;
  @Serializable
  latefeeamt?: number | undefined;
  @Serializable
  finchg?: number | undefined;
  @Serializable
  intratepurch?: number | undefined;
  @Serializable
  intratecash?: number | undefined;
  @Serializable
  intratexfer?: number | undefined;
  @Serializable
  payandcredit?: number | undefined;
  @Serializable
  purandadv?: number | undefined;
  @Serializable
  debadj?: number | undefined;
  @Serializable
  creditlimit?: number | undefined;
  @Serializable
  cashadvcreditlimit?: number | undefined;
  @Serializable
  dtpoststart!: Date;
  @Serializable
  dtpostend!: Date;
  @Serializable
  autopay?: boolean | undefined;
  @Serializable
  lastpmtinfo?: LASTPMTINFO | undefined;
  @Serializable
  rewardinfo?: REWARDINFO | undefined;
  @Serializable
  mktginfo?: string | undefined;
  @Serializable
  currency?: CURRENCY | undefined;
  @Serializable
  origcurrency?: ORIGCURRENCY | undefined;
}

/** OFX section 11.5.3 */
interface ICCSTMTENDRQ {
  ccacctfrom: CCACCTFROM;
  dtstart?: Date;
  dtend?: Date;
  incstmtimg?: boolean;
}

export class CCSTMTENDRQ
  extends Aggregate<ICCSTMTENDRQ>
  implements ICCSTMTENDRQ
{
  @Serializable
  ccacctfrom!: CCACCTFROM;
  @Serializable
  dtstart?: Date | undefined;
  @Serializable
  dtend?: Date | undefined;
  @Serializable
  incstmtimg?: boolean | undefined;
}

/** OFX section 11.5.4 */
interface ICCSTMTENDRS {
  curdef: CurrencyCodes;
  ccacctfrom: CCACCTFROM;
  ccclosing?: [CCCLOSING];
}

export class CCSTMTENDRS
  extends Aggregate<ICCSTMTENDRS>
  implements ICCSTMTENDRS
{
  @Serializable
  curdef!: CurrencyCodes;
  @Serializable
  ccacctfrom!: CCACCTFROM;
  @Serializable
  ccclosing?: [CCCLOSING] | undefined;
}

/** OFX section 11.4.3.1 */
interface ICCSTMTENDTRNRQ extends TransactionRequest {
  ccstmtendrq: CCSTMTENDRQ;
}

export class CCSTMTENDTRNRQ
  extends Aggregate<ICCSTMTENDTRNRQ>
  implements ICCSTMTENDTRNRQ
{
  @Serializable
  ccstmtendrq!: CCSTMTENDRQ;
  @Serializable
  trnuid!: string;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  tan?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}

interface ICCSTMTENDTRNRS extends TransactionResponse {
  ccstmtendrs?: CCSTMTENDRS;
}

export class CCSTMTENDTRNRS
  extends Aggregate<ICCSTMTENDTRNRS>
  implements ICCSTMTENDTRNRS
{
  @Serializable
  ccstmtendrs?: CCSTMTENDRS | undefined;
  @Serializable
  trnuid!: string;
  @Serializable
  status!: STATUS;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}
