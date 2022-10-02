///
/** Data synchronization for banking - OFX Section 11.12 */
///

import { SyncRqList, SyncRsList } from '../base/wrappers'
import { INTERTRNRQ, INTERTRNRS } from './interxfer'
import { BANKMAILTRNRQ, BANKMAILTRNRS } from './mail'
import {
  RECINTRATRNRQ,
  RECINTRATRNRS,
  RECINTERTRNRQ,
  RECINTERTRNRS
} from './recur'
import { BANKACCTFROM, CCACCTFROM } from './stmt'
import { STPCHKTRNRQ, STPCHKTRNRS } from './stpchk'
import { WIRETRNRS } from './wire'
import { INTRATRNRS } from './xfer'

/** OFX section 11.12.1.1 */
export interface STPCHKSYNCRQ extends SyncRqList {
  bankacctfrom: BANKACCTFROM
  stpchktrnrq: STPCHKTRNRQ
}

/** OFX section 11.12.1.2 */
export interface STPCHKSYNCRS extends SyncRsList {
  bankacctfrom: BANKACCTFROM
  stpchktrnrs?: STPCHKTRNRS[]
}

/** OFX section 11.12.2.1 */
export interface INTRASYNCRQ extends SyncRqList {
  bankacctfrom?: BANKACCTFROM
  ccacctfrom?: CCACCTFROM
  intratrnrs?: INTRATRNRS[]
}

/** OFX section 11.12.2.2 */
export interface INTRASYNCRS extends SyncRsList {
  bankacctfrom?: BANKACCTFROM
  ccacctfrom?: CCACCTFROM
  intratrnrs?: INTRATRNRS[]
}

/** OFX section 11.12.3.1 */
export interface INTERSYNCRQ extends SyncRqList {
  bankacctfrom?: BANKACCTFROM
  ccacctfrom?: CCACCTFROM
  intertrnrq?: INTERTRNRQ[]
}

/** OFX section 11.12.3.2 */
export interface INTERSYNCRS extends SyncRsList {
  bankacctfrom?: BANKACCTFROM
  ccacctfrom?: CCACCTFROM
  intertrnrs?: INTERTRNRS[]
}

/** OFX section 11.12.4.1 */
export interface WIRESYNCRQ extends SyncRqList {
  bankacctfrom: BANKACCTFROM
  wiretrnrs?: WIRETRNRS[]
}

/** OFX section 11.12.4.2 */
export interface WIRESYNCRS extends SyncRsList {
  bankacctfrom: BANKACCTFROM
  wiretrnrs?: WIRETRNRS[]
}

/** OFX section 11.12.5.1 */
export interface RECINTRASYNCRQ extends SyncRqList {
  bankacctfrom?: BANKACCTFROM
  ccacctfrom?: CCACCTFROM
  recintratrnrq?: RECINTRATRNRQ[]
}

/** OFX section 11.12.5.2 */
export interface RECINTRASYNCRS extends SyncRsList {
  bankacctfrom?: BANKACCTFROM
  ccacctfrom?: CCACCTFROM
  recintratrnrs?: RECINTRATRNRS[]
}

/** OFX section 11.12.5.1 */
export interface RECINTERSYNCRQ extends SyncRqList {
  bankacctfrom?: BANKACCTFROM
  ccacctfrom?: CCACCTFROM
  recintertrnrq?: RECINTERTRNRQ[]
}

/** OFX section 11.12.5.2 */
export interface RECINTERSYNCRS extends SyncRsList {
  bankacctfrom?: BANKACCTFROM
  ccacctfrom?: CCACCTFROM
  recintertrnrs?: RECINTERTRNRS[]
}

export interface BANKMAILSYNCRQ extends SyncRqList {
  incimages: boolean
  usehtml: boolean
  bankacctfrom?: BANKACCTFROM
  ccacctfrom?: CCACCTFROM
  bankmailtrnrq?: BANKMAILTRNRQ[]
}

export interface BANKMAILSYNCRS extends SyncRsList {
  bankacctfrom?: BANKACCTFROM
  ccacctfrom?: CCACCTFROM
  bankmailtrnrs?: BANKMAILTRNRS[]
}
