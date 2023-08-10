import {HttpParams} from "@angular/common/http";
import {Pair} from "../../app.types";
import {Id} from "../entity/base/base.entity";
import {OrganisationId, SchoolId} from "../../services/general/local-storage.service";
import {PaginationPayload} from "../payload/api/pagination.payload";

export interface BaseFilterParams {
  id?: Id
}

export interface OrganisationBaseFilterParams extends BaseFilterParams {
  organisationId?: number
}

export interface SchoolBaseFilterParams extends OrganisationBaseFilterParams {
  schoolId?: number
}

export abstract class BaseFilter extends HttpParams {
  private readonly _parameters: { [p: string]: any } = {};

  protected constructor(public p: { [p: string]: any }) {
    super();
    this.construct(p);
  }

  set param(pair: Pair) {
    this.updateParam(pair)
  }

  get parameters() {
    return this._parameters;
  }

  get obj(): { [p: string]: any } {
    const filteredParameters: { [p: string]: any } = {};
    Object.entries(this.parameters).forEach(([key, value]) => {
      if (value !== undefined && value != 'undefined') {
        filteredParameters[key] = value;
      }
    });
    return {
      'filter': JSON.stringify(filteredParameters)
    }
  }

  update(o: any) {
    if (typeof o == 'object') {
      Object.entries(o).forEach(([k, v]) => {
        this.param = {key: k, value: v};
      });
    }
  }

  addPagination = (pagination: PaginationPayload) => {
    this.param = {
      key: 'pagination',
      value: pagination
    }
  }

  private construct(obj: { [p: string]: any }) {
    if (typeof obj === 'object') {
      Object.entries(obj)
        .filter(([_, value]) => value !== undefined)
        .forEach(([key, value]) => {
          this.updateParam({key: key, value: value});
        });
    }
  }

  private updateParam(pair: Pair) {
    if (pair.value) {
      this.p[pair.key] = pair.value;
      this.set(pair.key, pair.value);
      this.append(pair.key, pair.value);
      this._parameters[pair.key] = pair.value;
    }
  }
}

export class SchoolBaseFilter extends BaseFilter {
  constructor(public params: SchoolBaseFilterParams, fill: boolean) {
    if (fill) {
      params.schoolId = SchoolId()!!
      params.organisationId = OrganisationId()
    }
    super(params);
  }

  static simple(obj?: SchoolBaseFilterParams) {
    const params = <SchoolBaseFilterParams>{
      schoolId: SchoolId(),
      organisationId: OrganisationId()
    }
    const filter = new SchoolBaseFilter(params, true);
    if (obj) {
      filter.update(obj);
    }
    return filter;
  }
}

export class OrganisationBaseFilter extends BaseFilter {
  constructor(public params: OrganisationBaseFilterParams) {
    super(params);
  }
}
