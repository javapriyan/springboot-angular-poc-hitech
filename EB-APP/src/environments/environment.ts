// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    getHistoryById:
      'https://run.mocky.io/v3/4c288c7d-cfeb-4e04-88ef-7ca765dfb0d2',
    fetch: 'https://run.mocky.io/v3/d403505e-7ff3-4fbf-815b-df880df04e6c',
    saveLastMeterReading:
      'https://run.mocky.io/v3/d403505e-7ff3-4fbf-815b-df880df04e6c',
    saveCalculation:
      'https://run.mocky.io/v3/d403505e-7ff3-4fbf-815b-df880df04e6c',
    editCalculation:
      'https://run.mocky.io/v3/d403505e-7ff3-4fbf-815b-df880df04e6c',
    history: 'https://run.mocky.io/v3/e2ec74a7-dd2e-4eeb-9f0a-ddce3e13ac40',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
