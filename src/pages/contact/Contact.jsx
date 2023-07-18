import './style.css';

function Contact() {
  return (
    <main className="section">
    <div className="container">
      <div className="title-1">Contacts</div>

      <div className="content__wrapper">
        <div className="content__wrapper__item">
          <h2 className="title-2">Location</h2>
          <p>Ohio, United States</p>
        </div>
        <div className="content__wrapper__item">
          <h2 className="title-2">Telegram</h2>
          <p><a className="number" href="tel:+1 (216) 123-4567">+1 (216) 123-4567</a></p>
        </div>
        <div className="content__wrapper__item">
          <h2 className="title-2">E-mail</h2>
          <p><a className="mail" href="mailto:ohio-webdev@sexytoasts.com">ohio-webdev@sexytoasts.com</a></p>
        </div>
      </div>
      
    </div>
  </main>
  )
}

export default Contact;