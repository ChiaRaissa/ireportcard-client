import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SubmitForm} from "../form/submit.form";
import {SchoolEntity} from "../../../../../models/entity/school/school.entity";
import {DEFAULT_ID} from "../../../../../utils/base.util";
import {OrganisationId} from "../../../../../services/general/local-storage.service";
import {upsertButton} from "../../../../../utils/button.util";

@Component({
  selector: 'app-form-school-upsert',
  templateUrl: './form-school-upsert.component.html',
  styleUrls: ['./form-school-upsert.component.css']
})
export class FormSchoolUpsertComponent implements SubmitForm {
  @Input()
  editing: boolean = false;

  @Input()
  school?: SchoolEntity;
  @Output()
  submitEvent = new EventEmitter<SchoolEntity>();
  readonly form: FormGroup = this._fb.group({
    name: [this.school?.name ?? '', Validators.required],
    motto: [this.school?.motto ?? '', Validators.required],
    organisationId: [DEFAULT_ID]
  });
  protected readonly upsertButton = upsertButton(this.editing);

  constructor(private _fb: FormBuilder) {
  }

  submit(): void {
    const school: SchoolEntity = {
      name: this.form.get('name')?.value,
      motto: this.form.get('motto')?.value,
      organisationId: OrganisationId()
    }
    this.submitEvent.emit(school)
  }

  patchForm(school: SchoolEntity) {
    this.form.patchValue({
      name: school.name,
      motto: school.motto,
      organisation: school.organisationId
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const school = changes['school']['currentValue']
    if (school) {
      this.patchForm(school);
    }
  }
}
