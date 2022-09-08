import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomainService } from '../domain.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  selectedTld = 'com';
  domainQueryForm: FormGroup = this.formBuilder.group({
    sldInput: ['', Validators.minLength(1)],
    tldInput: [this.selectedTld, Validators.minLength(1)],
  });

  constructor(private formBuilder: FormBuilder,
    private api: DomainService) {}

  ngOnInit(): void {
    this.domainQueryForm.valueChanges.subscribe((form) => {
      console.log(form);
    });
  }

  submitHandler() {
    try {
      console.log(this.domainQueryForm.value);
      if (
        this.domainQueryForm.value !== null &&
        this.domainQueryForm.value !== undefined
      ) {
        const payload = {
          sld: this.domainQueryForm.value.sldInput,
          tld: this.domainQueryForm.value.tldInput,
        };
        this.api.queryDomain(payload).subscribe();
      }
    } catch (err) {
      console.log('❌ Error submitting query: ', err);
    }
    // this.domainQueryForm.reset();
  }
}
