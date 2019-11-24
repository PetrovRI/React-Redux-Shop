class DataService {
  data = [
    {
      id: 1,
      title: 'Node.js. Путеводитель по технологии',
      author: 'Сухов Кирилл Константинович',
      price: 844,
      coverImage: '/assets/img/books/book1.jpg',
    },
    {
      id: 2,
      title: 'Программирование компьютерного зрения на Python',
      author: 'Ян Эрик Солем',
      price: 1177,
      coverImage: '/assets/img/books/book2.jpg',
    },
    {
      id: 3,
      title: 'The Javascript Adventure',
      author: 'Роб Симс',
      price: 2277,
      coverImage: '/assets/img/books/book3.jpg',
    },
    {
      id: 4,
      title: 'Python. К вершинам мастерства',
      author: 'Лучано Рамальо',
      price: 1487,
      coverImage: '/assets/img/books/book4.jpg',
    },
    {
      id: 5,
      title:
        'Изучаем Python. Программирование игр, визуализация данных, веб-приложения',
      author: 'Эрик Мэтиз',
      price: 1102,
      coverImage: '/assets/img/books/book5.jpg',
    },
    {
      id: 6,
      title: 'Программируем на Python',
      author: 'Доусон Майкл',
      price: 949,
      coverImage: '/assets/img/books/book6.jpg',
    },
    {
      id: 7,
      title: 'JavaScript. Шаблоны',
      author: 'Стоян Стефанов',
      price: 390,
      coverImage: '/assets/img/books/book7.jpg',
    },
    {
      id: 8,
      title: 'Изучаем C++ через программирование игр',
      author: 'Доусон Майкл',
      price: 680,
      coverImage: '/assets/img/books/book8.jpg',
    },
    {
      id: 9,
      title: 'Программирование на C++ в примерах и задачах',
      author: 'Васильев Алексей Николаевич',
      price: 449,
      coverImage: '/assets/img/books/book9.jpg',
    },
    {
      id: 10,
      title: 'Изучаем PHP и MySQL',
      author: 'Мишель Е. Дэвис и Джон А. Филлипс',
      price: 974,
      coverImage: '/assets/img/books/book10.jpg',
    },
  ];

  getData() {
    return new Promise((resolve, reject) => {
      // delay simulation
      setTimeout(() => {
        resolve(this.data);
        reject(new Error('error'));
      }, 1000);
    });
  }
}

export default DataService;
