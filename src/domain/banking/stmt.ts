///
/// Bank statement download - OFX Section 11.4

import { TranList, TrnRq, TrnRs } from '../base/wrappers'
import { SVCSTATUS, BAL } from '../common'
import { CountryCodes, CURRENCY, ORIGCURRENCY, CurrencyCodes } from '../i18n'

///
export type Investment401kSource =
  | 'PRETAX' | 'AFTERTAX' | 'MATCH' | 'PROFITSHARING' | 'ROLLOVER' | 'OTHERVEST' | 'OTHERNONVEST'

/// OFX section 11.3.1.1
export type AccountType =
  | 'CHECKING' | 'SAVINGS' | 'MONEYMRKT' | 'CREDITLINE' | 'CD'

export type TransactionType =
  | 'CREDIT' | 'DEBIT' | 'INT' | 'DIV' | 'FEE' | 'SRVCHG' | 'DEP' | 'ATM' | 'POS' | 'XFER' | 'CHECK' | 'PAYMENT' | 'CASH' | 'DIRECTDEP' | 'DIRECTDEBIT' | 'REPEATPMT' | 'OTHER'

/// OFX section 11.3.1
export interface BANKACCTFROM {
  bankid: string
  branchid?: string
  acctid: string
  accttype: AccountType
  acctkey?: string
}

/// OFX section 11.3.1
export interface BANKACCTTO {
  bankid: string
  branchid?: string
  acctid: string
  accttype: AccountType
  acctkey?: string
}

/// OFX section 11.3.3
export interface BANKACCTINFO {
  bankacctfrom: BANKACCTFROM
  suptxdl: boolean
  xfersrc: boolean
  xferdest: boolean
  svcstatus: SVCSTATUS
}

/// OFX section 11.3.2
export interface CCACCTFROM {
  acctid: string
  acctkey?: string
}

/// OFX section 11.3.2
export interface CCACCTTO {
  acctid: string
  acctkey?: string
}

/// OFX section 11.3.4
export interface CCACCTINFO {
  ccacctfrom: CCACCTFROM
  supxdl: boolean
  xfersrc: boolean
  xferdest: boolean
  svcstatus: SVCSTATUS
}

/// OFX section 11.4.2.1
export interface INCTRAN {
  dtstart?: Date
  dtend?: Date
  include: boolean
}

/// OFX section 11.4.2.1
export interface STMTRQ {
  bankacctfrom: BANKACCTFROM
  inctran?: INCTRAN
  includepending?: boolean
  inctranimg?: boolean
}

/// OFX section 12.5.2.1
export interface PAYEE {
  name: string
  addr1: string
  addr2?: string
  addr3?: string
  city: string
  state: string
  postalcode: string
  country?: CountryCodes
  phone: string
}

export type CorrectAction =
  | 'REPLACE'
  | 'DELETE'

/// OFX section 11.4.3
export interface STMTTRN {
  trntype: TransactionType
  dtposted: Date
  dtuser?: Date
  dtavail?: Date
  trnamt: number
  fitid: string
  correctfitid?: string
  correctaction?: CorrectAction
  srvrtid?: string
  checknum?: string
  refnum?: string
  sic?: number
  payeeid?: string
  name?: string
  payee?: PAYEE
  extdname?: string

  /// Either bankacctto will be present, or ccacctto will be present, not both.
  bankacctto?: BANKACCTTO
  /// Either bankacctto will be present, or ccacctto will be present, not both.
  ccacctto?: CCACCTTO

  /// Either currency will be present, or origcurrency will be present, not both.
  currency?: CURRENCY

  /// Either currency will be present, or origcurrency will be present, not both.
  origcurrency?: ORIGCURRENCY
  inv401ksource?: Investment401kSource
}

/// OFX section 11.4.2.2
export interface BANKTRANLIST extends TranList {
  dtstart: Date
  dtend: Date

  stmttrn: STMTTRN[]
}

/// OFX section 11.4.2.2
export interface LEDGERBAL {
  balamt: number
  dtasof: Date
}

/// OFX section 11.4.2.2
export interface AVAILBAL {
  balamt: number
  dtasof: Date
}

/// OFX section 11.4.2.2 & 13.9.2.7
export interface BALLIST {
  bal: BAL[]
}

/// OFX section 11.4.2.2
export interface STMTRS {
  curdef: CurrencyCodes
  bankacctfrom: BANKACCTFROM
  banktranlist?: BANKTRANLIST
  //    banktranlistp
  ledgerbal: LEDGERBAL
  availbal?: AVAILBAL
  cashadvbalamt?: number
  intrate?: number
  ballist?: BALLIST
  mktginfo?: string
}

/// OFX section 11.4.2.1
export interface STMTTRNRQ extends TrnRq {
  stmtrq: STMTRQ
}

/// OFX section 11.4.2.2
export interface STMTTRNRS extends TrnRs {
  stmtrs: STMTRS
}

/// OFX section 11.4.3.2
export interface REWARDINFO {
  name: string
  rewardbal: number
  rewardearned?: number
}

/// OFX section 11.4.3.1
export interface CCSTMTRQ {
  ccacctfrom: CCACCTFROM
  inctran?: INCTRAN
  includepending?: boolean
  inctranimg?: boolean
}

/// OFX section 11.4.3.2
export interface CCSTMTRS {
  curdef: CurrencyCodes
  ccacctfrom: CCACCTFROM
  banktranlist?: BANKTRANLIST
  //    banktranlistp
  ledgerbal: LEDGERBAL
  availbal?: AVAILBAL
  cashadvbalamt?: number
  intratepurch?: number
  intratecash?: number
  intratexfer?: number
  rewardinfo?: REWARDINFO
  ballist?: BALLIST
  mktginfo?: string
}

/// OFX section 11.4.3.1
export interface CCSTMTTRNRQ extends TrnRq {
  ccstmtrq: CCSTMTRQ
}

/// OFX section 11.4.3.2
export interface CCSTMTTRNRS extends TrnRs {
  ccstmtrs?: CCSTMTRS
}
