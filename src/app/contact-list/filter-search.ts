import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return []
    } else {
      if(value){
        // return items.filter(it => it[field] == value);
        return items.filter(it=>  it[field].toLowerCase().includes(value.toLowerCase()));
      } else {
        return items;
      }
    }
  }
}
