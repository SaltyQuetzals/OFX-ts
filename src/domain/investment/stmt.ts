import { INCTRAN, BALLIST } from '../banking/stmt'
import { TrnRq, TrnRs } from '../base/wrappers'
import { CurrencyCodes } from '../i18n'
import { INVACCTFROM } from './acct'
import { INVOOLIST } from './openorders'
import { INVPOSLIST } from './positions'
import { SECID } from './securities'
import { INVTRANLIST } from './transactions'

/// OFX section 13.9.3
export enum LOANPMTFREQUENCY {
  WEEKLY = 'WEEKLY',
  BIWEEKLY = 'BIWEEKLY',
  TWICEMONTHLY = 'TWICEMONTHLY',
  MONTHLY = 'MONTHLY',
  FOURWEEKS = 'FOURWEEKS',
  BIMONTHLY = 'BIMONTHLY',
  QUARTERLY = 'QUARTERLY',
  SEMIANNUALLY = 'SEMIANNUALLY',
  ANNUALLY = 'ANNUALLY',
  OTHER = 'OTHER',
}

/// OFX section 13.9.1.2
export interface INCPOS {
  dtasof?: Date
  include: boolean
}

/// OFX section 13.9.1.2
export interface INVSTMTRQ {
  invacctfrom: INVACCTFROM
  inctran?: INCTRAN
  incoo: boolean
  incpos: INCPOS
  incbal: boolean
  inc401k?: boolean
  inc401kbal?: boolean
  inctranimg?: boolean
}

/// OFX section 13.9.2.7
export interface INVBAL {
  availcash: number
  marginbalance: number
  shortbalance: number
  buypower?: number
  ballist?: BALLIST
}

/// OFX section 13.9.2.9
export interface INV401KBAL {
  cashbal?: number
  pretax?: number
  aftertax?: number
  match?: number
  profitsharing?: number
  rollover?: number
  othervest?: number
  othernonvest?: number
  total: number
  ballist?: BALLIST
}

/// OFX section 13.9.3
export interface MATCHINFO {
  matchpct: number
  maxmatchamt?: number
  maxmatchpct?: number
  startofyear?: Date
  basematchamt?: number
  basematchpct?: number
}

/// OFX section 13.9.3
export interface CONTRIBSECURITY {
  secid: SECID
  pretaxcontribpct?: number
  pretaxcontribamt?: number
  aftertaxcontribpct?: number
  aftertaxcontribamt?: number
  matchcontribpct?: number
  matchcontribamt?: number
  profitsharingcontribpct?: number
  profitsharingcontribamt?: number
  rollovercontribpct?: number
  rollovercontribamt?: number
  othervestpct?: number
  othervestamt?: number
  othernonvestpct?: number
  othernonvestamt?: number
}

/// OFX section 13.9.3
export interface CONTRIBINFO {
  contribsecurity?: CONTRIBSECURITY[]
}

/// OFX section 13.9.3
export interface VESTINFO {
  vestdate?: Date
  vestpct: number
}

/// OFX section 13.9.3
export interface LOANINFO {
  loanid: String
  loandesc?: String
  initialloanbal?: number
  loanstartdate?: Date
  currentloanbal: number
  dtasof: Date
  loanrate?: number
  loanpmtamt?: number
  loanpmtfreq?: LOANPMTFREQUENCY
  loanpmtsinitial?: number
  loanpmtsremaining?: number
  loanmaturitydate?: Date
  loantotalprojinterest?: number
  loaninteresttodate?: number
  loannextpmtdate?: Date
}

export interface Investment401KSubaccount {
  pretax?: number
  aftertax?: number
  match?: number
  profitsharing?: number
  rollover?: number
  othervest?: number
  othernonvest?: number
  total: number
}

/// OFX section 13.9.3.1
export interface CONTRIBUTIONS extends Investment401KSubaccount {}

/// OFX section 13.9.3.2
export interface WITHDRAWALS extends Investment401KSubaccount {}

/// OFX section 13.9.3.3
export interface EARNINGS extends Investment401KSubaccount {}

export interface ToDate {
  dtstart: Date
  dtend: Date
  contributions?: CONTRIBUTIONS
  withdrawals?: WITHDRAWALS
  earnings?: EARNINGS
}

/// OFX section 13.9.3
export interface YEARTODATE extends ToDate {}

/// OFX section 13.9.3
export interface INCEPTODATE extends ToDate {}

/// OFX section 13.9.3
export interface PERIODTODATE extends ToDate {}

/// OFX section 13.9.3
export interface INV401KSUMMARY {
  yeartodate: YEARTODATE
  inceptodate?: INCEPTODATE
  periodtodate?: PERIODTODATE
}

/// OFX section 13.9.3
export interface INV401K {
  employername: String
  planid?: String
  planjoindate?: Date
  employercontactinfo?: String
  brokercontactinfo?: String
  deferpctpretax?: number
  deferpctaftertax?: number
  matchinfo?: MATCHINFO
  contribinfo?: CONTRIBINFO
  currentvestpct?: number
  vestinfo?: VESTINFO[]
  loaninfo?: LOANINFO[]
  inv401ksummary?: INV401KSUMMARY
}

/// OFX section 13.9.2.1
export interface INVSTMTRS {
  dtasof: Date
  curdef: CurrencyCodes
  invacctfrom: INVACCTFROM
  invtranlist?: INVTRANLIST
  invpooslist?: INVPOSLIST
  invbal?: INVBAL
  invoolist?: INVOOLIST
  mktginfo?: String
  inv401k?: INV401K
  inv401kbal?: INV401KBAL
}

/// OFX section 13.9.1.1
export interface INVSTMTTRNRQ extends TrnRq {
  invstmtrq: INVSTMTRQ
}

/// OFX section 13.9.2.1
export interface INVSTMTTRNRS extends TrnRs {
  invstmtrs?: INVSTMTRS
}
