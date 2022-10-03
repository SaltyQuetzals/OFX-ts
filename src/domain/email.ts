import {
  TransactionRequest,
  TransactionResponse,
  SyncRequestList,
  SyncResponseList,
} from "./base/wrappers";
import { OFXEXTENSION, STATUS, MSGSETCORE } from "./common";

/**
 *  OFX section 9.2.2
 */
export interface MAIL {
  userid: string;
  dtcreated: Date;
  frm: string;
  to: string;
  subject: string;
  msgbody: string;
  incimages: boolean;
  userhtml: boolean;
}

/**
 *  OFX section 9.2.3
 */
export interface MAILRQ {
  mail: MAIL;
}

/**
 *  OFX section 9.2.3
 */
export interface MAILRS {
  mail: MAIL;
}

/**
 *  OFX section 9.2.3
 */
export interface MAILTRNRQ extends TransactionRequest {
  mailrq: MAILRQ;
}

/**
 *  OFX section 9.2.3
 */
export interface MAILTRNRS extends TransactionResponse {
  trnuid: string;
  cltcookie?: string;
  ofxextension?: OFXEXTENSION;
  status: STATUS;
  mailrs: MAILRS;
}

/**
 *  OFX section 9.2.4
 */
export interface MAILSYNCRQ extends SyncRequestList {
  incimages: boolean;
  usehtml: boolean;
  mailtrnrq?: MAILTRNRQ[];
}

/**
 *  OFX section 9.2.4
 */
export interface MAILSYNCRS extends SyncResponseList {
  mailtrnrs?: MAILTRNRS[];
}

/**
 *  OFX section 9.3.1
 */
export interface GETMIMERQ {
  url: string;
}

/**
 *  OFX section 9.3.1
 */
export interface GETMIMERS {
  url: string;
}

/**
 *  OFX section 9.3.1
 */
export interface GETMIMETRNRQ extends TransactionRequest {
  getmimerq: GETMIMERQ;
}

/**
 *  OFX section 9.3.2
 */
export interface GETMIMETRNRS extends TransactionResponse {
  trnuid: string;
  status: STATUS;
  cltcookie?: string;
  ofxextension?: OFXEXTENSION;
  getmimers: GETMIMERS;
}

/**
 *  OFX section 9.4.1.1
 */
export interface EMAILMSGSRQV1 {
  mailtrnrq?: MAILTRNRQ[];
  getmimetrnrq?: GETMIMETRNRQ[];
  mailsyncrq?: MAILSYNCRQ[];
}

/**
 *  OFX section 9.4.1.2
 */
export interface EMAILMSGSRSV1 {
  mailtrnrs?: MAILTRNRS[];
  getmimetrnrs?: GETMIMETRNRS[];
  mailsyncrs?: MAILSYNCRS[];
}

/**
 *  OFX section 9.4.2
 */
export interface EMAILMSGSETV1 {
  msgsetcore: MSGSETCORE;
  mailsup: boolean;
  getmimesup: boolean;
}

/**
 *  OFX section 9.4.2
 */
export interface EMAILMSGSET {
  emailmsgsetv1: EMAILMSGSETV1;
}
