import { TrnRq, TrnRs } from '../base/wrappers'
import { CURRENCY } from '../i18n'

export type ASSETCLASS =
  | 'DOMESTICBOND'
  | 'INTLBOND'
  | 'LARGESTOCK'
  | 'SMALLSTOCK'
  | 'INTLSTOCK'
  | 'MONEYMRKT'
  | 'OTHER'

/** OFX section 13.8.1 */
export interface SECID {
  uniqueid: string
  uniqueidtype: string
}

/** OFX section 13.8.2.2 */
export interface SECRQ {
  secid?: SECID
  ticker?: string
  fiid?: string
}

/** OFX section 13.8.2.2 */
export interface SECLISTRQ {
  secrq?: SECRQ[]
}

/** OFX section 13.8.5.1 */
export interface SECINFO {
  secid: SECID
  secname: string
  ticker?: string
  fiid?: string
  rating?: string
  unitprice?: number
  dtasof?: Date
  currency?: CURRENCY
  memo?: string
}

export type DEBTTYPE =
  | 'COUPON'
  | 'ZERO'

export type DEBTCLASS =
  | 'TREASURY'
  | 'MUNICIPAL'
  | 'CORPORATE'
  | 'OTHER'

export type COUPONFREQ =
  | 'MONTHLY'
  | 'QUARTERLY'
  | 'SEMIANNUAL'
  | 'ANNUAL'
  | 'OTHER'

export type CALLTYPE =
  | 'CALL'
  | 'PUT'
  | 'PREFUND'
  | 'MATURITY'


/** OFX section 13.8.5.2 */
export interface DEBTINFO {
  secinfo: SECINFO
  parvalue: number
  debttype: DEBTTYPE
  debtclass?: DEBTCLASS
  couponrt?: number
  dtcoupon?: Date
  couponfreq?: COUPONFREQ
  callprice?: number
  yieldtocall?: number
  dtcall?: Date
  calltype?: CALLTYPE
  yieldtomat?: number
  dtmat?: Date
  assetclass?: ASSETCLASS
  fiassetclass?: string
}

/** OFX section 13.8.5.3 */
export interface PORTION {
  assetclass: ASSETCLASS
  percent: number
}

/** OFX section 13.8.5.3 */
export interface MFASSETCLASS {
  portion?: PORTION[]
}

/** OFX section 13.8.5.3 */
export interface FIPORTION {
  fiassetclass: string
  percent: number
}

/** OFX section 13.8.5.3 */
export interface FIMFASSETCLASS {
  fiportion?: FIPORTION[]
}

export type MFTYPE =
  | 'OPENEND'
  | 'CLOSENED'
  | 'OTHER'

/** OFX section 13.8.5.3 */
export interface MFINFO {
  secinfo: SECINFO
  mftype?: MFTYPE
  yield?: number
  dtyieldasof?: Date
  mfassetclass?: MFASSETCLASS
  fimfassetclass?: FIMFASSETCLASS
}

export type OPTTYPE =
  | 'CALL'
  | 'PUT'


/** OFX section 13.8.5.4 */
export interface OPTINFO {
  secinfo: SECINFO
  opttype: OPTTYPE
  strikeprice: number
  dtexpire: Date
  shperctrct: number
  secid?: SECID
  assetclass?: ASSETCLASS
  fiassetclass?: string
}

/** OFX section 13.8.5.5 */
export interface OTHERINFO {
  secinfo: SECINFO
  typedesc?: string
  assetclass?: ASSETCLASS
  fiassetclass?: string
}

export type STOCKTYPE =
  | 'COMMON'
  | 'PREFERRED'
  | 'CONVERTIBLE'
  | 'OTHER'


/** OFX section 13.8.5.6 */
export interface STOCKINFO {
  secinfo: SECINFO
  stocktype?: STOCKTYPE
  yield?: number
  dtyieldasof?: Date
  typedesc?: string
  assetclass?: ASSETCLASS
  fiassetclass?: string
}

/** OFX section 13.8.4.4 */
export interface SECLIST {
  debtinfo?: DEBTINFO[]
  mfinfo?: MFINFO[]
  optinfo?: OPTINFO[]
  otherinfo?: OTHERINFO[]
  stockinfo?: STOCKINFO[]
}

/** OFX section 13.8.2.1 */
export interface SECLISTTRNRQ extends TrnRq {
  seclistrq: SECLISTRQ
}

/** OFX section 13.8.2.2 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SECLISTRS { }

/** OFX section 13.8.2.1 */
export interface SECLISTTRNRS extends TrnRs {
  seclistrs?: SECLISTRS
}
