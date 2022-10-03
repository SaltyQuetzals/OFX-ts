import { Serializable } from "../../serialization/Serializable";
import { Aggregate } from "../base/typing";
import { MSGSETCORE } from "../common";
import { INTERTRNRQ, INTERTRNRS } from "./interxfer";
import { BANKMAILTRNRQ, BANKMAILTRNRS } from "./mail";
import {
  RECINTRATRNRQ,
  RECINTRATRNRS,
  RECINTERTRNRQ,
  RECINTERTRNRS,
} from "./recur";
import {
  STMTTRNRQ,
  STMTTRNRS,
  AccountType,
  CCSTMTTRNRQ,
  CCSTMTTRNRS,
} from "./stmt";
import {
  STMTENDTRNRQ,
  STMTENDTRNRS,
  CCSTMTENDTRNRQ,
  CCSTMTENDTRNRS,
} from "./stmtend";
import { STPCHKTRNRQ, STPCHKTRNRS } from "./stpchk";
import {
  STPCHKSYNCRQ,
  INTRASYNCRQ,
  RECINTRASYNCRQ,
  BANKMAILSYNCRQ,
  STPCHKSYNCRS,
  INTRASYNCRS,
  RECINTRASYNCRS,
  BANKMAILSYNCRS,
  INTERSYNCRQ,
  RECINTERSYNCRQ,
  INTERSYNCRS,
  RECINTERSYNCRS,
  WIRESYNCRQ,
  WIRESYNCRS,
} from "./sync";
import { WIRETRNRQ, WIRETRNRS } from "./wire";
import { INTRATRNRQ, INTRATRNRS } from "./xfer";

export type DAYS =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";

/** OFX section 11.13.1.1.1 */
interface IBANKMSGSRQV1 {
  stmttrnrq?: STMTTRNRQ[];
  stmtendtrnrq?: STMTENDTRNRQ[];
  stpchktrnrq?: STPCHKTRNRQ[];
  intratrnrq?: INTRATRNRQ[];
  recintratrnrq?: RECINTRATRNRQ[];
  bankmailtrnrq?: BANKMAILTRNRQ[];
  stpchksyncrq?: STPCHKSYNCRQ[];
  intrasyncrq?: INTRASYNCRQ[];
  recintrasyncrq?: RECINTRASYNCRQ[];
  bankmailsyncrq?: BANKMAILSYNCRQ[];
}
export class BANKMSGSRQV1
  extends Aggregate<IBANKMSGSRQV1>
  implements IBANKMSGSRQV1
{
  @Serializable
  stmttrnrq?: STMTTRNRQ[];
  @Serializable
  stmtendtrnrq?: STMTENDTRNRQ[];
  @Serializable
  stpchktrnrq?: STPCHKTRNRQ[];
  @Serializable
  intratrnrq?: INTRATRNRQ[];
  @Serializable
  recintratrnrq?: RECINTRATRNRQ[];
  @Serializable
  bankmailtrnrq?: BANKMAILTRNRQ[];
  @Serializable
  stpchksyncrq?: STPCHKSYNCRQ[];
  @Serializable
  intrasyncrq?: INTRASYNCRQ[];
  @Serializable
  recintrasyncrq?: RECINTRASYNCRQ[];
  @Serializable
  bankmailsyncrq?: BANKMAILSYNCRQ[];
}

/** OFX section 11.13.1.1.2 */
interface IBANKMSGSRSV1 {
  stmttrnrs?: STMTTRNRS[];
  stmtendtrnrs?: STMTENDTRNRS[];
  stpchktrnrs?: STPCHKTRNRS[];
  intratrnrs?: INTRATRNRS[];
  recintratrnrs?: RECINTRATRNRS[];
  bankmailtrnrs?: BANKMAILTRNRS[];
  stpchksyncrs?: STPCHKSYNCRS[];
  intrasyncrs?: INTRASYNCRS[];
  recintrasyncrs?: RECINTRASYNCRS[];
  bankmailsyncrs?: BANKMAILSYNCRS[];
}
export class BANKMSGSRSV1
  extends Aggregate<IBANKMSGSRSV1>
  implements IBANKMSGSRSV1
{
  @Serializable
  stmttrnrs?: STMTTRNRS[];
  @Serializable
  stmtendtrnrs?: STMTENDTRNRS[];
  @Serializable
  stpchktrnrs?: STPCHKTRNRS[];
  @Serializable
  intratrnrs?: INTRATRNRS[];
  @Serializable
  recintratrnrs?: RECINTRATRNRS[];
  @Serializable
  bankmailtrnrs?: BANKMAILTRNRS[];
  @Serializable
  stpchksyncrs?: STPCHKSYNCRS[];
  @Serializable
  intrasyncrs?: INTRASYNCRS[];
  @Serializable
  recintrasyncrs?: RECINTRASYNCRS[];
  @Serializable
  bankmailsyncrs?: BANKMAILSYNCRS[];
}

