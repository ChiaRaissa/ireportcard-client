import {BaseEntity} from "../base/base.entity";

export class GradeEntity extends BaseEntity{
  constructor(
    public key: GradeKey,
    public score: number,
    public description: string
  ) {
    super()
  }
}

export interface GradeKey {
  sequenceId: number
  registrationId: number
}
