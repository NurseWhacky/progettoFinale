import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { commentDotnetData } from '../models/dotnetData.model';


@Injectable({
  providedIn: 'root'
})
export class DotnetServiceService {

  baseURLUserIsLoggedData = 'http://localhost:26737/comments';

  constructor( private http : HttpClient) { }

  commentDotnet: commentDotnetData;

  getDotnetDataAll () {
    return this.http.get<Array<commentDotnetData>>(this.baseURLUserIsLoggedData)
  }


  getDotnetDataEntry( id ) {
    return this.http.get<commentDotnetData>(this.baseURLUserIsLoggedData + "/" + id)
  }



  deleteDotnetData( id ){
    return this.http.delete(this.baseURLUserIsLoggedData + "/" + id)
  }

  editDotnetData = (user: commentDotnetData) => {
    return this.http.put(this.baseURLUserIsLoggedData + '/' + user.id, {
      "userId": user.userId,
      "movieId": user.movieId,
      "body": user.body
    });
  };


}
