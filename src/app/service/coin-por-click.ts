import { Injectable } from '@angular/core';
import { Upgrade } from '../models/upgrade';
import { CoinPorSegundo } from './coin-por-segundo';

@Injectable({
  providedIn: 'root',
})
export class CoinPorClick {
  coinPorClick: number = 0;

  upgrades: Record<string, Upgrade> = {
    chaveDeFenda: { nome: 'Chave de Fenda', ganho: 0.5, custo: 10 },
    alicateUniversal: { nome: 'Alicate Universal', ganho: 1, custo: 100 },
    martelo: { nome: 'Martelo', ganho: 5, custo: 1500 },
    serrote: { nome: 'Serrote', ganho: 10, custo: 10000 },
    lanterna: { nome: 'Lanterna', ganho: 25, custo: 75000 },
    jogoChaveAllen: { nome: 'Jogo de Chave Allen', ganho: 100, custo: 500000 },
    parafusadeira: { nome: 'Parafusadeira', ganho: 1000, custo: 2000000 },
    kitProfissional: { nome: 'Kit Profissional de Ferramentas', ganho: 5000, custo: 20000000 },
  };

  subtrairUpgradeClick(cargo: string, moedas: number) {
    const upgrade = this.upgrades[cargo];
    if (moedas >= upgrade.custo) {
      moedas -= upgrade.custo;
      upgrade.custo = Math.floor(upgrade.custo * 1.1);
    }
    return moedas;
  }

  acrescentarCoinPorClick(cargo: string, moedas: number, moedasPorClique:number){
    const upgrade = this.upgrades[cargo];
    if(moedas >= upgrade.custo){
      this.coinPorClick = moedasPorClique + upgrade.ganho;
    }
    return this.coinPorClick;
  }
}
