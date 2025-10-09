import { ChangeDetectorRef, Component } from '@angular/core';
import { promises } from 'node:dns';
import { CoinPorSegundo } from '../../service/coin-por-segundo';
import { CoinPorClick } from '../../service/coin-por-click';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tela-inicial',
  imports: [CommonModule],
  templateUrl: './tela-inicial.html',
  styleUrl: './tela-inicial.css',
})
export class TelaInicial {
  constructor(
    private cdr: ChangeDetectorRef,
    public coinPorSegundo: CoinPorSegundo,
    public coinPorClick: CoinPorClick
  ) {}

  moedasAtual: number = 0;
  moedasPorSegundo: number = 0;
  totalCliques: number = 0;
  moedasPorClique: number = 1;
  moedasPorSegundoAtivado: boolean = false;
  objectKeys = Object.keys;

  ngOnInit() {}

  clicouBtn() {
    this.moedasAtual += this.moedasPorClique;
    this.totalCliques++;
  }

  coinPclick(cargo: string) {
    this.moedasPorClique = this.coinPorClick.acrescentarCoinPorClick(cargo, this.moedasAtual, this.moedasPorClique);
    this.moedasAtual = this.coinPorClick.subtrairUpgradeClick(cargo, this.moedasAtual);
  }
  coinPsegundo(cargo: string) {
    this.moedasPorSegundo = this.coinPorSegundo.comprarUpgradePorSegundo(cargo, this.moedasAtual);
    this.moedasAtual = this.coinPorSegundo.subtrairCoinPorSegundo(cargo, this.moedasAtual);
  }

  noSort() {
    return 0;
  }

  ativouMoedasPorSegundo(verify: boolean) {
    if (verify != this.moedasPorSegundoAtivado) {
      setInterval(() => {
        console.log(this.moedasAtual);
        this.moedasAtual += this.moedasPorSegundo;
        this.cdr.detectChanges();
      }, 1000);

      this.moedasPorSegundoAtivado = verify;
    }
  }
}
