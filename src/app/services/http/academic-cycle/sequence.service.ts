import { Injectable } from '@angular/core';
import {AppService} from "../base/app.service";
import {SequenceEntity} from "../../../models/entity/academic-cycle/sequence.entity";
import {SchoolBasedAppService} from "../base/school-based.app.service";
import {HttpClient} from "@angular/common/http";
import {AppEndpoint} from "../../../app.endpoints";

@Injectable({
  providedIn: 'root'
})
export class SequenceService extends SchoolBasedAppService<SequenceEntity, any> {

  constructor(private http: HttpClient) {
    super(http, AppEndpoint.ACADEMIC_CYCLE_SEQUENCE);
  }
}
