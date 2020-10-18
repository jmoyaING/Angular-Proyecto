import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DetalleCorporativosService } from './_services/detalle-corporativos.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-detalle-corporativos',
  templateUrl: './detalle-corporativos.component.html',
  styleUrls: ['./detalle-corporativos.component.scss']
})


export class DetalleCorporativosComponent implements OnInit {

  @ViewChild('txtNombreCorto') txtNombreCorto: ElementRef;
  @ViewChild('txtFechaIncorporacion') txtFechaIncorporacion: ElementRef;
  @ViewChild('txtNombreCompleto') txtNombreCompleto: ElementRef;
  @ViewChild('cbStatus') cbStatus: ElementRef;


  idRuta: string;
  ArrayCorporativo;
  mostrar = true;
  habilitado = true;
  tabs = true;
  add = true;
  idContacto;
  valor = true;

  contacto = {
    S_Nombre: '',
    S_Puesto: '',
    S_Comentarios: '',
    N_TelefonoFijo: '',
    N_TelefonoMovil: '',
    S_Email: '',
    tw_corporativo_id: null
  };

  corporativo = {
    id: null,
    S_NombreCorto: '',
    S_NombreCompleto: '',
    S_LogoURL: '',
    S_Activo: null,
    FK_Asignado_id: null,
    D_FechaIncorporacion: null
  };

  constructor(private DetallecorporativosService: DetalleCorporativosService,  private activatedRoute: ActivatedRoute,
    private router: Router, private spinner: NgxSpinnerService) {

      this.activatedRoute.params.subscribe( params => {
           this.idRuta = params.id;
      });
   }

  ngOnInit(): void {
    this.getCorporativo(this.idRuta); 
  }

  getCorporativo(id: string) {
    this.DetallecorporativosService.getCorporativo(id).subscribe(result => {
       this.ArrayCorporativo = Object.keys(result.data).map(it => result.data[it]) ; 
   }
  ); 
}

saveContacto(): void {
  const data = {
    S_Nombre: this.contacto.S_Nombre,
    S_Puesto: this.contacto.S_Puesto,
    S_Comentarios: this.contacto.S_Comentarios,
    N_TelefonoFijo: this.contacto.N_TelefonoFijo,
    N_TelefonoMovil: this.contacto.N_TelefonoMovil,
    S_Email: this.contacto.S_Email,
    tw_corporativo_id: this.contacto.tw_corporativo_id
  };

  
  this.DetallecorporativosService.createContacto(data)
    .subscribe(
      result => {
        this.getCorporativo(this.idRuta);
        this.contacto = {
          S_Nombre: '',
          S_Puesto: '',
          S_Comentarios: '',
          N_TelefonoFijo: '',
          N_TelefonoMovil: '',
          S_Email: '',
          tw_corporativo_id: null
        };
      },
      error => {
        console.log(error);
      });
}

seleccionarContacto(contacto) {
  this.idContacto = contacto.id;
  this.contacto.S_Nombre = contacto.S_Nombre;
  this.contacto.S_Puesto = contacto.S_Puesto;
  this.contacto.S_Comentarios = contacto.S_Comentarios;
  this.contacto.N_TelefonoFijo = contacto.N_TelefonoFijo;
  this.contacto.N_TelefonoMovil = contacto.N_TelefonoMovil;
  this.contacto.S_Email = contacto.S_Email;
  this.contacto.tw_corporativo_id = contacto.tw_corporativo_id;
}

updateCorporativo(): void {
  const data = {
    id: this.corporativo.id,
    S_NombreCorto: this.txtNombreCorto.nativeElement.value,
    S_NombreCompleto: this.txtNombreCompleto.nativeElement.value,
    S_LogoURL: this.corporativo.S_LogoURL,
    S_Activo: this.cbStatus.nativeElement.value,
    FK_Asignado_id: this.corporativo.FK_Asignado_id,
    D_FechaIncorporacion: this.txtFechaIncorporacion.nativeElement.value
  };

  this.DetallecorporativosService.updateCorporativo(this.corporativo.id , data)
    .subscribe(
      result => {
        this.getCorporativo(this.idRuta);
        this.habilitado = true;
      },
      error => {
        console.log(error);
      });
}

updateContacto(): void {
  const data = {
    S_Nombre: this.contacto.S_Nombre,
    S_Puesto: this.contacto.S_Puesto,
    S_Comentarios: this.contacto.S_Comentarios,
    N_TelefonoFijo: this.contacto.N_TelefonoFijo,
    N_TelefonoMovil: this.contacto.N_TelefonoMovil,
    S_Email: this.contacto.S_Email,
    tw_corporativo_id: this.contacto.tw_corporativo_id
  };

  this.DetallecorporativosService.updateContacto(this.idContacto, data)
    .subscribe(
      result => {
        this.getCorporativo(this.idRuta);
        this.contacto = {
          S_Nombre: '',
          S_Puesto: '',
          S_Comentarios: '',
          N_TelefonoFijo: '',
          N_TelefonoMovil: '',
          S_Email: '',
          tw_corporativo_id: null
        };
      },
      error => {
        console.log(error);
      });
}

deleteContacto(): void {
  this.DetallecorporativosService.deleteContacto(this.idContacto)
    .subscribe(
      response => {
        swal.fire({
          icon: 'success',
          title: 'Registro Eliminado!',
          text: 'Los datos estan actualizando',
          showConfirmButton: false,
          timer: 4000,
          customClass: {
            confirmButton: 'btn btn-primary'
          },
          buttonsStyling: false,
        });
        setTimeout(() => {
          this.getCorporativo(this.idRuta);
          this.spinner.hide();
        }, 3000);

      },
      (error) => {
        this.spinner.hide();
        swal.fire({
          title: "¡Error!",
          text: "Ocurrio un problema al eliminar el registro",
          icon: "error",
          customClass: {
            confirmButton: 'btn btn-primary'
          },
          buttonsStyling: false,
        });
      });
}

}
