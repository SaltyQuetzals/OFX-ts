///
/** Intrabank funds transfer  - OFX Section 11.6 */
///

import { TrnRq, TrnRs } from '../base/wrappers'
import { CurrencyCodes } from '../i18n'
import { INTERRQ, INTERMODRQ, INTERCANRQ } from './interxfer'
import { BANKACCTFROM, CCACCTFROM, BANKACCTTO, CCACCTTO } from './stmt'

/** OFX section 11.3.5 */
export interface XFERINFO {
  bankacctfrom?: BANKACCTFROM
  ccacctfrom?: CCACCTFROM
  bankacctto?: BANKACCTTO
  ccacctto?: CCACCTTO
  trnamt: number
  dtdue?: Date
}

/** OFX section 11.7.1.1 */
export interface INTRARQ {
  xferinfo: XFERINFO
}

export type TransferPRCCode =
  | 'WILLPROCESSON'
  | 'POSTEDON'
  | 'NOFUNDSON'
  | 'CANCELEDON'
  | 'FAILEDON'


/** OFX section 11.3.6 */
export interface XFERPRCSTS {
  xferprccode: TransferPRCCode
  dtxferprc: Date
}

/** OFX section 11.7.1.2 */
export interface INTRARS {
  curdef: CurrencyCodes
  srvrtid: string
  xferinfo: XFERINFO
  dtxferprj?: Date
  dtposted?: Date
  recsrvrtid?: string
  xferprcsts?: XFERPRCSTS
}

/** OFX section 11.7.2.1 */
export interface INTRAMODRQ {
  srvrtid: string
  xferinfo: XFERINFO
}

/** OFX section 11.7.3.1 */
export interface INTRACANRQ {
  srvrtid: string
}

/** OFX section 11.7.2.2 */
export interface INTRAMODRS {
  srvrtid: string
  xferinfo: XFERINFO
  xferprcsts?: XFERPRCSTS
}

/** OFX section 11.7.3.2 */
export interface INTRACANRS {
  srvrtid: string
}

/** OFX section 11.7.1.1 */
export interface INTRATRNRQ extends TrnRq {
  interrq?: INTERRQ
  intermodrq?: INTERMODRQ
  intercanrq?: INTERCANRQ
}

/** OFX section 11.7.1.2 */
export interface INTRATRNRS extends TrnRs {
  intrars?: INTRARS
  intramodrs?: INTRAMODRS
  intracanrs?: INTRACANRS
}
