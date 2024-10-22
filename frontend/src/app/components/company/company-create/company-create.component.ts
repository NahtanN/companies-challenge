import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Company } from "../company.model";
import { CompanyService } from "../company.service";

@Component({
  selector: "app-company-create",
  templateUrl: "./company-create.component.html",
  styleUrls: ["./company-create.component.css"],
})
export class CompanyCreateComponent implements OnInit {
  company: Company = {
    name: "",
    email: "",
    phone: "",
    cnpj: "",
    address: {
      city: "",
      state: "",
      street: "",
      number: "",
      complement: "",
      zipcode: "",
      neighborhood: "",
    },
  };

  constructor(
    private companyService: CompanyService,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  createCompany(): void {
    this.companyService.create(this.company).subscribe(() => {
      this.companyService.showMessage("Empresa criada");
      this.router.navigate(["/companies"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/companies"]);
  }
}
