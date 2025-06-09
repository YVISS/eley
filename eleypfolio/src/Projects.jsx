import './css/projects.css'
import projectData from './data/projects.json'
import Card from './Card.jsx'

export default function Projects() {
    const groupedByCategory = projectData.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <>
            <div className="projects">
                <div className="page_title">
                    <h1 className='title'>Projects</h1>
                    <h3 className='description'>
                        These are the projects I have worked on.
                        You can find more on my GitHub.
                    </h3>
                </div>
                <div className="projects_container">
                    {Object.entries(groupedByCategory).map(([category, items]) => (
                        <section className={category} className="section">
                            <h1 className='category'>{category}</h1>
                            <div className="section__content">
                                <div className="cards">
                                    {items.map((item) => (
                                        <Card
                                            key={item.imageID}
                                            url={item.url}
                                            title={item.title}
                                            description={item.description}
                                            category={item.category}
                                            link={item.link}
                                            techUsed={item.techUsed}
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

            </div>

        </>
    );
}