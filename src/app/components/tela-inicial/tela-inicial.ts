import { ChangeDetectorRef, Component } from '@angular/core';
import { promises } from 'node:dns';
import { CoinPorSegundo } from '../../service/coin-por-segundo';
import { CoinPorClick } from '../../service/coin-por-click';

@Component({
  selector: 'app-tela-inicial',
  imports: [],
  templateUrl: './tela-inicial.html',
  styleUrl: './tela-inicial.css',
})
export class TelaInicial {
  constructor(
    private cdr: ChangeDetectorRef,
    private coinPorSegundo: CoinPorSegundo,
    private coinPorClick: CoinPorClick
  ) {}

  moedasAtual: number = 0;
  moedasPorSegundo: number = 0;
  totalCliques: number = 0;
  moedasPorClique: number = 1;
  moedas: number = 0;
  moedasMenorAprendiz: number = 0;
  moedasEstagiario: number = 0;
  moedasPorSegundoAtivado: boolean = false;

  ngOnInit() {}

  clicouBtn() {
    this.moedasAtual += this.moedasPorClique;
    this.totalCliques++;
  }

  somarMoedasPorSegundo() {
    this.moedasPorSegundo = this.moedasMenorAprendiz;
  }

  primeiroUpgrade() {
    return (this.moedasPorClique += 1);
  }

  segundoUpgrade() {
    return (this.moedasPorClique += 2);
  }
  coinPclick(cargo: string) {
    return (this.moedasPorClique = this.coinPorClick.coinPorClickService(cargo));
  }

  coinPsegundo(cargo: string) {
    return (this.moedasPorSegundo = this.coinPorSegundo.coinPorSegundoService(cargo));
  }
  ativouMoedasPorSegundo(verify: boolean) {
    this.moedasPorSegundoAtivado = verify;
    if (this.moedasPorSegundoAtivado) {
      setInterval(() => {
        this.moedasAtual += this.moedasPorSegundo;
        this.cdr.detectChanges();
      }, 1000);
    }
  }
}
