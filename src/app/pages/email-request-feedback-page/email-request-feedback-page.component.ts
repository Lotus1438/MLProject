import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EmailRequestFeedbackPageDataSource, EmailRequestFeedbackPageItem } from './email-request-feedback-page-datasource';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { EmailService } from 'src/app/services/email.service';

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
  cnt : number = 0;
  myArray : Array<string> = [];
  emails : any;
  message : any;
    constructor(private service : EmailService) {
    this.dataSource = new EmailRequestFeedbackPageDataSource();
  }


  public emailRequest = [];

  // ngOnInit(): void{
  //   this.emailRequest = this.getEmails();
  // }
  selectForm = new FormGroup ({
    select: new FormControl (' ', [Validators.required]),
  })

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    (<HTMLInputElement> document.getElementById("btnsend-request")).disabled = true;
    (<HTMLInputElement> document.getElementById("btnsend-request-2")).disabled = true;
    this.getEmails();
    this.emailRequest = this.emails;
  }

  submit(){
    console.log("Login Successfully!");
  }

  getEmails(){
    this.service.getAllEmails().subscribe((data:any) => {
      this.emails = data.data;
      console.log(data);

    });
  }

  Check(event:MatCheckboxChange): void {
    var id = event.source.id.split('-')[2];
    var index = Number(id);
    var data = document.getElementsByClassName('example-margin');
    var email = data[index-1].parentElement?.parentElement?.lastElementChild?.textContent

    let name:string = email!;
    var indexName = this.myArray.indexOf(name);

    if(event.checked == false){
      this.cnt -= 1;
      this.myArray.splice(indexName, 1);
    }else{
      this.cnt += 1;
      this.myArray.push(name)
    }

    // console.log(this.myArray);

    if( this.cnt >=5 && this.cnt<=7){
      (<HTMLInputElement> document.getElementById("btnsend-request")).disabled = false;
      (<HTMLInputElement> document.getElementById("btnsend-request-2")).disabled = false;

    }else{
      (<HTMLInputElement> document.getElementById("btnsend-request")).disabled = true;
      (<HTMLInputElement> document.getElementById("btnsend-request-2")).disabled = true;
    }

}

  sendRequest(){
    console.log("Request Send Successfully!");
    // this.service.test().subscribe((data) => {
    //   console.log(data);

    // })

    // swal field
    //route = https//sendmail.com/api/send-email, this.myArray
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be sending "' + this.myArray + '" request feedback form to these emails!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, send it!',
      cancelButtonText: 'No, cancel it'
    }).then((result) => {

      if (result.value) {
        this.service.sendEmail(this.myArray).subscribe((data:any)=>{
          console.log(data);

          Swal.fire(
            'Send!',
            'success'
          )
        })

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
