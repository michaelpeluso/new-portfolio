import React from "react";
import { TagIcon } from "../basic/TagIcon";

const GroupedSkills = () => {
    const skillGroups = [
        {
            title: "Software Engineering",
            skills: ["Python", "JavaScript", "Java", "C", "Cpp", "CSharp", "PHP", "R"],
            body: "I thrive on creating solutions through code. With hands-on experience in two software development internships, I've built a solid foundation in software engineering principles such as OOP, data structures, and algorithms.",
        },
        {
            title: "Web Development",
            skills: ["HTML", "Node", "Express", "React", "Tailwind", "Flask", "Apache", "WordPress"],
            body: "With a minor in web development at NJIT, I've gained extensive experience designing both front-end and back-end systems. I’ve worked on projects using modern technologies like Flask, Node, and React.",
        },
        {
            title: "AI & Machine Learning",
            skills: ["Numpy", "Pandas", "AWS", "OpenAI", "Langchain"],
            body: "I find applying mathematical concepts to code both challenging and rewarding. In my spare time, I continuously explore research in deep learning, natural language processing, and classification methods to stay ahead in the field.",
        },
        {
            title: "Cloud Computing & DevOps",
            skills: ["AWS", "GoogleCloud", "Linux", "Git", "Docker", "VirtualBox", "VMware", "RabbitMQ"],
            body: "Automation and CI/CD are essential to scaling modern applications. I prioritize efficiency through automation in all stages of development, integrating various services using tools like GitHub Actions, Docker, and shell scripts in Linux.",
        },
        {
            title: "Data Management",
            skills: ["MongoDB", "MySQL", "OracleSQL", "Postgres", "phpMyAdmin"],
            body: "With extensive coursework in database systems management, I can confidently integrate a variety of popular databases into my projects using many different popular programming languages.",
        },
    ];

    return (
        <div className="theme-body m-auto grid grid-cols-1 xl:grid-cols-2 w-4/5 md:w-2/3 gap-24">
            {skillGroups.map((group, index) => (
                <div key={index} className="flex flex-col gap-4 md:gap-6 ">
                    <h3 className="theme-subtitle text-center">{group.title}</h3>
                    <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                        {group.skills.map((name, i) => (
                            <TagIcon key={i} iconName={name} />
                        ))}
                    </div>
                    <p>{group.body}</p>
                </div>
            ))}
        </div>
    );
};

export default GroupedSkills;
