import { FormGroup } from '@angular/forms';
export interface Form {
    Id: string;
    FormGroup: FormGroup;
    MetaData: any[];
    TransactionalData: any[];
}
