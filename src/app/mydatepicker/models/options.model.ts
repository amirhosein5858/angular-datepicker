import * as CSS from 'csstype';
//TODO: add diferent type options for 3 types
export interface DateOptions {
  header?: {
    title?: {
      text?: string;
      style?: CSS.Properties;
      enabled?: boolean;
    };
    buttons?: {
      left?: {
        text?: string;
        style?: CSS.Properties;
        enabled?: boolean;
      };
      right?: {
        text?: string;
        style?: CSS.Properties;
        enabled?: boolean;
      };
      actionToNext?: 'left' | 'right';
    };
    detail?: {
      showYear?: boolean;
      showMonth?: boolean;
    };
  };

  weekDayBar?: {
    days?: {
      nameSet?: [string, string, string, string, string, string, string];
      style?: CSS.Properties;
    };
    startFrom?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    style?: CSS.Properties;
  };
  direction?: 'rtl' | 'ltr';
  ranged?: boolean;
  type: 'DATE';
  startDate?: string;
  endDate?: string;
  afterDate?: string;
  beforeDate?: string;
}

export interface DateTimeOptions {
  header?: {
    title?: {
      text?: string;
      style?: CSS.Properties;
      enabled?: boolean;
    };
    buttons?: {
      left?: {
        text?: string;
        style?: CSS.Properties;
        enabled?: boolean;
      };
      right?: {
        text?: string;
        style?: CSS.Properties;
        enabled?: boolean;
      };
    };
    detail?: {
      date?: {
        year?: {
          enabled?: boolean;
          style?: CSS.Properties;
        };
        month?: {
          enabled?: boolean;
          style?: CSS.Properties;
        };
      };

      time?: {
        hour?: {
          enabled?: boolean;
          style?: CSS.Properties;
        };
        minute?: {
          enabled?: boolean;
          style?: CSS.Properties;
        };
        second?: {
          enabled?: boolean;
          style?: CSS.Properties;
        };
      };
    };
    actionToNext?: 'left' | 'right';
  };
  direction?: 'rtl' | 'ltr';
  weekDayBar?: {
    days?: {
      nameSet?: [string, string, string, string, string, string, string];
      style?: CSS.Properties;
    };
    startFrom?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    style?: CSS.Properties;
  };

  ranged?: boolean;
  type: 'DATE_TIME';
  startDateTime?: string;
  endDateTime?: string;
  afterDateTime?: string;
  beforeDateTime?: string;
}

export interface TimeOptions {
  header?: {
    title?: {
      text?: string;
      style?: CSS.Properties;
      enabled?: boolean;
    };
    detail?: {
      showTime?: boolean;
      showSeconds?: boolean;
      enabled?: boolean;
    };
    actionToNext?: 'left' | 'right';
  };
  direction?: 'rtl' | 'ltr';
  ranged?: boolean;
  type: 'TIME';
  startTime?: string;
  endTime?: string;
  afterTime?: string;
  beforeTime?: string;
  mode?: 'clasic' | 'weel' | 'grid' | 'mosaic';
}
