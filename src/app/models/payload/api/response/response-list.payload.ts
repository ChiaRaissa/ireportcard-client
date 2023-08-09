import {PaginationPayload} from "../pagination.payload";

export interface ResponseListPayload<T> {
  data: T[]
  pagination: PaginationPayload
}
