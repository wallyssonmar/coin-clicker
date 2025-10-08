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

  moedasAtual: number = 10;
  moedasPorSegundo: number = 1;
  totalCliques: number = 0;
  moedasPorClique: number = 1;
  moedas: number = 0;
  moedasPorSegundoAtivado: boolean = false;
  objectKeys = Object.keys;

  //VAR DOS UPGRADES DE CLICK
  custoChaveDeFenda:number = 10;
  custoAlicateUniversal:number = 100;
  custoMartelo:number = 500;
  custoSerrote:number = 1500;
  custoLanterna:number = 10000;
  custoJogoChaveAllen:number = 75000;
  custoParafusadeira:number = 500000;
  custoKitProfissional:number = 2000000;

  
  
 
  

  ngOnInit() {}

  clicouBtn() {
    this.moedasAtual += this.moedasPorClique;
    this.totalCliques++;
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
   coinPsegundo(cargo:string){
    this.moedasAtual = this.coinPorSegundo.comprarUpgradePorSegundo(cargo, this.moedasAtual);
   }
   noSort(){
    return 0;
   }
  
  ativouMoedasPorSegundo(verify: boolean) {
    this.moedasPorSegundoAtivado = verify;
    
    if (this.moedasPorSegundoAtivado) {
      setInterval(() => {
        console.log(this.moedasAtual);
        this.moedasAtual += this.moedasPorSegundo;
        this.cdr.detectChanges();
      }, 1000);
    }
  }
}
