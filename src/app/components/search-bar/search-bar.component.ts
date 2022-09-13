import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GetDomainQuery } from 'src/app/store/actions/domain.actions';
import { IAppState } from 'src/app/store/states/app.state';
import { select, Store } from '@ngrx/store'
import { IQuery } from 'src/app/types/domainQuery.interface';
import { DisplayFeedback, DisplayResults } from 'src/app/store/actions/ui.actions';
import { forbiddenDomainValidator } from 'src/app/utils/forbiddenDomainValidator';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchbarComponent implements OnInit {
  @Input()
  feedback: string = '';

  feedbackUi$ = this._store.pipe(select('feedback'))

  selectedTld = 'com'; //define default value for form
  domainQueryForm: FormGroup = this.formBuilder.group({
    sldInput: ['',[
    Validators.required,
    forbiddenDomainValidator(/[^a-zA-Zäàöéèü0-9-]/)]],
    tldInput: [this.selectedTld],
  });

  onKey(event: KeyboardEvent) {
    if (event)
    this._store.dispatch(new DisplayResults(false));
    this._store.dispatch(new DisplayFeedback(true));
  }

  constructor(
    private formBuilder: FormBuilder,
    private _store: Store<IAppState>,
  ) {}

  ngOnInit(): void {
    this.domainQueryForm.valueChanges.subscribe();
    this._store.select('feedback').subscribe()

  }

  onSubmit() {
    try {
      const payload: IQuery = {
        sld: this.domainQueryForm.value.sldInput,
        tld: this.domainQueryForm.value.tldInput,
      }
      this._store.dispatch(new GetDomainQuery(payload));
      this._store.dispatch(new DisplayResults(true))
      this._store.dispatch(new DisplayFeedback(false));
      this.domainQueryForm.controls['sldInput'].reset();

    } catch (err) {
      console.log('❌ Error submitting query: ', err);
    }
  }
}
