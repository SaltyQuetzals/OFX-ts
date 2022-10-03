import {
  TransactionRequest,
  TransactionResponse,
  SyncRequestList,
  SyncResponseList,
} from "../base/wrappers";
import { MAIL } from "../email";
import { INVACCTFROM } from "./acct";

/** OFX section 13.10.1.1 */
export interface INVMAILRQ {
  invacctfrom?: INVACCTFROM;
  mail?: MAIL;
}

/** OFX section 13.10.1.2 */
export interface INVMAILRS {
  invacctfrom?: INVACCTFROM;
  mail?: MAIL;
}

export interface INVMAILTRNRQ extends TransactionRequest {
  invmailrq?: INVMAILRQ;
}

export interface INVMAILTRNRS extends TransactionResponse {
  invmailrs?: INVMAILRS;
}

/** OFX section 13.10.2.1 */
export interface INVMAILSYNCRQ extends SyncRequestList {
  incimages: boolean;
  usehtml: boolean;
  invacctfrom?: INVACCTFROM;
  invmailtrnrq?: [INVMAILTRNRQ];
}

/** OFX section 13.10.2.2 */
export interface INVMAILSYNCRS extends SyncResponseList {
  invacctfrom?: INVACCTFROM;
  invmailtrnrs?: [INVMAILTRNRS];
}
