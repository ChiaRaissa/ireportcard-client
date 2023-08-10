import {BaseEntity} from "../base/base.entity";
import {CycleInfo} from "./year.entity";

export class SequenceEntity extends BaseEntity {
  constructor(
    public name: string,
    public termId: number,
    public schoolId: number,
    public cycleInfo: CycleInfo
  ) {
    super();
  }
}
