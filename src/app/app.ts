import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelaInicial } from "./components/tela-inicial/tela-inicial";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TelaInicial],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('jogoClick');
}
