import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { commentDotnetData } from '../models/dotnetData.model';


@Injectable({
  providedIn: 'root'
})
export class DotnetServiceService {

  baseURLDotnet = 'http://localhost:26737/comments';

  constructor( private http : HttpClient) { }

  commentDotnet: commentDotnetData;

  getDotnetDataAll () {
    return this.http.get<Array<commentDotnetData>>(this.baseURLDotnet)
  }


  getDotnetDataEntry( id ) {
    return this.http.get<commentDotnetData>(this.baseURLDotnet + "/" + id)
  }



  deleteDotnetData( id ){
    return this.http.delete(this.baseURLDotnet + "/" + id)
  }

  editDotnetData = (user: commentDotnetData) => {
    return this.http.put(this.baseURLDotnet + '/' + user.id, {
      "userId": user.userId,
      "movieId": user.movieId,
      "body": user.body
    });
  };

  addDotnetEntry = (user: commentDotnetData) => {
    return this.http.post<commentDotnetData>(this.baseURLDotnet, {
      "userId": user.userId,
      "movieId": user.movieId,
      "body": user.body
    });
  };


}
