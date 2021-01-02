import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {}

  get hobbies() {
    return this.form.get("hobbies") as FormArray;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      nom: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      hobbies: this.fb.array([]),
      password: [""]
    });
  }

  addHobby() {
    this.hobbies.push(this.fb.control(""));
  }

  deleteHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  submit() {
    console.log(this.form.value);
  }
}
