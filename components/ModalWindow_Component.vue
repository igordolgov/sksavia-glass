<template lang="pug">
//- Открытие модального окна используя метод ID.showModal()
button.btn(onclick="my_modal_1.showModal()").btn-sm.btn-primary.text-white +
dialog#my_modal_1.modal
  .modal-box.bg-accent.text-neutral-content
    h3.text-3xl 
      | Привет!
    p.pt-4.text-xl 
      | Это моя страничка. Здесь я буду изучать компоненты для сайтов
    .divider
    p Нажмите клавишу ESC или кликните мышкой на кнопку ниже
    p чтобы закрыть это окно
    .modal-action
      form(method="dialog")
        //-  Если в форме есть кнопка, она закроет модальное окно
        button.btn.btn-primary.text-neutral-content 
          | Закрыть
</template>