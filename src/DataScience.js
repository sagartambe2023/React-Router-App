import React from 'react'
import Card from './Card'
const DataScience = () => {
    const data = [

        {
            url: require('./images/d1.png'),
            title: "A Complete Data Scientist Roadmap for Beginners",
            date: '18 Feb 2024 6 Min Read'
        },
        {
            url: require('./images/d2.webp'),
            title: "6 Tips & Tricks to Crack Data Science Interviews",
            date: '13 Feb 2024 6 Min Read'
        },
        {
            url: require('./images/d3.webp'),
            title: "VMware vs VirtualBox: Picking the Right Hypervisor for Virtualisation",
            date: '08 Feb 2024 6 Min Read'
        },
        {
            url: require('./images/d4.jpg'),
            title: "A Profound Data Scientist’s Career Path 2024",
            date: '18 Feb 2024 6 Min Read'
        },
        {
            url: require('./images/d5.jpg'),
            title: "The Different Career Paths: Data Scientists Role",
            date: '08 Feb 2024 6 Min Read'
        },
        {
            url: require('./images/d6.jpg'),
            title: "Neural Network Skills to Succeed in Data Science",
            date: '28 Feb 2024 6 Min Read'
        },
        {
            url: require('./images/d7.png'),
            title: "10 Best Data Science Frameworks in 2024",
            date: '10 Feb 2024 6 Min Read'
        },
        {
            url: require('./images/d8.webp'),
            title: "12 Real-World Data Science Examples: Power Of Data Science",
            date: '09 Feb 2024 6 Min Read'
        },
        {
            url: require('./images/d9.webp'),
            title: "Best Way to Learn Data Science in 2024",
            date: '28 Feb 2024 6 Min Read'
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

export default DataScience