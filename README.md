# visits
## HOW TO START
### Run Frontend:
- open console 'strg ö'
- navigate to 'angular-basic'
- enter 'npm i' to install npm packages
- enter 'npm start' to start project http://localhost:4200

### Run API
- open an additional console
- navigate to 'api'
- enter 'npm i' to install npm packages
- enter 'npm start' to start functions 'http://0.0.0.0:7071'


## Components used for now:
Following components and functions are used:

### Frontend:
- 'angular-basic/src/app/core/model/visit.ts defines to model of a visit.
- 'visit-detail-component' which provides the formular to 
    - enter new visit data
    - cancel input
    - save visit data
- 'visit-detail-component' is implemented in 'visit-component' which provides a header addionaly.
- 'angular-basic\src\app\store\config.ts' defines the src of the api

### Backend:
- 'api/shared/visit-data.js' implements
    - the mocked data and
    - the function 'getVisits', 'deleteVisit', 'addVisit' and 'updateVisit' to modify the data.
- 'api/visits-post/function.json' defines the type of the function
- 'api/visits-post/index.js' defines the model for this request

