// Base interface for *TRNRQ wrappers

import { OFXEXTENSION, STATUS } from "../common";

/**
 * OFX section 2.4.6.1
 */
export interface TransactionRequest {
  trnuid: string;
  cltcookie?: string;
  tan?: string;
  ofxextension?: OFXEXTENSION;
}

/**
 * OFX section 2.4.6.1
 */
export interface TransactionResponse {
  trnuid: string;
  status: STATUS;
  cltcookie?: string;
  ofxextension?: OFXEXTENSION;
}

/** Base interface for OFX *TRANLIST */
/** OFX section 3.2.7 */
export interface TransactionList {
  dtstart: Date;
  dtend: Date;
}

export interface SyncRequestList {
  token?: string;
  tokenonly?: boolean;
  refresh?: boolean;
  rejectifmissing: boolean;
}

export interface SyncResponseList {
  token: string;
  lostsync?: boolean;
}
