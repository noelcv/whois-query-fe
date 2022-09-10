import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GetDomainQuery, GetDomainResult } from 'src/app/store/actions/domain.actions';
import { IAppState } from 'src/app/store/states/app.state';
import { DomainService } from '../../services/domain.service';
import { select, Store } from '@ngrx/store'
import { IQuery } from 'src/app/types/domainQuery.interface';
import { selectedDomain } from 'src/app/store/selectors/domain.selectors';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchbarComponent implements OnInit {
  domainResult$ = this._store.pipe(select(selectedDomain))
  selectedTld = 'com';
  domainQueryForm: FormGroup = this.formBuilder.group({
    sldInput: ['', Validators.minLength(1)],
    tldInput: [this.selectedTld, Validators.minLength(1)],
  });

  constructor(
    private formBuilder: FormBuilder,
    private _store: Store<IAppState>,
  ) {}

  ngOnInit(): void {
    this.domainQueryForm.valueChanges.subscribe((form) => {
      console.log(form);
    });
  }

  submitHandler() {
    try {
      const payload: IQuery = {
        sld: this.domainQueryForm.value.sldInput,
        tld: this.domainQueryForm.value.tldInput,
      };

      //NgRx approach
      //TODO: create new action type QueryDomain to be dispatched
      //instead of GetDomainResult
      this._store.dispatch(new GetDomainQuery(payload));


      // data binding approach
      // this.result = this.domainService.queryDomain(payload).subscribe();


    } catch (err) {
      console.log('❌ Error submitting query: ', err);
    }
    // this.domainQueryForm.reset();
  }
}
