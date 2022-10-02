///
/** Investment accounts - OFX Section 13.6 */
///

import { SVCSTATUS } from '../common'

/** Section 13.6.2 */
export type INVACCTTYPE =
  | 'INDIVIDUAL' | 'JOINT'
  | 'TRUST'
  | 'CORPORATE'

/** Section 13.6.2.1 */
export type USPRODUCTTYPE =
  | '401K'
  | '403B'
  | 'IRA'
  | 'KEOGH'
  | 'OTHER'
  | 'SARSEP'
  | 'SIMPLE'
  | 'NORMAL'
  | 'TDA'
  | 'TRUST'
  | 'UGMA'


export type INVSUBACCT =
  | 'CASH'
  | 'MARGIN'
  | 'SHORT'
  | 'OTHER'


/** OFX section 13.6.1 */
export interface INVACCTFROM {
  brokerid: String
  acctid: String
}

/** OFX section 13.6.1 */
export interface INVACCTTO {
  brokerid: String
  acctid: String
}

/** OFX section 13.6.2 */
export interface INVACCTINFO {
  invacctfrom: INVACCTFROM
  usproducttype: USPRODUCTTYPE
  checking: boolean
  svcstatus: SVCSTATUS
  invaccttype?: INVACCTTYPE
  optionlevel?: string
}