/** OFX section 11.13.2.2 */
interface IXFERPROF {
  procdaysoff?: DAYS[];
  /** Time only */
  procendtm: Date;
  cansched: boolean;
  canrecur: boolean;
  canloan?: boolean;
  canschedloan?: boolean;
  canrecurloan?: boolean;
  canmodxfers: boolean;
  canmodmdls: boolean;
  modelwnd: number;
  dayswith: number;
  dfltdaystopay: number;
}
export class XFERPROF extends Aggregate<IXFERPROF> implements IXFERPROF {
  @Serializable
  procdaysoff?: DAYS[] | undefined;
  @Serializable
  procendtm!: Date;
  @Serializable
  cansched!: boolean;
  @Serializable
  canrecur!: boolean;
  @Serializable
  canloan?: boolean | undefined;
  @Serializable
  canschedloan?: boolean | undefined;
  @Serializable
  canrecurloan?: boolean | undefined;
  @Serializable
  canmodxfers!: boolean;
  @Serializable
  canmodmdls!: boolean;
  @Serializable
  modelwnd!: number;
  @Serializable
  dayswith!: number;
  @Serializable
  dfltdaystopay!: number;
}

/** OFX section 11.13.2.3 */
interface ISTPCHKPROF {
  procdaysoff?: DAYS[];
  /** Time only */
  procendtm: Date;
  canuserange: boolean;
  canusedesc: boolean;
  stpchkfee: number;
}
export class STPCHKPROF extends Aggregate<ISTPCHKPROF> implements ISTPCHKPROF {
  @Serializable
  procdaysoff?: DAYS[] | undefined;
  @Serializable
  procendtm!: Date;
  @Serializable
  canuserange!: boolean;
  @Serializable
  canusedesc!: boolean;
  @Serializable
  stpchkfee!: number;
}

/** OFX section 11.13.2.4 */
interface IEMAILPROF {
  canemail: boolean;
  cannotify: boolean;
}
export class EMAILPROF extends Aggregate<IEMAILPROF> implements IEMAILPROF {
  @Serializable
  canemail!: boolean;
  @Serializable
  cannotify!: boolean;
}

/** OFX section 11.13.2.1 */
interface IBANKMSGSETV1 {
  msgsetcore: MSGSETCORE;
  invalidaccttype?: AccountType[];
  closingavail: boolean;
  pendingavail?: boolean;
  xferprof?: XFERPROF;
  stpchkprof?: STPCHKPROF;
  emailprof: EMAILPROF;
  //  imageprof
}
export class BANKMSGSETV1
  extends Aggregate<IBANKMSGSETV1>
  implements IBANKMSGSETV1
{
  @Serializable
  msgsetcore!: MSGSETCORE;
  @Serializable
  invalidaccttype?: AccountType[] | undefined;
  @Serializable
  closingavail!: boolean;
  @Serializable
  pendingavail?: boolean | undefined;
  @Serializable
  xferprof?: XFERPROF | undefined;
  @Serializable
  stpchkprof?: STPCHKPROF | undefined;
  @Serializable
  emailprof!: EMAILPROF;
}

/** OFX section 7.3 */
interface IBANKMSGSET {
  bankmsgsetv1: BANKMSGSETV1;
}
export class BANKMSGSET extends Aggregate<IBANKMSGSET> implements IBANKMSGSET {
  bankmsgsetv1!: BANKMSGSETV1;
}

/** OFX section 11.13.1.1.1 */
interface ICREDITCARDMSGSRQV1 {
  ccstmttrnrq?: CCSTMTTRNRQ[];
  ccstmtendtrnrq?: CCSTMTENDTRNRQ[];
}
export class CREDITCARDMSGSRQV1
  extends Aggregate<ICREDITCARDMSGSRQV1>
  implements ICREDITCARDMSGSRQV1
{
  @Serializable
  ccstmttrnrq?: CCSTMTTRNRQ[];
  @Serializable
  ccstmtendtrnrq?: CCSTMTENDTRNRQ[];
}

/** OFX section 11.13.1.1.2 */
interface ICREDITCARDMSGSRSV1 {
  ccstmttrnrs?: CCSTMTTRNRS[];
  ccstmtendtrnrs?: CCSTMTENDTRNRS[];
}
export class CREDITCARDMSGSRSV1
  extends Aggregate<ICREDITCARDMSGSRSV1>
  implements ICREDITCARDMSGSRSV1
{
  @Serializable
  ccstmttrnrs?: CCSTMTTRNRS[];
  @Serializable
  ccstmtendtrnrs?: CCSTMTENDTRNRS[];
}

/** OFX section 11.13.3 */
interface ICREDITCARDMSGSETV1 {
  msgsetcore: MSGSETCORE;
  closingavail: boolean;
  pendingavail?: boolean;
  //  imageprof:
}
export class CREDITCARDMSGSETV1
  extends Aggregate<ICREDITCARDMSGSETV1>
  implements ICREDITCARDMSGSETV1
{
  @Serializable
  msgsetcore!: MSGSETCORE;
  @Serializable
  closingavail!: boolean;
  @Serializable
  pendingavail?: boolean | undefined;
}

