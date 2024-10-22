import { Component, OnInit } from "@angular/core";
import { Company } from "../company.model";
import { CompanyService } from "../company.service";

@Component({
  selector: "app-company-read",
  templateUrl: "./company-read.component.html",
  styleUrls: ["./company-read.component.css"],
})
export class ProductReadComponent implements OnInit {
  companies: Company[] = [];
  displayedColumns = ["id", "name", "cnpj", "action"];
  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.findAll().subscribe((companies) => {
      this.companies = companies;
      console.log(companies);
    });
  }
}
