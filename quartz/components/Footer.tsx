import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

export default (() => {
  function Footer({ displayClass }: QuartzComponentProps) {
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
          Created by <a href="https://lldan.ru">lldan</a>
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
