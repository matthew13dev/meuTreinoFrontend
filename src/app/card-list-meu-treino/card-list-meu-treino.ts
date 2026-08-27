import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ExercicioDTO, MeuTreinoDTO} from '../services/meusTreinosDB';

@Component({
  imports: [],
  selector: 'app-card-list-meu-treino',
  styleUrl: './card-list-meu-treino.css',
  templateUrl: './card-list-meu-treino.html',
})
export class CardListMeuTreino {

  @Input() meuTreino?:MeuTreinoDTO;


  protected treinoConcluido(treino:ExercicioDTO) {

    if(treino.feito == null) {
      treino.feito = true;
    }

    treino.feito = !treino.feito;
  }
}
