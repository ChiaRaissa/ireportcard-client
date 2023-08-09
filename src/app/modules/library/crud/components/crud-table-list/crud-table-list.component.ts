import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {
  defaultPagination,
  paginationFromPaginatorState,
  PaginationPayload
} from "../../../../../models/payload/api/pagination.payload";
import {CrudTable, CrudTableCell, CrudTableData} from "../../models/crud-table.model";
import {PaginatorState} from "primeng/paginator";

@Component({
  selector: 'app-crud-table-list',
  templateUrl: './crud-table-list.component.html',
  styleUrls: ['./crud-table-list.component.css']
})
export class CrudTableListComponent {
  @Input()
  tableData: CrudTableData<any> = CrudTableData.empty();
  @Input()
  rowsPerPageOptions = [10, 25, 50];
  table: CrudTable = CrudTable.empty()
  @Input()
  pagination: PaginationPayload = defaultPagination();
  @Input()
  dataLoading = true;

  @Output()
  pageChangeEventEmitter = new EventEmitter<PaginatorState>();

  pageChangeAction($event: PaginatorState) {
    this.pageChangeEventEmitter.emit($event);
  }
}
