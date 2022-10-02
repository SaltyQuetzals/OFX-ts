///
/** Bank stop check - OFX Section 11.6 */
///

import { TrnRq, TrnRs } from '../base/wrappers'
import { CURRENCY, ORIGCURRENCY, CurrencyCodes } from '../i18n'
import { BANKACCTFROM } from './stmt'

/** OFX section 11.6.1.1.1 */
export interface CHKRANGE {
  chknumstart: string
  chknumend?: string
}

/** OFX section 11.6.1.1.2 */
export interface CHKDESC {
  name: string
  chknum?: string
  dtuser?: Date
  trnamt?: number
}

/** OFX section 11.6.1.1 */
export interface STPCHKRQ {
  bankacctfrom: BANKACCTFROM
  chkrange?: CHKRANGE
  chkdesc?: CHKDESC
}

/** OFX section 11.6.1.2.1 */
export interface STPCHKNUM {
  checknum: string
  name?: string
  dtuser?: Date
  trnamt?: number
  chkstatus: string
  chkerror?: string
  currency?: CURRENCY
  origcurrency?: ORIGCURRENCY
}

/** OFX section 11.6.1.1 */
export interface STPCHKRS {
  curdef: CurrencyCodes
  bankacctfrom: BANKACCTFROM
  stpchknum?: [STPCHKNUM]
  fee: number
  feemsg: string
}

/** OFX section 11.6.1.1 */
export interface STPCHKTRNRQ extends TrnRq {
  stpchkrq: STPCHKRQ
}

/** OFX section 11.6.1.2 */
export interface STPCHKTRNRS extends TrnRs {
  stpchkrs: STPCHKRS
}
