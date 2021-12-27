import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { MovieData } from 'src/app/models/data.model';
import { MovieApiInterface, ResultInterface } from 'src/app/models/apiMovie.model';
import { ApiService } from 'src/app/services/api.service';
import { MoviesApiService } from 'src/app/services/moviesapi.service';

@Component({
  selector: 'app-details-movie-api',
  templateUrl: './details-movie-api.component.html',
  styleUrls: ['./details-movie-api.component.css']
})
export class DetailsMovieApiComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService, private apiService: MoviesApiService,
    private router : Router) { }

  dataApiEntry: MovieApiInterface;
  dataMovieEntry: ResultInterface;
  moviesdetails: ResultInterface;

  filmPath : string = "https://image.tmdb.org/t/p/w500";
  filmPathHTML :string;

  idpath: number;
  ratedOption : string;

  ngOnInit(): void {
    this.idpath = this.route.snapshot.params['id'];
    this.fetchEntry()

  }

  fetchEntry(){
    this.apiService.getMarvelList().subscribe( (res: any ) => {
      this.dataApiEntry = res;
      this.dataMovieEntry = this.dataApiEntry.results;

      for(let i in this.dataMovieEntry){
        if(this.idpath==this.dataMovieEntry[i].id){
          this.moviesdetails=this.dataMovieEntry[i];
          this.filmPathHTML=this.filmPath.concat(this.moviesdetails.backdrop_path);


        }
      }

      console.log(this.dataApiEntry);
      console.log(this.dataMovieEntry);
      console.log(this.moviesdetails);
      console.log(this.filmPathHTML);

    })









  }

  delete(){
    this.dataService.deleteEntry(this.idpath)
    .subscribe(data => {
      this.router.navigate(['/dashboard']);
    }, (err) => {
      console.log(err);
      this.router.navigate(['/dashboard']);
    });
  }
}





