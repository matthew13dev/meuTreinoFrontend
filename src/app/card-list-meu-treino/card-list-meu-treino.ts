import {Component, EventEmitter, Input, model, Output} from '@angular/core';
import {ExercicioDTO, LISTA_GERAL_MEUS_TREINOS, MeuTreinoDTO} from '../services/meusTreinosDB';

@Component({
  imports: [],
  selector: 'app-card-list-meu-treino',
  styleUrl: './card-list-meu-treino.css',
  templateUrl: './card-list-meu-treino.html',
})
export class CardListMeuTreino {

  meusTreinosDTO: MeuTreinoDTO[] = LISTA_GERAL_MEUS_TREINOS;
  @Input() selecionado?:string;


  protected treinoConcluido(treino:ExercicioDTO) {

    if(treino.feito == null) {
      treino.feito = false;
    }

    treino.feito = !treino.feito;
  }
}
