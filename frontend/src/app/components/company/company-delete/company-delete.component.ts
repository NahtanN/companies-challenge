import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Company } from "../company.model";
import { CompanyService } from "../company.service";

@Component({
  selector: "app-company-delete",
  templateUrl: "./company-delete.component.html",
  styleUrls: ["./company-delete.component.css"],
})
export class CompanyDeleteComponent implements OnInit {
  company: Company = {
    name: "",
    id: 0,
    email: "",
    cnpj: "",
    phone: "",
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
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    if (!id) return;

    this.companyService
      .readById(id)
      .subscribe((company) => (this.company = company));
  }

  deleteCompany(): void {
    if (!this.company.id) return;

    this.companyService.delete(this.company.id).subscribe(() => {
      this.companyService.showMessage("Empresa excluida com sucesso!");
      this.router.navigate(["/companies"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/companies"]);
  }
}
