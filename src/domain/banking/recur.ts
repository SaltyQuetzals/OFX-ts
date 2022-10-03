///
/** Recurring funds transfer - OFX Section 11.10 */

import { Serializable } from "../../serialization/Serializable";
import { Aggregate } from "../base/typing";
import { TransactionRequest, TransactionResponse } from "../base/wrappers";
import { STATUS, OFXEXTENSION } from "../common";
import { INTERRQ, INTERRS } from "./interxfer";
import { INTRARQ, INTRARS } from "./xfer";

///
export type Frequency =
  | "WEEKLY"
  | "BIWEEKLY"
  | "TWICEMONTHLY"
  | "MONTHLY"
  | "FOURWEEKS"
  | "BIMONTHLY"
  | "QUARTERLY"
  | "SEMIANNUALLY"
  | "ANNUALLY";

/** OFX section 10.2 */
interface IRECURRINST {
  ninsts?: number;
  freq: Frequency;
}

export class RECURRINST extends Aggregate<IRECURRINST> implements IRECURRINST {
  @Serializable
  ninsts?: number | undefined;
  @Serializable
  freq!: Frequency;
}

/** OFX section 11.10.1.1 */
interface IRECINTRARQ {
  recurrinst: RECURRINST;
  intrarq: INTRARQ;
}

export class RECINTRARQ extends Aggregate<IRECINTRARQ> implements IRECINTRARQ {
  @Serializable
  recurrinst!: RECURRINST;
  @Serializable
  intrarq!: INTRARQ;
}

/** OFX section 11.10.1.2 */
interface IRECINTRARS {
  recsrvrtid: String;
  recurrinst: RECURRINST;
  intrars: INTRARS;
}

export class RECINTRARS extends Aggregate<IRECINTRARS> implements IRECINTRARS {
  @Serializable
  recsrvrtid!: String;
  @Serializable
  recurrinst!: RECURRINST;
  @Serializable
  intrars!: INTRARS;
}

/** OFX section 11.10.2.1 */
interface IRECINTRAMODRQ {
  recsrvrtid: String;
  recurrinst: RECURRINST;
  intrarq: INTRARQ;
  modpending: boolean;
}

export class RECINTRAMODRQ
  extends Aggregate<IRECINTRAMODRQ>
  implements IRECINTRAMODRQ
{
  @Serializable
  recsrvrtid!: String;
  @Serializable
  recurrinst!: RECURRINST;
  @Serializable
  intrarq!: INTRARQ;
  @Serializable
  modpending!: boolean;
}

/** OFX section 11.10.2.2 */
interface IRECINTRAMODRS {
  recsrvrtid: String;
  recurrinst: RECURRINST;
  intrars: INTRARS;
  modpending: boolean;
}

export class RECINTRAMODRS
  extends Aggregate<IRECINTRAMODRS>
  implements IRECINTRAMODRS
{
  @Serializable
  recsrvrtid!: String;
  @Serializable
  recurrinst!: RECURRINST;
  @Serializable
  intrars!: INTRARS;
  @Serializable
  modpending!: boolean;
}

/** OFX section 11.10.3.1 */
interface IRECINTRACANRQ {
  recsrvrtid: String;
  canpending: boolean;
}

export class RECINTRACANRQ
  extends Aggregate<IRECINTRACANRQ>
  implements IRECINTRACANRQ
{
  @Serializable
  recsrvrtid!: String;
  @Serializable
  canpending!: boolean;
}

/** OFX section 11.10.3.2 */
interface IRECINTRACANRS {
  recsrvrtid: String;
  canpending: boolean;
}

export class RECINTRACANRS
  extends Aggregate<IRECINTRACANRS>
  implements IRECINTRACANRS
{
  @Serializable
  recsrvrtid!: String;
  @Serializable
  canpending!: boolean;
}

/** OFX section 11.10.1.1 */
interface IRECINTRATRNRQ extends TransactionRequest {
  recintrarq?: RECINTRARQ;
  recintramodrq?: RECINTRAMODRQ;
  recintracanrq?: RECINTRACANRQ;
}

export class RECINTRATRNRQ
  extends Aggregate<IRECINTRATRNRQ>
  implements IRECINTRATRNRQ
{
  @Serializable
  recintrarq?: RECINTRARQ | undefined;
  @Serializable
  recintramodrq?: RECINTRAMODRQ | undefined;
  @Serializable
  recintracanrq?: RECINTRACANRQ | undefined;
  @Serializable
  trnuid!: string;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  tan?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}

