import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderService } from "src/app/components/template/header/header.service";

@Component({
  selector: "app-company-crud",
  templateUrl: "./company-crud.component.html",
  styleUrls: ["./company-crud.component.css"],
})
export class CompanyCrudComponent {
  constructor(
    private router: Router,
    private headerService: HeaderService,
  ) {
    headerService.headerData = {
      title: "Cadastro de Empresas",
      icon: "storefront",
      routerUrl: "/companies",
    };
  }

  navigateToCompanyCreate(): void {
    this.router.navigate(["/companies/create"]);
  }
}
