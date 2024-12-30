const loadImage = (imagePath) => {
    return new URL(imagePath, import.meta.url).href;
};

const farewellMemories = [
    {
        id: 1,
        title: "farewellMemories Day",
        category: "farewellMemories",
        coverImage: loadImage('../images/cover.png'),
        description: "Description for Graduation Day",
        images: [
            loadImage('../images/cover.png'),
            loadImage('../images/header.png'),
            loadImage('../images/cover.png'),
            loadImage('../images/header.png'),
            loadImage('../images/cover.png'),
            loadImage('../images/header.png'),
            loadImage('../images/cover.png'),
            loadImage('../images/header.png'),
            loadImage('../images/cover.png'),
            loadImage('../images/header.png')
        ]
    },
    {
        id: 2,
        title: "farewellMemories Day 2",
        category: "farewellMemories",
        coverImage: loadImage('../images/header.png'),
        description: "Description for Graduation Day 2",
        images: [
            loadImage('../images/cover.png'),
            loadImage('../images/header.png')
        ]
    }
];

export default farewellMemories;
