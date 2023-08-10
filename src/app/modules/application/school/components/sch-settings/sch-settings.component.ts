import {Component, OnInit} from '@angular/core';
import {faIcon} from "../../../../../utils/icon.util";
import {SchoolSettingService} from "../../../../../services/http/school/school-setting.service";
import {SchoolSettingPayload} from "../../../../../models/payload/school.payload";

@Component({
  selector: 'app-sch-settings',
  templateUrl: './sch-settings.component.html',
  styleUrls: ['./sch-settings.component.css']
})
export class SchSettingsComponent implements OnInit {

  protected readonly faIcon = faIcon;
  protected settingPayload?: SchoolSettingPayload;

  constructor(private _schoolSettingService: SchoolSettingService) {
  }

  ngOnInit() {
    this._schoolSettingService.getPayload().subscribe(res => this.settingPayload = res);
  }
}
