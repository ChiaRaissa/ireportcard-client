import { Injectable } from '@angular/core';
import {AppService} from "../base/app.service";
import {OrganisationPayload, OrganisationSetupPayload} from "../../../models/payload/organisationSetupPayload";
import {OrganisationEntity} from "../../../models/entity/school/organisation.entity";
import {HttpClient} from "@angular/common/http";
import {AppEndpoint} from "../../../app.endpoints";

@Injectable({
  providedIn: 'root'
})
export class OrganisationService extends AppService<OrganisationEntity, OrganisationPayload> {

  constructor(private http: HttpClient) {
    super(http, AppEndpoint.ORGANISATION)
  }

  create = (organisation: OrganisationSetupPayload) => {
    return this.post(organisation, '/setup');
  }
}
