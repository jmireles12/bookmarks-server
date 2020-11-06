function makeBookmarksArray() {
    return [
        {
            id: 1,
            title: 'Google',
            url: 'https://www.google.com',
            description: 'Internet-related sevices and products',
            rating: 3,
        },
        {
            id: 2,
            title: 'Thinkful',
            url: 'https://www.thinkful.com',
            description: '1-on-1 learning to accelerate your way to a new high-growth tech career!',
            rating: 5,
        },
        
        {
            id: 3,
            title: 'GitHub',
            url: 'https://www.github.com',
            description: 'brings together the world/s largest community of developers.',
            rating: 4,
        },
    ]
}

module.exports = {
    makeBookmarksArray,
}