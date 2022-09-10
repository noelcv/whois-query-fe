import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GetDomainResult } from 'src/app/store/actions/domain.actions';
import { IAppState } from 'src/app/store/states/app.state';
import { DomainService } from '../../services/domain.service';
import { Store } from '@ngrx/store'

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

  constructor(
    private formBuilder: FormBuilder,
    private _store: Store<IAppState>,
    private domainService: DomainService) {}

  ngOnInit(): void {
    this.domainQueryForm.valueChanges.subscribe((form) => {
      console.log(form);
    });
  }

  submitHandler() {
    try {
      const payload = {
        sld: this.domainQueryForm.value.sldInput as string,
        tld: this.domainQueryForm.value.tldInput as string,
        domain: this.domainQueryForm.value.sldInput + '.' + this.domainQueryForm.value.tldInput as string,
        type: 'domain',
        payload: {
          sld: this.domainQueryForm.value.sldInput as string,
          tld: this.domainQueryForm.value.tldInput as string,
        }
      };

      //NgRx approach
      //TODO: create new action type QueryDomain to be dispatched
      //instead of GetDomainResult
      this._store.dispatch(new GetDomainResult(payload));


      // data binding approach
      // this.result = this.domainService.queryDomain(payload).subscribe();


    } catch (err) {
      console.log('❌ Error submitting query: ', err);
    }
    // this.domainQueryForm.reset();
  }
}
