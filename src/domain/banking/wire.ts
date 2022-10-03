///
/** Wire fund transfers - OFX Section 11.9 */
///

import { Serializable } from "../../serialization/Serializable";
import { Aggregate } from "../base/typing";
import { TransactionRequest, TransactionResponse } from "../base/wrappers";
import { STATUS, OFXEXTENSION } from "../common";
import { CountryCodes, CurrencyCodes } from "../i18n";
import { BANKACCTTO, BANKACCTFROM } from "./stmt";

/** OFX section 11.9.1.1.1 */
interface IWIREBENEFICIARY {
  name: String;
  bankacctto: BANKACCTTO;
  memo?: String;
}

export class WIREBENEFICIARY
  extends Aggregate<IWIREBENEFICIARY>
  implements IWIREBENEFICIARY
{
  @Serializable
  name!: String;
  @Serializable
  bankacctto!: BANKACCTTO;
  @Serializable
  memo?: String | undefined;
}

/** OFX section 11.9.1.1.2 */
interface IEXTBANKDESC {
  name: String;
  bankid: String;
  addr1: String;
  addr2?: String;
  addr3?: String;
  city: String;
  state: String;
  postalcode: String;
  country?: CountryCodes;
  phone?: String;
}

export class EXTBANKDESC
  extends Aggregate<IEXTBANKDESC>
  implements IEXTBANKDESC
{
  @Serializable
  name!: String;
  @Serializable
  bankid!: String;
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
  country?: CountryCodes | undefined;
  @Serializable
  phone?: String | undefined;
}

/** OFX section 11.9.1.1.1 */
interface IWIREDESTBANK {
  extbankdesc: EXTBANKDESC;
}

export class WIREDESTBANK
  extends Aggregate<IWIREDESTBANK>
  implements IWIREDESTBANK
{
  @Serializable
  extbankdesc!: EXTBANKDESC;
}

/** OFX section 11.9.1.1.1 */
interface IWIRERQ {
  bankacctfrom: BANKACCTFROM;
  wirebeneficiary: WIREBENEFICIARY;
  wiredestbank?: WIREDESTBANK;
  trnamt: number;
  dtdue?: Date;
  payinstruct?: String;
}

export class WIRERQ extends Aggregate<IWIRERQ> implements IWIRERQ {
  @Serializable
  bankacctfrom!: BANKACCTFROM;
  @Serializable
  wirebeneficiary!: WIREBENEFICIARY;
  @Serializable
  wiredestbank?: WIREDESTBANK | undefined;
  @Serializable
  trnamt!: number;
  @Serializable
  dtdue?: Date | undefined;
  @Serializable
  payinstruct?: String | undefined;
}

/** OFX section 11.9.1.2 */
interface IWIRERS {
  curdef: CurrencyCodes;
  srvrtid: String;
  bankacctfrom: BANKACCTFROM;
  wirebeneficiary: WIREBENEFICIARY;
  wiredestbank?: WIREDESTBANK;
  trnamt: number;
  dtdue?: Date;
  payinstruct?: String;
  dtxferprj?: Date;
  dtposted?: Date;
  fee?: number;
  confmsg: String;
}

export class WIRERS extends Aggregate<IWIRERS> implements IWIRERS {
  @Serializable
  curdef!: CurrencyCodes;
  @Serializable
  srvrtid!: String;
  @Serializable
  bankacctfrom!: BANKACCTFROM;
  @Serializable
  wirebeneficiary!: WIREBENEFICIARY;
  @Serializable
  wiredestbank?: WIREDESTBANK | undefined;
  @Serializable
  trnamt!: number;
  @Serializable
  dtdue?: Date | undefined;
  @Serializable
  payinstruct?: String | undefined;
  @Serializable
  dtxferprj?: Date | undefined;
  @Serializable
  dtposted?: Date | undefined;
  @Serializable
  fee?: number | undefined;
  @Serializable
  confmsg!: String;
}

/** OFX section 11.9.2.1 */
interface IWIRECANRQ {
  srvrtid: String;
}

export class WIRECANRQ extends Aggregate<IWIRECANRQ> implements IWIRECANRQ {
  @Serializable
  srvrtid!: String;
}

/** OFX section 11.9.2.2 */
interface IWIRECANRS {
  srvrtid: String;
}

export class WIRECANRS extends Aggregate<IWIRECANRS> implements IWIRECANRS {
  @Serializable
  srvrtid!: String;
}

/** OFX section 11.9.2.1 */
interface IWIRETRNRQ extends TransactionRequest {
  wirerq?: WIRERQ;
  wirecanrq?: WIRECANRQ;
}

export class WIRETRNRQ extends Aggregate<IWIRETRNRQ> implements IWIRETRNRQ {
  @Serializable
  wirerq?: WIRERQ | undefined;
  @Serializable
  wirecanrq?: WIRECANRQ | undefined;
  @Serializable
  trnuid!: string;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  tan?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}

/** OFX section 11.9.2.2 */
interface IWIRETRNRS extends TransactionResponse {
  wirers?: WIRERS;
  wirecanrs?: WIRECANRS;
}

export class WIRETRNRS extends Aggregate<IWIRETRNRS> implements IWIRETRNRS {
  @Serializable
  wirers?: WIRERS | undefined;
  @Serializable
  wirecanrs?: WIRECANRS | undefined;
  @Serializable
  trnuid!: string;
  @Serializable
  status!: STATUS;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}
