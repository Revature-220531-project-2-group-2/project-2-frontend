// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

// this url represents where our Spring Boot can receive HTTP requests
// export const url = `http://localhost:5000`;
export const url = `http://ec2-user@ec2-34-201-65-39.compute-1.amazonaws.com:5000`

// url for DnD api
export const dndUrlPrimary = `https://www.dnd5eapi.co/api/`;
export const dndUrlAlternate = `https://api.open5e.com/`

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
