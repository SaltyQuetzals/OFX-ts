///
/** Bank email & customer notification - OFX Section 11.11 */
///

import { Serializable } from "../../serialization/Serializable";
import { Aggregate } from "../base/typing";
import { TransactionRequest, TransactionResponse } from "../base/wrappers";
import { STATUS, OFXEXTENSION } from "../common";
import { MAIL } from "../email";
import { BANKACCTFROM, CCACCTFROM } from "./stmt";

/** OFX section 11.11.1.1 */
interface IBANKMAILRQ {
  bankacctfrom?: BANKACCTFROM;
  ccacctfrom?: CCACCTFROM;
  mail: MAIL;
}

export class BANKMAILRQ extends Aggregate<IBANKMAILRQ> implements IBANKMAILRQ {
  @Serializable
  bankacctfrom?: BANKACCTFROM | undefined;
  @Serializable
  ccacctfrom?: CCACCTFROM | undefined;
  @Serializable
  mail!: MAIL;
}

/** OFX section 11.11.1.2 */
interface IBANKMAILRS {
  bankacctfrom?: BANKACCTFROM;
  ccacctfrom?: CCACCTFROM;

  mail: MAIL;
}

export class BANKMAILRS extends Aggregate<IBANKMAILRS> implements IBANKMAILRS {
  @Serializable
  bankacctfrom?: BANKACCTFROM | undefined;
  @Serializable
  ccacctfrom?: CCACCTFROM | undefined;
  @Serializable
  mail!: MAIL;
}

/** OFX section 11.11.3.1 */
interface ICHKMAILRS {
  bankacctfrom: BANKACCTFROM;
  mail: MAIL;
  checknum: string;
  trnamt?: number;
  dtuser?: Date;
  fee?: number;
}

export class CHKMAILRS extends Aggregate<ICHKMAILRS> implements ICHKMAILRS {
  @Serializable
  bankacctfrom!: BANKACCTFROM;
  @Serializable
  mail!: MAIL;
  @Serializable
  checknum!: string;
  @Serializable
  trnamt?: number | undefined;
  @Serializable
  dtuser?: Date | undefined;
  @Serializable
  fee?: number | undefined;
}

/** OFX section 11.11.3.2 */
interface IDEPMAILRS {
  bankacctfrom: BANKACCTFROM;
  mail: MAIL;
  trnamt: number;
  dtuser?: Date;
  fee?: number;
}

export class DEPMAILRS extends Aggregate<IDEPMAILRS> implements IDEPMAILRS {
  @Serializable
  bankacctfrom!: BANKACCTFROM;
  @Serializable
  mail!: MAIL;
  @Serializable
  trnamt!: number;
  @Serializable
  dtuser?: Date | undefined;
  @Serializable
  fee?: number | undefined;
}

/** OFX section 11.11.1.1 */
interface IBANKMAILTRNRQ extends TransactionRequest {
  bankmailrq: BANKMAILRQ;
}

export class BANKMAILTRNRQ
  extends Aggregate<IBANKMAILTRNRQ>
  implements IBANKMAILTRNRQ
{
  @Serializable
  bankmailrq!: BANKMAILRQ;
  @Serializable
  trnuid!: string;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  tan?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}

/** OFX section 11.11.1.2 */
interface IBANKMAILTRNRS extends TransactionResponse {
  bankmailrs?: BANKMAILRS;
  chkmailrs?: CHKMAILRS;
  depmailrs?: DEPMAILRS;
}

export class BANKMAILTRNRS
  extends Aggregate<IBANKMAILTRNRS>
  implements IBANKMAILTRNRS
{
  @Serializable
  bankmailrs?: BANKMAILRS | undefined;
  @Serializable
  chkmailrs?: CHKMAILRS | undefined;
  @Serializable
  depmailrs?: DEPMAILRS | undefined;
  @Serializable
  trnuid!: string;
  @Serializable
  status!: STATUS;
  @Serializable
  cltcookie?: string | undefined;
  @Serializable
  ofxextension?: OFXEXTENSION | undefined;
}
