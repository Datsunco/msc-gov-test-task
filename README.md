# График Компетенций

## Статус готовности

Реализован функционал, взаимодействия с интерфейсом с помощью внутренного кольца компетенций. 
Пока что функционал взаимодействия с внешним кольцом в разработке. 

## Описание

Этот проект реализует интерактивный график компетенций, который демонстрирует взаимосвязь между различными компетенциями и связанными навыками. График состоит из двух концентрических колец: внешнее кольцо представляет навыки, а внутреннее - компетенции.

Основные функции:

- Визуальное представление компетенций на внутреннем кольце.
- Взаимосвязь компетенций с навыками на внешнем кольце.
- Интерактивное отображение связей между выбранной компетенцией и навыками.
- Отображение связей основных навыков (mainSkills) оранжевым цветом.
- Отображение связей дополнительных навыков (otherSkills) фиолетовым цветом.

При нажатии на компетенцию активируются линии, соединяющие её со связанными навыками, позволяя пользователю визуально оценить структуру и уровень связанности компетенций.

## Установка

Для использования этого проекта убедитесь, что у вас установлены [Node.js](https://nodejs.org/) и [npm](https://www.npmjs.com/). Склонируйте репозиторий и выполните следующие команды:

```bash
git clone https://github.com/Datsunco/msc-gov-test-task
cd TestTask
npm install
```

## Запуск

```bash
npm run dev
```

## Общее потраченное время 

На момент последнего обновления на проект затрачено 20 часов.