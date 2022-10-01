import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-misitu',
  templateUrl: './misitu.component.html',
  styleUrls: ['./misitu.component.scss']
})
export class MisituComponent implements OnInit {

  @ViewChild('sortAkiba') sortAkiba!: MatSort;
  @ViewChild('paginatorAkiba') paginatorAkiba!: MatPaginator;
  @ViewChild('sortTengefu') sortTengefu!: MatSort;
  @ViewChild('paginatorTengefu') paginatorTengefu!: MatPaginator;
  
  constructor( public spinner: SpinnerService) { }
  //maeneo malikale
  maeneoMalikale: any = [
    {id:1, name:"North Nguru",region:"Tanga",council:"Kilindi",area:"14,042",decl_year:"133 ya 1934"},
    {id:2, name:"Aghondi",region:"Singida",council:"Manyoni",area:"2,126",decl_year:"Sch."},
    {id:3, name:"Amani",region:"Tanga",council:"Muheza",area:"8,380",decl_year:"151 na 152 ya 1997"},
    {id:4, name:"Baga – I",region:"Tanga",council:"Lushoto",area:"356",decl_year:"347 ya 1955 na 579 ya 1963"},
    {id:5, name:"Baga – II",region:"Tanga",council:"Lushoto",area:"2,999",decl_year:"532 ya 1962"},
    {id:6, name:"Baga Hill",region:"Morogoro",council:"Kilosa",area:"500",decl_year:"Kifungu 132 p.1360"},
    {id:7, name:"Kwaju Hill",region:"Morogoro",council:"Kilosa",area:"500",decl_year:"Kifungu 132 p.1360"}
  ]
  maeneoMalikaleArray = new MatTableDataSource<any>();
  maeneoMalikaledisplayedColumns = ["sn","name","region","council","area","decl_year"];


  ngOnInit(): void {
    
    this.getmaeneoMalikale();
  }


  getmaeneoMalikale(){
    this.maeneoMalikaleArray.data = this.maeneoMalikale;
    setTimeout(() =>this.maeneoMalikaleArray.sort = this.sortAkiba);
    setTimeout(() => this.maeneoMalikaleArray.paginator = this.paginatorAkiba);
    
  }
  
  //Filtering maeneo
  applyFilterAkiba(filtertext: string){
    console.log(filtertext);
    this.maeneoMalikaleArray.filter = filtertext.trim().toLowerCase();
  }

}
