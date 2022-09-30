// Base interface for *TRNRQ wrappers

import { OFXEXTENSION, STATUS } from '../common'

/**
 * OFX section 2.4.6.1
 */
export interface TrnRq {
  trnuid: string
  cltcookie?: string
  tan?: string
  ofxextension?: OFXEXTENSION
}

/**
 * OFX section 2.4.6.1
 */
export interface TrnRs {
  trnuid: string
  status: STATUS
  cltcookie?: string
  ofxextension?: OFXEXTENSION
}

/// Base interface for OFX *TRANLIST
/// OFX section 3.2.7
export interface TranList {
  dtstart: Date
  dtend: Date
}

export interface SyncRqList {
  token?: string
  tokenonly?: boolean
  refresh?: boolean
  rejectifmissing: boolean
}

export interface SyncRsList {
  token: string
  lostsync?: boolean
}
