import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

    profileData: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.initForm();
    }

    updateInput() {
        console.log(this.profileData);
        this.profileData.patchValue({
            salary: '333333'
        });
    }

    get f() { return this.profileData.controls }

    submitForm() {
        if (this.profileData.valid) {
            console.log(this.profileData.value);
        }
    }

    initForm() {
        this.profileData = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            email: ['', [Validators.required, Validators.email]],
            salary: ['', [Validators.maxLength(10)]],
            address: this.fb.group({
                city: ['',Validators.required],
                street: ['',Validators.required]
            })
        });
    }

    isFieldInvalid(field: string) {
        return this.f[field].invalid && (this.f[field].dirty || this.f[field].touched);
    }
}
