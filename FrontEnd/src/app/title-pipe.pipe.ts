import { ElementRef, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlePipe'
})
export class TitlePipePipe implements PipeTransform {

  
  transform(value: any, ...args: any[]): any {
    
    if(value.length > 10){
      return value.toUpperCase();
    } else {
      return value[0].toUpperCase() + value.substr(1).toLowerCase();
    }
    
  }

}
