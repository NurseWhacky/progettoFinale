import { MovieData } from 'src/app/models/data.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filterbygenre',
  templateUrl: './filterbygenre.component.html',
  styleUrls: ['./filterbygenre.component.css']
})
export class FilterbygenreComponent implements OnInit {

  constructor(private dataService: DataService,private router : Router) {}

  genre:string;
  genresArray = ['Horror','Adventure','Comedy','Fantasy','Crime','Romance'];
  movies: MovieData [];
  moviesDataLoader=false;

  ngOnInit(): void {
    this.getEntries()
  }

  goToDetails(id){
    this.router.navigateByUrl('/details/' + id);
  }
  getEntries(){
    this.dataService.getData().subscribe( (response : any) => {
      this.movies = response;
      this.moviesDataLoader=true;
    })
  }


}
