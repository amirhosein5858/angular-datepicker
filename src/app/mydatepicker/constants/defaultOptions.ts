import {DateOptions} from '../models/options.model'
const DEFAULT_DATE_OPTION: DateOptions = {
  type: 'DATE',
  header: {
    detail: {
      showMonth: true,
      showYear: true
    },
    title: {
      text: 'my date picker'
    },
    buttons:{
      left:{
        text:'بعد'
      },
      right: {
        text: 'قبل'
      },
      actionToNext: 'left'
    }
  },
  weekDayBar: {
    days: {
      nameSet: [
        'ش',
        'ی',
        'د',
        'س',
        'چ',
        'پ',
        'ج',
      ]
    },
    startFrom: 1
  }
}

const DEFS = {
  DEFAULT_DATE_OPTION
}

export default DEFS
