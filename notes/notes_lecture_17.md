
## 1. Repeat and check homework
## 2. GitHub Actions run Newman

Require postman json file and environment file accordingly.  
Initiate git repository  

Create, commit and push:  
    ./.github/workflows/file_name.yml

```powershell
    mkdir .github
    cd .github

    mkdir workflows
    cd workflows

    new-item file_name.yml # windows
    touch file_name.yml # mac
```

### Require to add data into yml file simple actions:
```yaml
name: Run Postman Tests with Newman

on:
  push:
    branches: [ main ]
  pull_request:

jobs:
  postman-tests:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install Newman
        run: npm install -g newman

      - name: Run Postman tests
        run: |
          newman run booker_postman_collection.json \
            --environment env_postman_booker.json
```

### yml file with reports additionally:
```yaml
name: Run Postman Tests with Newman

on:
  push:
    branches: [ main ]
  pull_request:

jobs:
  postman-tests:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install Newman
        run: npm install -g newman

      - name: Run Postman tests
        run: |
          newman run postman/booker_postman_collection.json \
            --environment postman/env_postman_booker.json \
            --reporters cli,html \
            --reporter-html-export newman/report.html

      - name: Upload Newman HTML Report
        uses: actions/upload-artifact@v3
        with:
          name: newman-html-report
          path: newman/report.html

```
## 3. Newman reports

Creates test report into `.\newman\report_name.json`
```powershell
    newman run .\booker_postman_collection.json -e .\env_postman_booker.json -r json
```

Install htmlextra globally:
```cmd
    npm install -g newman-reporter-htmlextra
```

Generate htmlextra report:
```powershell
    npx newman run .\booker_postman_collection.json -e .\env_postman_
    booker.json -r htmlextra
```
