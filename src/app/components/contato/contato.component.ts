import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit, OnChanges {
  @Input() inputChange = ''
  contactForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private readonly ContactSrv: ContactService,
    private readonly router: Router
    ) {
    this.contactForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      mensagem: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.submitForm()
  }

  ngOnChanges(changes: SimpleChanges){
    this.contactForm.get("nome")?.setValue(changes["inputChange"].currentValue)
  }

  submitForm() {
    this.ContactSrv.submitContact().subscribe((res:any) => {
      console.log(res)
      this.contactForm.get("nome")?.setValue(res.contact.name)
      this.contactForm.get("email")?.setValue(res.contact.email)
      this.contactForm.get("telefone")?.setValue(res.contact.tel)
      this.contactForm.get("mensagem")?.setValue(res.comment)
    })
  }

  navigateSucess() {
    this.router.navigate(['/confirmacao'])
  }

}
