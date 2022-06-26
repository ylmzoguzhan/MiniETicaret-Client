import { Component, OnInit } from '@angular/core';
import { MessageType } from 'src/app/services/admin/alertify.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from 'src/app/services/ui/custom-toastr.service';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.scss']
})
export class AnasayfaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }
}

