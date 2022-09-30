///
/// Wire fund transfers - OFX Section 11.9
///

import { TrnRq, TrnRs } from '../base/wrappers'
import { CountryCodes, CurrencyCodes } from '../i18n'
import { BANKACCTTO, BANKACCTFROM } from './stmt'

/// OFX section 11.9.1.1.1
export interface WIREBENEFICIARY {
  name: String
  bankacctto: BANKACCTTO
  memo?: String
}

/// OFX section 11.9.1.1.2
export interface EXTBANKDESC {
  name: String
  bankid: String
  addr1: String
  addr2?: String
  addr3?: String
  city: String
  state: String
  postalcode: String
  country?: CountryCodes
  phone?: String
}

/// OFX section 11.9.1.1.1
export interface WIREDESTBANK {
  extbankdesc: EXTBANKDESC
}

/// OFX section 11.9.1.1.1
export interface WIRERQ {
  bankacctfrom: BANKACCTFROM
  wirebeneficiary: WIREBENEFICIARY
  wiredestbank?: WIREDESTBANK
  trnamt: number
  dtdue?: Date
  payinstruct?: String
}

/// OFX section 11.9.1.2
export interface WIRERS {
  curdef: CurrencyCodes
  srvrtid: String
  bankacctfrom: BANKACCTFROM
  wirebeneficiary: WIREBENEFICIARY
  wiredestbank?: WIREDESTBANK
  trnamt: number
  dtdue?: Date
  payinstruct?: String
  dtxferprj?: Date
  dtposted?: Date
  fee?: number
  confmsg: String
}

/// OFX section 11.9.2.1
export interface WIRECANRQ {
  srvrtid: String
}

/// OFX section 11.9.2.2
export interface WIRECANRS {
  srvrtid: String
}

/// OFX section 11.9.2.1
export interface WIRETRNRQ extends TrnRq {
  wirerq?: WIRERQ
  wirecanrq?: WIRECANRQ
}

/// OFX section 11.9.2.2
export interface WIRETRNRS extends TrnRs {
  wirers?: WIRERS
  wirecanrs?: WIRECANRS
}
