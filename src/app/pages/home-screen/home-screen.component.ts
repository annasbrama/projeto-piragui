import { Component, OnInit } from "@angular/core"
import { Title } from "@angular/platform-browser"

@Component({
  selector: "app-home-screen",
  templateUrl: "./home-screen.component.html",
  styleUrls: ["./home-screen.component.css"],
})
export class HomeScreenComponent implements OnInit {
  pixKey = "projetopiragui@gmail.com"
  showCopiedNotification = false

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle("Início • Projeto Piragui")
  }

  copyPixKey(): void {
    navigator.clipboard
      .writeText(this.pixKey)
      .then(() => {
        this.showCopiedNotification = true

        setTimeout(() => {
          this.showCopiedNotification = false
        }, 3000)
      })
      .catch((err) => {
        console.error("Erro ao copiar:", err)
      })
  }
}
