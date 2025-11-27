import "./Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="header_notify">
        <p>
          Знижки на Чорну П'ятницю до -50% | Оплата Щастинами від 15 платежів
        </p>
      </div>
      <div className="header_undercontainer">
        <div className="header_left">
          <select name="language" id="language">
            <option value="ua">УКР</option>
            <option value="ru">РУС</option>
          </select>
          <button type="button">
            <img width={12} height={12} src="/location.png" alt="location" />
            Київ
          </button>
        </div>
        <div className="header_right">
          <a className="header_link" href="#">
            Акції
          </a>
          <a className="header_link" href="#">
            Подарункові картки
          </a>
          <a className="header_link" href="#">
            Магазин
          </a>
          <a className="header_link" href="#">
            Доставка
          </a>
          <a className="header_link" href="#">
            Повернення
          </a>
          <a className="header_link" href="#">
            Trade-in
          </a>
          <a className="header_link" href="#">
            COMFY допомагає
          </a>
          <a className="header_right_phone" href="#">
            <img width={12} height={12} src="/phone.png" alt="phone" />
            Допомога
          </a>
        </div>
      </div>
      <div className="header_bottom">
        <div className="flex flex-row gap-4">
          <img
            src="https://cdn.comfy.ua/media/blb/logo-bf-202522.svg"
            alt="Comfy - мережа магазинів побутової техніки та електроніки"
          />
          <button type="button" className="header_catalogue">
            <img width={24} height={24} src="/catalog.png" alt="catalog" />
            Каталог
          </button>
        </div>
        <form className="header_search">
          <input className="header_search_input" type="text" />
          <span className="header_search_microphone">
            <img
              width={25}
              height={25}
              src="/microphone.png"
              alt="microphone"
            />
          </span>
          <button className="header_search_button" type="submit">
            Знайти
            <img width={20} height={20} src="/search.svg" alt="search" />
          </button>
        </form>
        <div className="navigation">
          <button className="button_nav" type="button">
            <img width={24} height={24} src="/user.png" alt="user" />
            Увійти
          </button>
          <button className="button_nav" type="button">
            <img width={24} height={24} src="/balance.png" alt="balance" />
            Порівняння
          </button>
          <button className="button_nav" type="button">
            <img width={24} height={24} src="/heart.png" alt="heart" />
            Обране
          </button>
          <button className="button_nav" type="button">
            <img
              width={24}
              height={24}
              src="/notification.png"
              alt="notification"
            />
            Повідомлення
          </button>
          <button type="button" className="cart">
            <img width={24} height={24} src="/cart.png" alt="cart" />
            Кошик
          </button>
        </div>
      </div>
    </header>
  );
}
