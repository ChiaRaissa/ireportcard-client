import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ClassListPayload} from "../../../../../models/payload/class-list.payload";
import {StudentClassListFilter} from "../../../../../models/filter/student/student-class-list.filter";
import {ClassLevelEntity} from "../../../../../models/entity/class-level/class-level.entity";
import {TermEntity} from "../../../../../models/entity/academic-cycle/term.entity";
import {YearEntity} from "../../../../../models/entity/academic-cycle/year.entity";
import {SequenceEntity} from "../../../../../models/entity/academic-cycle/sequence.entity";
import {SubjectEntity} from "../../../../../models/entity/subject/subject.entity";
import {ClassLevelService} from "../../../../../services/http/class-level/class-level.service";
import {YearService} from "../../../../../services/http/academic-cycle/year.service";
import {SequenceService} from "../../../../../services/http/academic-cycle/sequence.service";
import {SubjectService} from "../../../../../services/http/subject/subject.service";
import {SchoolBaseFilter} from "../../../../../models/filter/base.filter";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-table-list-student-classlist',
  templateUrl: './table-list-student-classlist.component.html',
  styleUrls: ['./table-list-student-classlist.component.css']
})
export class TableListStudentClasslistComponent implements OnInit, OnDestroy {
  @Input()
  title: string = $localize`Applications`;

  data?: ClassListPayload;
  filter = new StudentClassListFilter({
    classLevelId: -1,
    academicYearId: -1,
    sequenceId: -1,
    subjectId: -1
  });
  classLevels: ClassLevelEntity[] = [];
  academicYears: YearEntity[] = [];
  sequences: SequenceEntity[] = [];
  subjects: SubjectEntity[] = [];
  private subscriptions: Subscription[] = [];

  constructor(
    private _classLevelService: ClassLevelService,
    private _yearService: YearService,
    private _sequenceService: SequenceService,
    private _subjectService: SubjectService
  ) {
  }

  ngOnInit() {
    const classLevel$ = this._classLevelService.listDto(SchoolBaseFilter.simple()).subscribe(res => {
      this.classLevels = res;
    });
    const year$ = this._yearService.getAllBySchoolId().subscribe(res => {
      this.academicYears = res;
    });
    const subject$ = this._subjectService.listDto(SchoolBaseFilter.simple()).subscribe(res => this.subjects = res);
    this.subscriptions.push(classLevel$, year$, subject$)
  }


  ngOnDestroy() {
    this.subscriptions.forEach($ => $.unsubscribe());
  }
}