/** OFX section 11.10.1.2 */
interface IRECINTRATRNRS extends TransactionResponse {
  recintrars?: RECINTRARS;
  recintramodrs?: RECINTRAMODRS;
  recintracanrs?: RECINTRACANRS;
}

export class RECINTRATRNRS
  extends Aggregate<IRECINTRATRNRS>
  implements IRECINTRATRNRS
{
  @Serializable
  recintrars?: RECINTRARS | undefined;
  @Serializable
  recintramodrs?: RECINTRAMODRS | undefined;
  @Serializable
  recintracanrs?: RECINTRACANRS | undefined;
  @Serializable
  trnuid!: string;
  @Serializable
  status!: STATUS;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}

/** OFX section 11.10.4.1 */
interface IRECINTERRQ {
  recurrinst: RECURRINST;
  interrq: INTERRQ;
}

export class RECINTERRQ extends Aggregate<IRECINTERRQ> implements IRECINTERRQ {
  @Serializable
  recurrinst!: RECURRINST;
  @Serializable
  interrq!: INTERRQ;
}

/** OFX section 11.10.4.2 */
interface IRECINTERRS {
  recsrvrtid: String;
  recurrinst: RECURRINST;
  interrs: INTERRS;
}

export class RECINTERRS extends Aggregate<IRECINTERRS> implements IRECINTERRS {
  @Serializable
  recsrvrtid!: String;
  @Serializable
  recurrinst!: RECURRINST;
  @Serializable
  interrs!: INTERRS;
}

/** OFX section 11.10.5.1 */
interface IRECINTERMODRQ {
  recsrvrtid: String;
  recurrinst: RECURRINST;
  interrq: INTERRQ;
  modpending: boolean;
}

export class RECINTERMODRQ
  extends Aggregate<IRECINTERMODRQ>
  implements IRECINTERMODRQ
{
  @Serializable
  recsrvrtid!: String;
  @Serializable
  recurrinst!: RECURRINST;
  @Serializable
  interrq!: INTERRQ;
  @Serializable
  modpending!: boolean;
}

/** OFX section 11.10.5.2 */
interface IRECINTERMODRS {
  recsrvrtid: String;
  recurrinst: RECURRINST;
  interrs: INTERRS;
  modpending: boolean;
}

export class RECINTERMODRS
  extends Aggregate<IRECINTERMODRS>
  implements IRECINTERMODRS
{
  @Serializable
  recsrvrtid!: String;
  @Serializable
  recurrinst!: RECURRINST;
  @Serializable
  interrs!: INTERRS;
  @Serializable
  modpending!: boolean;
}

/** OFX section 11.10.6.1 */
interface IRECINTERCANRQ {
  recsrvrtid: String;
  canpending: boolean;
}

export class RECINTERCANRQ
  extends Aggregate<IRECINTERCANRQ>
  implements IRECINTERCANRQ
{
  @Serializable
  recsrvrtid!: String;
  @Serializable
  canpending!: boolean;
}

/** OFX section 11.10.6.2 */
interface IRECINTERCANRS {
  recsrvrtid: String;
  canpending: boolean;
}

export class RECINTERCANRS
  extends Aggregate<IRECINTERCANRS>
  implements IRECINTERCANRS
{
  @Serializable
  recsrvrtid!: String;
  @Serializable
  canpending!: boolean;
}

/** OFX section 11.10.5.1 */
interface IRECINTERTRNRQ extends TransactionRequest {
  recinterrq?: RECINTERRQ;
  recintermodrq?: RECINTERMODRQ;
  recintercanrq?: RECINTERCANRQ;
}

export class RECINTERTRNRQ
  extends Aggregate<IRECINTERTRNRQ>
  implements IRECINTERTRNRQ
{
  @Serializable
  recinterrq?: RECINTERRQ | undefined;
  @Serializable
  recintermodrq?: RECINTERMODRQ | undefined;
  @Serializable
  recintercanrq?: RECINTERCANRQ | undefined;
  @Serializable
  trnuid!: string;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  tan?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}

/** OFX section 11.10.5.2 */
interface IRECINTERTRNRS extends TransactionResponse {
  recinterrs?: RECINTERRS;
  recintermodrs?: RECINTERMODRS;
  recintercanrs?: RECINTERCANRS;
}

export class RECINTERTRNRS
  extends Aggregate<IRECINTERTRNRS>
  implements IRECINTERTRNRS
{
  @Serializable
  recinterrs?: RECINTERRS | undefined;
  @Serializable
  recintermodrs?: RECINTERMODRS | undefined;
  @Serializable
  recintercanrs?: RECINTERCANRS | undefined;
  @Serializable
  trnuid!: string;
  @Serializable
  status!: STATUS;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}
