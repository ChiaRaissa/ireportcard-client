import {Component, OnInit} from '@angular/core';
import {TableModel} from "../../../../library/crud/models/table.model";
import {SchoolService} from "../../../../../services/school/school.service";
import {OrganisationId} from "../../../../../services/general/local-storage.service";
import {SchoolUtil} from "../../../../../utils/school.util";
import {Id} from "../../../../../models/entity/base/base.entity";
import {RouterService} from "../../../../../services/general/router.service";
import {AppRoute} from "../../../../../app.routes";
import {SchoolEntity} from "../../../../../models/entity/school/school.entity";
import {DataComponent} from "../../../../library/component/data.component";

@Component({
  selector: 'app-org-schools',
  templateUrl: './org-schools.component.html',
  styleUrls: ['./org-schools.component.css']
})
export class OrgSchoolsComponent implements OnInit, DataComponent<SchoolEntity[]> {
  table?: TableModel;
  title = "Schools";
  data: SchoolEntity[] = [];

  constructor(
    private _routerService: RouterService,
    private _schoolService: SchoolService
  ) {
  }

  ngOnInit(): void {
    this._schoolService.getAllByOrganisation(OrganisationId).subscribe(res => this.data = res);
  }

  protected readonly AppRoute = AppRoute;
}
