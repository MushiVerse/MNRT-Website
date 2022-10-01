import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-mapori',
  templateUrl: './mapori.component.html',
  styleUrls: ['./mapori.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MaporiComponent implements OnInit {

  @ViewChild('sortAkiba') sortAkiba!: MatSort;
  @ViewChild('paginatorAkiba') paginatorAkiba!: MatPaginator;
  //@ViewChild('maporiAkibaSort') maporiAkibaSort!: MatTable<any>;
  @ViewChild('sortTengefu') sortTengefu!: MatSort;
  @ViewChild('paginatorTengefu') paginatorTengefu!: MatPaginator;
  //@ViewChild('maporiTengefuSort') maporiTengefuSort!: MatTable<any>;
  
  constructor( public spinner: SpinnerService) { }
  akibashow: boolean = false;
  tengefushow: boolean = true;
  //mapoti Akiba
  maporiAkiba: any = [
    {id:1, name:"Selous",address:"Pwani/Morogoro/Lindi/Ruvuma",size:"50,000",decl_year:"275 ya 1974"},
    {id:2, name:"Rungwa",address:"Singida,Mbeya",size:"9,000",decl_year:"275 ya 1974"},
    {id:3, name:"Liparamba",address:"Ruvuma",size:"570",decl_year:"289 ya 2000"},
    {id:4, name:"Uwanda",address:"Rukwa",size:"5,000",decl_year:"275 ya 1974"},
    {id:5, name:"Ugalla",address:"Tabora",size:"5,000",decl_year:"281 na 282 ya 1965"},
    {id:6, name:"Maswa",address:"Simiyu",size:"2,000",decl_year:"482 ya 2002"},
    {id:7, name:"Liparamba",address:"Ruvuma",size:"570",decl_year:"289 ya 2000"},
    {id:8, name:"Uwanda",address:"Rukwa",size:"5,000",decl_year:"275 ya 1974"},
    {id:9, name:"Ugalla",address:"Tabora",size:"5,000",decl_year:"281 na 282 ya 1965"}
    
  ]
  maporiAkibaArray = new MatTableDataSource<any>();
  maporiAkibadisplayedColumns = ["sn","name","address","size","decl_year"];

  //mapoti Tengefu
  maporiTengefu: any = [
    {id:1, name:"Selous",address:"Pwani/Morogoro/Lindi/Ruvuma",size:"50,000",decl_year:"275 ya 1974"},
    {id:2, name:"Rungwa",address:"Singida,Mbeya",size:"9,000",decl_year:"275 ya 1974"},
    {id:3, name:"Liparamba",address:"Ruvuma",size:"570",decl_year:"289 ya 2000"},
    {id:4, name:"Uwanda",address:"Rukwa",size:"5,000",decl_year:"275 ya 1974"},
    {id:5, name:"Ugalla",address:"Tabora",size:"5,000",decl_year:"281 na 282 ya 1965"},
    {id:6, name:"Maswa",address:"Simiyu",size:"2,000",decl_year:"482 ya 2002"}
    

  ]
  maporiTengefuArray = new MatTableDataSource<any>();
  maporiTengefudisplayedColumns = ["sn","name","address","size","decl_year"];

  ngOnInit(): void {
    
    this.getmaporiAkiba();
    this.getmaporiTengefu()
  }


  getmaporiAkiba(){
    this.maporiAkibaArray.data = this.maporiAkiba;
    setTimeout(() =>this.maporiAkibaArray.sort = this.sortAkiba);
    setTimeout(() => this.maporiAkibaArray.paginator = this.paginatorAkiba);
    
  }

  getmaporiTengefu(){
    this.maporiTengefuArray.data = this.maporiTengefu;
    setTimeout(() =>this.maporiTengefuArray.sort = this.sortTengefu);
    setTimeout(() => this.maporiTengefuArray.paginator = this.paginatorTengefu);
  }

  
  //Filtering - mapori Akiba
  applyFilterAkiba(filtertext: string){
    console.log(filtertext);
    this.maporiAkibaArray.filter = filtertext.trim().toLowerCase();
  }

   //Filtering - mapori Akiba
   applyFilterTengefu(filtertext: string){
    console.log(filtertext);
    this.maporiTengefuArray.filter = filtertext.trim().toLowerCase();
  }

  onTabClick(event:any) {
    console.log(event.index);
    console.log(event.tab.textLabel);
    if(event.index == 0){
      this.akibashow = false;
      this.tengefushow = true;
    }
    else if(event.index == 1){
      this.akibashow = true;
      this.tengefushow = false;
    }
  }
}
