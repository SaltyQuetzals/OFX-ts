///
/** Data synchronization for banking - OFX Section 11.12 */
///

import { Serializable } from "../../serialization/Serializable";
import { Aggregate } from "../base/typing";
import { SyncRequestList, SyncResponseList } from "../base/wrappers";
import { INTERTRNRQ, INTERTRNRS } from "./interxfer";
import { BANKMAILTRNRQ, BANKMAILTRNRS } from "./mail";
import {
  RECINTRATRNRQ,
  RECINTRATRNRS,
  RECINTERTRNRQ,
  RECINTERTRNRS,
} from "./recur";
import { BANKACCTFROM, CCACCTFROM } from "./stmt";
import { STPCHKTRNRQ, STPCHKTRNRS } from "./stpchk";
import { WIRETRNRS } from "./wire";
import { INTRATRNRS } from "./xfer";

/** OFX section 11.12.1.1 */
interface ISTPCHKSYNCRQ extends SyncRequestList {
  bankacctfrom: BANKACCTFROM;
  stpchktrnrq: STPCHKTRNRQ;
}

export class STPCHKSYNCRQ
  extends Aggregate<ISTPCHKSYNCRQ>
  implements ISTPCHKSYNCRQ
{
  @Serializable
  bankacctfrom!: BANKACCTFROM;
  @Serializable
  stpchktrnrq!: STPCHKTRNRQ;
  @Serializable
  token?: string | undefined;
  @Serializable
  tokenonly?: boolean | undefined;
  @Serializable
  refresh?: boolean | undefined;
  @Serializable
  rejectifmissing!: boolean;
}

/** OFX section 11.12.1.2 */
interface ISTPCHKSYNCRS extends SyncResponseList {
  bankacctfrom: BANKACCTFROM;
  stpchktrnrs?: STPCHKTRNRS[];
}

export class STPCHKSYNCRS
  extends Aggregate<ISTPCHKSYNCRS>
  implements ISTPCHKSYNCRS
{
  @Serializable
  bankacctfrom!: BANKACCTFROM;
  @Serializable
  stpchktrnrs?: STPCHKTRNRS[] | undefined;
  @Serializable
  token!: string;
  @Serializable
  lostsync?: boolean | undefined;
}

/** OFX section 11.12.2.1 */
interface IINTRASYNCRQ extends SyncRequestList {
  bankacctfrom?: BANKACCTFROM;
  ccacctfrom?: CCACCTFROM;
  intratrnrs?: INTRATRNRS[];
}

export class INTRASYNCRQ
  extends Aggregate<IINTRASYNCRQ>
  implements IINTRASYNCRQ
{
  @Serializable
  bankacctfrom?: BANKACCTFROM | undefined;
  @Serializable
  ccacctfrom?: CCACCTFROM | undefined;
  @Serializable
  intratrnrs?: INTRATRNRS[] | undefined;
  @Serializable
  token?: string | undefined;
  @Serializable
  tokenonly?: boolean | undefined;
  @Serializable
  refresh?: boolean | undefined;
  @Serializable
  rejectifmissing!: boolean;
}

/** OFX section 11.12.2.2 */
interface IINTRASYNCRS extends SyncResponseList {
  bankacctfrom?: BANKACCTFROM;
  ccacctfrom?: CCACCTFROM;
  intratrnrs?: INTRATRNRS[];
}

export class INTRASYNCRS
  extends Aggregate<IINTRASYNCRS>
  implements IINTRASYNCRS
{
  @Serializable
  bankacctfrom?: BANKACCTFROM | undefined;
  @Serializable
  ccacctfrom?: CCACCTFROM | undefined;
  @Serializable
  intratrnrs?: INTRATRNRS[] | undefined;
  @Serializable
  token!: string;
  @Serializable
  lostsync?: boolean | undefined;
}

