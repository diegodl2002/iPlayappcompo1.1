import React from 'react';
import photo from './image/photo.jpg'

const Home = () => {
    return (
     <div>
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAdVBMVEX///8AAAD19fUvLy/j4+O3t7fp6ek6OjqVlZW6urp9fX35+fn8/Pw2NjbPz8/ExMQoKCgjIyPa2tqxsbFubm5JSUl3d3epqamioqJjY2NXV1fZ2dnJycmJiYlqamqPj48UFBRAQECbm5tMTEwcHBwQEBCEhIQ1PAk0AAAEZ0lEQVR4nO3Z7XqiOhSGYUAaqyBoEQE/xlrtnP8hblYgARRrO3ukTq/n/iMgIi8JYUUdBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPh/VPwUfvc53FOcumuvtb55+bZTuYuV67rLdgvO597Vnf9BWZnPfWtvGY1MwOAH9Nzta5lv0WkyE9Av3FMiEdViZh2K562JHZfrD9/au4sGtAGnEt0vF3y343XlVzs+ydqjBxyX55h1N5mAMzn/yLkIWJroHf6JgDM3fTrbZAIu5fx7WlAaVnI/dMAwyvb7LApkcZPvVrukeTaYgN50doxlwW8azYt3ctO6M9nlgQOq1Vw3xDKJ87VedGfPQf2mHUUDpfRrK2BpMpJVafbHDRifLjpd6VCPHc1jotYN6ESyug4eOKAa9eVz3efqbRswLMnrWUDnII2vLgKqSZYnG9MPQvNpp3uwAQRFf75pfa4m4HO5bSSd9DzgXtajbkD1bK7aVA9ASq7C3EbyjuXqeKCE8WtvvsK0RTvguC/gm6zHnYDbtDnQKSk3hLv6KlSUrHUft/fzuzffyQ6jNwNetuCmeyxJGLU6vePk0qs3w+QLU7fPL7vDzYC/ytVXvxXQ052+yOI4W8uSfojMWr0ilM1F4Awi6M3XKmduBdTd7ei1AsaysK+OPq37r+7I73W32Czci4Jp6IDxZwN6S9P5bEDpgGZK6S/qsC+nJlRWt/kgrgRsWuijgKG31Z1QF+E2oB/Hsb2FD+XGqXyP9ORj9all5x74noB2PLgS8LgUxeFd7507zrUHvQnoJNJHdbMpGbfPS967CXrLGHdtH1L9AbtXQ48XnYCBiuJJkuX53ATU96oMqPoeHauhAuoR7aM+ejPgOK92bAX0347z92YPHdCRsXUpl2JpNw1i3x/QlKK3Aq5zs2MTMD4r/qo0k3JpVh5AyaQzdgYzeXd7jePwg4BvkfbiNfWWDfikjzhP18Vyul/YgCqtgknQw4BFuT/uD2jGgZsPesMG1O233yhPfqVKm/4o5dqqKp12w2Sr9NdqNsSXA+qqLDdbD01AeWPueeUFPUWXH7+flyv5xlWwLweU54Frbkw1bwIGUq5t5evS+6dqu9KESfXunwWsH/ShPrYZMqVc2/9ut+8wdGl4Ie2ZD34q4NZtbrLsvR0wKp+5R7nlB5pIWElPPjub+fogo0uHdRJts3Jeu2gF1BOP0q+BJhJWsLoMaHvR1wO+VUc4SUVWrNsBs7NjD2daffM8PdSV261a9KOAejpRWelGswGVPvposDKt4UnCItkoFeUy1uVNJ7r5m4zRBAyTg443yj1doDV1me6jxX2zXBE087OwU2b82d9nKk4mPQ2lJ48DlmmfUfzF3xY8eSrOvqGHDkUPMvvvPov70T/zv/6wv8QNVaSLs/H5Z/HrOeL6p96BdcDVI/4781eoZXosdtuhi7QBhcEPDgcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqPwH/Xcu3wI4eZUAAAAASUVORK5CYII='   alt='logo'  height="150" />
        <h1>Servicio Tecnico Certificado</h1>
        <br/>
        <img src={photo} />
        <p>iPlayapp</p>
        <p>Developed in Tucumán</p>

    </div>
    )  
};

  
  export default Home;
  