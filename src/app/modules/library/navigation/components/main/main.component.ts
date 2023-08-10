import {Component, ContentChild, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {BreadCrumbMenuItem, BreadCrumbModel} from "../../models/bread-crumb.model";
import {AppRoute} from "../../../../../app.routes";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ContentChild('content') content: any;
  breadCrumb?: BreadCrumbModel;
  menuItems: MenuItem[] = [];
  private fullPath: string = "";

  constructor(private _route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    this.fullPath = this.resolve(this._route).join(".");
    this.breadCrumb = new BreadCrumbModel(new AppRoute(this.fullPath));
    this.menuItems = breadCrumbMenuItems(this.breadCrumb.route);
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.fullPath = this.resolve(this._route).join(".");
        this.breadCrumb = new BreadCrumbModel(new AppRoute(this.fullPath));
        this.menuItems = breadCrumbMenuItems(this.breadCrumb.route);
      }
    });
  }

  resolve(ar: ActivatedRoute | null, p: string[] = []): string[] {
    if (ar == null || ar.snapshot.url.length == 0) {
      return p;
    }
    p.push(ar.snapshot.url[0].path)
    return this.resolve(ar.firstChild, p);
  }
}

export const breadCrumbMenuItems = (route: AppRoute): BreadCrumbMenuItem[] => {
  return route.routes.map((r, i) => {
    const resolvedRoute = route.routes.slice(0, i + 1).reduce((prev, curr) => {
      return {
        main: `${prev.main}/${curr.main}`.replace('//', '/'),
        name: curr.name
      }
    });
    if (resolvedRoute.name == 'App') {
      return { label: resolvedRoute.name }
    }
    return {
      routerLink: resolvedRoute.main, label: resolvedRoute.name
    }
  });
}
