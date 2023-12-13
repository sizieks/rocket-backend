import { ILead } from './lead.model';

const names = [
  'Александр',
  'Андрей',
  'Артём',
  'Валерий',
  'Виктор',
  'Вячеслав',
  'Геннадий',
  'Глеб',
  'Григорий',
  'Даниил',
  'Денис',
  'Дмитрий',
  'Евгений',
  'Егор',
  'Ермолай',
  'Иван',
  'Игнатий',
  'Илья',
  'Лаврентий',
  'Лев',
  'Лукьян',
];

const surnames = [
  'Смирнов',
  'Иванов',
  'Кузнецов',
  'Соколов',
  'Попопов',
  'Лебедев',
  'Козлов',
  'Новиков',
  'Морозов',
  'Петров',
  'Волков',
  'Соловьёв',
  'Васильев',
  'Зайцев',
  'Павлов',
  'Семёнов',
  'Голубев',
  'Виноградов',
  'Фёдоров',
  'Богданов',
  'Орлов',
];

const statuses = [
  'Неразобранное',
  'Первичный контакт',
  'Принимают решение',
  'Успешно реализовано',
  'Закрыто и не реализовано',
  'Переговоры',
];

const statusColors = [
  '#fffeb2', '#fffd7f', '#fff000',
  '#ffeab2', '#ffdc7f', '#ffce5a',
  '#ffdbdb', '#ffc8c8', '#ff8f92',
  '#d6eaff', '#c1e0ff', '#98cbff',
  '#ebffb1', '#deff81', '#87f2c0',
  '#f9deff', '#f3beff', '#ccc8f9',
  '#eb93ff', '#f2f3f4', '#e6e8ea',
];

const getRandomUID = () => {
  return (Date.now().toString(32) + Math.random().toString(16))
    .toString()
    .replace(/\./g, '');
};

const getRandomPrice = (max: number = 3648): number => {
  return Math.floor(Math.random() * max) + 1;
};

const getRandomItem = (array: string[]): string => {
  return array[Math.floor(Math.random() * array.length)];
};

const getRandomDate = (
  start: Date = new Date(2000, 0, 1),
  end: Date = new Date(),
) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  ).toISOString();
};

const getRandomTelephoneNumber = (ISD: string = '+7') => {
  return ISD + Math.floor(Math.random() * 10000000000);
};

const getRandomEmail = () => {
  return Math.random().toString(36).substring(2) + '@lorem.ipsum';
};

export const leads: ILead[] = Array.from(Array(100), (_, index) => ({
  id: getRandomUID(),
  name: `Случайная сделака #${index}`,
  price: getRandomPrice(),
  user: `${getRandomItem(names)} ${getRandomItem(surnames)}`,
  created_at: getRandomDate(),
  status_name: getRandomItem(statuses),
  status_color: getRandomItem(statusColors),
  contact_name: `${getRandomItem(names)} ${getRandomItem(surnames)}`,
  contact_phone: getRandomTelephoneNumber(),
  contact_email: getRandomEmail(),
}));
