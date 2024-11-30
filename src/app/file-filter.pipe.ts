// file-filter.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FileFilterPipe implements PipeTransform {
  transform(items: any[], fileType: string): any[] {
    return items.filter(item => item.type === fileType);
  }
}