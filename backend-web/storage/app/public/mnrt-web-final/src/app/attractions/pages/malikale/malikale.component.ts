import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-malikale',
  templateUrl: './malikale.component.html',
  styleUrls: ['./malikale.component.scss']
})
export class MalikaleComponent implements OnInit {

  @ViewChild('sortAkiba') sortAkiba!: MatSort;
  @ViewChild('paginatorAkiba') paginatorAkiba!: MatPaginator;
  @ViewChild('sortTengefu') sortTengefu!: MatSort;
  @ViewChild('paginatorTengefu') paginatorTengefu!: MatPaginator;
  
  constructor( public spinner: SpinnerService) { }
  //maeneo malikale
  maeneoMalikale: any = [
    {id:1, name:"Jengo la Acacia",desc:"Jengo la kihistoria la karne ya 19, lililojengwa na Waarabu",address:"Dar es Salaam",decl_year:"498 ya 1995"},
    {id:2, name:"Msikiti wa Kiarabu",desc:"Msikiti wa Karne ya 19 na Misikiti ya Kihindi",address:"Dar es Salaam",decl_year:"498 ya 1995"},
    {id:3, name:"Msikiti wa Jamia",desc:"Jengo la kuabudia lakarne ya 19",address:"Dar es Salaam",decl_year:"498 ya 1995"},
    {id:4, name:"Mji Mkongwe wa Bagamoyo",desc:"Makazi ya kihistoria ya karne ya 19 na 19",address:"Bagamoyo",decl_year:"397 ya 1958"},
    {id:5, name:"Bagamoyo Guard House",desc:"Jengo la karne ya 18",address:"Bagamoyo",decl_year:"113 ya 1952"}
  ]
  maeneoMalikaleArray = new MatTableDataSource<any>();
  maeneoMalikaledisplayedColumns = ["sn","name","desc","address","decl_year"];

  //urithi
  urithiDunia: any = [
    {id:1, name:"Hifadhi ya Eneo la Ngorongoro",desc:"Mchanganyiko wa Utamaduni na Asili",decl_year:"1979 kuwa urithi asili na mwaka 2006 kuwa urithi mchanganyiko"},
    {id:1, name:"Hifadhi ya Taifa Serengeti",desc:"Asili",decl_year:"1981"},
    {id:1, name:"Eneo la Magofu ya Kilwa Kisiwani na Magofu ya Songo Mnara",desc:"Utamaduni",decl_year:"1981"},
    {id:1, name:"Eneo la Pori la Akiba Selous",desc:"Asili",decl_year:"1982"}
    

  ]
  urithiDuniaArray = new MatTableDataSource<any>();
  urithiDuniadisplayedColumns = ["sn","name","desc","decl_year"];

  ngOnInit(): void {
    
    this.getmaeneoMalikale();
    this.geturithiDunia()
  }


  getmaeneoMalikale(){
    this.maeneoMalikaleArray.data = this.maeneoMalikale;
    setTimeout(() =>this.maeneoMalikaleArray.sort = this.sortAkiba);
    setTimeout(() => this.maeneoMalikaleArray.paginator = this.paginatorAkiba);
    
  }

  geturithiDunia(){
    this.urithiDuniaArray.data = this.urithiDunia;
    setTimeout(() =>this.urithiDuniaArray.sort = this.sortTengefu);
    setTimeout(() => this.urithiDuniaArray.paginator = this.paginatorTengefu);
  }

  
  //Filtering maeneo
  applyFilterAkiba(filtertext: string){
    console.log(filtertext);
    this.maeneoMalikaleArray.filter = filtertext.trim().toLowerCase();
  }

   //Filtering - urithi wa dunia
   applyFilterTengefu(filtertext: string){
    console.log(filtertext);
    this.urithiDuniaArray.filter = filtertext.trim().toLowerCase();
  }

}
