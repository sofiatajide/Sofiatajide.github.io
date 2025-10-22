// FIX: Removed extraneous file content delimiters and duplicate start-of-file markers.
import { Project, BlogPost, ProjectCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Winning Space Race (IBM Data Science Capstone)',
    category: ProjectCategory.DATA,
    image: '/images/DS Capstone.png',
    shortDescription: 'A capstone project analyzing space mission data to uncover insights and predict mission success factors.',
    longDescription: 'As part of the IBM Data Science Professional Certificate, this capstone project involved a deep dive into historical space mission data. The goal was to identify key factors influencing mission success and failure, utilizing Python for data analysis, and machine learning to build predictive models.',
    technologies: ['Python', 'Data Science', 'Machine Learning', 'Data Visualization'],
    liveUrl: 'https://docs.google.com/presentation/d/1NW9Gm_K9qmz_xbHRer9bGrBbrbimDFNpQM9ci6iyMq4/edit?usp=drive_link',
    repoUrl: 'https://github.com/sofiatajide/IBM-Data-Science-Capstone-Project',
  },
  {
    id: 2,
    title: 'Trends in Technology (IBM Data Analyst Capstone)',
    category: ProjectCategory.DATA,
    image: '/images/DA Capstone.png',
    shortDescription: 'Identified and visualized emerging trends in the technology sector using various data sources.',
    longDescription: 'This capstone project for the IBM Data Analyst Certificate focused on identifying and visualizing emerging trends in the technology sector. The project involved collecting, cleaning, and analyzing data from multiple sources to create comprehensive dashboards and reports that highlight key technological shifts.',
    technologies: ['SQL', 'Excel', 'Tableau', 'Data Analysis'],
    liveUrl: 'https://docs.google.com/presentation/d/13vaEfluKn8ljKCv0qoDugM0najGLTgZO7Tf1HZKwMSY/edit?usp=sharing',
    repoUrl: 'https://github.com/sofiatajide/IBM-data-Analyst-Capstone-Project',
  },
  {
    id: 3,
    title: 'Data Cleaning in SQL',
    category: ProjectCategory.DATA,
    image: '/images/housing.jpg',
    shortDescription: 'Utilized SQL Server to transform raw housing data into a structured, usable format for easier analysis.',
    longDescription: 'The main objective of this project was to improve the accessibility and utility of raw housing data. By leveraging the capabilities of SQL Server, I transformed this data into a more structured and organized format. This process involved data cleaning, standardization, and other necessary transformations to ensure the data is reliable and accurate for analysis.',
    technologies: ['SQL', 'SQL Server', 'Data Cleaning'],
    repoUrl: 'https://github.com/sofiatajide/PortfolioProjects/blob/main/Data%20Cleaning%20Queries.sql',
  },
  {
    id: 4,
    title: 'COVID-19 Data Exploration in SQL',
    category: ProjectCategory.DATA,
    image: '/images/covid.jpg',
    shortDescription: 'Analyzed global COVID-19 data to extract meaningful insights and identify trends in its spread and impact.',
    longDescription: 'This project focuses on analyzing global COVID-19 data using SQL Server. The aim is to gain a deeper understanding of the spread and impact of the virus across different countries and regions. By leveraging the capabilities of SQL Server, I explored and manipulated the data to extract meaningful insights and identify trends.',
    technologies: ['SQL', 'SQL Server', 'Data Exploration'],
    repoUrl: 'https://github.com/sofiatajide/PortfolioProjects/blob/main/Covid%20Cases%20Data%20Exploration.sql',
  },
   {
    id: 5,
    title: 'Lung Cancer Data Analysis with Python & SQL',
    category: ProjectCategory.DATA,
    image: '/images/cancer.jpg',
    shortDescription: 'A comprehensive analysis of lung cancer data to uncover pivotal correlations and trends.',
    longDescription: 'This project revolves around a comprehensive analysis of lung cancer data with a focus on extracting valuable insights. Leveraging Python, Pandas, and SQL, I meticulously cleaned, preprocessed, and scrutinized a sizable dataset of lung cancer cases. Employing statistical techniques and data visualization, I uncovered pivotal correlations and trends within the data.',
    technologies: ['Python', 'Pandas', 'SQL', 'Data Visualization'],
    repoUrl: 'https://github.com/sofiatajide/PortfolioProjects/blob/main/Lung_Cancer.py',
  },
   {
    id: 6,
    title: 'Airbnb Pricing Analysis with Tableau',
    category: ProjectCategory.DATA,
    image: '/images/tableau.jpg',
    shortDescription: 'Created an interactive Tableau dashboard to visualize and analyze factors influencing Airbnb pricing.',
    longDescription: 'The purpose of this project is to utilize Tableau to create visualizations that provide insights into Airbnb pricing. By analyzing Airbnb data, I aim to gain a better understanding of the factors that influence pricing, such as location, property type, and time of year. I created interactive charts and graphs to explore and analyze the data in an intuitive manner.',
    technologies: ['Tableau', 'Data Visualization', 'Business Intelligence'],
    liveUrl: 'https://public.tableau.com/app/profile/sofiat1513/viz/AirBnBFullProject_16789848700460/Dashboard1',
  },
  {
    id: 7,
    title: 'Survey Data Analysis with Power BI',
    category: ProjectCategory.DATA,
    image: '/images/Power Bi.png',
    shortDescription: 'Developed a Power BI dashboard to provide insights into survey respondent data and identify trends.',
    longDescription: 'Using Power BI, I created a dashboard that provides insights into a survey with respondent data. The dashboard includes visualizations that allow the user to easily analyze the data and identify trends and patterns.',
    technologies: ['Power BI', 'Dashboarding', 'Data Analysis'],
    repoUrl: 'https://github.com/sofiatajide/PortfolioProjects/blob/main/Power%20BI%20Project.pbix',
  },
  {
    id: 8,
    title: 'Survey Insights Dashboard in Excel',
    category: ProjectCategory.DATA,
    image: '/images/New Excel.png',
    shortDescription: 'Cleaned, organized, and analyzed survey data using Excel and PivotTables to visualize key insights.',
    longDescription: 'For this project, I used Microsoft Excel to clean and organize survey data. This involved removing duplicates, correcting errors, and organizing the data. Once cleaned, I used Excel\'s PivotTable functionality to create a dashboard that visualized the key insights from the data.',
    technologies: ['Excel', 'PivotTables', 'Data Cleaning'],
    repoUrl: 'https://github.com/sofiatajide/PortfolioProjects/blob/main/Excel%20Project.xlsx',
  },
  {
    id: 9,
    title: 'Bike Rental Prediction with Python',
    category: ProjectCategory.DATA,
    image: '/images/seasonal.png',
    shortDescription: 'Analyzed seasonal trends in bike rentals and built a machine learning model to predict future demand.',
    longDescription: 'This project utilized Python to analyze the impact of seasonality on bike rentals. The project involved data cleaning, exploration, and visualization to gain insights into rental patterns. Additionally, a machine learning model was built to predict the number of bike rentals based on various features such as season, temperature, and weather conditions.',
    technologies: ['Python', 'Machine Learning', 'Data Analysis'],
    repoUrl: 'https://github.com/sofiatajide/PortfolioProjects/blob/main/Analyzing%20Seasonal%20Trends%20in%20Bike%20Rentals%20and%20Predicting%20Future%20Rentals.ipynb',
  },
  {
    id: 10,
    title: 'BMI Calculator with Python',
    category: ProjectCategory.PRODUCT,
    image: '/images/Bmi calculator.png',
    shortDescription: 'A simple Body Mass Index (BMI) calculator built using Python that provides a BMI score and interpretation.',
    longDescription: 'In this project, I created a Body Mass Index (BMI) calculator using Python. The program takes user inputs for weight and height, calculates the BMI, and provides a brief interpretation of the BMI result.',
    technologies: ['Python', 'Scripting'],
    repoUrl: 'https://github.com/sofiatajide/PortfolioProjects/blob/main/BMI%20Calculator.ipynb',
  },
  {
    id: 11,
    title: 'Automatic File Sorter with Python',
    category: ProjectCategory.PRODUCT,
    image: '/images/File sorter.jpeg',
    shortDescription: 'A utility script in Python to automatically organize files in a directory based on their file type.',
    longDescription: 'In this project, I created a file sorter using Python. The script automatically organizes files in a specified directory into subfolders based on their file extension, improving workflow and organization.',
    technologies: ['Python', 'Scripting', 'Automation'],
    repoUrl: 'https://github.com/sofiatajide/PortfolioProjects/blob/main/Automatic%20File%20Sorter.ipynb',
  },
  {
    id: 12,
    title: 'Perfect Purifier Strategic Plan',
    category: ProjectCategory.PRODUCT,
    image: '/images/Roadmap.png',
    shortDescription: 'A comprehensive strategic plan and go-to-market strategy for a new water purifier product.',
    longDescription: 'This project outlines the complete strategic plan for "Perfect Purifier," a new market entry. It includes market analysis, competitive landscape, target audience definition, product positioning, and a detailed go-to-market strategy. The presentation covers key business objectives and the roadmap for achieving them.',
    technologies: ['Product Strategy', 'Market Analysis', 'Go-to-Market', 'Business Planning'],
    liveUrl: 'https://docs.google.com/presentation/d/1rYmf70cdniYu_IhwLL-9hQxZm5cYnYQxXtnWiJerkNo/edit?usp=sharing',
    repoUrl: 'https://drive.google.com/drive/folders/1GQ7N8ZgjFPj4vi2NZ_OOV46o8xsGwtkJ?usp=sharing',
  },
  {
    id: 13,
    title: 'Perfect Purifier PRD',
    category: ProjectCategory.PRODUCT,
    image: '/images/PRD.png',
    shortDescription: 'A detailed Product Requirement Document (PRD) for the "Perfect Purifier" strategic plan.',
    longDescription: 'This document serves as the formal Product Requirement Document (PRD) supporting the "Perfect Purifier" strategic plan. It details the product\'s features, user stories, technical specifications, and success metrics, providing a clear guide for the development and design teams.',
    technologies: ['Product Management', 'PRD', 'Requirement Gathering', 'User Stories'],
    liveUrl: 'https://docs.google.com/document/d/1gl2KHpEzyjh8nQP4oVRynI-iKFzRAtIU/edit?usp=sharing&ouid=116336469418714096559&rtpof=true&sd=true',
  },
  {
    id: 14,
    title: 'Mobile Laptop Interface Whiteboard',
    category: ProjectCategory.PRODUCT,
    image: '/images/whiteboard.jpg',
    shortDescription: 'A conceptual whiteboard and design document for a new mobile-first laptop interface.',
    longDescription: 'This project involved creating a comprehensive product plan for a new mobile-first laptop interface. The plan covers the entire product lifecycle, including the initial product concept, a beta testing plan, go-to-market launch strategy, demand generation initiatives, and an end-of-life (EOL) plan.',
    technologies: ['Product Planning', 'Roadmap Development', 'Launch Strategy', 'Lifecycle Management'],
    liveUrl: 'https://docs.google.com/document/d/1u14WctNm-uxM9cEIgQV6pe5RSfVn2DOk/edit?usp=sharing&ouid=116336469418714096559&rtpof=true&sd=true',
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'From Data to Decisions: How Analytics Shapes a Winning Product Roadmap',
    date: 'July 22, 2024',
    excerpt: 'In product management, gut feelings can be misleading. True innovation is born from insight. This post explores how to transform raw data into a strategic asset, using analytics to define KPIs, prioritize features, and build a product roadmap that truly resonates with users.',
    url: '#',
    tags: ['Data Analytics', 'Product Management', 'Strategy'],
    image: 'https://picsum.photos/seed/blog1/800/400',
    content: `
In the dynamic world of product management, a roadmap built on intuition alone is like navigating without a compass. While experience is valuable, sustainable success is forged in the crucible of data. By transforming raw numbers into actionable insights, we can build products that don't just function well but genuinely solve user problems.

The first step is establishing clear Key Performance Indicators (KPIs). Metrics like daily active users, feature adoption rates, and user retention are not just numbers; they are the vital signs of your product's health. By tracking these KPIs with tools like Google Analytics or Power BI, you create a baseline for success and can measure the impact of every change you make.

With KPIs in place, you can approach feature prioritization with objectivity. Instead of relying on the loudest voice in the room, you can use data to champion the user's voice. A/B testing different features, analyzing user session recordings, and segmenting feedback by user cohorts allow you to identify which initiatives will deliver the most value. This data-driven approach ensures that your engineering resources are always focused on what matters most, maximizing impact and minimizing wasted effort.

Ultimately, a product roadmap is a strategic document that tells a story about your vision. By grounding that story in data, you create a compelling narrative that aligns stakeholders, inspires your team, and, most importantly, leads to a product that users love and can't live without.
    `
  },
  {
    id: 2,
    title: 'Beyond the Hype: Practical AI Applications for the Modern Product Manager',
    date: 'June 10, 2024',
    excerpt: 'AI is more than just a buzzword. For Product Managers, it\'s a powerful toolset for automation and insight. We\'ll dive into practical applications, from sentiment analysis of user feedback to predictive modeling for churn, and how to integrate AI into your product strategy effectively.',
    url: '#',
    tags: ['AI', 'Product Management', 'Technology'],
    image: 'https://picsum.photos/seed/blog2/800/400',
    content: `
Artificial Intelligence has moved beyond theoretical discussions and into the practical toolkit of the modern Product Manager. When wielded correctly, AI can be a superpower, automating mundane tasks and uncovering insights that would be impossible to find manually.

One of the most immediate applications is in understanding user feedback at scale. Tools leveraging Natural Language Processing (NLP) can analyze thousands of support tickets, app reviews, and social media comments in minutes. By performing sentiment analysis, these tools can tell you not just *what* users are talking about, but *how* they feel about it. This allows you to quickly identify major pain points and areas of delight, providing a clear signal for your backlog.

Furthermore, predictive analytics can transform a product team from reactive to proactive. Imagine building a model that identifies users who are at high risk of churning based on their behavior. Instead of waiting for them to leave, you can proactively engage them with targeted support or special offers. This same principle can be applied to identify potential power users or predict which features will have the highest adoption rates.

Integrating AI into your product doesn't have to be a massive, company-wide initiative. Start small. Use an off-the-shelf tool to analyze feedback. Work with your data science team on a simple predictive model. By taking these practical steps, you can begin to harness the power of AI to build smarter, more user-centric products.
    `
  },
  {
    id: 3,
    title: 'The Unconventional PM: Leveraging a Non-Traditional Background for Success in Tech',
    date: 'May 05, 2024',
    excerpt: 'My journey from Civil Engineering to Product Management wasn\'t a straight line, and that\'s my greatest strength. This article discusses how diverse experiences in fields like engineering can provide a unique advantage in tech, fostering skills in structured thinking and complex problem-solving.',
    url: '#',
    tags: ['Career', 'Product Management', 'Tech'],
    image: 'https://picsum.photos/seed/blog3/800/400',
    content: `
There's a common misconception that the only path to a successful career in tech is through a computer science degree. My journey is a testament to the fact that this isn't true. My background in Civil Engineering has been one of my greatest assets as a Product Manager, providing me with a unique lens through which to view product development.

Civil engineering is all about managing complexity and dependencies. A building isn't just a collection of rooms; it's an intricate system of structural supports, electrical wiring, and plumbing, all of which must work in harmony. This systems-thinking approach translates directly to software development. Understanding how a new feature impacts the existing codebase, database, and user interface is critical to preventing unforeseen issues—much like ensuring a new beam doesn't compromise a building's foundation.

Furthermore, my engineering background instilled a rigorous approach to project management and risk assessment. We were trained to identify potential points of failure, create contingency plans, and manage resources against a strict timeline and budget. This discipline is invaluable in a fast-paced agile environment, where I can help teams navigate technical debt, prioritize tasks, and ensure that we are building a robust and scalable product.

To anyone with a non-traditional background looking to break into tech: your unique experience is not a liability; it's your competitive advantage. Learn to articulate how your skills translate, and you'll find that your different perspective is exactly what many teams are looking for to drive innovation.
    `
  },
];