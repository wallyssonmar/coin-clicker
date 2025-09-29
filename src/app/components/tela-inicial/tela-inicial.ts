import { ChangeDetectorRef, Component } from '@angular/core';
import { promises } from 'node:dns';

@Component({
  selector: 'app-tela-inicial',
  imports: [],
  templateUrl: './tela-inicial.html',
  styleUrl: './tela-inicial.css',
})
export class TelaInicial {

 constructor(private cdr: ChangeDetectorRef) {}
  
  moedasAtual: number = 0;
  moedasPorSegundo: number = 3;
  totalCliques: number = 0;
  moedasPorClique: number = 1;
  moedas:number = 0;

  moedasMenorAprendiz:number = 0;

  

 

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  clicouBtn() {
    this.moedasAtual += this.moedasPorClique;
    this.totalCliques += 1;
  }

  primeiroUpgrade() {
    return (this.moedasPorClique += 1);
  }

  segundoUpgrade() {
    return (this.moedasPorClique += 2);
  }

  menorAprendiz() {
    this.moedasMenorAprendiz += 0.5;
    setInterval(() =>{
      this.moedasAtual += this.moedasMenorAprendiz;
      this.cdr.detectChanges();
    }, 1000);
    
  }
}
