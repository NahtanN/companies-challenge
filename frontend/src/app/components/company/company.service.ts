import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError, EMPTY, map, Observable } from "rxjs";
import { Company } from "./company.model";

@Injectable({
  providedIn: "root",
})
export class CompanyService {
  baseUrl = "http://localhost:3000/companies";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
  ) {}

  showMessage(msg: string, isError: boolean = false) {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(company: Company): Observable<Company> {
    return this.http.post<Company>(this.baseUrl, company).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e)),
    );
  }

  findAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e)),
    );
  }

  readById(id: string): Observable<Company> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.get<Company>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e)),
    );
  }

  update(company: Company): Observable<Company> {
    const url = `${this.baseUrl}/${company.id}`;

    return this.http.put<Company>(url, company).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e)),
    );
  }

  delete(id: number): Observable<Company> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<Company>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e)),
    );
  }

  errorHandler(e: HttpErrorResponse): Observable<any> {
    this.showMessage("Ocorreu um erro", true);
    return EMPTY;
  }
}
