import { TrnRq, TrnRs, SyncRqList, SyncRsList } from '../base/wrappers'
import { MAIL } from '../email'
import { INVACCTFROM } from './acct'

/** OFX section 13.10.1.1 */
export interface INVMAILRQ {
  invacctfrom?: INVACCTFROM
  mail?: MAIL
}

/** OFX section 13.10.1.2 */
export interface INVMAILRS {
  invacctfrom?: INVACCTFROM
  mail?: MAIL
}

export interface INVMAILTRNRQ extends TrnRq {
  invmailrq?: INVMAILRQ
}

export interface INVMAILTRNRS extends TrnRs {
  invmailrs?: INVMAILRS
}

/** OFX section 13.10.2.1 */
export interface INVMAILSYNCRQ extends SyncRqList {
  incimages: boolean
  usehtml: boolean
  invacctfrom?: INVACCTFROM
  invmailtrnrq?: [INVMAILTRNRQ]
}

/** OFX section 13.10.2.2 */
export interface INVMAILSYNCRS extends SyncRsList {
  invacctfrom?: INVACCTFROM
  invmailtrnrs?: [INVMAILTRNRS]
}
