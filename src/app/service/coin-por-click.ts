import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinPorClick {
  coinPorClick: number = 0;
  coinPorClickService(cargo: string) {
    switch (cargo) {
      case 'menorAprendiz':
        this.coinPorClick += 0.5;
        break;
      case 'estagiario':
        this.coinPorClick += 1;
        break;
      case 'auxiliar':
        this.coinPorClick += 5;
        break;
      case 'tecnico':
        this.coinPorClick += 10;
        break;
      case 'analista':
        this.coinPorClick += 25;
        break;
      case 'gerente':
        this.coinPorClick += 100;
        break;
      case 'diretor':
        this.coinPorClick += 500;
        break;
      case 'ceo':
        this.coinPorClick += 1000;
        break;
    }
    console.log(this.coinPorClick);
    return this.coinPorClick;
    
  }
}
