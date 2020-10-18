import { Component} from '@angular/core';
import { CorporativosService } from './_services/corporativos.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Corporativos } from './_models/corporativos';

@Component({
  selector: 'app-corporativos',
  templateUrl: './corporativos.component.html',
  styleUrls: ['./corporativos.component.scss']
})

export class CorporativosComponent {
  token: string;
  currentUser: string;

  corporativos: Corporativos[];

  constructor (private corporativosService: CorporativosService) {
    this.token = localStorage.getItem('tokenscloud'); 
   
  }

  ngOnInit () :void{
     this.getCorporativos(); 
  }

  getCorporativos() {
      this.corporativosService.getCorporativos().subscribe((result: any) => {
        this.corporativos = result.data;
     },(err : HttpErrorResponse)=>{
       console.log(err);
    }); 
  }

}
