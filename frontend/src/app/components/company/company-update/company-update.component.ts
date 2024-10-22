import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Company } from "../company.model";
import { CompanyService } from "../company.service";

@Component({
  selector: "app-company-update",
  templateUrl: "./company-update.component.html",
  styleUrls: ["./company-update.component.css"],
})
export class CompanyUpdateComponent implements OnInit {
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

    if (!id) {
      return;
    }

    this.companyService
      .readById(id)
      .subscribe((company) => (this.company = company));
  }

  updateCompany(): void {
    this.companyService.update(this.company).subscribe(() => {
      this.companyService.showMessage("Empresa atualizada com sucesso!");
      this.router.navigate(["/companies"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/companies"]);
  }
}
