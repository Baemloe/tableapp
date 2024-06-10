import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetsService {

  private CLIENT_ID = 'YOUR_CLIENT_ID';
  private API_KEY = 'YOUR_API_KEY';
  private DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
  private SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

  constructor() {
    this.initClient();
  }

  private initClient() {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: this.API_KEY,
        clientId: this.CLIENT_ID,
        discoveryDocs: this.DISCOVERY_DOCS,
        scope: this.SCOPES
      }).then(() => {
        gapi.auth2.getAuthInstance().signIn();
      });
    });
  }

  getData(spreadsheetId: string, range: string): Observable<any> {
    return from(gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: range,
    }));
  }
}
