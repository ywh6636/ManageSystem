interface TableColumn {
  prop: string
  label: string
  type: string
  sortable: boolean
  width: number
  [property: string]: unknown
}

export type { TableColumn }