/** OFX section 11.12.3.1 */
interface IINTERSYNCRQ extends SyncRequestList {
  bankacctfrom?: BANKACCTFROM;
  ccacctfrom?: CCACCTFROM;
  intertrnrq?: INTERTRNRQ[];
}

export class INTERSYNCRQ
  extends Aggregate<IINTERSYNCRQ>
  implements IINTERSYNCRQ
{
  @Serializable
  bankacctfrom?: BANKACCTFROM | undefined;
  @Serializable
  ccacctfrom?: CCACCTFROM | undefined;
  @Serializable
  intertrnrq?: INTERTRNRQ[] | undefined;
  @Serializable
  token?: string | undefined;
  @Serializable
  tokenonly?: boolean | undefined;
  @Serializable
  refresh?: boolean | undefined;
  @Serializable
  rejectifmissing!: boolean;
}

/** OFX section 11.12.3.2 */
interface IINTERSYNCRS extends SyncResponseList {
  bankacctfrom?: BANKACCTFROM;
  ccacctfrom?: CCACCTFROM;
  intertrnrs?: INTERTRNRS[];
}

export class INTERSYNCRS
  extends Aggregate<IINTERSYNCRS>
  implements IINTERSYNCRS
{
  @Serializable
  bankacctfrom?: BANKACCTFROM | undefined;
  @Serializable
  ccacctfrom?: CCACCTFROM | undefined;
  @Serializable
  intertrnrs?: INTERTRNRS[] | undefined;
  @Serializable
  token!: string;
  @Serializable
  lostsync?: boolean | undefined;
}

/** OFX section 11.12.4.1 */
interface IWIRESYNCRQ extends SyncRequestList {
  bankacctfrom: BANKACCTFROM;
  wiretrnrs?: WIRETRNRS[];
}

export class WIRESYNCRQ extends Aggregate<IWIRESYNCRQ> implements IWIRESYNCRQ {
  @Serializable
  bankacctfrom!: BANKACCTFROM;
  @Serializable
  wiretrnrs?: WIRETRNRS[] | undefined;
  @Serializable
  token?: string | undefined;
  @Serializable
  tokenonly?: boolean | undefined;
  @Serializable
  refresh?: boolean | undefined;
  @Serializable
  rejectifmissing!: boolean;
}

/** OFX section 11.12.4.2 */
interface IWIRESYNCRS extends SyncResponseList {
  bankacctfrom: BANKACCTFROM;
  wiretrnrs?: WIRETRNRS[];
}

export class WIRESYNCRS extends Aggregate<IWIRESYNCRS> implements IWIRESYNCRS {
  @Serializable
  bankacctfrom!: BANKACCTFROM;
  @Serializable
  wiretrnrs?: WIRETRNRS[] | undefined;
  @Serializable
  token!: string;
  @Serializable
  lostsync?: boolean | undefined;
}

/** OFX section 11.12.5.1 */
interface IRECINTRASYNCRQ extends SyncRequestList {
  bankacctfrom?: BANKACCTFROM;
  ccacctfrom?: CCACCTFROM;
  recintratrnrq?: RECINTRATRNRQ[];
}

export class RECINTRASYNCRQ
  extends Aggregate<IRECINTRASYNCRQ>
  implements IRECINTRASYNCRQ
{
  @Serializable
  bankacctfrom?: BANKACCTFROM | undefined;
  @Serializable
  ccacctfrom?: CCACCTFROM | undefined;
  @Serializable
  recintratrnrq?: RECINTRATRNRQ[] | undefined;
  @Serializable
  token?: string | undefined;
  @Serializable
  tokenonly?: boolean | undefined;
  @Serializable
  refresh?: boolean | undefined;
  @Serializable
  rejectifmissing!: boolean;
}

/** OFX section 11.12.5.2 */
interface IRECINTRASYNCRS extends SyncResponseList {
  bankacctfrom?: BANKACCTFROM;
  ccacctfrom?: CCACCTFROM;
  recintratrnrs?: RECINTRATRNRS[];
}

