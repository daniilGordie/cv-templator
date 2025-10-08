import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepicker, MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

import { MatFormField, MatLabel } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'resume-builder-form',
  templateUrl: './resume-builder-form.component.html',
  styleUrl: './resume-builder-form.component.scss',
  imports: [MatFormField, MatLabel, MatDatepicker, MatDatepickerModule, MatDatepickerToggle, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatNativeDateModule ]
})
export class ResumeBuilderFormComponent implements OnInit {
  public form!: FormGroup
  private fb = inject(FormBuilder)

  ngOnInit(): void {
    this.form = this.fb.group({
      profile: this.fb.group({
        description: [''],
      }),
      workExperience: this.fb.group({
        position: [''],
        city: [''],
        employer: [''],
        startDate: [''],
        endDate: [''],
        description: [''],
      }),
      education: this.fb.group({
        degree: [''],
        city: [''],
        institution: [''],
        startDate: [''],
        endDate: [''],
        description: [''],
      }),
      languages: this.fb.array([this.createLanguageGroup()]),
      skills: this.fb.array([this.createSkillGroup()]),
      courses: this.fb.group({
        course: [''],
        institution: [''],
        startDate: [''],
        endDate: [''],
        description: [''],
      }),
      achievements: this.fb.group({
        description: [''],
      }),
      interests: this.fb.group({
        hobby: [''],
      }),
      references: this.fb.group({
        company: [''],
        contactPerson: [''],
        phone: [''],
        email: [''],
      }),
    });
  }

  public get languages(): FormArray {
    return this.form.get('languages') as FormArray;
  }

  public get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  }

  private createLanguageGroup(): FormGroup {
    return this.fb.group({
      language: [''],
      level: [''],
    });
  }

  private createSkillGroup(): FormGroup {
    return this.fb.group({
      skill: [''],
      level: [''],
    });
  }

  public addLanguage(): void {
    this.languages.push(this.createLanguageGroup());
  }

  public removeLanguage(index: number): void {
    this.languages.removeAt(index);
  }

  public addSkill(): void {
    this.skills.push(this.createSkillGroup());
  }

  public removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  public onSubmit(): void {
    console.log('Form value:', this.form.value);
  }
}
