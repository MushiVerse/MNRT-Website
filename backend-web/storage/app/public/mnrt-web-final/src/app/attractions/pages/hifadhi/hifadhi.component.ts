import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-hifadhi',
  templateUrl: './hifadhi.component.html',
  styleUrls: ['./hifadhi.component.scss']
})
export class HifadhiComponent implements OnInit {

  
  @ViewChild('sortAkiba') sortAkiba!: MatSort;
  @ViewChild('paginatorAkiba') paginatorAkiba!: MatPaginator;
  
  constructor( public spinner: SpinnerService) { }
  //mapoti Akiba
  hifadhiTaifa: any = [
    {id:1, name:"Serengeti",address:"Mara, Arusha, Simiyu",size:"14,763",decl_year:"235 ya 1968"},
    {id:1, name:"Manyara",address:"Arusha, Manyara",size:"648.7",decl_year:"505 ya 1960 na105, ya 2009"},
    {id:1, name:"Arusha",address:"Arusha",size:"552",decl_year:"237 ya 1960, 280 ya 2005"},
    {id:1, name:"Ruaha",address:"Iringa, Dodoma na Mbeya",size:"20,300",decl_year:"464 ya 1964; na28 ya 2008"},
    {id:1, name:"Mikumi",address:"Morogoro",size:"3,245",decl_year:"465 ya 1964"},
    {id:1, name:"Gombe",address:"Kigoma",size:"71",decl_year:"234 1968, na 228 ya 2013"},
    {id:1, name:"Tarangire",address:"Arusha, Dodoma na Manyara",size:"2,600",decl_year:"160 ya 1970"}
  ]
  hifadhiTaifaArray = new MatTableDataSource<any>();
  hifadhiTaifadisplayedColumns = ["sn","name","address","size","decl_year"];
  ngOnInit(): void {
    
    this.gethifadhiTaifa();
  }


  gethifadhiTaifa(){
    this.hifadhiTaifaArray.data = this.hifadhiTaifa;
    setTimeout(() =>this.hifadhiTaifaArray.sort = this.sortAkiba);
    setTimeout(() => this.hifadhiTaifaArray.paginator = this.paginatorAkiba);
    
  }

  
  //Filtering
  applyFilterAkiba(filtertext: string){
    console.log(filtertext);
    this.hifadhiTaifaArray.filter = filtertext.trim().toLowerCase();
  }

}
