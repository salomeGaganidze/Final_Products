import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cUstomPipe',
})
export class CUstomPipePipe implements PipeTransform {
  transform(value: string, limit: number): string {
    let result = '' || value;
    if (limit > 40) {
      result = `${result.slice(0, -10)}...`;
    }
    console.log(result);
    return result;
  }
}
