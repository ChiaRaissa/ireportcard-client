import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../../services/http/user/user.service";
import {TableModel} from "../../../../library/crud/models/table.model";
import {UserPayload} from 'src/app/models/entity/user/user.payload';

@Component({
  selector: 'app-org-members',
  templateUrl: './org-members.component.html',
  styleUrls: ['./org-members.component.css']
})
export class OrgMembersComponent implements OnInit {
  table?: TableModel;
  data: UserPayload[] = []

  constructor(private _userService: UserService,) {
  }

  ngOnInit(): void {

  }
}
