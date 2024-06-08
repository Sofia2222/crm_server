'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Contacts', [
      {
        firstName: 'Сергій',
        lastName: 'Савченко',
        middleName: 'Васільйович',
        phone: '+380954738475',
        email: 'doi@gmail.com',
        comment: 'Гарний покупець',
        storageId: 1,
        createdAt: new Date('2024-06-01T10:00:00Z'),
        updatedAt: new Date('2024-06-01T10:00:00Z')
      },
      {
        firstName: 'Олена',
        lastName: 'Петренко',
        middleName: 'Іванівна',
        phone: '+380931234567',
        email: 'olena.petrenko@example.com',
        comment: 'Постійний клієнт',
        storageId: 1,
        createdAt: new Date('2024-06-02T10:00:00Z'),
        updatedAt: new Date('2024-06-02T10:00:00Z')
      },
      {
        firstName: 'Микола',
        lastName: 'Іванов',
        middleName: 'Миколайович',
        phone: '+380501234567',
        email: 'mykola.ivanov@example.com',
        comment: 'Відмовився від покупки',
        storageId: 1,
        createdAt: new Date('2024-06-03T10:00:00Z'),
        updatedAt: new Date('2024-06-03T10:00:00Z')
      },
      {
        firstName: 'Катерина',
        lastName: 'Сидоренко',
        middleName: 'Андріївна',
        phone: '+380671234567',
        email: 'kateryna.sydorenko@example.com',
        comment: 'Купила окуляри',
        storageId: 1,
        createdAt: new Date('2024-06-04T10:00:00Z'),
        updatedAt: new Date('2024-06-04T10:00:00Z')
      },
      {
        firstName: 'Андрій',
        lastName: 'Коваленко',
        middleName: 'Петрович',
        phone: '+380661234567',
        email: 'andrii.kovalenko@example.com',
        comment: 'Потребує консультації',
        storageId: 1,
        createdAt: new Date('2024-06-05T10:00:00Z'),
        updatedAt: new Date('2024-06-05T10:00:00Z')
      },
      {
        firstName: 'Ірина',
        lastName: 'Бондаренко',
        middleName: 'Олександрівна',
        phone: '+380931234568',
        email: 'iryna.bondarenko@example.com',
        comment: 'Завжди вчасно оплачує',
        storageId: 1,
        createdAt: new Date('2024-05-01T10:00:00Z'),
        updatedAt: new Date('2024-05-01T10:00:00Z')
      },
      {
        firstName: 'Віктор',
        lastName: 'Гончаренко',
        middleName: 'Вікторович',
        phone: '+380961234569',
        email: 'viktor.goncharenko@example.com',
        comment: 'Завжди робить великі замовлення',
        storageId: 1,
        createdAt: new Date('2024-05-02T10:00:00Z'),
        updatedAt: new Date('2024-05-02T10:00:00Z')
      },
      {
        firstName: 'Марина',
        lastName: 'Луценко',
        middleName: 'Миколаївна',
        phone: '+380501234570',
        email: 'marina.lutsenko@example.com',
        comment: 'Потребує знижки',
        storageId: 1,
        createdAt: new Date('2024-05-03T10:00:00Z'),
        updatedAt: new Date('2024-05-03T10:00:00Z')
      },
      {
        firstName: 'Дмитро',
        lastName: 'Ткаченко',
        middleName: 'Сергійович',
        phone: '+380671234571',
        email: 'dmytro.tkachenko@example.com',
        comment: 'Клієнт з хорошими відгуками',
        storageId: 1,
        createdAt: new Date('2024-05-04T10:00:00Z'),
        updatedAt: new Date('2024-05-04T10:00:00Z')
      },
      {
        firstName: 'Ганна',
        lastName: 'Кузьменко',
        middleName: 'Володимирівна',
        phone: '+380931234572',
        email: 'hanna.kuzmenko@example.com',
        comment: 'Повертається кожного місяця',
        storageId: 1,
        createdAt: new Date('2024-05-05T10:00:00Z'),
        updatedAt: new Date('2024-05-05T10:00:00Z')
      },
      {
        firstName: 'Юрій',
        lastName: 'Шевченко',
        middleName: 'Іванович',
        phone: '+380501234573',
        email: 'yurii.shevchenko@example.com',
        comment: 'Рекомендує наш магазин друзям',
        storageId: 1,
        createdAt: new Date('2024-05-06T10:00:00Z'),
        updatedAt: new Date('2024-05-06T10:00:00Z')
      },
      {
        firstName: 'Світлана',
        lastName: 'Мельник',
        middleName: 'Петрівна',
        phone: '+380671234574',
        email: 'svitlana.melnyk@example.com',
        comment: 'Активний клієнт у соціальних мережах',
        storageId: 1,
        createdAt: new Date('2024-04-01T10:00:00Z'),
        updatedAt: new Date('2024-04-01T10:00:00Z')
      },
      {
        firstName: 'Володимир',
        lastName: 'Кравченко',
        middleName: 'Олександрович',
        phone: '+380931234575',
        email: 'volodymyr.kravchenko@example.com',
        comment: 'Потребує спеціальних умов',
        storageId: 1,
        createdAt: new Date('2024-04-02T10:00:00Z'),
        updatedAt: new Date('2024-04-02T10:00:00Z')
      },
      {
        firstName: 'Тетяна',
        lastName: 'Романенко',
        middleName: 'Богданівна',
        phone: '+380501234576',
        email: 'tetyana.romanenko@example.com',
        comment: 'Підписана на нашу розсилку',
        storageId: 1,
        createdAt: new Date('2024-04-03T10:00:00Z'),
        updatedAt: new Date('2024-04-03T10:00:00Z')
      },
      {
        firstName: 'Павло',
        lastName: 'Бондар',
        middleName: 'Олексійович',
        phone: '+380671234577',
        email: 'pavlo.bondar@example.com',
        comment: 'Робить великі замовлення на свята',
        storageId: 1,
        createdAt: new Date('2024-04-04T10:00:00Z'),
        updatedAt: new Date('2024-04-04T10:00:00Z')
      },
      {
        firstName: 'Людмила',
        lastName: 'Голуб',
        middleName: 'Андріївна',
        phone: '+380931234578',
        email: 'lyudmyla.holub@example.com',
        comment: 'Купує для всієї родини',
        storageId: 1,
        createdAt: new Date('2024-04-05T10:00:00Z'),
        updatedAt: new Date('2024-04-05T10:00:00Z')
      },
      {
        firstName: 'Роман',
        lastName: 'Дмитренко',
        middleName: 'Васильович',
        phone: '+380501234579',
        email: 'roman.dmytrenko@example.com',
        comment: 'Потребує консультацій з асортименту',
        storageId: 1,
        createdAt: new Date('2024-04-06T10:00:00Z'),
        updatedAt: new Date('2024-04-06T10:00:00Z')
      },
      {
        firstName: 'Віталій',
        lastName: 'Семенов',
        middleName: 'Іванович',
        phone: '+380671234580',
        email: 'vitalii.semenov@example.com',
        comment: 'Вибагливий клієнт',
        storageId: 1,
        createdAt: new Date('2024-04-07T10:00:00Z'),
        updatedAt: new Date('2024-04-07T10:00:00Z')
      },
      {
        firstName: 'Анна',
        lastName: 'Клименко',
        middleName: 'Олександрівна',
        phone: '+380931234581',
        email: 'anna.klymenko@example.com',
        comment: 'Любить новинки',
        storageId: 1,
        createdAt: new Date('2024-04-08T10:00:00Z'),
        updatedAt: new Date('2024-04-08T10:00:00Z')
      },
      {
        firstName: 'Богдан',
        lastName: 'Лісовий',
        middleName: 'Юрійович',
        phone: '+380501234582',
        email: 'bogdan.lisovyi@example.com',
        comment: 'Замовляє лише онлайн',
        storageId: 1,
        createdAt: new Date('2024-04-09T10:00:00Z'),
        updatedAt: new Date('2024-04-09T10:00:00Z')
      },
      {
        firstName: 'Марія',
        lastName: 'Остапенко',
        middleName: 'Миколаївна',
        phone: '+380671234583',
        email: 'maria.ostapenko@example.com',
        comment: 'Купує на подарунки',
        storageId: 1,
        createdAt: new Date('2024-04-10T10:00:00Z'),
        updatedAt: new Date('2024-04-10T10:00:00Z')
      }
    ])
  },

  async down (queryInterface, Sequelize) {}
};
