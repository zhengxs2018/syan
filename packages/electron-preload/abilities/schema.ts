import type { APISchema } from '@syan/core-protocol'

export const schemaSet = new Set<APISchema>()

export function canIUse(name: APISchema) {
  return schemaSet.has(name)
}
