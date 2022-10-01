import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CmsserviceService } from '../../services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { AddSectorsComponent } from '../dialogs/sectors/add-sectors.component';


@Component({
  selector: 'mnrt-cmssubsectors',
  templateUrl: './cmssubsectors.component.html',
  styleUrls: ['./cmssubsectors.component.scss']
})
export class CmssubsectorsComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cmsService: CmsserviceService,private messagesService: MessagesService, private dialog: MatDialog, public spinner: SpinnerService) { }

  subsectorsdisplayedColumns = ["sn","subsector_pic","subsector_title","subsector_des","action"];

  ngOnInit(): void {
  }
  getSubSectors(){}
  onAdd(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        //dialogConfig.height="90%";
    this.dialog.open(AddSectorsComponent).afterClosed().subscribe(dialogData=>{
    this.getSubSectors();
    });
  }

}
