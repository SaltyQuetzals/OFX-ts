///
/** Bank statement download - OFX Section 11.4 */

import { Serializable } from "../../serialization/Serializable";
import { Aggregate } from "../base/typing";
import {
  TransactionList,
  TransactionRequest,
  TransactionResponse,
} from "../base/wrappers";
import { SVCSTATUS, BAL, OFXEXTENSION, STATUS } from "../common";
import { CountryCodes, CURRENCY, ORIGCURRENCY, CurrencyCodes } from "../i18n";

///
export type Investment401kSource =
  | "PRETAX"
  | "AFTERTAX"
  | "MATCH"
  | "PROFITSHARING"
  | "ROLLOVER"
  | "OTHERVEST"
  | "OTHERNONVEST";

/** OFX section 11.3.1.1 */
export type AccountType =
  | "CHECKING"
  | "SAVINGS"
  | "MONEYMRKT"
  | "CREDITLINE"
  | "CD";

export type TransactionType =
  | "CREDIT"
  | "DEBIT"
  | "INT"
  | "DIV"
  | "FEE"
  | "SRVCHG"
  | "DEP"
  | "ATM"
  | "POS"
  | "XFER"
  | "CHECK"
  | "PAYMENT"
  | "CASH"
  | "DIRECTDEP"
  | "DIRECTDEBIT"
  | "REPEATPMT"
  | "OTHER";

/** OFX section 11.3.1 */
interface IBANKACCTFROM {
  bankid: string;
  branchid?: string;
  acctid: string;
  accttype: AccountType;
  acctkey?: string;
}
export class BANKACCTFROM
  extends Aggregate<IBANKACCTFROM>
  implements IBANKACCTFROM
{
  @Serializable
  bankid!: string;
  @Serializable
  branchid?: string | undefined;
  @Serializable
  acctid!: string;
  @Serializable
  accttype!: AccountType;
  @Serializable
  acctkey?: string | undefined;
}

/** OFX section 11.3.1 */
interface IBANKACCTTO {
  bankid: string;
  branchid?: string;
  acctid: string;
  accttype: AccountType;
  acctkey?: string;
}
export class BANKACCTTO extends Aggregate<IBANKACCTTO> implements IBANKACCTTO {
  @Serializable
  bankid!: string;
  @Serializable
  branchid?: string | undefined;
  @Serializable
  acctid!: string;
  @Serializable
  accttype!: AccountType;
  @Serializable
  acctkey?: string | undefined;
}

/** OFX section 11.3.3 */
interface IBANKACCTINFO {
  bankacctfrom: BANKACCTFROM;
  suptxdl: boolean;
  xfersrc: boolean;
  xferdest: boolean;
  svcstatus: SVCSTATUS;
}
export class BANKACCTINFO
  extends Aggregate<IBANKACCTINFO>
  implements IBANKACCTINFO
{
  @Serializable
  bankacctfrom!: BANKACCTFROM;
  @Serializable
  suptxdl!: boolean;
  @Serializable
  xfersrc!: boolean;
  @Serializable
  xferdest!: boolean;
  @Serializable
  svcstatus!: SVCSTATUS;
}

/** OFX section 11.3.2 */
interface ICCACCTFROM {
  acctid: string;
  acctkey?: string;
}
export class CCACCTFROM extends Aggregate<ICCACCTFROM> implements ICCACCTFROM {
  @Serializable
  acctid!: string;
  @Serializable
  acctkey?: string | undefined;
}

/** OFX section 11.3.2 */
interface ICCACCTTO {
  acctid: string;
  acctkey?: string;
}
export class CCACCTTO extends Aggregate<ICCACCTTO> implements ICCACCTTO {
  @Serializable
  acctid!: string;
  @Serializable
  acctkey?: string | undefined;
}

/** OFX section 11.3.4 */
interface ICCACCTINFO {
  ccacctfrom: CCACCTFROM;
  supxdl: boolean;
  xfersrc: boolean;
  xferdest: boolean;
  svcstatus: SVCSTATUS;
}
export class CCACCTINFO extends Aggregate<ICCACCTINFO> implements ICCACCTINFO {
  @Serializable
  ccacctfrom!: CCACCTFROM;
  @Serializable
  supxdl!: boolean;
  @Serializable
  xfersrc!: boolean;
  @Serializable
  xferdest!: boolean;
  @Serializable
  svcstatus!: SVCSTATUS;
}

/** OFX section 11.4.2.1 */
interface IINCTRAN {
  dtstart?: Date;
  dtend?: Date;
  include: boolean;
}
export class INCTRAN extends Aggregate<IINCTRAN> implements IINCTRAN {
  @Serializable
  dtstart?: Date | undefined;
  @Serializable
  dtend?: Date | undefined;
  @Serializable
  include!: boolean;
}

