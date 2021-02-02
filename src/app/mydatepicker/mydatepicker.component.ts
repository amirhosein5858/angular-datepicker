import { Component, OnInit, Input } from '@angular/core';
import DEFS from './constants/defaultOptions';
import {
  NotRangedSelect,
  RangedSelect,
} from './models/onSelect-response.model';
import { DateOptions,DateTimeOptions,TimeOptions } from './models/options.model';


@Component({
  selector: 'app-mydatepicker',
  templateUrl: './mydatepicker.component.html',
  styleUrls: ['./mydatepicker.component.scss'],
})
export class MydatepickerComponent implements OnInit {

  //returner value
  @Input() onSelect: (data: NotRangedSelect | RangedSelect) => void; //fires when user select a date

  @Input() options: DateOptions
  private _startDate: string;
  private _endtDate: string;
  private _startTime: string;
  private _endTime: string;
  private _startDateTime: string;
  private _endDateTime: string;
  _options;
  _cuurentMonth: string = 'January ';
  _currentYear: string = '2020';


  constructor() {}

  ngOnInit(): void {
    this._setOptions()
  }

  _setOptions() {
    this.options = this.options ? {...DEFS.DEFAULT_DATE_OPTION , ...this.options} : DEFS.DEFAULT_DATE_OPTION
  }
  isValidInputs(): boolean {
    //validate inputs
    return false;
  }

  warn(message: string) {
    //warn custom messages
  }
}
