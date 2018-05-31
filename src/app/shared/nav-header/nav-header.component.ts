import { Component, OnInit } from '@angular/core';
import {NavHeaderService} from '../../shared/nav-header/nav-header.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  isMainCollapsed: Boolean = true;
  isMenMenuCollapsed: Boolean = true;
  menuVisible: boolean;
  constructor(public navHeaderService: NavHeaderService) { }

  ngOnInit() {
  }
  toggleMainMenu() {
    this.isMainCollapsed = !this.isMainCollapsed;
  }

  toggleMenMenu() {
    this.isMenMenuCollapsed = !this.isMenMenuCollapsed;
  }

  hideMenu() { this.menuVisible = false; }

  showMenu() { this.menuVisible = true; }

}
