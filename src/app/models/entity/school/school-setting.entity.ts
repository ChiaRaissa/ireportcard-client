import {MoneyEntity} from "../general/money.entity";

export class AdmissionSetting {
  constructor(
    public active: boolean,
    public invitationId: string,
    public schoolId: number
  ) {}
}

export class FeeSetting {
  constructor(
    public fee: MoneyEntity,
    public feeType: string,
    public schoolId: number
  ) {}
}