export class RECINTRASYNCRS
  extends Aggregate<IRECINTRASYNCRS>
  implements IRECINTRASYNCRS
{
  @Serializable
  bankacctfrom?: BANKACCTFROM | undefined;
  @Serializable
  ccacctfrom?: CCACCTFROM | undefined;
  @Serializable
  recintratrnrs?: RECINTRATRNRS[] | undefined;
  @Serializable
  token!: string;
  @Serializable
  lostsync?: boolean | undefined;
}

/** OFX section 11.12.5.1 */
interface IRECINTERSYNCRQ extends SyncRequestList {
  bankacctfrom?: BANKACCTFROM;
  ccacctfrom?: CCACCTFROM;
  recintertrnrq?: RECINTERTRNRQ[];
}

export class RECINTERSYNCRQ
  extends Aggregate<IRECINTERSYNCRQ>
  implements IRECINTERSYNCRQ
{
  @Serializable
  bankacctfrom?: BANKACCTFROM | undefined;
  @Serializable
  ccacctfrom?: CCACCTFROM | undefined;
  @Serializable
  recintertrnrq?: RECINTERTRNRQ[] | undefined;
  @Serializable
  token?: string | undefined;
  @Serializable
  tokenonly?: boolean | undefined;
  @Serializable
  refresh?: boolean | undefined;
  @Serializable
  rejectifmissing!: boolean;
}

/** OFX section 11.12.5.2 */
interface IRECINTERSYNCRS extends SyncResponseList {
  bankacctfrom?: BANKACCTFROM;
  ccacctfrom?: CCACCTFROM;
  recintertrnrs?: RECINTERTRNRS[];
}

export class RECINTERSYNCRS
  extends Aggregate<IRECINTERSYNCRS>
  implements IRECINTERSYNCRS
{
  @Serializable
  bankacctfrom?: BANKACCTFROM | undefined;
  @Serializable
  ccacctfrom?: CCACCTFROM | undefined;
  @Serializable
  recintertrnrs?: RECINTERTRNRS[] | undefined;
  @Serializable
  token!: string;
  @Serializable
  lostsync?: boolean | undefined;
}

interface IBANKMAILSYNCRQ extends SyncRequestList {
  incimages: boolean;
  usehtml: boolean;
  bankacctfrom?: BANKACCTFROM;
  ccacctfrom?: CCACCTFROM;
  bankmailtrnrq?: BANKMAILTRNRQ[];
}

export class BANKMAILSYNCRQ
  extends Aggregate<IBANKMAILSYNCRQ>
  implements IBANKMAILSYNCRQ
{
  @Serializable
  incimages!: boolean;
  @Serializable
  usehtml!: boolean;
  @Serializable
  bankacctfrom?: BANKACCTFROM | undefined;
  @Serializable
  ccacctfrom?: CCACCTFROM | undefined;
  @Serializable
  bankmailtrnrq?: BANKMAILTRNRQ[] | undefined;
  @Serializable
  token?: string | undefined;
  @Serializable
  tokenonly?: boolean | undefined;
  @Serializable
  refresh?: boolean | undefined;
  @Serializable
  rejectifmissing!: boolean;
}

interface IBANKMAILSYNCRS extends SyncResponseList {
  bankacctfrom?: BANKACCTFROM;
  ccacctfrom?: CCACCTFROM;
  bankmailtrnrs?: BANKMAILTRNRS[];
}

export class BANKMAILSYNCRS
  extends Aggregate<IBANKMAILSYNCRS>
  implements IBANKMAILSYNCRS
{
  @Serializable
  bankacctfrom?: BANKACCTFROM | undefined;
  @Serializable
  ccacctfrom?: CCACCTFROM | undefined;
  @Serializable
  bankmailtrnrs?: BANKMAILTRNRS[] | undefined;
  @Serializable
  token!: string;
  @Serializable
  lostsync?: boolean | undefined;
}
