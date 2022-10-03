///
/** Bank stop check - OFX Section 11.6 */
///

import { Serializable } from "../../serialization/Serializable";
import { Aggregate } from "../base/typing";
import { TransactionRequest, TransactionResponse } from "../base/wrappers";
import { STATUS, OFXEXTENSION } from "../common";
import { CURRENCY, ORIGCURRENCY, CurrencyCodes } from "../i18n";
import { BANKACCTFROM } from "./stmt";

/** OFX section 11.6.1.1.1 */
interface ICHKRANGE {
  chknumstart: string;
  chknumend?: string;
}

export class CHKRANGE extends Aggregate<ICHKRANGE> implements ICHKRANGE {
  @Serializable
  chknumstart!: string;
  @Serializable
  chknumend?: string | undefined;
}

/** OFX section 11.6.1.1.2 */
interface ICHKDESC {
  name: string;
  chknum?: string;
  dtuser?: Date;
  trnamt?: number;
}

export class CHKDESC extends Aggregate<ICHKDESC> implements ICHKDESC {
  @Serializable
  name!: string;
  @Serializable
  chknum?: string | undefined;
  @Serializable
  dtuser?: Date | undefined;
  @Serializable
  trnamt?: number | undefined;
}

/** OFX section 11.6.1.1 */
interface ISTPCHKRQ {
  bankacctfrom: BANKACCTFROM;
  chkrange?: CHKRANGE;
  chkdesc?: CHKDESC;
}

export class STPCHKRQ extends Aggregate<ISTPCHKRQ> implements ISTPCHKRQ {
  @Serializable
  bankacctfrom!: BANKACCTFROM;
  @Serializable
  chkrange?: CHKRANGE | undefined;
  @Serializable
  chkdesc?: CHKDESC | undefined;
}

/** OFX section 11.6.1.2.1 */
interface ISTPCHKNUM {
  checknum: string;
  name?: string;
  dtuser?: Date;
  trnamt?: number;
  chkstatus: string;
  chkerror?: string;
  currency?: CURRENCY;
  origcurrency?: ORIGCURRENCY;
}

export class STPCHKNUM extends Aggregate<ISTPCHKNUM> implements ISTPCHKNUM {
  @Serializable
  checknum!: string;
  @Serializable
  name?: string | undefined;
  @Serializable
  dtuser?: Date | undefined;
  @Serializable
  trnamt?: number | undefined;
  @Serializable
  chkstatus!: string;
  @Serializable
  chkerror?: string | undefined;
  @Serializable
  currency?: CURRENCY | undefined;
  @Serializable
  origcurrency?: ORIGCURRENCY | undefined;
}

/** OFX section 11.6.1.1 */
interface ISTPCHKRS {
  curdef: CurrencyCodes;
  bankacctfrom: BANKACCTFROM;
  stpchknum?: [STPCHKNUM];
  fee: number;
  feemsg: string;
}

export class STPCHKRS extends Aggregate<ISTPCHKRS> implements ISTPCHKRS {
  @Serializable
  curdef!: CurrencyCodes;
  @Serializable
  bankacctfrom!: BANKACCTFROM;
  @Serializable
  stpchknum?: [STPCHKNUM] | undefined;
  @Serializable
  fee!: number;
  @Serializable
  feemsg!: string;
}

/** OFX section 11.6.1.1 */
interface ISTPCHKTRNRQ extends TransactionRequest {
  stpchkrq: STPCHKRQ;
}

export class STPCHKTRNRQ
  extends Aggregate<ISTPCHKTRNRQ>
  implements ISTPCHKTRNRQ
{
  @Serializable
  stpchkrq!: STPCHKRQ;
  @Serializable
  trnuid!: string;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  tan?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}

/** OFX section 11.6.1.2 */
interface ISTPCHKTRNRS extends TransactionResponse {
  stpchkrs: STPCHKRS;
}

export class STPCHKTRNRS
  extends Aggregate<ISTPCHKTRNRS>
  implements ISTPCHKTRNRS
{
  @Serializable
  stpchkrs!: STPCHKRS;
  @Serializable
  trnuid!: string;
  @Serializable
  status!: STATUS;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}
