import { STMTTRN, Investment401kSource } from '../banking/stmt'
import { TranList } from '../base/wrappers'
import { CURRENCY, ORIGCURRENCY } from '../i18n'
import { INVSUBACCT, INVACCTFROM } from './acct'
import { SECID } from './securities'

export type BUYTYPE =
  | 'BUY'
  | 'BUYTOCOVER'


export type SELLTYPE =
  | 'SELL'
  | 'SELLSHORT'


export type OPTBUYTYPE =
  | 'BUYTOOPEN'
  | 'BUYTOCLOSE'


export type OPTSELLTYPE =
  | 'SELLTOOPEN'
  | 'SELLTOCLOSE'


export type INCOMETYPE =
  | 'CGLONG'
  | 'CGSHORT'
  | 'DIV'
  | 'INTEREST'
  | 'MISC'


/// OFX section 13.9.2.3
export interface INVBANKTRAN {
  stmttrn: STMTTRN
  subacctfund: INVSUBACCT
}

/// OFX section 13.9.2.4.2
export interface INVTRAN {
  fitid: String
  srvrtid?: String
  dttrade: Date
  dtsettle?: Date
  reversalfitid?: String
  memo?: String
}

/// OFX section 13.9.2.4.3
export interface INVBUY {
  invtran: INVTRAN
  secid: SECID
  units: number
  unitprice: number
  markup?: number
  commission?: number
  taxes?: number
  fees?: number
  load?: number
  total: number
  currency?: CURRENCY
  origcurrency?: ORIGCURRENCY
  subacctsec: INVSUBACCT
  subacctfund: INVSUBACCT
  loanid?: String
  loanprincipal?: number
  loaninterest?: number
  inv401ksource: Investment401kSource
  dtpayroll?: Date
  prioryearcontrib?: boolean
}

/// OFX section 13.9.2.4.3
export interface INVSELL {
  invtran: INVTRAN
  secid: SECID
  units: number
  unitprice: number
  markdown?: number
  commission?: number
  taxes?: number
  fees?: number
  load?: number
  withholding?: number
  taxexempt?: number
  total: number
  gain?: number
  currency?: CURRENCY
  origcurrency?: ORIGCURRENCY
  subacctsec: INVSUBACCT
  subacctfund: INVSUBACCT
  loanid?: String
  statewithholding?: number
  penalty?: number
  inv401ksource?: Investment401kSource
}

/// OFX section 13.9.2.4.4
export interface BUYDEBT {
  invbuy: INVBUY
  accrdint?: number
}

/// OFX section 13.9.2.4.4
export interface BUYMF {
  invbuy: INVBUY
  buytype: BUYTYPE
  relfitid?: String
}

/// OFX section 13.9.2.4.4
export interface BUYOPT {
  invbuy: INVBUY
  optbuytype: OPTBUYTYPE
  shperctrct: number
}

/// OFX section 13.9.2.4.4
export interface BUYOTHER {
  invbuy: INVBUY
  buytype: BUYTYPE
}

/// OFX section 13.9.2.4.4
export interface BUYSTOCK {
  invbuy: INVBUY
  buytype: BUYTYPE
}

export type OPTACTION =
  | 'EXERCISE'
  | 'ASSIGN'
  | 'EXPIRE'


/// OFX section 13.9.2.4.4
export interface CLOSUREOPT {
  invtran: INVTRAN
  secid: SECID
  optaction: OPTACTION
  units: number
  shperctrct: number
  subacctsec: INVSUBACCT
  relfitid?: String
  gain?: number
}

/// OFX section 13.9.2.4.4
export interface INCOME {
  invtran: INVTRAN
  secid: SECID
  incometype: INCOMETYPE
  total: number
  subacctsec: INVSUBACCT
  subacctfund: INVSUBACCT
  taxexempt?: boolean
  withholding?: number
  currency?: CURRENCY
  origcurrency?: ORIGCURRENCY
  inv401ksource?: Investment401kSource
}

/// OFX section 13.9.2.4.4
export interface INVEXPENSE {
  invtran: INVTRAN
  secid: SECID
  total: number
  subacctsec: INVSUBACCT
  subacctfund: INVSUBACCT
  currency?: CURRENCY
  origcurrency?: ORIGCURRENCY
  inv401ksource?: Investment401kSource
}

/// OFX section 13.9.2.4.4
export interface JRNLFUND {
  invtran: INVTRAN
  subacctto: INVSUBACCT
  subacctfrom: INVSUBACCT
  total: number
}

