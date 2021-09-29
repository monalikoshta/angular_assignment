import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from './post';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-post-table',
  template: `
    <br /><br /><br /><br />
    <div class="container-fluid">
      <h1 class="heading">Posts</h1>
      <mat-table [dataSource]="dataSource" class="mat-elevation-z8">
        <!-- UserID Column -->
        <ng-container matColumnDef="userId">
          <mat-header-cell *matHeaderCellDef> UserId </mat-header-cell>
          <mat-cell *matCellDef="let element"> {{ element.userId }} </mat-cell>
        </ng-container>

        <!-- ID Column -->
        <ng-container matColumnDef="id">
          <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>
          <mat-cell *matCellDef="let element"> {{ element.id }} </mat-cell>
        </ng-container>

        <!-- Title Column -->
        <ng-container matColumnDef="title">
          <mat-header-cell *matHeaderCellDef> Title </mat-header-cell>
          <mat-cell *matCellDef="let element"> {{ element.title }} </mat-cell>
        </ng-container>

        <!-- Body Column -->
        <ng-container matColumnDef="body">
          <mat-header-cell *matHeaderCellDef> Body </mat-header-cell>
          <mat-cell *matCellDef="let element"> {{ element.body }} </mat-cell>
        </ng-container>

        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row *matRowDef="let row; columns: displayedColumns"></mat-row>
      </mat-table>
      <mat-paginator
        [pageSizeOptions]="[5, 10]"
        showFirstLastButtons
      ></mat-paginator>
    </div>
  `,
  styles: [
    '.container-fluid{ width: 90% }',
    '.heading{text-align:center; font-size: 2rem; color: #1976d2; padding: 20px;}',
  ],
})
export class PostTableComponent implements OnInit {
  loading = true;
  errorMessage = '';

  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];

  dataSource = new MatTableDataSource<Post>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loading = true;
    this.http.get<Post[]>(this.url).subscribe(
      (response) => {
        this.dataSource.data = response;
        console.log(this.dataSource.data);
      },
      (error) => {
        console.error(error);
        this.errorMessage = error;
        this.loading = false;
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
