import {BaseEntity} from "../base/base.entity";
import {Language} from "../base/language.enum";

export class UserEntity extends BaseEntity {
  constructor(
    public username: string,
    public email: string,
    public language: Language,
    public accountId?: number,
    public approved?: boolean,
    public phone?: string,
    public address?: string,
  ) {
    super();
  }
}
