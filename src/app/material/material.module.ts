import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
<<<<<<< HEAD
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';


=======
>>>>>>> c2cfbde07cc48ad6fe3b7e85972a888dd711263b

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
<<<<<<< HEAD
    MatGridListModule,
    MatTableModule
=======
>>>>>>> c2cfbde07cc48ad6fe3b7e85972a888dd711263b
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
<<<<<<< HEAD
    MatCardModule,
    MatGridListModule,
    MatTableModule
=======
    MatCardModule
>>>>>>> c2cfbde07cc48ad6fe3b7e85972a888dd711263b
  ]
  ],
})
export class MaterialModule {}
