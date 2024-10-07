import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  items = [
    { produto: 'Leite', quantidade: 2, comprado: false },
    { produto: 'Cerveja', quantidade: 12, comprado: true }
  ];

  novoProduto = '';
  novaQuantidade: number | null = null;

  adicionarItem() {
    if (this.novoProduto && this.novaQuantidade) {
      this.items.push({
        produto: this.novoProduto,
        quantidade: this.novaQuantidade,
        comprado: false
      });
      this.novoProduto = '';
      this.novaQuantidade = null;
    }
  }
}
