import CoursesComponent from "@/components/CoursesComponent ";
import iso from "../asset/img/ios.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between container mx-auto">
      <h3 className="text-[#253C95] mt-5 uppercase font-bold md:text-4xl text-2xl">
        Couses
      </h3>
      <div className="grid sm:grid-cols-1 lg:px-6 xl:px-0 px-4 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-6 py-10">
        <CoursesComponent
          image={`$iso`}
          title="IOS DEVELOPMENT"
          description="iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features."
          duration="80 hours"
          level="  Medium"
        />
        <CoursesComponent
          image={`$iso`}
          title="SQL & DATA MODELING WITH POSTGRESQL"
          description="SQL & Data Modeling with PostgreSQL is designed to help you understand in project analyze, database design and normalized data follow requirements from clients and Modeling the business flows. Please see the details course offers below,"
          duration="50 hours"
          level="Medium"
        />
        <CoursesComponent
          image={`$iso`}
          title="WEB DESIGN"
          description="Web Design course is designed for students to get started with Design Website Concepts. This course will focus on basic and advanced layout of website plus responsive design including UI/UX Design Concept. Moreover, CMS & Dynamic content with hosting application to access in public."
          duration="70 hours"
          level="Basic"
        />
        <CoursesComponent
          image={`$iso`}
          title="DEVOPS ENGINEERING"
          description="This course will provide you with in-depth knowledge on how to build applications on the cloud. This program will help you learn the best practices for deploying SaaS, PaaS, and IaaS applications on Server. Master DevOps tools to automate and improve the overall efficiency and delivery of software applications."
          duration="70 hours"
          level="Advanced"
        />
        <CoursesComponent
          image={`$iso`}
          title="C++ PROGRAMMING"
          description="C++ is one of the world's most popular programming languages. C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems. C++ programming course will guide you to from basic language syntax to OOP concept step by step. Please see the details course offer below,"
          duration="60 hours"
          level="Basic"
        />
        <CoursesComponent
          image={`$iso`}
          title="DOCKER"
          description="Docker is a containerized tool that designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. This course covers,"
          duration="45 hours"
          level=" Medium"
        />
        <CoursesComponent
          image={`$iso`}
          title="DATA ANALYTICS"
          description="Data analytics is the science of analyzing raw data to make conclusions about that information. Many of the techniques and processes of data analytics have been automated into mechanical processes and algorithms that work over raw data for human consumption."
          duration="4 monthss"
          level="Advanced"
        />
        <CoursesComponent
          image={`$iso`}
          title="ANDROID DEVELOPMENT"
          description="Android is an open source and Linux-based operating system for mobile devices such as smartphones and tablet computers. This course will teach you basic Android programming and will also take you through some advance concepts related to Android application development and include with UX / UI Design concept. Please see the course offers below,"
          duration="70 hourss"
          level="Medium"
        />
        <CoursesComponent
          image={`$iso`}
          title="NEXT.JST"
          description="Next.js course is designed for students to develop single page application. It has all the tools you need to make the Web faster, plus Server-Side Rendering which essential for search engine optimization. We also include with UI/UX Design Concept for professional website development..."
          duration="60 hours"
          level="Medium"
        />
        <CoursesComponent
          image={`$iso`}
          title="LINUX ADMINISTRATOR"
          description="Linux is a family of open-source Unix-like operating systems based on the Linux kernel. Linux is typically packaged in a Linux distribution. This course will covers fundamental concept in Operating systems and others, please see the details below:"
          duration="45 hours"
          level="Basic"
        />
        <CoursesComponent
          image={`$iso`}
          title="SPRING FRAMEWORK"
          description="Spring Course will help in understanding about Spring framework and how to build web applications, RESTful APIs using Spring, Spring MVC, Spring Boot, Thymeleaf, Spring JDBC etc. By the end of this course, students will understand all the below topics."
          duration="80 hours"
          level="Medium"
        />
        <CoursesComponent
          image={`$iso`}
          title="BLOCKCHAIN DEVELOPMENT"
          description="The Blockchain is a technology based on a decentralized network with “blocks” of information. Blockchain, sometimes referred to as Distributed Ledger Technology (DLT), makes the history of any digital asset unalterable and transparent through the use of decentralization and cryptographic hashing."
          duration="100 hourss"
          level="Advanced"
        />
      </div>
    </main>
  );
}
