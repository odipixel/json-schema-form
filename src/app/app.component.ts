import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sample-schema';
  JsonSchema: any;
  JsonSchemas: any;
  formOutput:any;

  ngOnInit(){
    this.JsonSchema = {
      "type": "object",
      "title": "Comment",
      "properties": {
        "name":  {
          "title": "Name",
          "type": "string"
        },
        "email":  {
          "title": "Email",
          "type": "string",
          "pattern": "^\\S+@\\S+$",
          "description": "Email will be used for evil."
        },
        "comment": {
          "title": "Comment",
          "type": "string",
          "maxLength": 20,
          "validationMessage": "Don't be greedy!"
        }
      },
      "required": ["name","email","comment"]
    }
   // this.JsonSchema=JSON.parse( this.JsonSchema);
  }

  get inputValue () {
    return JSON.stringify(this.JsonSchema, null, 2);
  }

  set inputValue (v) {
    try{
    this.JsonSchema = JSON.parse(v);
  }
    catch(e) {
      console.log('error occored while you were typing the JSON');
    };
  }

  changeForm(event){
      console.log(event);
  }

  submitFormData(event){
   // console.log(event);
   
    this.formOutput=event;
  }
}
