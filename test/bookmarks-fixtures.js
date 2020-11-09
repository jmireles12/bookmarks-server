function makeBookmarksArray() {
    return [
        {
            id: 1,
            title: 'Google',
            url: 'https://www.google.com',
            description: 'Internet-related services and products',
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

function makeMaliciousBookmark() {
    const maliciousBookmark = {
        id: 911,
        title: 'Naughty naughty very naughty <script>alert("xss");</script>',
        url: 'https://www.hackers.com',
        description: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
        rating: 1,
    }
    const expectedBookmark = {
        ...maliciousBookmark,
        title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
        description: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
    }
    return {
        maliciousBookmark,
        expectedBookmark,
    }
}

module.exports = {
    makeBookmarksArray,
    makeMaliciousBookmark,
}