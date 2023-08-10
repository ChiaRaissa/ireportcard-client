import {Component,  OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {dateToISO, today, todayYear} from "../../../../../utils/date.util";
import {AcademicCyclePayload} from "../../../../../models/payload/academic-cycle.payload";
import {AcademicCycleService} from "../../../../../services/http/academic-cycle/academic-cycle.service";

@Component({
  selector: 'app-form-cycle-academic-year',
  template: `
    <form [formGroup]="form" (submit)="submit()" class="formgrid grid">
      <div class="col-12">
        <div class="pb-3">
          <span class="text-xl">Academic Year Details</span>
        </div>
        <div class="grid">
          <div class="field col-12">
            <label for="year1">Start Year</label>
            <input (change)="endYearValue()" type="number" class="w-full p-inputtext-sm" id="year1" formControlName="startYear" pInputText>
          </div>
          <div class="field col-12">
            <label for="year2">End Year</label>
            <input [value]="endYearValue()" class="w-full p-inputtext-sm" id="year2" formControlName="endYear" pInputText>
          </div>
          <div class="field col-12">
            <label class="block mb-2" for="openingDate">Opening Date</label>
            <p-calendar id="openingDate" styleClass="w-full p-inputtext-sm" formControlName="openingDate"></p-calendar>
          </div>
          <div class="field col-12">
            <label class="block mb-2" for="closingDate">Closing Date</label>
            <p-calendar id="closingDate" styleClass="w-full p-inputtext-sm" formControlName="closingDate"></p-calendar>
          </div>
        </div>
        <div class="col-12 gap-2 flex flex-wrap gap-1">
          <p-button label="Save" styleClass="p-button-sm"></p-button>
          <p-button label="Reset" styleClass="p-button-sm p-button-secondary"></p-button>
        </div>
      </div>
    </form>
  `,
  styles: [
  ]
})
export class FormCycleAcademicYearComponent implements OnInit{
  academicCyclePayload!: AcademicCyclePayload
  form: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _academicCycleService: AcademicCycleService
  ) {
    this.form  = this._fb.group({
      startYear: [todayYear(), Validators.required],
      endYear: [{value: todayYear() + 1, disabled: true}, Validators.required],
      openingDate: [today(), Validators.required],
      closingDate: []
    })
  }

  ngOnInit() {
    this._academicCycleService.currentCycle().subscribe((this.patch))
  }

  endYearValue = () => {
    const startYear = (this.form.get('startYear')?.value ?? 0);
    if (!isNaN(startYear)) {
      return parseInt(startYear) + 1;
    } else {
      return 0;
    }
  }

  submit = () => {
    const academicCyclePayload: AcademicCyclePayload = {
      year: {
        startYear: this.form.get('startYear')?.value,
        cycleInfo: {
          openingDate: this.form.get(('openingYear'))?.value,
          closingDate: this.form.get('closingDate')?.value
        }
      }
    }
    this._academicCycleService.launch(academicCyclePayload).subscribe(() => {
      this._academicCycleService.currentCycle().subscribe((this.patch))
    })
  }

  private patch = (payload: AcademicCyclePayload) => {
    this.academicCyclePayload = payload;
    this.form.patchValue({
      startYear: payload.year.startYear,
      endYear: payload.year.endYear,
      openingDate: dateToISO(payload.year.cycleInfo.openingDate),
      closingDate: dateToISO(payload.year.cycleInfo.closingDate),
    });
  }

}
