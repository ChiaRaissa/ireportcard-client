import { OrganisationEntity } from "../entity/school/organisation.entity";
import { UserEntity } from "../entity/user/user.entity";

export interface OrganisationSetupPayload {
    creator: UserEntity;
    organisation: OrganisationEntity;
    password: string;
}

export interface OrganisationPayload {
  organisation: OrganisationEntity;
}
