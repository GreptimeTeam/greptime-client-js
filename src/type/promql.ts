import { RowsType, SchemaColumnState } from './common'

export interface PromQLResultState {
  schema: Array<SchemaColumnState>
  rows: RowsType
  promQL: PromQLArgs
}

export interface PromQLArgs {
  query: string
  start: number
  end: number
  step: string
  db: string
}
export interface PromQLParams {
  metrics: string
  selectors: string | Object
  range: string
  field: string
  functions: string | string[]
}
