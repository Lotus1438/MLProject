import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EmailRequestFeedbackPageDataSource, EmailRequestFeedbackPageItem } from './email-request-feedback-page-datasource';

@Component({
  selector: 'app-email-request-feedback-page',
  templateUrl: './email-request-feedback-page.component.html',
  styleUrls: ['./email-request-feedback-page.component.css']
})
export class EmailRequestFeedbackPageComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<EmailRequestFeedbackPageItem>;
  dataSource: EmailRequestFeedbackPageDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new EmailRequestFeedbackPageDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
