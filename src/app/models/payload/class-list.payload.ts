import {SubjectEntity} from "../entity/subject/subject.entity";
import {ClassLevelEntity} from "../entity/class-level/class-level.entity";
import {UserAccountEntity} from "../entity/user/user-account.entity";
import {GradeEntity} from "../entity/grade/grade.entity";

export interface ClassListPayload {
  subject: SubjectEntity
  classLevel: ClassLevelEntity
  scores: StudentGradeScorePayload[]
}

export interface StudentGradeScorePayload {
  student: UserAccountEntity
  grade: GradeEntity
}
