import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit, OnChanges {
  @Input() inputChange = ''
  contactForm: FormGroup

  constructor(private fb: FormBuilder, private readonly ContactSrv: ContactService) {
    this.contactForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      mensagem: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges){
    this.contactForm.get("nome")?.setValue(changes["inputChange"].currentValue)
  }

  submitForm(data: any) {
    console.log(data)
    let value = data.value

    let dataContact = {
      subject_matter: "Desafio Frontend",
      comment: value?.mensagem,
      contact: {
        name: value?.nome,
        tel: value?.telefone,
        email: value?.email
      }
    }

    this.ContactSrv.submitContact( dataContact ).subscribe((res) => {
      console.log(res)
    })
  }

}
