import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoComponent } from './contato.component';
import { ContactService } from 'src/app/service/contact.service';

describe('ContatoComponent', () => {
  let component: ContatoComponent;
  let fixture: ComponentFixture<ContatoComponent>;
  let formBuilde: FormBuilder

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoComponent ],
      imports:[ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      providers: [
        {provide: FormBuilder},
        {provide: ContactService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoComponent);
    component = fixture.componentInstance;
    formBuilde = TestBed.inject(FormBuilder)
    component.contactForm = formBuilde.group({
      nome: [''],
      email: [''],
      telefone: [''],
      mensagem: ['']
    })
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submitForm', () => {
    let data = {
      nome: '',
      email: '',
      telefone:'',
      mensagem: ''
    }
    expect(component.submitForm(data)).toBe();
  });
});
