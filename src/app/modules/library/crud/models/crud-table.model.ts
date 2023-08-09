export interface CrudTableDataProps<T> {
  title: string,
  headers: string[],
  data: T[],
  mappings: ((value: T) => any)[]
}
export class CrudTableData<T> {
  private readonly _table: CrudTable
  private readonly _title: string = '';
  private _data: T[] = [];
  private _headers: string[] = [];
  private readonly _mappings: ((value: T) => any)[] = [];

  constructor(
    props: CrudTableDataProps<T>
  ) {
    this._title = props.title;
    this._headers = props.headers;
    this._data = props.data;
    this._mappings = props.mappings;
    const headerCells = this._headers.map(h => new CrudTableCell(h));
    this._table = <CrudTable> {
      title: this._title,
      header: new CrudTableRow(headerCells),
      body: []
    }
    this.fillTable(props.data);
  }

  get table() {
    return this._table;
  }

  get data() {
    return this._data;
  }

  set data(d: T[]) {
    this._data = d;
    this.fillTable(d);
  }

  static empty = (): CrudTableData<any> => {
    return new CrudTableData<any>({
      title: '',
      data: [],
      headers: [],
      mappings: [],
    });
  }

  private fillTable(data: T[]) {
    this._table.body = [];
    data.map(d => {
      const row = new CrudTableRow([]);
      this._headers.forEach((header, index) => {
        const cell = new CrudTableCell(this._mappings[index](d));
        row.cells.push(cell);
      });
      this._table.body.push(row);
    })
  }
}


export class CrudTable {
  constructor(
    public title: string,
    public header: CrudTableRow,
    public body: CrudTableRow[],
    public footer?: CrudTableRow
  ) {
  }

  public static empty = () => <CrudTable>{
    title: '',
    header: {cells: []},
    body: [{cells: []}]
  }
}

export class CrudTableRow {
  constructor(
    public cells: CrudTableCell[]
  ) {
  }
}

export class CrudTableCell {
  constructor(
    public content: any
  ) {
  }

  get value() {
    return this.content
  }
}
