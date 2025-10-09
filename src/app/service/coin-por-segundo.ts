import { Injectable } from '@angular/core';
import { Upgrade } from '../models/upgrade';

@Injectable({
  providedIn: 'root',
})
export class CoinPorSegundo {
  coinPorSegundo: number = 0;

  upgrades: Record<string, Upgrade> = {
    menorAprendiz: { nome: 'Menor Aprendiz', ganho: 0.5, custo: 10 },
    estagiario: { nome: 'Estágiario', ganho: 1, custo: 100 },
    auxiliar: { nome: 'Auxiliar', ganho: 5, custo: 500 },
    tecnico: { nome: 'Técnico', ganho: 10, custo: 5000 },
    analista: { nome: 'Analista', ganho: 25, custo: 50000 },
    gerente: { nome: 'Gerente', ganho: 100, custo: 150000 },
    diretor: { nome: 'Diretor', ganho: 500, custo: 2000000 },
    ceo: { nome: 'CEO', ganho: 1000, custo: 10000000 },
  };

  comprarUpgradePorSegundo(cargo: string, moedasAtual: number) {
    const upgrade = this.upgrades[cargo];
    if (moedasAtual >= upgrade.custo) {
      this.coinPorSegundo += upgrade.ganho;
    }

    return this.coinPorSegundo;
  }

  subtrairMoedasAtual(cargo: string, moedasAtual: number) {
    const upgrade = this.upgrades[cargo];
    if (moedasAtual >= upgrade.custo) {
      moedasAtual -= upgrade.custo;
      upgrade.custo = Math.floor(upgrade.custo * 1.1);
    }
    return moedasAtual;
  }
}
