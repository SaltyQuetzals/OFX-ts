///
/** Bank email & customer notification - OFX Section 11.11 */
///

import { TrnRq, TrnRs } from '../base/wrappers'
import { MAIL } from '../email'
import { BANKACCTFROM, CCACCTFROM } from './stmt'

/** OFX section 11.11.1.1 */
export interface BANKMAILRQ {
  bankacctfrom?: BANKACCTFROM
  ccacctfrom?: CCACCTFROM
  mail: MAIL
}

/** OFX section 11.11.1.2 */
export interface BANKMAILRS {
  bankacctfrom?: BANKACCTFROM
  ccacctfrom?: CCACCTFROM

  mail: MAIL
}

/** OFX section 11.11.3.1 */
export interface CHKMAILRS {
  bankacctfrom: BANKACCTFROM
  mail: MAIL
  checknum: string
  trnamt?: number
  dtuser?: Date
  fee?: number
}

/** OFX section 11.11.3.2 */
export interface DEPMAILRS {
  bankacctfrom: BANKACCTFROM
  mail: MAIL
  trnamt: number
  dtuser?: Date
  fee?: number
}

/** OFX section 11.11.1.1 */
export interface BANKMAILTRNRQ extends TrnRq {
  bankmailrq: BANKMAILRQ
}

/** OFX section 11.11.1.2 */
export interface BANKMAILTRNRS extends TrnRs {
  bankmailrs?: BANKMAILRS
  chkmailrs?: CHKMAILRS
  depmailrs?: DEPMAILRS
}
