///
/** Interbank fund transfers - OFX Section 11.8 */
///

import { Serializable } from "../../serialization/Serializable";
import { Aggregate } from "../base/typing";
import {
  TransactionRequest as TransactionRequest,
  TransactionResponse as TransactionResponse,
} from "../base/wrappers";
import { OFXEXTENSION, STATUS } from "../common";
import { CurrencyCodes } from "../i18n";
import { XFERINFO, XFERPRCSTS } from "./xfer";

interface IINTERRQ {
  xferinfo: XFERINFO;
}

/** OFX section 11.8.2.1 */
export class INTERRQ extends Aggregate<IINTERRQ> implements IINTERRQ {
  @Serializable
  xferinfo!: XFERINFO;
}

interface IINTERRS {
  curdef: CurrencyCodes;
  srvrtid: string;
  xferinfo: XFERINFO;
  dtxferprj?: Date;
  dtposted?: Date;
  refnum?: string;
  recsrvrtid?: string;
  xferprcsts: XFERPRCSTS;
}

/** OFX section 11.8.2.2 */
export class INTERRS extends Aggregate<IINTERRS> implements IINTERRS {
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
  refnum?: string | undefined;
  @Serializable
  recsrvrtid?: string | undefined;
  @Serializable
  xferprcsts!: XFERPRCSTS;
}

interface IINTERMODRQ {
  srvrtid: string;
  xferinfo: XFERINFO;
}

/** OFX section 11.8.3.1 */
export class INTERMODRQ extends Aggregate<IINTERMODRQ> implements IINTERMODRQ {
  @Serializable
  srvrtid!: string;
  @Serializable
  xferinfo!: XFERINFO;
}

interface IINTERCANRQ {
  srvrtid: string;
}

/** OFX section 11.8.4.1 */
export class INTERCANRQ extends Aggregate<IINTERCANRQ> implements IINTERCANRQ {
  @Serializable
  srvrtid!: string;
}

interface IINTERMODRS {
  srvrtid: string;
  xferinfo: XFERINFO;
  xferprcsts?: XFERPRCSTS;
}

/** OFX section 11.8.3.2 */
export class INTERMODRS extends Aggregate<IINTERMODRS> implements IINTERMODRS {
  @Serializable
  srvrtid!: string;
  @Serializable
  xferinfo!: XFERINFO;
  @Serializable
  xferprcsts?: XFERPRCSTS | undefined;
}

interface IINTERCANRS {
  srvrtid: string;
}

/** OFX section 11.8.4.2 */
export class INTERCANRS extends Aggregate<IINTERCANRS> implements IINTERCANRS {
  @Serializable
  srvrtid!: string;
}

/** OFX section 11.8.2.1 */
interface IINTERTRNRQ extends TransactionRequest {
  interrq?: INTERRQ;
  intermodrq?: INTERMODRQ;
  intercanrq?: INTERCANRQ;
}

/** OFX section 11.8.4.2 */
export class INTERTRNRQ extends Aggregate<IINTERTRNRQ> implements IINTERTRNRQ {
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

/** OFX section 11.8.2.2 */
interface IINTERTRNRS extends TransactionResponse {
  interrs?: INTERRS;
  intermodrs?: INTERMODRS;
  intercanrs?: INTERCANRS;
}

/** OFX section 11.8.2.2 */
export class INTERTRNRS extends Aggregate<IINTERTRNRS> implements IINTERTRNRS {
  @Serializable
  interrs?: INTERRS | undefined;
  @Serializable
  intermodrs?: INTERMODRS | undefined;
  @Serializable
  intercanrs?: INTERCANRS | undefined;
  @Serializable
  trnuid!: string;
  @Serializable
  status!: STATUS;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}
