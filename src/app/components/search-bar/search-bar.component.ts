import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomainService } from '../../services/domain.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchbarComponent implements OnInit {
  result: any;
  selectedTld = 'com';
  domainQueryForm: FormGroup = this.formBuilder.group({
    sldInput: ['', Validators.minLength(1)],
    tldInput: [this.selectedTld, Validators.minLength(1)],
  });

  constructor(private formBuilder: FormBuilder, private domainService: DomainService) {}

  ngOnInit(): void {
    this.domainQueryForm.valueChanges.subscribe((form) => {
      console.log(form);
    });
  }

  submitHandler() {
    try {
      const payload = {
        sld: this.domainQueryForm.value.sldInput,
        tld: this.domainQueryForm.value.tldInput,
      };

      this.result = this.domainService.queryDomain(payload).subscribe();

      console.log(this.result, 'this.result');
      console.log(this.result, 'this.result.body')

    } catch (err) {
      console.log('❌ Error submitting query: ', err);
    }
    // this.domainQueryForm.reset();
  }
}
