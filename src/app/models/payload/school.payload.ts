import {AddressEntity} from "../entity/general/address.entity";
import {AdmissionSetting, FeeSetting} from "../entity/school/school-setting.entity";
import {SchoolEntity} from "../entity/school/school.entity";

export interface SchoolSettingPayload {
  school: SchoolEntity
  address: AddressEntity[]
  feeSettings: FeeSetting[]
  admissionSettings: AdmissionSetting[]
}
