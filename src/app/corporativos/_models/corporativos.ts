
export interface Corporativos {
    id:                             number;
    S_NombreCorto:                  string;
    S_NombreCompleto:               string;
    S_LogoURL:                      string;
    S_Activo:                       number;
    FK_Asignado_id:                 number;
    D_FechaIncorporacion:           Date;
    S_DBName:                       string;
    S_DBUsuario:                    string;
    created_at:                     Date;
    S_SystemUrl:                    string;
    tw_contratos_corporativos:      TwContratosCorporativo;
}

export interface TwContratosCorporativo {
    id:              number;
    S_Nombre:        string;
    S_Activo:        number;
    N_Nivel:         number;
    created_at:      Date;
    updated_at:      Date;
    deleted_at:      null;
    N_TelefonoFijo:  string;
    N_TelefonoMovil: string;
    S_Comentarios:   null;
    S_Email:         string;
    S_Puesto:        string;
    tw_corporativo_id: number;
}
