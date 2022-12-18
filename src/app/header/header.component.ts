import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../coreData/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router , private _localServ : LocalStorageService) { }

  ngOnInit(): void {
  }

  onLogOut()
  {
    this._router.navigate(['/'])
    this._localServ.remove('Token');

  }

}
