import * as firebase from "firebase";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  // firebaseConfig: {
  //   apiKey: "AIzaSyDkZyma91ZtTh3qvxB9AXVgu0_pdXwHAKA",
  //   authDomain: "animation-test-e64d9.firebaseapp.com",
  //   databaseURL: "https://animation-test-e64d9.firebaseio.com",
  //   projectId: "animation-test-e64d9",
  //   storageBucket: "animation-test-e64d9.appspot.com",
  //   messagingSenderId: "852211479437",
  //   appId: "1:852211479437:web:ae0e9377ad9e14c506c3c4"
  // }

  firebaseConfig : {
    apiKey: "AIzaSyDbimYQAnirzZJlY_OGP203_Ng-sQKzEkA",
    authDomain: "angularcrud-2a8f2.firebaseapp.com",
    databaseURL: "https://angularcrud-2a8f2.firebaseio.com",
    projectId: "angularcrud-2a8f2",
    storageBucket: "angularcrud-2a8f2.appspot.com",
    messagingSenderId: "111999364295",
    appId: "1:111999364295:web:7159c8225cc228d3c962e2"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.