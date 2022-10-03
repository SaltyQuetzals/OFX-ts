import { OFX } from "../domain/ofx";
import { JSDOM } from "jsdom";

export class OFXParser {
  private static readonly pattern =
    /(?<tag>[A-Z0-9./_ ]+?)>((<!\[CDATA\[(?<cdata>.+)\]\]>)|(?<text>[^<]+))?(<\/(?<closetag>\1)>)?/g;

  constructor() {}

  private getNodeData(match: RegExpMatchArray): {
    tag: string;
    text?: string;
    closetag?: string;
  } {
    const groups = match.groups;
    if (groups == null) {
      throw Error("Matched somehow with no groups");
    }
    const tag = groups.tag.trim();
    const cdata: string | undefined = groups.cdata?.trim();
    const text: string | undefined = groups.text?.trim();
    const closetag: string | undefined = groups.closetag?.trim();

    if (cdata !== undefined && text !== undefined) {
      throw Error(
        `Error parsing ${match.toString()}: both cdata and text were present.`
      );
    }

    if (closetag !== undefined && closetag !== tag) {
      throw Error(`Tag mismatch: <${tag}></${closetag}>`);
    }

    return { tag, text: cdata ?? text, closetag };
  }

  private closeSGMLTags(ofxString: string, doc: XMLDocument): XMLDocument {
    const matches = ofxString.matchAll(OFXParser.pattern);
    let curr = doc.getRootNode() as Element;
    for (const match of matches) {
      // { tag: string, cdata?: string, text?: string, closetag?: string } = groups
      const { tag, text, closetag } = this.getNodeData(match);
      if (tag.startsWith("/")) {
        if (text !== undefined && text.length !== 0) {
          throw Error("Found text after closing tag");
        }
        if (
          curr !== null &&
          curr?.parentElement !== null &&
          curr?.parentNode !== doc.getRootNode()
        ) {
          curr = curr.parentElement;
        }
        continue;
      }
      const temp = doc.createElement(tag);
      if (!doc.hasChildNodes()) {
        doc.appendChild(temp);
      } else {
        curr.appendChild(temp);
        console.log("num children =", curr.children.length);
      }
      curr = temp;
      if (text !== undefined && text.length !== 0) {
        temp.textContent = text;

        if (
          curr.parentElement !== null &&
          curr.parentElement !== doc.getRootNode()
        ) {
          curr = curr.parentElement;
        }
      } else if (closetag !== undefined) {
        if (
          curr.parentElement !== null &&
          curr.parentElement !== doc.getRootNode()
        ) {
          curr = curr.parentElement;
        }
      }
    }
    return doc;
  }
}
