import "reflect-metadata";

export const SERIALIZABLE_FIELD_METADATA = "ofx:fields";

export function Serializable(target: any, key: string | symbol) {
  const serializableFields: string[] =
    Reflect.getMetadata(SERIALIZABLE_FIELD_METADATA, target.constructor) ?? [];
  if (!serializableFields.includes(key.toString())) {
    serializableFields.push(key.toString());
  }
  Reflect.defineMetadata(
    SERIALIZABLE_FIELD_METADATA,
    serializableFields,
    target.constructor
  );
}
