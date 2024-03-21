import React from 'react'
import Card from './Card'
const Career = () => {
    const data = [
        {
            url:require('./images/cr1.webp'),
            title: 'Software Developer vs Software Engineer: Who is More Important in 2024?',
            date: '20 Feb 2024 4 Min Read'
        },
        {
            url:require('./images/cr2.webp'),
            title: 'Professional Civil Engineer Resume: A Guide To Attract Employers in 2024',
            date: '22 Feb 2024 4 Min Read'
        },
        {
            url:require('./images/cr3.webp'),
            title: 'Top IT Jobs for Commerce Students: A Lucrative Career Path',
            date: '09 Feb 2024 4 Min Read'
        },
        {
            url:require('./images/cr4.jpg'),
            title: '5 Career Opportunities for Full Stack Development',
            date: '02 Feb 2024 4 Min Read'
        },
        {
            url:require('./images/cr5.webp'),
            title: 'Best Product-Based Companies for AI Engineers in 2024',
            date: '18 Feb 2024 4 Min Read'
        },
        {
            url:require('./images/cr6.webp'),
            title: 'Best Product-based Companies for Digital Marketing Freshers [2024]',
            date: '17 Feb 2024 4 Min Read'
        },
        {
            url:require('./images/cr7.jpg'),
            title: 'Top 5 Product-Based Companies That Don’t Require Coding',
            date: '12 Feb 2024 4 Min Read'
        },
        {
            url:require('./images/cr6.webp'),
            title: 'Blockchain Developer Resume Guide: 11 Hot Tips to Make It Professional',
            date: '26 Feb 2024 4 Min Reads'
        },
        {
            url:require('./images/cr3.webp'),
            title: 'A Compelling Ethical Hacker Resume: 10 Tips and Tricks to Follow',
            date: '05 Feb 2024 4 Min Read'
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
    );
}

export default Career