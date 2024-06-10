import { Component, OnInit } from '@angular/core';
import { GoogleSheetsService } from '../google-sheets.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: any[] = [];
  searchTerm: string = '';
  filteredData: any[] = [];

  constructor(private googleSheetsService: GoogleSheetsService) {}

  ngOnInit() {
    const spreadsheetId = 'YOUR_SPREADSHEET_ID';
    const range = 'Sheet1!A1:C'; // Измените на ваш диапазон

    this.googleSheetsService.getData(spreadsheetId, range).subscribe(response => {
      this.data = response.result.values;
      this.filteredData = this.data;
    });
  }

  search() {
    this.filteredData = this.data.filter(item =>
      item[0].includes(this.searchTerm) || item[1].includes(this.searchTerm));
  }

  updateStatus(item: any) {
    // Логика для обновления статуса в Google Sheets
    console.log('Updated item:', item);
  }
}
