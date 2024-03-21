import React from 'react'
import Card from './Card'

const CyberSecurity = () => {

    const data = [
        
        {
            url:require('./images/c1.webp'),
            title: '8 Different Types of Cybersecurity and Threats Involved',
            date: '08 Feb 2024  5 Min Read'
        },
        {
            url:require('./images/c2.jpg'),
            title: 'What Is Hacking? Types of Hacking & More',
            date: '17 Feb 2024 5 Min Read'
        },
        {
            url:require('./images/c3.webp'), 
            title: 'What is Cybersecurity? Importance and its uses & the growing challenges in 2023!',
            date: '19 Feb 2024 5 Min Read'
        },
        {
            url:require('./images/c4.webp'), 
            title: 'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
            date: '20 Feb 2024 5 Min Read'
        },
        {
            url:require('./images/c5.webp'), 
            title: 'How Is Cyber Security Important To Our Lives?',
            date: '14 Feb 2024 5 Min Read'
        },
        {
            url:require('./images/c6.jpeg'),
            title: 'The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!',
            date: '12 Feb 2024 5 Min Read'
        },

        {
            url:require('./images/c7.webp'),
            title: 'Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?',
            date: '2 Feb 2024 5 Min Read'
        },
        {
            url:require('./images/c8.webp'),
            title: 'Top 7 Cyber Security Attacks in Real Life',
            date: '12 Feb 2024 5 Min Read'
        },
        {
            url:require('./images/c9.webp'),
            title: 'The Ultimate Cybersecurity Roadmap for Beginners',
            date: '21 Feb 2024 5 Min Read'
        }

    ]
    return (
        <div className='allcardmapmargin'>
            <div className="allcardsmap">

                {data.map((data, index) => (
                    <Card key={index} data={data} />
                ))}
            </div>
        </div>
    )
}

export default CyberSecurity