/** OFX section 11.4.2.1 */
interface ISTMTRQ {
  bankacctfrom: BANKACCTFROM;
  inctran?: INCTRAN;
  includepending?: boolean;
  inctranimg?: boolean;
}
export class STMTRQ extends Aggregate<ISTMTRQ> implements ISTMTRQ {
  @Serializable
  bankacctfrom!: BANKACCTFROM;
  @Serializable
  inctran?: INCTRAN | undefined;
  @Serializable
  includepending?: boolean | undefined;
  @Serializable
  inctranimg?: boolean | undefined;
}

/** OFX section 12.5.2.1 */
interface IPAYEE {
  name: string;
  addr1: string;
  addr2?: string;
  addr3?: string;
  city: string;
  state: string;
  postalcode: string;
  country?: CountryCodes;
  phone: string;
}
export class PAYEE extends Aggregate<IPAYEE> implements IPAYEE {
  @Serializable
  name!: string;
  @Serializable
  addr1!: string;
  @Serializable
  addr2?: string | undefined;
  @Serializable
  addr3?: string | undefined;
  @Serializable
  city!: string;
  @Serializable
  state!: string;
  @Serializable
  postalcode!: string;
  @Serializable
  country?: CountryCodes | undefined;
  @Serializable
  phone!: string;
}

export type CorrectAction = "REPLACE" | "DELETE";

/** OFX section 11.4.3 */
interface ISTMTTRN {
  trntype: TransactionType;
  dtposted: Date;
  dtuser?: Date;
  dtavail?: Date;
  trnamt: number;
  fitid: string;
  correctfitid?: string;
  correctaction?: CorrectAction;
  srvrtid?: string;
  checknum?: string;
  refnum?: string;
  sic?: number;
  payeeid?: string;
  name?: string;
  payee?: PAYEE;
  extdname?: string;

  /** Either bankacctto will be present, or ccacctto will be present, not both. */
  bankacctto?: BANKACCTTO;
  /** Either bankacctto will be present, or ccacctto will be present, not both. */
  ccacctto?: CCACCTTO;

  /** Either currency will be present, or origcurrency will be present, not both. */
  currency?: CURRENCY;

  /** Either currency will be present, or origcurrency will be present, not both. */
  origcurrency?: ORIGCURRENCY;
  inv401ksource?: Investment401kSource;
}
export class STMTTRN extends Aggregate<ISTMTTRN> implements ISTMTTRN {
  @Serializable
  trntype!: TransactionType;
  @Serializable
  dtposted!: Date;
  @Serializable
  dtuser?: Date | undefined;
  @Serializable
  dtavail?: Date | undefined;
  @Serializable
  trnamt!: number;
  @Serializable
  fitid!: string;
  @Serializable
  correctfitid?: string | undefined;
  @Serializable
  correctaction?: CorrectAction | undefined;
  @Serializable
  srvrtid?: string | undefined;
  @Serializable
  checknum?: string | undefined;
  @Serializable
  refnum?: string | undefined;
  @Serializable
  sic?: number | undefined;
  @Serializable
  payeeid?: string | undefined;
  @Serializable
  name?: string | undefined;
  @Serializable
  payee?: PAYEE | undefined;
  @Serializable
  extdname?: string | undefined;
  @Serializable
  bankacctto?: BANKACCTTO | undefined;
  @Serializable
  ccacctto?: CCACCTTO | undefined;
  @Serializable
  currency?: CURRENCY | undefined;
  @Serializable
  origcurrency?: ORIGCURRENCY | undefined;
  @Serializable
  inv401ksource?: Investment401kSource | undefined;
}

/** OFX section 11.4.2.2 */
interface IBANKTRANLIST extends TransactionList {
  dtstart: Date;
  dtend: Date;

  stmttrn: STMTTRN[];
}

export class BANKTRANLIST
  extends Aggregate<IBANKTRANLIST>
  implements IBANKTRANLIST
{
  @Serializable
  dtstart!: Date;
  @Serializable
  dtend!: Date;
  @Serializable
  stmttrn!: STMTTRN[];
}

/** OFX section 11.4.2.2 */
interface ILEDGERBAL {
  balamt: number;
  dtasof: Date;
}
export class LEDGERBAL extends Aggregate<ILEDGERBAL> implements ILEDGERBAL {
  @Serializable
  balamt!: number;
  @Serializable
  dtasof!: Date;
}

/** OFX section 11.4.2.2 */
interface IAVAILBAL {
  balamt: number;
  dtasof: Date;
}
export class AVAILBAL extends Aggregate<IAVAILBAL> implements IAVAILBAL {
  @Serializable
  balamt!: number;
  @Serializable
  dtasof!: Date;
}

/** OFX section 11.4.2.2 & 13.9.2.7 */
interface IBALLIST {
  bal: BAL[];
}
export class BALLIST extends Aggregate<IBALLIST> implements IBALLIST {
  @Serializable
  bal!: BAL[];
}

