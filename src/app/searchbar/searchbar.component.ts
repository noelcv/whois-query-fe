import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  selectedTld = 'com';
  domainQueryForm = this.formBuilder.group({
    sldInput: '',
    tldInput: ''
  });
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.domainQueryForm.valueChanges.subscribe( form => {
      console.log(form)
    })
  }

}
