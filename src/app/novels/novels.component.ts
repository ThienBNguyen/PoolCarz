import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Author } from '../author';
import { Novel } from '../novel';
import { NovelsService } from '../novels.service';

@Component({
  selector: 'app-novels',
  templateUrl: './novels.component.html',
  styleUrls: ['./novels.component.css']
})
export class NovelsComponent implements OnInit {

  constructor(private novelsService:NovelsService,
    private formBuilder: FormBuilder) { }
  newAuthor: Author = new Author();
  newNovel: Novel = new Novel();
  errorMessage="";
  successMessage = "";
  authors:Author[] = [];
  novels:Novel[] = [];
  authorToUpdate:any = undefined;
  novelToUpdate:any = undefined;
  addAuthor(){
    //call the api and send the new author object
    this.novelsService.addAuthor(this.newAuthor).subscribe(
      authorCreated =>{
        this.errorMessage="";//if this addAuthor() gets executed after some previous error message
        //e.g if get author 
        this.authors.push(authorCreated);
        this.newAuthor.name = "";
        this.newAuthor.id 
      },
      err=>{
        console.log(err);
        this.errorMessage = err;
      }
    )
  }
  deleteAuthor(authId:number){
    this.novelsService.deleteAuthor(authId).subscribe(
      deletedAuthor =>{
        //need to delete this author from out authors array and angular will re-render the view

        this.errorMessage=""
        this.authors = this.authors.filter(author => author.id != deletedAuthor.id);
        this.successMessage = "successFully deleted author " + deletedAuthor.name
      },
      err =>{
        console.log(err);
        this.errorMessage ="could not delete author: " + err.statusText;
            
      }
    )
  }
  selectAuthorToUpdate(author:any){
    this.authorToUpdate={...author}

  }
  updateAuthor(){
    this.novelsService.updateAuthor(this.authorToUpdate.id,this.authorToUpdate.name).subscribe(
      updatedAuthor =>{
        this.errorMessage="";
        this.successMessage = "successfully updated the author";
        //need to change the author object inside out author array
        this.authors = this.authors.map(author=>(updatedAuthor.id == author.id) ? updatedAuthor : author);
        this.authorToUpdate = null;
      },
      err =>{
        console.log(err);
        this.errorMessage = "could not update the author: " + err.statusText;
        this.successMessage=""
        
      }
    )
  }
  addNovel(){
    this.novelsService.addNovel(this.newNovel).subscribe(
      novelCreated =>{
        this.errorMessage ="";
        this.novels.push(novelCreated);
        this.newNovel.title=""
        this.newNovel.id;
        this.newNovel.year;
      }
    )
  }
  selectNovelToUpdate(novel:any){
    this.novelToUpdate={...novel}
  }
  updateNovel(){
    this.novelsService.updateNovel(this.novelToUpdate.id, this.novelToUpdate.title, this.novelToUpdate.year, this.novelToUpdate.authorId).subscribe(
      updatedNovel =>{
        this.errorMessage = "";
        this.successMessage = "successfully updated the novel";
        this.novels = this.novels.map(novel=>(updatedNovel.id = novel.id)?updatedNovel:novel);
        this.novelToUpdate= null;
      },
      err =>{
        console.log(err);
        this.errorMessage ="Could not Update the novel: " + err.statusText;
        this.successMessage =""

      }
    )
  }
  deleteNovel(novelId:number){
    this.novelsService.deleteNovel(novelId).subscribe(
      deletedNovel =>{
        // this.errorMessage=""
        // this.novels=this.novels.filter(novel => novel.id != this.deletedNovel.id);
        // this.successMessage="successfully deleted novel " + this.deletedNovel.title
      },
      err =>{
        console.log(err);
        this.errorMessage="could not delete novel: " + err.statusText;
        
      }
    )
  }
  addAuthorForm:any;
  updateAuthorForm:any;
  ngOnInit(): void {

    // create and populate the 2 forms in the ngonInit
    //formControl names should be identical to field names of DTOs
    this.addAuthorForm = this.formBuilder.group({
      'id':[0,[Validators.required,Validators.min(1000), Validators.max(9999)]],
      'name':["",[Validators.required, Validators.pattern("^[A-Za-z][A-Za-z ]*$")]]
    });
    this.updateAuthorForm = this.formBuilder.group({
      'id':[0,[Validators.required,Validators.min(1000), Validators.max(9999)]],
      'name':["",[Validators.required, Validators.pattern("^[A-Za-z][A-Za-z ]*$")]]
    })
    //to fetch from API, we need to do subscribe on the observables
    this.novelsService.getAuthors().subscribe(
      authorArray=>{
        this.errorMessage="";
        this.authors=authorArray;
       
      },
      err =>{
        this.errorMessage=err;
        console.log(err);
      }
    )
  }

}
