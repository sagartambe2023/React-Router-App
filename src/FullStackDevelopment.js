import React from 'react'
import Card from './Card'
const FullStackDevelopment = () => {
    const data = [
        {
            url: require('./images/f1.webp'),
            title: 'The Ultimate Guide to Real-World Full-Stack Development Applications',
            date: '15 Jan 2024  7 Min Read'
        },
        {
            url: require('./images/f2.webp'),
            title: 'Top 10 Full-Stack Developer Frameworks in 2024',
            date: '10 Jan 2024 7 Min Read'
        },
        {
            url: require('./images/f3.jpg'),
            title: 'Best Web Development Roadmap for Beginners 2024',
            date: '18 Jan 2024 7 Min Read'
        },
        {
            url: require('./images/f4.webp'),
            title: 'Unlocking the Future: Top 5 Web Development Programming Languages in 2024',
            date: '09 Jan 2024 7 Min Read'
        },
        {
            url: require('./images/f5.jpg'),
            title: 'The Future & Scope of Full-Stack Developers in India',
            date: '29 Jan 2024 7 Min Read'
        },
        {
            url: require('./images/f6.jpg'),
            title: 'Top Full Stack Development Webinars and Workshops',
            date: '19 Jan 2024 7 Min Read'
        },
        {
            url: require('./images/f7.webp'),
            title: 'Top Skills To Become a Full-Stack Developer in 2024',
            date: '06 Feb 2024 7 Min Read'
        },
        {
            url: require('./images/f8.jpg'),
            title: 'Top 10 Tools Every Full-Stack Developer Should Master in 2024',
            date: '22 Jan 2024 7 Min Read'
        },
        {
            url: require('./images/f9.jpg'),
            title: 'Best Full-Stack Development Project Ideas in 2024',
            date: '15 Jan 2024 7 Min Read'
        }

    ]
    return (
        <div className='allcardmapmargin'>
            <div className="allcardsmap">
                {/* Mapping through the data array to render cards */}
                {data.map((data, index) => (
                    <Card key={index} data={data} />
                ))}
            </div>
        </div>
    )
}

export default FullStackDevelopment