/// / OFX section 13.9.2.4.4
export interface JRNLSEC {
  invtran: INVTRAN
  secid: SECID
  subacctto: INVSUBACCT
  subacctfrom: INVSUBACCT
  units: number
}

/// OFX section 13.9.2.4.4
export interface MARGININTEREST {
  invtran: INVTRAN
  total: number
  subacctfund: INVSUBACCT
  currency?: CURRENCY
  origcurrency?: ORIGCURRENCY
}

/// OFX section 13.9.2.4.4
export interface REINVEST {
  invtran: INVTRAN
  secid: SECID
  incometype: INCOMETYPE
  total: number
  subacctsec: INVSUBACCT
  units: number
  unitprice: number
  commission?: number
  taxes?: number
  fees?: number
  load?: number
  taxexempt?: boolean
  currency?: CURRENCY
  origcurrency?: ORIGCURRENCY
  inv401ksource?: Investment401kSource
}

/// OFX section 13.9.2.4.4
export interface RETOFCAP {
  invtran: INVTRAN
  secid: SECID
  total: number
  subacctsec: INVSUBACCT
  subacctfund: INVSUBACCT
  currency?: CURRENCY
  origcurrency?: ORIGCURRENCY
  inv401ksource?: Investment401kSource
}

export type SELLREASON =
  | 'CALL'
  | 'SELL'
  | 'MATURITY'


/// OFX section 13.9.2.4.4
export interface SELLDEBT {
  invsell: INVSELL
  sellreason: SELLREASON
  accrdint?: number
}

/// OFX section 13.9.2.4.4
export interface SELLMF {
  invsell: INVSELL
  selltype: SELLTYPE
  avgcostbasis?: number
  relfitid?: String
}

export type RELTYPE =
  | 'SPREAD'
  | 'STRADDLE'
  | 'NONE'
  | 'OTHER'

export type SECURED =
  | 'NAKED'
  | 'COVERED'

/// OFX section 13.9.2.4.4
export interface SELLOPT {
  invsell: INVSELL
  optselltype: OPTSELLTYPE
  shperctrct: number
  relfitid?: String
  reltype?: RELTYPE
  secured?: SECURED
}

/// OFX section 13.9.2.4.4
export interface SELLOTHER {
  invsell: INVSELL
}

/// OFX section 13.9.2.4.4
export interface SELLSTOCK {
  invsell: INVSELL
  selltype: SELLTYPE
}

/// OFX section 13.9.2.4.4
export interface SPLIT {
  invtran: INVTRAN
  secid: SECID
  subacctsec: INVSUBACCT
  oldunits: number
  newunits: number
  numerator: number
  denominator: number
  currency?: CURRENCY
  origcurrency?: ORIGCURRENCY
  fraccash?: number
  subacctfund?: INVSUBACCT
  inv401ksource?: Investment401kSource
}

export type TFERACTION =
  | 'IN'
  | 'OUT'

export type POSTYPE =
  | 'SHORT'
  | 'LONG'


/// OFX section 13.9.2.4.4
export interface TRANSFER {
  invtran: INVTRAN
  secid: SECID
  subacctsec: INVSUBACCT
  units: number
  tferaction: TFERACTION
  postype: POSTYPE
  invacctfrom?: INVACCTFROM
  avgcostbasis?: number
  unitprice?: number
  dtpurchase?: Date
  inv401ksource?: Investment401kSource
}

/// OFX section 13.9.2.2
export interface INVTRANLIST extends TranList {
  dtstart: Date
  invbanktran?: INVBANKTRAN[]
  buydebt?: BUYDEBT[]
  buymf?: BUYMF[]
  buyopt?: BUYOPT[]
  buyother?: BUYOTHER[]
  buystock?: BUYSTOCK[]
  closureopt?: CLOSUREOPT[]
  income?: INCOME[]
  invexpense?: INVEXPENSE[]
  jrnlfund?: JRNLFUND[]
  jrnlsec?: JRNLSEC[]
  margininterest?: MARGININTEREST[]
  reinvest?: REINVEST[]
  retofcap?: RETOFCAP[]
  selldebt?: SELLDEBT[]
  sellmf?: SELLMF[]
  sellopt?: SELLOPT[]
  sellother?: SELLOTHER[]
  sellstock?: SELLSTOCK[]
  split?: SPLIT[]
  transfer?: TRANSFER[]
  dtend: Date
}
