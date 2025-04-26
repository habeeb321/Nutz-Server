const iPhones = [
    {
        id: "iphone11",
        name: "iPhone 11",
        rating: 4.4,
        description: "The iPhone 11 features a 6.1-inch Liquid Retina HD display, A13 Bionic chip, dual 12MP cameras (wide and ultra-wide), and Night mode for better low-light photos.",
        images: [
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-3.jpg"
        ],
        price: 699.00
    },
    {
        id: "iphone11pro",
        name: "iPhone 11 Pro",
        rating: 4.6,
        description: "The iPhone 11 Pro features a 5.8-inch Super Retina XDR display, A13 Bionic chip, triple 12MP cameras (wide, ultra-wide, telephoto), and Night mode.",
        images: [
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-pro-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-pro-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-pro-3.jpg"
        ],
        price: 999.00
    },
    {
        id: "iphone11promax",
        name: "iPhone 11 Pro Max",
        rating: 4.7,
        description: "The iPhone 11 Pro Max features a 6.5-inch Super Retina XDR display, A13 Bionic chip, triple 12MP cameras (wide, ultra-wide, telephoto), and improved battery life.",
        images: [
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-pro-max-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-pro-max-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-pro-max-3.jpg"
        ],
        price: 1099.00
    },
    {
        id: "iphone12",
        name: "iPhone 12",
        rating: 4.5,
        description: "The iPhone 12 features a 6.1-inch Super Retina XDR display, A14 Bionic chip, 5G support, dual 12MP cameras (wide and ultra-wide), and Ceramic Shield protection.",
        images: [
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-3.jpg"
        ],
        price: 799.00
    },
    {
        id: "iphone12pro",
        name: "iPhone 12 Pro",
        rating: 4.6,
        description: "The iPhone 12 Pro features a 6.1-inch Super Retina XDR display, A14 Bionic chip, 5G support, triple 12MP cameras (wide, ultra-wide, telephoto), and LiDAR for AR.",
        images: [
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-3.jpg"
        ],
        price: 999.00
    },
    {
        id: "iphone12promax",
        name: "iPhone 12 Pro Max",
        rating: 4.7,
        description: "The iPhone 12 Pro Max features a 6.7-inch Super Retina XDR display, A14 Bionic chip, 5G support, triple 12MP cameras with improved low-light performance, and LiDAR.",
        images: [
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-3.jpg"
        ],
        price: 1099.00
    },
    {
        id: "iphone13",
        name: "iPhone 13",
        rating: 4.5,
        description: "The iPhone 13 features a 6.1-inch Super Retina XDR display, A15 Bionic chip, 5G support, dual 12MP cameras with Cinematic mode, and improved battery life.",
        images: [
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-3.jpg"
        ],
        price: 799.00
    },
    {
        id: "iphone13pro",
        name: "iPhone 13 Pro",
        rating: 4.7,
        description: "The iPhone 13 Pro features a 6.1-inch Super Retina XDR display with ProMotion, A15 Bionic chip, triple 12MP cameras with macro photography, and 5G support.",
        images: [
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-3.jpg"
        ],
        price: 999.00
    },
    {
        id: "iphone13promax",
        name: "iPhone 13 Pro Max",
        rating: 4.8,
        description: "The iPhone 13 Pro Max features a 6.7-inch Super Retina XDR display with ProMotion, A15 Bionic chip, triple 12MP cameras with macro photography, and longer battery life.",
        images: [
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-3.jpg"
        ],
        price: 1099.00
    },
    {
        id: "iphone14",
        name: "iPhone 14",
        rating: 4.5,
        description: "The iPhone 14 features a 6.1-inch Super Retina XDR display, A15 Bionic chip, dual 12MP cameras with Photonic Engine, Crash Detection, and satellite connectivity.",
        images: [
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-3.jpg"
        ],
        price: 799.00
    },
    {
        id: "iphone14pro",
        name: "iPhone 14 Pro",
        rating: 4.7,
        description: "The iPhone 14 Pro features a 6.1-inch Super Retina XDR display with ProMotion, A16 Bionic chip, 48MP main camera, Dynamic Island, and Always-On display.",
        images: [
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-3.jpg"
        ],
        price: 999.00
    },
    {
        id: "iphone14promax",
        name: "iPhone 14 Pro Max",
        rating: 4.8,
        description: "The iPhone 14 Pro Max features a 6.7-inch Super Retina XDR display with ProMotion, A16 Bionic chip, 48MP main camera, Dynamic Island, and longer battery life.",
        images: [
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-3.jpg"
        ],
        price: 1099.00
    },
    {
        id: "iphone15",
        name: "iPhone 15",
        rating: 4.6,
        description: "The iPhone 15 features Apple's A16 Bionic chip, a 48MP main camera, Dynamic Island, and a USB-C port. It comes with a 6.1-inch Super Retina XDR display.",
        images: [
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-3.jpg"
        ],
        price: 799.00
    },
    {
        id: "iphone15plus",
        name: "iPhone 15 Plus",
        rating: 4.5,
        description: "The iPhone 15 Plus features a 6.7-inch Super Retina XDR display, A16 Bionic chip, 48MP main camera, and all-day battery life.",
        images: [
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-plus-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-plus-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-plus-3.jpg"
        ],
        price: 899.00
    },
    {
        id: "iphone15pro",
        name: "iPhone 15 Pro",
        rating: 4.7,
        description: "The iPhone 15 Pro features Apple's A17 Pro chip, a titanium design, a 48MP main camera with 3x optical zoom, and a USB-C port. It comes with a 6.1-inch Super Retina XDR display with ProMotion and Always-On capability.",
        images: [
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-3.jpg"
        ],
        price: 999.00
    },
    {
        id: "iphone15promax",
        name: "iPhone 15 Pro Max",
        rating: 4.8,
        description: "The iPhone 15 Pro Max features Apple's A17 Pro chip, a titanium design, a 48MP main camera with 5x optical zoom, and a USB-C port. It comes with a 6.7-inch Super Retina XDR display with ProMotion and Always-On capability.",
        images: [
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-3.jpg"
        ],
        price: 1199.00
    },
    {
        id: "iphone16",
        name: "iPhone 16",
        rating: 4.6,
        description: "The iPhone 16 features a 6.1-inch Super Retina XDR display, A18 chip, 48MP Fusion camera with 2x optical zoom, Action button, Camera Control button, and Apple Intelligence support.",
        images: [
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-3.jpg"
        ],
        price: 799.00
    },
    {
        id: "iphone16plus",
        name: "iPhone 16 Plus",
        rating: 4.6,
        description: "The iPhone 16 Plus features a 6.7-inch Super Retina XDR display, A18 chip, 48MP Fusion camera with 2x optical zoom, Action button, and improved battery life.",
        images: [
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-plus-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-plus-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-plus-3.jpg"
        ],
        price: 899.00
    },
    {
        id: "iphone16pro",
        name: "iPhone 16 Pro",
        rating: 4.8,
        description: "The iPhone 16 Pro features a 6.3-inch Super Retina XDR display, A18 Pro chip, 48MP Fusion camera with 5x optical zoom, Camera Control button, and 4K 120 fps Dolby Vision video.",
        images: [
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-3.jpg"
        ],
        price: 999.00
    },
    {
        id: "iphone16promax",
        name: "iPhone 16 Pro Max",
        rating: 4.9,
        description: "The iPhone 16 Pro Max features a 6.9-inch Super Retina XDR display, A18 Pro chip, 48MP Fusion camera with 5x optical zoom, Camera Control button, and up to 33 hours of battery life.",
        images: [
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-max-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-max-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-max-3.jpg"
        ],
        price: 1199.00
    }
];

module.exports = iPhones;