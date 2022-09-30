import { TrnRq, TrnRs } from '../base/wrappers'
import { CURRENCY } from '../i18n'

export enum ASSETCLASS {
  DOMESTICBOND = 'DOMESTICBOND',
  INTLBOND = 'INTLBOND',
  LARGESTOCK = 'LARGESTOCK',
  SMALLSTOCK = 'SMALLSTOCK',
  INTLSTOCK = 'INTLSTOCK',
  MONEYMRKT = 'MONEYMRKT',
  OTHER = 'OTHER',
}

/// OFX section 13.8.1
export interface SECID {
  uniqueid: string
  uniqueidtype: string
}

/// OFX section 13.8.2.2
export interface SECRQ {
  secid?: SECID
  ticker?: string
  fiid?: string
}

/// OFX section 13.8.2.2
export interface SECLISTRQ {
  secrq?: SECRQ[]
}

/// OFX section 13.8.5.1
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

export enum DEBTTYPE {
  COUPON = 'COUPON',
  ZERO = 'ZERO',
}
export enum DEBTCLASS {
  TREASURY = 'TREASURY',
  MUNICIPAL = 'MUNICIPAL',
  CORPORATE = 'CORPORATE',
  OTHER = 'OTHER',
}
export enum COUPONFREQ {
  MONTHLY = 'MONTHLY',
  QUARTERLY = 'QUARTERLY',
  SEMIANNUAL = 'SEMIANNUAL',
  ANNUAL = 'ANNUAL',
  OTHER = 'OTHER',
}
export enum CALLTYPE {
  CALL = 'CALL',
  PUT = 'PUT',
  PREFUND = 'PREFUND',
  MATURITY = 'MATURITY',
}

/// OFX section 13.8.5.2
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

/// OFX section 13.8.5.3
export interface PORTION {
  assetclass: ASSETCLASS
  percent: number
}

/// OFX section 13.8.5.3
export interface MFASSETCLASS {
  portion?: PORTION[]
}

/// OFX section 13.8.5.3
export interface FIPORTION {
  fiassetclass: string
  percent: number
}

/// OFX section 13.8.5.3
export interface FIMFASSETCLASS {
  fiportion?: FIPORTION[]
}

export enum MFTYPE {
  OPENEND = 'OPENEND',
  CLOSENED = 'CLOSENED',
  OTHER = 'OTHER',
}
/// OFX section 13.8.5.3
export interface MFINFO {
  secinfo: SECINFO
  mftype?: MFTYPE
  yield?: number
  dtyieldasof?: Date
  mfassetclass?: MFASSETCLASS
  fimfassetclass?: FIMFASSETCLASS
}

export enum OPTTYPE {
  CALL = 'CALL',
  PUT = 'PUT',
}

/// OFX section 13.8.5.4
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

/// OFX section 13.8.5.5
export interface OTHERINFO {
  secinfo: SECINFO
  typedesc?: string
  assetclass?: ASSETCLASS
  fiassetclass?: string
}

export enum STOCKTYPE {
  COMMON = 'COMMON',
  PREFERRED = 'PREFERRED',
  CONVERTIBLE = 'CONVERTIBLE',
  OTHER = 'OTHER',
}

/// OFX section 13.8.5.6
export interface STOCKINFO {
  secinfo: SECINFO
  stocktype?: STOCKTYPE
  yield?: number
  dtyieldasof?: Date
  typedesc?: string
  assetclass?: ASSETCLASS
  fiassetclass?: string
}

/// OFX section 13.8.4.4
export interface SECLIST {
  debtinfo?: DEBTINFO[]
  mfinfo?: MFINFO[]
  optinfo?: OPTINFO[]
  otherinfo?: OTHERINFO[]
  stockinfo?: STOCKINFO[]
}

/// OFX section 13.8.2.1
export interface SECLISTTRNRQ extends TrnRq {
  seclistrq: SECLISTRQ
}

/// OFX section 13.8.2.2
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SECLISTRS {}

/// OFX section 13.8.2.1
export interface SECLISTTRNRS extends TrnRs {
  seclistrs?: SECLISTRS
}
