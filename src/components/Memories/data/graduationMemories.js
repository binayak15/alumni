const loadImage = (imagePath) => {
    return new URL(imagePath, import.meta.url).href;
};

const graduationMemories = [
    {
        id: 1,
        title: "Graduation Day",
        category: "Graduation",
        coverImage: loadImage('../images/cover.png'),
        description: "Description for Graduation Day",
        images: [
            loadImage('../images/cover.png'),
            loadImage('../images/header.png')
        ]
    },
    {
        id: 2,
        title: "Graduation Day 2",
        category: "Graduation",
        coverImage: loadImage('../images/header.png'),
        description: "Description for Graduation Day 2",
        images: [
            loadImage('../images/cover.png'),
            loadImage('../images/header.png')
        ]
    },
    {
        id: 3,
        title: "Graduation Day 3",
        category: "Graduation",
        coverImage: loadImage('../images/cover.png'),
        description: "Description for Graduation Day",
        images: [
            loadImage('../images/cover.png'),
            loadImage('../images/header.png')
        ]
    },
    {
        id: 4,
        title: "Graduation Day 4",
        category: "Graduation",
        coverImage: loadImage('../images/header.png'),
        description: "Description for Graduation Day 2",
        images: [
            loadImage('../images/cover.png'),
            loadImage('../images/header.png')
        ]
    }
];

export default graduationMemories;
