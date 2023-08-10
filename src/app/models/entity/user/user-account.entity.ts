import {Gender} from "../base/gender.enum";
import {Role} from "../base/role.enum";
import {BaseEntity} from "../base/base.entity";

export class UserAccountEntity extends BaseEntity {
  constructor(
    public accountId: string = "",
    public firstname: string,
    public lastname: string,
    public gender: Gender,
    public role: Role,
    public userId?: number,
    public schoolId?: number,
    public organisationId?: number,
    public name?: string,
  ) {
    super();
  }
}
