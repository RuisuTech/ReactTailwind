class Product {
  constructor(id, title, description, price, stock, images, colors, onsale) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.colors = colors;
    this.onsale = onsale;
  }
}

const prod1 = new Product(
  "P7Q8R9",
  "iPad Pro 12.9",
  "iPad Pro con pantalla Retina de 12.9 pulgadas y 256GB de almacenamiento.",
  900000,
  1,
  [
    "https://i.postimg.cc/kX8PKZpq/ipad.jpg",
    "https://i.postimg.cc/jqBrWKvM/ipad2.jpg",
  ],
  ["Silver", "Space Gray", "Gold"],
  false
);
const prod2 = new Product(
  "P7Q8R90",
  "iPad Pro 13",
  "iPad Pro con pantalla de 13 pulgadas y 256GB de almacenamiento.",
  800000,
  1,
  [
    "https://i.postimg.cc/jqBrWKvM/ipad2.jpg",
    "https://i.postimg.cc/kX8PKZpq/ipad.jpg",
  ],
  ["Silver", "Space Gray", "Gold"],
  true
);
const prod3 = new Product(
  "S1T2U3",
  "Sony WH-1000XM4",
  "Auriculares Sony con cancelación de ruido y batería de larga duración.",
  250000,
  1,
  [
    "https://i.postimg.cc/pVsHPznM/sony1.jpg",
    "https://i.postimg.cc/L58Fz6wW/sony1.webp",
    "https://i.postimg.cc/7ht8XryZ/sony2.jpg",
  ],
  ["Black", "Silver"],
  false
);
const prod4 = new Product(
  "S1T2U30",
  "Sony WH-1000",
  "Auriculares Sony con cancelación de ruido y controles táctiles.",
  200000,
  1,
  [
    "https://i.postimg.cc/L58Fz6wW/sony1.webp",
    "https://i.postimg.cc/pVsHPznM/sony1.jpg",
    "https://i.postimg.cc/7ht8XryZ/sony2.jpg",
  ],
  ["Black", "Silver"],
  true
);
const prod5 = new Product(
  "V4W5X6",
  "GoPro HERO9",
  "Cámara GoPro HERO9 Black con grabación en 5K y resistente al agua.",
  400000,
  1,
  [
    "https://i.postimg.cc/WbcbB2MB/gopro12.png",
    "https://i.postimg.cc/8k6zXFrd/gopro2.png",
  ],
  ["Black"],
  false
);
const prod6 = new Product(
  "V4W5X60",
  "GoPro HE9",
  "Cámara GoPro HERO9 Black con grabación en 5K y resistente al agua.",
  300000,
  1,
  [
    "https://i.postimg.cc/8k6zXFrd/gopro2.png",
    "https://i.postimg.cc/WbcbB2MB/gopro12.png",
  ],
  ["Black"],
  false
);
const prod7 = new Product(
  "Y7Z8A9",
  "Kindle Paperwhite",
  "E-reader Kindle con pantalla de alta resolución y luz integrada.",
  100000,
  2,
  [
    "https://i.postimg.cc/nzqG0FKH/kindle1.jpg",
    "https://i.postimg.cc/2ymFtsTn/kindle2.jpg",
  ],
  ["Black", "White"],
  false
);
const prod8 = new Product(
  "Y7Z8A90",
  "Kindle PW Mini",
  "E-reader Kindle compacto con pantalla de alta resolución y luz integrada.",
  50000,
  2,
  [
    "https://i.postimg.cc/2ymFtsTn/kindle2.jpg",
    "https://i.postimg.cc/nzqG0FKH/kindle1.jpg",
  ],
  ["Black", "White"],
  true
);
const prod9 = new Product(
  "B1C2D3",
  "Bose SoundLink",
  "Altavoz Bluetooth Bose con sonido envolvente de 360 grados.",
  200000,
  1,
  [
    "https://i.postimg.cc/QM5P5rz3/bose1.jpg",
    "https://i.postimg.cc/JnLF52wB/bose2.jpg",
    "https://i.postimg.cc/wvQGfQH4/bose3.jpg",
  ],
  ["Black", "Silver"],
  false
);
const prod10 = new Product(
  "B1C2D30",
  "Bose SoundLink T",
  "Altavoz Bluetooth Bose con sonido envolvente y batería recargable.",
  100000,
  1,
  [
    "https://i.postimg.cc/wvQGfQH4/bose3.jpg",
    "https://i.postimg.cc/QM5P5rz3/bose1.jpg",
    "https://i.postimg.cc/JnLF52wB/bose2.jpg",
  ],
  ["Black", "Silver"],
  true
);
const prod11 = new Product(
  "A1B2C3",
  "MacBook Pro 13.4",
  "Laptop MacBook Pro con 8GB de RAM y 512GB de almacenamiento.",
  750000,
  1,
  [
    "https://i.postimg.cc/HxGQcrcp/mock1.jpg",
    "https://i.postimg.cc/Y91Q1tYQ/mock2.jpg",
  ],
  ["Silver", "Space Gray"],
  false
);
const prod12 = new Product(
  "A1B2C4",
  "MacBook 12",
  "Laptop MacBook Pro con 8GB de RAM y 512GB de almacenamiento.",
  500000,
  1,
  [
    "https://i.postimg.cc/Y91Q1tYQ/mock2.jpg",
    "https://i.postimg.cc/HxGQcrcp/mock1.jpg",
  ],
  ["Silver", "Space Gray"],
  true
);
const prod13 = new Product(
  "D4E5F6",
  "MacBook Pro 15.4",
  "Laptop MacBook Pro con 8GB de RAM y 512GB de almacenamiento.",
  800000,
  2,
  [
    "https://i.postimg.cc/L5W4515D/note.jpg",
    "https://i.postimg.cc/HxGQcrcp/mock1.jpg",
    "https://i.postimg.cc/Y91Q1tYQ/mock2.jpg",
  ],
  ["Silver", "Space Gray"],
  false
);
const prod14 = new Product(
  "D4E5F60",
  "MacBook Pro 17",
  "Laptop MacBook Pro con 8GB de RAM y 512GB de almacenamiento.",
  900000,
  2,
  [
    "https://i.postimg.cc/Y91Q1tYQ/mock2.jpg",
    "https://i.postimg.cc/HxGQcrcp/mock1.jpg",
  ],
  ["Silver", "Space Gray"],
  false
);
const prod15 = new Product(
  "G7H8I9",
  "Lenovo 13.4",
  "Laptop Lenovo con 8GB de RAM y 256GB de almacenamiento.",
  75000,
  1,
  [
    "https://i.postimg.cc/L5W4515D/note.jpg",
    "https://i.postimg.cc/HxGQcrcp/mock1.jpg",
    "https://i.postimg.cc/Y91Q1tYQ/mock2.jpg",
  ],
  ["Black", "Silver"],
  false
);
const prod16 = new Product(
  "G7H8I90",
  "Lenovo 13.4",
  "Laptop Lenovo con 8GB de RAM y 256GB de almacenamiento.",
  45000,
  1,
  [
    "https://i.postimg.cc/HxGQcrcp/mock1.jpg",
    "https://i.postimg.cc/Y91Q1tYQ/mock2.jpg",
  ],
  ["Black", "Silver"],
  true
);
const prod17 = new Product(
  "J1K2L3",
  "Galaxy S21",
  "Smartphone Samsung Galaxy S21 con 128GB de almacenamiento.",
  500000,
  1,
  [
    "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
    "https://i.postimg.cc/hvQWC348/galaxy2.jpg",
    "https://i.postimg.cc/j55rfSGF/galaxy3.jpg",
  ],
  ["Black", "Silver", "White"],
  false
);
const prod18 = new Product(
  "J1K2L30",
  "Galaxy S21 PRO",
  "Smartphone Samsung Galaxy S21 con 128GB de almacenamiento.",
  500000,
  1,
  [
    "https://i.postimg.cc/hvQWC348/galaxy2.jpg",
    "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
    "https://i.postimg.cc/j55rfSGF/galaxy3.jpg",
  ],
  ["Black", "Silver", "White"],
  false
);
const prod19 = new Product(
  "M4N5O6",
  "Apple Watch S6",
  "Reloj inteligente Apple Watch Series 6 con GPS y pantalla de 44mm.",
  300000,
  1,
  [
    "https://i.postimg.cc/VstzWdJx/watch.jpg",
    "https://i.postimg.cc/3N278cM8/watch1.jpg",
  ],
  ["Space Gray", "Silver", "Gold"],
  false
);
const prod20 = new Product(
  "M4N5O60",
  "Apple Watch S5",
  "Reloj inteligente Apple Watch Series 6 con GPS y pantalla de 44mm.",
  100000,
  1,
  [
    "https://i.postimg.cc/3N278cM8/watch1.jpg",
    "https://i.postimg.cc/VstzWdJx/watch.jpg",
  ],
  ["Space Gray", "Silver", "Gold"],
  false
);

const products = [
  prod1,
  prod11,
  prod14,
  prod18,
  prod13,
  prod4,
  prod16,
  prod6,
  prod7,
  prod8,
  prod19,
  prod9,
  prod10,
  prod12,
  prod3,
  prod15,
  prod5,
  prod17,
  prod2,
  prod20,
];

export default products;