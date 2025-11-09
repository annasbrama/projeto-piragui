import { Component, OnInit } from "@angular/core"
import { Title } from "@angular/platform-browser"

@Component({
  selector: "app-home-screen",
  templateUrl: "./home-screen.component.html",
  styleUrls: ["./home-screen.component.css"],
})
export class HomeScreenComponent implements OnInit {

  /** Chave PIX para doações ao projeto.
   * 
   * @type {string}
   */
  pixKey = "projetopiragui@gmail.com"

  /**
   * Controla a exibição da notificação de sucesso na cópia.
   * 
   * @type {boolean}
   */
  showCopiedNotification = false

  constructor(private titleService: Title) { }

  /**
   * Inicializa o componente e define o título da página.
   * 
   * @returns {void}
   */

  ngOnInit(): void {
    this.titleService.setTitle("Início • Projeto Piragui")
  }

/**
 * Copia a chave PIX para a área de transferência do usuário e exibe notificação de sucesso por 3 segundos.
 *
 * Em caso de erro, loga no console para debug.
 * 
 * @returns {void} 
 */

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
