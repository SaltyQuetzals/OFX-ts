///
/// Recurring funds transfer - OFX Section 11.10

import { TrnRq, TrnRs } from '../base/wrappers'
import { INTERRQ, INTERRS } from './interxfer'
import { INTRARQ, INTRARS } from './xfer'

///
export type Frequency =
  | 'WEEKLY'
  | 'BIWEEKLY'
  | 'TWICEMONTHLY'
  | 'MONTHLY'
  | 'FOURWEEKS'
  | 'BIMONTHLY'
  | 'QUARTERLY'
  | 'SEMIANNUALLY'
  | 'ANNUALLY'

/// OFX section 10.2
export interface RECURRINST {
  ninsts?: number
  freq: Frequency
}

/// OFX section 11.10.1.1
export interface RECINTRARQ {
  recurrinst: RECURRINST
  intrarq: INTRARQ
}

/// OFX section 11.10.1.2
export interface RECINTRARS {
  recsrvrtid: String
  recurrinst: RECURRINST
  intrars: INTRARS
}

/// OFX section 11.10.2.1
export interface RECINTRAMODRQ {
  recsrvrtid: String
  recurrinst: RECURRINST
  intrarq: INTRARQ
  modpending: boolean
}

/// OFX section 11.10.2.2
export interface RECINTRAMODRS {
  recsrvrtid: String
  recurrinst: RECURRINST
  intrars: INTRARS
  modpending: boolean
}

/// OFX section 11.10.3.1
export interface RECINTRACANRQ {
  recsrvrtid: String
  canpending: boolean
}

/// OFX section 11.10.3.2
export interface RECINTRACANRS {
  recsrvrtid: String
  canpending: boolean
}

/// OFX section 11.10.1.1
export interface RECINTRATRNRQ extends TrnRq {
  recintrarq?: RECINTRARQ
  recintramodrq?: RECINTRAMODRQ
  recintracanrq?: RECINTRACANRQ
}

/// OFX section 11.10.1.2
export interface RECINTRATRNRS extends TrnRs {
  recintrars?: RECINTRARS
  recintramodrs?: RECINTRAMODRS
  recintracanrs?: RECINTRACANRS
}

/// OFX section 11.10.4.1
export interface RECINTERRQ {
  recurrinst: RECURRINST
  interrq: INTERRQ
}

/// OFX section 11.10.4.2
export interface RECINTERRS {
  recsrvrtid: String
  recurrinst: RECURRINST
  interrs: INTERRS
}

/// OFX section 11.10.5.1
export interface RECINTERMODRQ {
  recsrvrtid: String
  recurrinst: RECURRINST
  interrq: INTERRQ
  modpending: boolean
}

/// OFX section 11.10.5.2
export interface RECINTERMODRS {
  recsrvrtid: String
  recurrinst: RECURRINST
  interrs: INTERRS
  modpending: boolean
}

/// OFX section 11.10.6.1
export interface RECINTERCANRQ {
  recsrvrtid: String
  canpending: boolean
}

/// OFX section 11.10.6.2
export interface RECINTERCANRS {
  recsrvrtid: String
  canpending: boolean
}

/// OFX section 11.10.5.1
export interface RECINTERTRNRQ extends TrnRq {
  recinterrq?: RECINTERRQ
  recintermodrq?: RECINTERMODRQ
  recintercanrq?: RECINTERCANRQ
}

/// OFX section 11.10.5.2
export interface RECINTERTRNRS extends TrnRs {
  recinterrs?: RECINTERRS
  recintermodrs?: RECINTERMODRS
  recintercanrs?: RECINTERCANRS
}
