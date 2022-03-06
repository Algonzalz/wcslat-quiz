import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { promise } from 'protractor';
import { Character } from 'src/app/core/model/character';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {

  @Input() array: Character[];

  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];
  
  dataSource: MatTableDataSource<Character> = new MatTableDataSource(); 
  
  constructor(private changeDetectorRefs: ChangeDetectorRef) { }
  
  ngOnInit(): void {
    console.log(this.array)
  }
  
  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.dataSource = new MatTableDataSource(this.array); 

    },1000);
    
  }
  
}

