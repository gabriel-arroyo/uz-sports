import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Form } from 'src/app/core/interfaces/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnChanges {

  @Input() FormJson: any = null;
  @Input() NameButton: string = '';
  @Output() DelegateEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  fg!: FormGroup;
  Forms: Form[] = [];
  form!: Form;



  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.FormJson == null) return;
    let DataObject = this.FormJson;
    let ObjectProps = Object.keys(DataObject).map(prop => {
      return Object.assign({}, { key: prop }, DataObject[prop]);
    });

    const FormGroup1: any = {};
    for (let prop of Object.keys(DataObject)) {
      FormGroup1[prop] = new FormControl(DataObject[prop].value || '', this.MapValidators(DataObject[prop].validation));
    }
    this.fg = new FormGroup(FormGroup1);
    this.form = {
      Id: new Date().getUTCMilliseconds().toString(),
      FormGroup: this.fg,
      MetaData: ObjectProps,
      TransactionalData: []
    };
    //this.fg.valueChanges.subscribe((values) => this.DelegateEvent.emit(this.fg));
    this.Forms.push(this.form);
  }

  private MapValidators(validators: any) {
    const FormValidators: any[] = [];
    if (validators) {
      for(const validation of Object.keys(validators)) {
        if (validation === 'required') {
          FormValidators.push(Validators.required);
        } else if (validation === 'minLength') {
          FormValidators.push(Validators.minLength(validators[validation]));
        } else if (validation === 'maxLength') {
          FormValidators.push(Validators.maxLength(validators[validation]));
        }
      }
    }
    return FormValidators;
  }

  public HasValidator(ControlName: string, Validator: string): boolean {
    let Control: AbstractControl = this.fg.controls[ControlName];
    switch (Validator) {
      case 'required':
        Control.setValue('');
        break;
      case 'pattern':
        Control.setValue('3');
        break;
    }
    if (Control.validator != null && Control.validator(Control) != null) {
      let hasValidator: boolean = !!Control.validator(Control)!.hasOwnProperty(Validator);
      return hasValidator;
    }
    return false;
  }

  OnSubmit(Form: FormGroup) {
    this.DelegateEvent.emit(Form);
  }
}
