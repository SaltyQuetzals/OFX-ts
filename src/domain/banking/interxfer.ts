///
/** Interbank fund transfers - OFX Section 11.8 */
///

import { TrnRq, TrnRs } from '../base/wrappers'
import { CurrencyCodes } from '../i18n'
import { XFERINFO, XFERPRCSTS } from './xfer'

/** OFX section 11.8.2.1 */
export interface INTERRQ {
  xferinfo: XFERINFO
}

/** OFX section 11.8.2.2 */
export interface INTERRS {
  curdef: CurrencyCodes
  srvrtid: string
  xferinfo: XFERINFO
  dtxferprj?: Date
  dtposted?: Date
  refnum?: string
  recsrvrtid?: string
  xferprcsts: XFERPRCSTS
}

/** OFX section 11.8.3.1 */
export interface INTERMODRQ {
  srvrtid: string
  xferinfo: XFERINFO
}

/** OFX section 11.8.4.1 */
export interface INTERCANRQ {
  srvrtid: string
}

/** OFX section 11.8.3.2 */
export interface INTERMODRS {
  srvrtid: string
  xferinfo: XFERINFO
  xferprcsts?: XFERPRCSTS
}

/** OFX section 11.8.4.2 */
export interface INTERCANRS {
  srvrtid: string
}

/** OFX section 11.8.2.1 */
export interface INTERTRNRQ extends TrnRq {
  interrq?: INTERRQ
  intermodrq?: INTERMODRQ
  intercanrq?: INTERCANRQ
}

/** OFX section 11.8.2.2 */
export interface INTERTRNRS extends TrnRs {
  interrs?: INTERRS
  intermodrs?: INTERMODRS
  intercanrs?: INTERCANRS
}
