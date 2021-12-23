import { MovieData } from 'src/app/models/data.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genrepipe'
})
export class GenrepipePipe implements PipeTransform {

  transform(movies: MovieData[], genre: string): Array<MovieData> {
    if(movies.length > 0){
          let myArray=[];
    for(let i=0;i<movies.length;i++) {
      if(movies[i].genre === genre) {
        myArray.push(movies[i]);
      }
    }
    return myArray;
    }

  }

}
