import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
  name: 'UsoPipe'
})

export class usoPipe implements PipeTransform{

  transform(value: boolean): 'Para cuando juego' | 'Para escuchar mientras duermo'{

    return value? 'Para cuando juego' : 'Para escuchar mientras duermo';

  }

}