/** OFX section 11.13.3 */
interface ICREDITCARDMSGSET {
  creditcardmsgsetv1: CREDITCARDMSGSETV1;
}
export class CREDITCARDMSGSET
  extends Aggregate<ICREDITCARDMSGSET>
  implements ICREDITCARDMSGSET
{
  @Serializable
  creditcardmsgsetv1!: CREDITCARDMSGSETV1;
}

/** OFX section 11.13.1.3.1 */
interface IINTERXFERMSGSRQV1 {
  intertrnrq?: INTERTRNRQ[];
  recintertrnrq?: RECINTERTRNRQ[];
  intersyncrq?: INTERSYNCRQ[];
  recintersyncrq?: RECINTERSYNCRQ[];
}
export class INTERXFERMSGSRQV1
  extends Aggregate<IINTERXFERMSGSRQV1>
  implements IINTERXFERMSGSRQV1
{
  @Serializable
  intertrnrq?: INTERTRNRQ[];
  @Serializable
  recintertrnrq?: RECINTERTRNRQ[];
  @Serializable
  intersyncrq?: INTERSYNCRQ[];
  @Serializable
  recintersyncrq?: RECINTERSYNCRQ[];
}

/** OFX section 11.13.1.3.2 */
interface IINTERXFERMSGSRSV1 {
  intertrnrs?: INTERTRNRS[];
  recintertrnrs?: RECINTERTRNRS[];
  intersyncrs?: INTERSYNCRS[];
  recintersyncrs?: RECINTERSYNCRS[];
}
export class INTERXFERMSGSRSV1
  extends Aggregate<IINTERXFERMSGSRSV1>
  implements IINTERXFERMSGSRSV1
{
  @Serializable
  intertrnrs?: INTERTRNRS[];
  @Serializable
  recintertrnrs?: RECINTERTRNRS[];
  @Serializable
  intersyncrs?: INTERSYNCRS[];
  @Serializable
  recintersyncrs?: RECINTERSYNCRS[];
}

/** OFX section 11.13.4 */
interface IINTERXFERMSGSETV1 {
  msgsetcore: MSGSETCORE;
  xferprof: XFERPROF;
  canbillpay: boolean;
  cancwnd: number;
  domxferfee: number;
  intlxferfee: number;
}
export class INTERXFERMSGSETV1
  extends Aggregate<IINTERXFERMSGSETV1>
  implements IINTERXFERMSGSETV1
{
  @Serializable
  msgsetcore!: MSGSETCORE;
  @Serializable
  xferprof!: XFERPROF;
  @Serializable
  canbillpay!: boolean;
  @Serializable
  cancwnd!: number;
  @Serializable
  domxferfee!: number;
  @Serializable
  intlxferfee!: number;
}

/** OFX section 11.13.4 */
interface IINTERXFERMSGSET {
  interxfermsgsetv1: INTERXFERMSGSETV1;
}
export class INTERXFERMSGSET
  extends Aggregate<IINTERXFERMSGSET>
  implements IINTERXFERMSGSET
{
  @Serializable
  interxfermsgsetv1!: INTERXFERMSGSETV1;
}

/** OFX section 11.13.1.4.1 */
interface IWIREXFERMSGSRQV1 {
  wiretrnrq?: WIRETRNRQ[];
  wiresyncrq?: WIRESYNCRQ[];
}
export class WIREXFERMSGSRQV1
  extends Aggregate<IWIREXFERMSGSRQV1>
  implements IWIREXFERMSGSRQV1
{
  @Serializable
  wiretrnrq?: WIRETRNRQ[];
  @Serializable
  wiresyncrq?: WIRESYNCRQ[];
}

/** OFX section 11.13.1.4.2 */
interface IWIREXFERMSGSRSV1 {
  wiretrnrs?: WIRETRNRS[];
  wiresyncrs?: WIRESYNCRS[];
}
export class WIREXFERMSGSRSV1
  extends Aggregate<IWIREXFERMSGSRSV1>
  implements IWIREXFERMSGSRSV1
{
  @Serializable
  wiretrnrs?: WIRETRNRS[];
  @Serializable
  wiresyncrs?: WIRESYNCRS[];
}

/** OFX section 11.13.5 */
interface IWIREXFERMSGSETV1 {
  msgsetcore: MSGSETCORE;
  procdaysoff?: DAYS[];
  /** Time only */
  procendtm: Date;
  cansched: boolean;
  domxferfee: number;
  intlxferfee: number;
}
export class WIREXFERMSGSETV1
  extends Aggregate<IWIREXFERMSGSETV1>
  implements IWIREXFERMSGSETV1
{
  @Serializable
  msgsetcore!: MSGSETCORE;
  @Serializable
  procdaysoff?: DAYS[] | undefined;
  @Serializable
  procendtm!: Date;
  @Serializable
  cansched!: boolean;
  @Serializable
  domxferfee!: number;
  @Serializable
  intlxferfee!: number;
}

/** OFX section 11.13.5 */
interface IWIREXFERMSGSET {
  wirexfermsgsetv1: WIREXFERMSGSETV1;
}
export class WIREXFERMSGSET
  extends Aggregate<IWIREXFERMSGSET>
  implements IWIREXFERMSGSET
{
  @Serializable
  wirexfermsgsetv1!: WIREXFERMSGSETV1;
}
