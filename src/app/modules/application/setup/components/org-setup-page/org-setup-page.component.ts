import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-org-setup-page',
  templateUrl: './org-setup-page.component.html',
  styleUrls: ['./org-setup-page.component.css']
})
export class OrgSetupPageComponent implements OnInit{
  year!: number;

  ngOnInit() {
    this.year = new Date().getFullYear()
  }

}
