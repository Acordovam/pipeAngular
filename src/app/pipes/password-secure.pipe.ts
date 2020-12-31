import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordSecure'
})
export class PasswordSecurePipe implements PipeTransform {

  transform(value: string, ocultar= true): string {
    let retorno = '';
    if(ocultar){
      const cantidad = value.length;

      for (let i = 0; i < cantidad; i++){
        retorno += '*';
      }
    }else{
      retorno = value;
    }
    return retorno;
  }

}
