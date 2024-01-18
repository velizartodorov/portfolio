import { ELENA, GENT, GENT_HYBRID, ROUSSE } from "../places";
import { IEmployment } from "./employment";

export const employments: IEmployment[] = [
    {
        position: "Java Software Crafter",
        company: 'Continuum Consulting NV',
        place: GENT_HYBRID,
        icon: '/employments/continuum.jpg',
        period: {
            start: new Date(2023, 4),
            end: new Date(2024, 0)
        },
        body: [
            `Description 📚`,
            ``,
            `Joined the Continuum tribe, consulting clients using Java based applications.`,
            ``,
            `• Research & development on internal applications, such as E-Tribe Tool and HR Interview Tool`,
            `• Experimenting with Docker, Kubernetes and tryouts for migrating from Elastic BeanStalk to Kubernetes`,
            `• Updating documentation`,
            ``,
            `Technologies 🔧`,
            ``,
            `• Language/framework: Java 17, Spring Boot 2.6.7`,
            `• API Tools: Apicurio Studio, Swagger`,
            `• Dependency management: Gradle`,
            `• Containerization: Docker`,
            `• DevOps: Elastic BeanStalk`,
            `• Testing framework: JUnit 4`,
            `• Deployments: Confluence Bamboo, Azure`,
            `• Database: PostgreSQL, Amazon DynamoDB (serverless, key-value NoSQL database)`,
            `• Application server: Apache Tomcat 8`,
            `• Architecture: Microservices, Client-server`,
            `• Persistence: Spring Data JPA, Hibernate, Spring Data R2DBC`,
            `• Database management: Flyway`,
            `• Front-end: Angular 12`,
            `• Version control: Git, Github`,
            `• IDE: IntelliJ, VS Code`,
            `• Diagram schematization and documentation: Mermaid.js`,
            `• Development methodology: Pair/solo programming`,
            `• Time logging: Teamleader`,
            `• Production methodology: Kanban`,
            ``,
            `References 📌`,
            ``,
        ],
        references: [
            { value: "Continuum Consulting NV", href: "https://www.continuum.be/en/" }
        ]
    },
    {
        position: "Java Developer",
        company: 'Securex',
        place: GENT,
        icon: '/employments/securex.png',
        period: {
            start: new Date(2023, 6),
            end: new Date(2023, 11)
        },
        body: [
            `Description 📚`,
            ``,
            `Joined Securex as an external Java software developer. 
            Worked on an internal application (Wellbeing), related to sending surveys and assessments to the employees and employers of a company, so that both can receive reports and further help for their medical status.`,
            ``,
            `Technologies 🔧`,
            ``,
            `• Language/framework: Java 11/17, Spring Boot 2.6`,
            `• API Tools: Apicurio Studio, Swagger`,
            `• Dependency management: Gradle`,
            `• Testing framework: Groovy-Spock`,
            `• CI/CD: Atlassian Bamboo`,
            `• Data monitoring: Elastic Kibana`,
            `• Deployments: Azure`,
            `• Database: Oracle, Microsoft SQL Server`,
            `• Application server: Apache Tomcat`,
            `• Architecture: Distributed microservices, Spring Cloud Gateway, Netflix Zuul API (Eureka)`,
            `• Persistence: Spring Data JPA, Hibernate`,
            `• Database management: Liquibase`,
            `• Front-end: React, React Native (mobile app)`,
            `• Version control: Git, BitBucket`,
            `• IDE: IntelliJ, VS Code, DbVisualizer Pro 11.0.5`,
            `• Development methodology: Pair/solo programming`,
            `• Production methodology: Scrum with 2-week sprints (planning, retros), SAFe (Scaled agile framework)`,
            `• Time logging - Jira`,
            ``,
            `References 📌`,
            ``,
        ],
        references: [
            { value: "Securex", href: "https://www.securex.be/en" }
        ]
    },
    {
        position: "Software Developer",
        company: 'Unified Post',
        place: GENT,
        icon: '/employments/unified_post.jpeg',
        period: {
            start: new Date(2019, 3),
            end: new Date(2023, 3)
        },
        body: [
            `Description 📚`,
            ``,
            `• ADMS was acquired by Unified Post. Working on the Integration Portal, 
            configuration app for connecting 3rd party apps to the Unified Post flows`,
            `• Setting-up JIRA flow + Bitbucket integration, Git Gitflow`,
            `• Working on accountancy simulation app using multi-tenancy architecture (Spring Boot)`,
            `• Documenting and schematizing the flow using C4 diagrams, updating README-s`,
            `• Creating TestRail cases`,
            ``,
            `Technologies 🔧`,
            ``,
            `• Language/framework: Java 8/11, Spring Boot 2.6.7, Project Reactor`,
            `• API tool: Swagger`,
            `• Dependency management: Maven, Gradle`,
            `• Testing framework/tools: JUnit 4/5, Mockito, TestRails (testcases)`,
            `• CI/CD: Bitbucket pipelines`,
            `• Database: PostgreSQL`,
            `• Application server: Apache Tomcat 8`,
            `• Architecture: Microservices`,
            `• Persistence: Spring Data JPA, Hibernate`,
            `• Caching: Redis`,
            `• Database management: Liquibase, Flyway`,
            `• Front-end: Angular 12`,
            `• IDE: IntelliJ, VS Code, DBeaver`,
            `• Diagram schematization and documentation: Draw.io, C4 Structurizr, Markdown`,
            `• Production methodology: Kanban & Scrum`,
            ``,
            `References 📌`,
            ``,
        ],
        references: [
            { value: "Unifiedpost", href: "https://www.unifiedpost.com/" },
            { value: "Banqup", href: "https://www.banqup.com/" }
        ]
    },
    {
        position: "Java Developer",
        company: 'ADM Solutions',
        place: GENT,
        icon: '/employments/adm_solutions.jpg',
        period: {
            start: new Date(2018, 10),
            end: new Date(2019, 2)
        },
        body: [
            `Description 📚`,
            ``,
            `• Integrating, developing and improving automatized invoice/dossier flows with external services:`,
            `   ◦ BillToBox (BanqUp), ELO and accountancy packages`,
            `• Documenting and schematizing the flow using UML diagrams`,
            `• Working on InvoiceFlow, monolitic application which distributes invoices towards different accountancy packages like Expert-M, Adsolut, ExactOnline, BoCount, Wings Online and also persists them in a document management system called ELO`,
            `• Working on DossierFlow, monolitic application which reads information about user dossiers from Adsolut and imports them in ELO`,
            `• Migrating Java applications from SVN to Git`,
            ``,
            `Technologies 🔧`,
            ``,
            `• Language: Java 8`,
            `• Testing framework: JUnit 4`,
            `• Database: Microsoft SQL Server 2008-2012`,
            `• Application server: Apache Tomcat 8`,
            `• OS: Windows Server 2008-2012`,
            `• External API: ELO API`,
            `• Persistence: Java Database Connectivity (JDBC)`,
            `• Architecture: Java Servlet`,
            `• Front-end: Java Server Pages (JSP) + jQuerry/Ajax`,
            `• Version Control: SVN/Git, BitBucket`,
            `• IDE: Eclipse`,
            `• Diagram schematization: Draw.io, MS Visio`,
            `• Development methodology: Pair programming`,
            `• Production methodology: Kanban`,
            ``,
            `References 📌`,
            ``,
        ],
        references: [
            { value: "ADM Solutions", href: "https://web.archive.org/web/20181111090144/https://adm-solutions.eu/nl/" },
            { value: "ELO", href: "https://www.elo.com/en-de.html" }
        ]
    },
    {
        position: "Erasmus+ C# Developer Trainee",
        company: 'BIKEMA',
        place: GENT,
        icon: '/employments/bikema_small.png',
        period: {
            start: new Date(2018, 6),
            end: new Date(2018, 9)
        },
        body: [
            `Description 📚`,
            ``,
            `• Overview of C# programming concepts and approaches in .NET 4.0 and higher (Visual Studio 2015/17)`,
            `• Design and implementation of C#-based software`,
            `• Improving workflow and providing support functions`,
            `• Performing tests over C#-based software components`,
            `• Development methodology: Pair programming`,
            `• Production methodology: Kanban`,
            ``,
            `References 📌`,
            ``,
        ],
        references: [
            { value: "Erasmus+", href: "https://erasmus-plus.ec.europa.eu/" },
            { value: "Universiy of Ruse", href: "https://www.uni-ruse.bg/en" },
            { value: "BIKEMA information", href: "http://fetch.ecs.uni-ruse.bg/?cmd=gsProfile&user=FERNAND" },
            { value: "Lotuswebtec.com", href: "https://www.lotuswebtec.com/en/" }
        ]
    },
    {
        position: "Full-Stack Developer",
        company: 'DSI Ltd.',
        place: ROUSSE,
        icon: '/employments/dsi.png',
        period: {
            start: new Date(2017, 6),
            end: new Date(2018, 4)
        },
        body: [
            `Description 📚`,
            ``,
            `• Kozelat.com/Outletpc.bg – OpenCart 2.3 (PHP 7.1/Bootstrap 3) shops – development and support`,
            `• MiAudit – (Laravel 4.2/Bootstrap 3) – system for audit and management of cleaning companies in UK`,
            `• Git/Unix shell, FileZilla, PuTTY remote maintenance of company servers`,
            `• Project management system (Redmine) & web hosting administration (Digital Ocean)`,
            `• Development methodology: Pair programming`,
            `• Production methodology: Kanban`,
            ``,
            `References 📌`,
            ``,
        ],
        references: [
            { value: "DSI Ltd - Developing Software Innovations", href: "https://dsi.bg/en/" },
            { value: "Kozelat.com", href: "https://kozelat.com/" },
            { value: "Outletpc.bg", href: "https://outletpc.bg/" },
            { value: "MiAudit", href: "https://miaudit.com/" }
        ]
    },
    {
        position: "Computer Technican Trainee",
        company: 'Telnet',
        place: ELENA,
        icon: '/employments/telnet.png',
        period: {
            start: new Date(2015, 6),
            end: new Date(2015, 8)
        },
        body: [
            `Description 📚`,
            ``,
            `• software and hardware fixing PC-s, laptops, mobile phones, tables`,
            `• changing, cleaning and maintaining hardware components of computer configurations`,
            `• software reinstallation, backup and maintance`,
            `• creating hardware parts list for PC configuration based on customer requirements`,
            ``,
            `References 📌`,
            ``,
        ],
        references: [
            { value: "Telnet", href: "https://telnet.bg/en/pc/home/p1/.html" },
        ]
    }
];