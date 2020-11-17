import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-import-user',
  templateUrl: './import-user.component.html',
  styleUrls: ['./import-user.component.scss']
})
export class ImportUserComponent implements OnInit {

  filetext: string;
  filename: string;
  constructor() { }

  displayedColumns: string[] = ['fname', 'lname', 'username', 'email' ];
  dataSource;
  selection = new SelectionModel(true, []);


  ngOnInit(){
  
  }

 

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.filetext = e.target.result;
        console.log(e.target.result);
        console.log(inputNode.value);
        this.extractFileName(inputNode.value);
      };
  
      reader.readAsText(inputNode.files[0], "UTF-8");
    }
  }

  extractFileName(url){
    const urlLen = url.length;
    let filename = [];
    for(let i = urlLen - 1; i > 0 ; i--){
      if(url[i] !== '\\'){
        filename.push(url[i]);
      } else{ 
        break;
      }
    }
    this.filename = filename.reverse().join('');
  }

  formatData(){
    return this.filetext.split(/\r\n|\n/);
  }
  lines;
  validateData(){
     this.lines = this.formatData();
     console.log(this.lines);
     this.addProps(this.lines);
     console.log(this.lines);
     this.dataSource = new MatTableDataSource(this.lines);
    
  }

  addProps(lines){
    this.lines = this.lines.map(line => {
      line = line.split(',');
      console.log(line);
      return {
        fname: line[0].trim(),
        lname: line[1].trim(),
        username: line[2].trim(),
        email: line[3].trim(),
      }
    })
  }



}