/** OFX section 11.4.2.2 */
interface ISTMTRS {
  curdef: CurrencyCodes;
  bankacctfrom: BANKACCTFROM;
  banktranlist?: BANKTRANLIST;
  //    banktranlistp
  ledgerbal: LEDGERBAL;
  availbal?: AVAILBAL;
  cashadvbalamt?: number;
  intrate?: number;
  ballist?: BALLIST;
  mktginfo?: string;
}
export class STMTRS extends Aggregate<ISTMTRS> implements ISTMTRS {
  @Serializable
  curdef!: CurrencyCodes;
  @Serializable
  bankacctfrom!: BANKACCTFROM;
  @Serializable
  banktranlist?: any;
  @Serializable
  ledgerbal!: LEDGERBAL;
  @Serializable
  availbal?: AVAILBAL | undefined;
  @Serializable
  cashadvbalamt?: number | undefined;
  @Serializable
  intrate?: number | undefined;
  @Serializable
  ballist?: BALLIST | undefined;
  @Serializable
  mktginfo?: string | undefined;
}

/** OFX section 11.4.2.1 */
interface ISTMTTRNRQ extends TransactionRequest {
  stmtrq: STMTRQ;
}

export class STMTTRNRQ extends Aggregate<ISTMTTRNRQ> implements ISTMTTRNRQ {
  @Serializable
  stmtrq!: STMTRQ;
  @Serializable
  trnuid!: string;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  tan?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}

/** OFX section 11.4.2.2 */
interface ISTMTTRNRS extends TransactionResponse {
  stmtrs: STMTRS;
}

export class STMTTRNRS extends Aggregate<ISTMTTRNRS> implements ISTMTTRNRS {
  @Serializable
  stmtrs!: STMTRS;
  @Serializable
  trnuid!: string;
  @Serializable
  status!: STATUS;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}

/** OFX section 11.4.3.2 */
interface IREWARDINFO {
  name: string;
  rewardbal: number;
  rewardearned?: number;
}
export class REWARDINFO extends Aggregate<IREWARDINFO> implements IREWARDINFO {
  @Serializable
  name!: string;
  @Serializable
  rewardbal!: number;
  @Serializable
  rewardearned?: number | undefined;
}

/** OFX section 11.4.3.1 */
interface ICCSTMTRQ {
  ccacctfrom: CCACCTFROM;
  inctran?: INCTRAN;
  includepending?: boolean;
  inctranimg?: boolean;
}
export class CCSTMTRQ extends Aggregate<ICCSTMTRQ> implements ICCSTMTRQ {
  @Serializable
  ccacctfrom!: CCACCTFROM;
  @Serializable
  inctran?: INCTRAN | undefined;
  @Serializable
  includepending?: boolean | undefined;
  @Serializable
  inctranimg?: boolean | undefined;
}

/** OFX section 11.4.3.2 */
interface ICCSTMTRS {
  curdef: CurrencyCodes;
  ccacctfrom: CCACCTFROM;
  banktranlist?: BANKTRANLIST;
  //    banktranlistp
  ledgerbal: LEDGERBAL;
  availbal?: AVAILBAL;
  cashadvbalamt?: number;
  intratepurch?: number;
  intratecash?: number;
  intratexfer?: number;
  rewardinfo?: REWARDINFO;
  ballist?: BALLIST;
  mktginfo?: string;
}
export class CCSTMTRS extends Aggregate<ICCSTMTRS> implements ICCSTMTRS {
  @Serializable
  curdef!: CurrencyCodes;
  @Serializable
  ccacctfrom!: CCACCTFROM;
  @Serializable
  banktranlist?: any;
  @Serializable
  ledgerbal!: LEDGERBAL;
  @Serializable
  availbal?: AVAILBAL | undefined;
  @Serializable
  cashadvbalamt?: number | undefined;
  @Serializable
  intratepurch?: number | undefined;
  @Serializable
  intratecash?: number | undefined;
  @Serializable
  intratexfer?: number | undefined;
  @Serializable
  rewardinfo?: REWARDINFO | undefined;
  @Serializable
  ballist?: BALLIST | undefined;
  @Serializable
  mktginfo?: string | undefined;
}

/** OFX section 11.4.3.1 */
interface ICCSTMTTRNRQ extends TransactionRequest {
  ccstmtrq: CCSTMTRQ;
}

export class CCSTMTTRNRQ
  extends Aggregate<ICCSTMTTRNRQ>
  implements ICCSTMTTRNRQ
{
  @Serializable
  ccstmtrq!: CCSTMTRQ;
  @Serializable
  trnuid!: string;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  tan?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}

/** OFX section 11.4.3.2 */
interface ICCSTMTTRNRS extends TransactionResponse {
  ccstmtrs?: CCSTMTRS;
}

export class CCSTMTTRNRS
  extends Aggregate<ICCSTMTTRNRS>
  implements ICCSTMTTRNRS
{
  @Serializable
  ccstmtrs?: CCSTMTRS | undefined;
  @Serializable
  trnuid!: string;
  @Serializable
  status!: STATUS;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}
