import { BaseEntity } from "../base/base.entity";

export class OrganisationEntity extends BaseEntity {
    constructor(
      public name: string,
      public language: string
    ) {
        super();
    }
}
