import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(searchitems: any[], searchitem: any): any[] {
    if(!searchitems) return [];
    if(!searchitem) return searchitems;

      searchitem = searchitem.toLowerCase()
    return searchitems.filter(it =>{
      return it.location.toLowerCase().includes(searchitem);
    });
  }

}
