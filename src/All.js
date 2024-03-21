import React from 'react'
import Card from './Card'

const All = () => {

    const data = [

        {
            url: require('./images/a1.webp'),
            title: 'Top 17 Best IoT Project Ideas in 2024',
            date: '30 July 2023  2 Min Read'
        }, {
            url: require('./images/a2.webp'),
            title: 'Top 1obs in Data Science in 2024',
            date: '28 Jan 2023  3 Min Read'
        },
        {
            url: require('./images/a3.webp'),
            title: 'Best Software Tools for Writing: Elevate Your Writing Skills',
            date: '15 Jan 2023  3 Min Read'
        },
        {
            url: require('./images/a4.webp'),
            title: 'Innovate or Stagnate: Comprehensive Generative AI Terms For Enthusiasts',
            date: '10 Jan 2023 3 Min Read'
        },
        {
            url: require('./images/a5.webp'),
            title: 'Integrating Augmented Reality (AR) into User Interfaces: Challenges and Solutions',
            date: '18 Jan 2023 3 Min Read'
        },
        {
            url: require('./images/a6.webp'),
            title: 'Brand Storytelling in the Digital Age: Creating Compelling Content from Scratch',
            date: '8 Jan 2023 3 Min Read'
        },

        {
            url: require('./images/a7.webp'),
            title: "Top 15 B2B Digital Marketing Strategies in 2024 [Updated]",
            date: '3 Feb 2024 3 Min Read'
        },

        {
            url: require('./images/a8.webp'),
            title: 'Human-Computer Interaction in UI/UX: A Guide on Effective Designing',
            date: '12 Dec 2023  2 Min Read'
        },
        {
            url: require('./images/a9.webp'), 
            title: 'Best Project Ideas for Robotic Applications – Including All 3 Levels [2024]',
            date: '26 Oct 2023 3 Min Read'
        },
        {
            url:  require('./images/a10.webp'),
            title: 'Integrating Augmented Reality (AR) into User Interfaces: Challenges and Solutions',
            date: '5 Feb 2024 3 Min Read'
        },
        {
            url: require('./images/a11.webp'),
            title: 'Top Full Stack Development Trends for 2024: What to Expect',
            date: '9 Feb 2024 3 Min Read'
        },
        {
            url: require('./images/a12.webp'),
            title: 'Master JavaScript Frontend Roadmap: From Novice to Expert [2024]',
            date: '2 Feb 2024 3 Min Read'
        },
        {
            url: require('./images/a13.webp'),
            title: 'A Complete Guide on Backend Development: Roles, Responsibilities, Skills, and Salary [2024]',
            date: '8 Feb 2024 3 Min Read'
        },
        {
            url:require('./images/a14.webp'),
            title: 'What does a Front End Developer do? A Complete Guide',
            date: '8 Feb 2024 3 Min Read'
        },
        {
            url:require('./images/a15.webp'),
            title: 'Top 5 Free Courses by GUVI: Best Upskilling Courses in Tech [2024]',
            date: '22 Jan 2024 3 Min Read'
        },
        {
            url: require('./images/a16.webp'),
            title: 'A Comprehensive Guide to HTML and CSS Roadmap [2024]',
            date: '20 Jan 2024 3 Min Read'
        },
        {
            url: require('./images/a17.webp'),
            title: 'What is Heuristic Evaluation? An Essential Guide [2024]',
            date: '22 Jan 2024 3 Min Read'
        },
        {
            url: require('./images/a18.webp'),
            title: 'HA Complete Guide on Backend Development: Roles, Responsibilities, Skills [2024]',
            date: '29 Jan 2024 3 Min Read'
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

export default All