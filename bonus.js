// БОНУС ЗАДАНИЕ
/* Необходимо реализовать функцию fetchUrl, которая будет использоваться следующим образом.
Внутри fetchUrl можно использовать условный метод fetch, который просто возвращает
Promise с содержимым страницы или вызывает reject */

function fetchUrl(url, tries = 1) {
  return Promise.resolve()
    .then(() => {
      console.log(`Pending ${tries}`);
      return fetch(url);
    })
    .catch(() => {
      if (tries < 5) {
        ++tries
        fetchUrl(url, tries)
      }
      else {
        console.log(`${tries} неудачных попыток`)
      }
    })
}

fetchUrl("https://google/com&#39");