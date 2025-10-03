import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoinPorSegundo {
  coinPorSegundo: number = 0;
  coinTeste: number = 0;

  coinPorSegundoService(cargo: string) {
    switch (cargo) {
      case 'menorAprendiz':
        this.coinPorSegundo += 0.5;
        break;
      case 'estagiario':
        this.coinPorSegundo += 1;
        break;
      case 'auxiliar':
        this.coinPorSegundo += 5;
        break;
      case 'tecnico':
        this.coinPorSegundo += 10;
        break;
      case 'analista':
        this.coinPorSegundo += 25;
        break;
      case 'gerente':
        this.coinPorSegundo += 100;
        break;
      case 'diretor':
        this.coinPorSegundo += 500;
        break;
      case 'ceo':
        this.coinPorSegundo += 1000;
        break;
    }
    console.log(this.coinPorSegundo);
    return this.coinPorSegundo;
    
  }
}
