import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoRetrairMenuComponent } from './botao-retrair-menu.component';

describe('BotaoRetrairMenuComponent', () => {
  let component: BotaoRetrairMenuComponent;
  let fixture: ComponentFixture<BotaoRetrairMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoRetrairMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoRetrairMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
