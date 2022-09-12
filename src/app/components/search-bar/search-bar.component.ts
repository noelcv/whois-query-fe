import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, RequiredValidator } from '@angular/forms';
import { GetDomainQuery, DisplayResults} from 'src/app/store/actions/domain.actions';
import { IAppState } from 'src/app/store/states/app.state';
import { DomainService } from '../../services/domain.service';
import { select, Store } from '@ngrx/store'
import { IQuery } from 'src/app/types/domainQuery.interface';
import { selectedDomain } from 'src/app/store/selectors/domain.selectors';
import { IDomainResult } from 'src/app/types/domainResult.interface';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchbarComponent implements OnInit {
  selectedTld = 'com'; //define default value for form
  domainQueryForm: FormGroup = this.formBuilder.group({
    sldInput: ['', Validators.minLength(1)],
    tldInput: [this.selectedTld, Validators.minLength(1)],
  });

  onKey(event: KeyboardEvent) {
    if (event)
    this._store.dispatch(new DisplayResults(false))
  }

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
      this._store.dispatch(new GetDomainQuery(payload));
      this._store.dispatch(new DisplayResults(true))

      this.domainQueryForm.controls['sldInput'].reset();

    } catch (err) {
      console.log('❌ Error submitting query: ', err);
    }

  }
}
