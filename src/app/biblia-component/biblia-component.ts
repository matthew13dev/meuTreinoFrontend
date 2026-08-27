import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {BibliaService, VersiculoResponse} from '../services/biblia-service';

@Component({
  imports: [],
  selector: 'app-biblia-component',
  styleUrl: './biblia-component.css',
  templateUrl: './biblia-component.html',
})
export class BibliaComponent {

  private _bibliaService: BibliaService = inject(BibliaService);
  private cdr = inject(ChangeDetectorRef);

  versiculoDiario?:VersiculoResponse;


  ngOnInit() {
    this.buscarBiblia();
  }
  buscarBiblia(){
    this._bibliaService.getBibliaAPI().subscribe(
      {
        next: (response) => {
          this.versiculoDiario = response;
          this.cdr.detectChanges();

        }
      }
    )
  }
}
