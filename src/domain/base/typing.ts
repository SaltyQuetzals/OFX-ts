import { SERIALIZABLE_FIELD_METADATA } from "../../serialization/Serializable";

export abstract class Aggregate<T> {
  public get openingTag(): string {
    return this.asOpeningTag(this.constructor.name);
  }

  public get closingTag(): string {
    return this.asClosingTag(this.constructor.name);
  }

  private asOpeningTag(tagName: string): string {
    return `<${tagName.toUpperCase()}>`;
  }

  private asClosingTag(tagName: string): string {
    return `</${tagName.toUpperCase()}>`;
  }

  constructor(params: T) {
    Object.assign(this, params);
  }

  private serializeElement(
    tagName: string,
    value: any,
    closeTags: boolean
  ): string {
    const endingTag = closeTags ? this.asClosingTag(tagName) : "";
    switch (typeof value) {
      case "number":
        return this.asOpeningTag(tagName) + value + endingTag;
      case "string":
        return this.asOpeningTag(tagName) + value + endingTag;
      case "boolean":
        return this.asOpeningTag(tagName) + (value ? "Y" : "N") + endingTag;
      case "object":
        if (value instanceof Date) {
          return this.asOpeningTag(tagName) + value.toString() + endingTag;
        }
        throw Error(
          `serializeElement will only serialize primitive types or Dates. ${tagName} is an object: ${value}.`
        );
      default:
        throw Error(
          `Received unknown element type to serialize: ${typeof value}`
        );
    }
  }

  private serializeArray(
    tagName: string,
    value: Array<any>,
    closeTags: boolean
  ): string {
    return (
      this.asOpeningTag(tagName) +
      value
        .map((entry) => {
          if (typeof entry === "object") {
            return this.serializeObject(tagName, entry, closeTags);
          } else {
            return this.serializeElement(tagName, entry, closeTags);
          }
        })
        .reduce((acc, curr) => acc + curr, "") +
      this.asClosingTag(tagName)
    );
  }

  private serializeObject(
    tagName: string,
    value: Object,
    closeTags: boolean
  ): string {
    // Dates are counted as objects, but we don't need to do anything besides convert them into strings
    // so just delegate to serializeElement
    if (value instanceof Date) {
      return this.serializeElement(tagName, value, closeTags);
    } else if (Array.isArray(value)) {
      return this.serializeArray(tagName, value, closeTags);
    } else if (value instanceof Aggregate) {
      return value.toOFXV1(closeTags);
    } else {
      throw Error(`Unrecognized object received: ${tagName} was ${value}`);
    }
  }

  public toOFXV1(closeTags: boolean = false): string {
    const serializableFields: (keyof this)[] = Reflect.getMetadata(
      SERIALIZABLE_FIELD_METADATA,
      this.constructor
    );
    let asText = this.openingTag;
    for (const field of serializableFields) {
      const value = this[field];
      if (value === null || value === undefined) {
        continue;
      }
      if (typeof value === "object") {
        asText += this.serializeObject(field.toString(), value, closeTags);
      } else {
        asText += this.serializeElement(field.toString(), value, closeTags);
      }
    }
    asText += this.closingTag;
    return asText;
  }
}
