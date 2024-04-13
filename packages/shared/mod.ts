export const inNodeJS =
  typeof process !== 'undefined' &&
  // eslint-disable-next-line eqeqeq
  process.versions != null &&
  // eslint-disable-next-line eqeqeq
  process.versions.node != null

const fallbackGlobalObject = {}

function resolveGlobalObject<T, U = T & typeof globalThis>(): U {
  if (typeof globalThis === 'undefined') {
    return (
      inNodeJS
        ? global
        : typeof window !== 'undefined' // eslint-disable-line no-restricted-globals
          ? window // eslint-disable-line no-restricted-globals
          : typeof self !== 'undefined'
            ? self
            : fallbackGlobalObject
    ) as U
  }

  return globalThis as unknown as U
}

export const globalObject = resolveGlobalObject()

export function getGlobalObject<T, U = T & typeof globalThis>(): U {
  return globalObject as unknown as U
}
