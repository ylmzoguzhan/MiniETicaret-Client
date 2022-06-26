import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastrService:ToastrService) { }

  message(message:string, title:string,options: Partial<ToastrOptions>){
    this.toastrService[options.messageType](message,title,{
      positionClass: options.position
    })
  }
}

export enum ToastrMessageType{
  Success="success",
  Info="info",
  Error="error",
  Warning="warning"
}

export enum ToastrPosition{
TopRight="toast-top-right",
BottomRight="toast-bottom-right",
BottomLeft="toast-bottom-left",
TopLeft="toast-top-left",
TopFullWidth="toast-top-full-width",
BottomFullWidth="toast-bottom-full-width",
TopCenter="toast-top-center",
BottomCenter="toast-bottom-center",
}

export class ToastrOptions{
  messageType: ToastrMessageType
  position: ToastrPosition
}
