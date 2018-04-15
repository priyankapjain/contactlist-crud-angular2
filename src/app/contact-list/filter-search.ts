import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    console.log(items,field,value);
    if (!items) {
      return []
    } else {
      if(value){
        // return items.filter(it => it[field] == value);
        console.log('***********************');
        console.log(items,items[0][field],value);
        return items.filter(it=>  it[field].toLowerCase().includes(value.toLowerCase()));
      } else {
        return items;
      }
    }
  }
}
