import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EmailRequestFeedbackPageDataSource, EmailRequestFeedbackPageItem } from './email-request-feedback-page-datasource';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-email-request-feedback-page',
  templateUrl: './email-request-feedback-page.component.html',
  styleUrls: ['./email-request-feedback-page.component.css']
})
export class EmailRequestFeedbackPageComponent implements AfterViewInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<EmailRequestFeedbackPageItem>;
  dataSource: EmailRequestFeedbackPageDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select', 'name'];

  constructor() {
    this.dataSource = new EmailRequestFeedbackPageDataSource();
  }



  // ngOnInit(): void{

  // }
  selectForm = new FormGroup ({
    select: new FormControl (' ', [Validators.required]),
  })

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;


  }

  submit(){
    console.log("Login Successfully!");
  }


  sendRequest(){
    console.log("Request Send Successfully!");
    // swal field
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be sending request feedback form to these emails!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, send it!',
      cancelButtonText: 'No, cancel it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Send!',
          'Your requst feedback form is succesfully sent :)',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your request feedback form is cancelled.',
          'error'
        )
      }
    })
  }

}
