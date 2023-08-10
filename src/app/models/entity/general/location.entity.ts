import {BaseEntity} from "../base/base.entity";

export class LocationEntity extends BaseEntity {
  constructor(
    public name: string,
    public latitude: number,
    public longitude: number,
    public description?: string
  ) {
    super();
  }
}
