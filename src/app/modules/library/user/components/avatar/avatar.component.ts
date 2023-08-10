import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AvatarService} from "../../../../../services/general/avatar.service";

@Component({
  selector: 'app-avatar',
  styleUrls: ['./avatar.component.css'],
  template: `
    <img #image src="../../../../../../assets/image/avatar/default.png" alt="{{name}} avatar"
         class="rounded-circle">
  `
})
export class AvatarComponent implements OnInit {
  @Input()
  name?: string = "John Doe";
  class: string = "";

  @ViewChild("image")
  image!: ElementRef;


  constructor(private _avatarService: AvatarService) {
  }

  ngOnInit() {
    /*
    this._avatarService.load(this.name()).subscribe(res => {
      this.createImageFromBlob(res);
    });
     */
  }

  private createImageFromBlob(blob: Blob) {
    let reader = new FileReader()
    reader.onload = (_event) => {
      this.image.nativeElement.src = reader.result as string
    }
    reader.readAsDataURL(blob);
  }
}
