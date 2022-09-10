## what is this?
poc repository to get and display google calendar api with swr（swrv）

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## create google credential

using a service account 

because not dealing with any user data but will be playing around with the application data only


### keys.json

create a service account and download the key file in json format by referring to the following article
ref: https://cloud.google.com/docs/authentication/production?hl=ja#create-service-account-console

the created json file is renamed to `credentials/keys.json` and saved directly under root

### .env
create .env file under root

contents are as follows

```
type= //Retrieved from keys.json
project_id= //Retrieved from keys.json
private_key_id= //Retrieved from keys.json
private_key= //Retrieved from keys.json
client_email= //Retrieved from keys.json
client_id= //Retrieved from keys.json
auth_uri= //Retrieved from keys.json
token_uri= //Retrieved from keys.json
auth_provider_x509_cert_url= //Retrieved from keys.json
client_x509_cert_url= //Retrieved from keys.json
calendar_id= //calendar_id from the Calendar Settings < Integrate calendar
project_number= //project_number  from the Project Settings (See Google Cloud Console).
admin_email= // The email address of the administrator, which is needed to delegate privileges when calling the admin SDK api via the service account.
```

## setup calendar account
create a dummy calendar that we can use to follow along with this guide. Once you create a new calendar, go to calendar settings and add the service account email in the “Share with specific people” option (set permissions to "Make changes to events"). 

## setup Admin SDK api
Google Workspace, an admin account, and building and resource settings are required.

Enable the Admin SDK API with GCP's API credentials and allow the necessary scope.

In Google Admin, go to Security > Access and Data Management > API Control and enter the id and scope of the service account you created under "Domain-wide Delegation".

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```