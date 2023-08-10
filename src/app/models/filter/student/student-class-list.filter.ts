import {SchoolBaseFilter} from "../base.filter";

interface StudentClassListFilterParams {
  schoolId?: number
  organisationId?: number
  classLevelId: number
  academicYearId: number
  sequenceId: number,
  subjectId: number,
}

export class StudentClassListFilter extends SchoolBaseFilter {
  constructor(params: StudentClassListFilterParams, fill: boolean = true) {
    super(params, fill);
  }
}
