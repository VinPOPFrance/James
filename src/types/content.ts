/**
 * Recursively widens `as const` literal types to their base primitives.
 * Allows NL content objects (with different string literals) to satisfy
 * the same content prop types derived from home.*.
 */
export type DeepLoosen<T> =
  T extends readonly (infer U)[]
    ? readonly DeepLoosen<U>[]
    : T extends object
    ? { [K in keyof T]: DeepLoosen<T[K]> }
    : T extends string
    ? string
    : T extends number
    ? number
    : T extends boolean
    ? boolean
    : T;
