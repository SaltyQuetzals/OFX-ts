///
/** Intrabank funds transfer  - OFX Section 11.6 */
///

import { Serializable } from "../../serialization/Serializable";
import { Aggregate } from "../base/typing";
import { TransactionRequest, TransactionResponse } from "../base/wrappers";
import { STATUS, OFXEXTENSION } from "../common";
import { CurrencyCodes } from "../i18n";
import { INTERRQ, INTERMODRQ, INTERCANRQ } from "./interxfer";
import { BANKACCTFROM, CCACCTFROM, BANKACCTTO, CCACCTTO } from "./stmt";

/** OFX section 11.3.5 */
interface IXFERINFO {
  bankacctfrom?: BANKACCTFROM;
  ccacctfrom?: CCACCTFROM;
  bankacctto?: BANKACCTTO;
  ccacctto?: CCACCTTO;
  trnamt: number;
  dtdue?: Date;
}

export class XFERINFO extends Aggregate<IXFERINFO> implements IXFERINFO {
  @Serializable
  bankacctfrom?: BANKACCTFROM | undefined;
  @Serializable
  ccacctfrom?: CCACCTFROM | undefined;
  @Serializable
  bankacctto?: BANKACCTTO | undefined;
  @Serializable
  ccacctto?: CCACCTTO | undefined;
  @Serializable
  trnamt!: number;
  @Serializable
  dtdue?: Date | undefined;
}

/** OFX section 11.7.1.1 */
interface IINTRARQ {
  xferinfo: XFERINFO;
}

export class INTRARQ extends Aggregate<IINTRARQ> implements IINTRARQ {
  @Serializable
  xferinfo!: XFERINFO;
}

export type TransferPRCCode =
  | "WILLPROCESSON"
  | "POSTEDON"
  | "NOFUNDSON"
  | "CANCELEDON"
  | "FAILEDON";

/** OFX section 11.3.6 */
interface IXFERPRCSTS {
  xferprccode: TransferPRCCode;
  dtxferprc: Date;
}

export class XFERPRCSTS extends Aggregate<IXFERPRCSTS> implements IXFERPRCSTS {
  @Serializable
  xferprccode!: TransferPRCCode;
  @Serializable
  dtxferprc!: Date;
}

/** OFX section 11.7.1.2 */
interface IINTRARS {
  curdef: CurrencyCodes;
  srvrtid: string;
  xferinfo: XFERINFO;
  dtxferprj?: Date;
  dtposted?: Date;
  recsrvrtid?: string;
  xferprcsts?: XFERPRCSTS;
}

export class INTRARS extends Aggregate<IINTRARS> implements IINTRARS {
  @Serializable
  curdef!: CurrencyCodes;
  @Serializable
  srvrtid!: string;
  @Serializable
  xferinfo!: XFERINFO;
  @Serializable
  dtxferprj?: Date | undefined;
  @Serializable
  dtposted?: Date | undefined;
  @Serializable
  recsrvrtid?: string | undefined;
  @Serializable
  xferprcsts?: XFERPRCSTS | undefined;
}

/** OFX section 11.7.2.1 */
interface IINTRAMODRQ {
  srvrtid: string;
  xferinfo: XFERINFO;
}

export class INTRAMODRQ extends Aggregate<IINTRAMODRQ> implements IINTRAMODRQ {
  @Serializable
  srvrtid!: string;
  @Serializable
  xferinfo!: XFERINFO;
}

/** OFX section 11.7.3.1 */
interface IINTRACANRQ {
  srvrtid: string;
}

export class INTRACANRQ extends Aggregate<IINTRACANRQ> implements IINTRACANRQ {
  @Serializable
  srvrtid!: string;
}

/** OFX section 11.7.2.2 */
interface IINTRAMODRS {
  srvrtid: string;
  xferinfo: XFERINFO;
  xferprcsts?: XFERPRCSTS;
}

export class INTRAMODRS extends Aggregate<IINTRAMODRS> implements IINTRAMODRS {
  @Serializable
  srvrtid!: string;
  @Serializable
  xferinfo!: XFERINFO;
  @Serializable
  xferprcsts?: XFERPRCSTS | undefined;
}

/** OFX section 11.7.3.2 */
interface IINTRACANRS {
  srvrtid: string;
}

export class INTRACANRS extends Aggregate<IINTRACANRS> implements IINTRACANRS {
  @Serializable
  srvrtid!: string;
}

/** OFX section 11.7.1.1 */
interface IINTRATRNRQ extends TransactionRequest {
  interrq?: INTERRQ;
  intermodrq?: INTERMODRQ;
  intercanrq?: INTERCANRQ;
}

export class INTRATRNRQ extends Aggregate<IINTRATRNRQ> implements IINTRATRNRQ {
  @Serializable
  interrq?: INTERRQ | undefined;
  @Serializable
  intermodrq?: INTERMODRQ | undefined;
  @Serializable
  intercanrq?: INTERCANRQ | undefined;
  @Serializable
  trnuid!: string;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  tan?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}

/** OFX section 11.7.1.2 */
interface IINTRATRNRS extends TransactionResponse {
  intrars?: INTRARS;
  intramodrs?: INTRAMODRS;
  intracanrs?: INTRACANRS;
}

export class INTRATRNRS extends Aggregate<IINTRATRNRS> implements IINTRATRNRS {
  @Serializable
  intrars?: INTRARS | undefined;
  @Serializable
  intramodrs?: INTRAMODRS | undefined;
  @Serializable
  intracanrs?: INTRACANRS | undefined;
  @Serializable
  trnuid!: string;
  @Serializable
  status!: STATUS;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}
