import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Character } from 'src/app/core/model/character';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges  {

  @Input() array: Character[];

  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];
  
  dataSource: MatTableDataSource<Character> = new MatTableDataSource();;
  constructor() { }
  
  ngOnInit(): void {
    if(this.array.length < 0){
    }
  }
  
  ngOnChanges(changes: SimpleChanges): void {
      this.dataSource = new MatTableDataSource(this.array);

      //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
      //Add '${implements OnChanges}' to the class.
      
    }
  
  
}

