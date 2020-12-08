import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {

  constructor(
    public toastService: ToastrService
  ) { }

  ngOnInit(): void {
  }

}
