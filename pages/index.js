/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import sanityClient, { urlFor } from '../sanity';
import exp from './Exp.module.css';
import BonusBall from '../components/BonusBall';

export default function Home() {
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [numProjects, setNumProjects] = useState();
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const experiencesData = await sanityClient.fetch(
          `*[_type == "experiences"] {...} | order(year desc)`
        );
        setExperiences(experiencesData);

        const projectsData = await sanityClient.fetch(
          `*[_type == "projects"] {...} | order(date desc)`
        );
        setProjects(projectsData);

        const certificationsData = await sanityClient.fetch(
          `*[_type == "certifications"] {...} | order(date desc)`
        );
        setCertifications(certificationsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <BonusBall />
        <>
          <div>
            <Head>
              <title>Akash Kaushik</title>
              <meta name="description" content="Akash Kaushik Profile" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
              id="home-section"
              className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
            >
              <div className="sm:text-center lg:text-center ">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    HEY, I&apos;M AKASH KAUSHIK
                  </span>{' '}
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:text-lg md:mt-5">
                  I&apos;m a Software Engineer with expertise in
                  JavaScript, TypeScript, Node.js, NestJS, ReactJS, PHP, Codeigniter, HTML/CSS,
                  SCSS, JQuery, MySQL, and Firestore. I have experience in building
                  scalable mobile and web applications, optimizing performance,
                  and ensuring scalability. My communication and collaboration
                  skills enable me to work effectively in cross-functional
                  teams. I have received awards for my commitment,
                  determination, and innovative projects. I hold a Master&apos;s
                  degree in Computer Application from Dr. A. P. J. Abdul Kalam Technological
                  University, Lucknow. I have built several projects,
                  including an educational chatbot assistant.
                </p>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center pb-40">
                <div className="rounded-md shadow">
                  <a
                    href="https://www.linkedin.com/in/akash-kaushik-5292351a9/"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 md:py-4 md:text-lg md:px-10"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Connect with me!
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://docs.google.com/document/d/1pCFrJtiyvSa6BO57j7Nd4OaW7CTUfuAO/edit?sharingaction=ownershiptransfer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-500 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    target="_blank"
                    rel="noreferrer"
                  >
                    My Resume
                  </a>
                </div>
              </div>
            </main>
          </div>
          <div id="exp-section">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-5xl flex justify-center cursive">
                EXPERIENCE
              </h3>
              <hr className="w-10 mt-1 h-1.5 bg-red-500 rounded-full" />
            </div>
            <div className={exp.container}>
              {experiences.map((experience, index) => (
                <div
                  className={[
                    exp.timelineblock,
                    index % 2 === 0
                      ? exp.timelineblockleft
                      : exp.timelineblockright,
                  ].join(' ')}
                  key={experience._id}
                >
                  <div className={exp.marker}></div>
                  <div className={exp.timelinecontent}>
                    <h3>{experience.title}</h3>
                    <span>{experience.company}</span>
                    <p></p>
                    <span className="text-sm">{experience.date}</span>
                    <hr className="w-10 mt-1 h-0.5 bg-red-500 rounded-full" />

                    <p>{experience.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-5xl flex justify-center cursive">PROJECTS</h3>
            <hr className="w-10 mt-1 h-1.5 bg-red-500 rounded-full" />
          </div>
          <div
            id="projects-section"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.slice(0, numProjects).map((project) => (
              <div className="flex-1 p-4 flex justify-center" key={project._id}>
                <article className="relative rounded-lg shadow-xl bg-white p-10">
                  <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="text-gray-500 text-xs space-x-4 space-y-2">
                    <img
                      src={urlFor(project.image).url()}
                      alt={project.title}
                      className="w-full h-64 rounded-t object-cover"
                    />
                    <p className="text-justify text-clip h-20 my-6 text-sm text-gray-700 leading-relaxed !ml-0 !mb-3">
                      {project.description}
                    </p>
                    Technologies Used:
                    <div className="flex justify-left text-sm ">
                      <div className="flex items-center space-x-2">
                        <span>
                          {project.technologies.map((technology) => (
                            <button
                              key={technology}
                              type="button"
                              className="mr-6 -ml-4 bg-gray-300 bg-opacity-50 text-gray-700 p-2 rounded uppercase  leading-none mb-2 "
                            >
                              {technology}
                            </button>
                          ))}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      {project.link ? (
                        <div className="rounded-md   w-1/2">
                          <a
                            href={project.link}
                            className="w-full flex items-center justify-center px-2 py-2 border border-transparent text-base  rounded-md text-white bg-red-500 hover:bg-red-400  md:text-sm md:-ml-4"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Demo{' '}
                          </a>
                        </div>
                      ) : (
                        ''
                      )}
                      {project.github ? (
                        <div className="rounded-md shadow w-1/2 ">
                          <a
                            href={project.github}
                            className=" w-full flex items-center justify-center px-2 py-2 border border-transparent text-base  rounded-md text-white bg-gray-500 hover:bg-gray-400  md:text-sm "
                            target="_blank"
                            rel="noreferrer"
                          >
                            Source Code{' '}
                          </a>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
          {/* {numProjects < projects.length && (
            <div className="flex justify-center">
              <button
                className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
                onClick={() => setNumProjects(numProjects + 3)}
              >
                Load More Projects {'>>>'}
              </button>
            </div>
          )} */}
          <div className="flex flex-col items-center justify-center bg-gray-100">
            <h3 className="text-5xl flex justify-center cursive">
              CERTIFICATIONS
            </h3>
            <hr className="w-10 mt-1 h-1.5 bg-red-500 rounded-full" />
          </div>
          <div
            id="certifications-section"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-100"
          >
            {certifications.map((certification) => (
              
              <div
                className="flex justify-center"
                key={certification._id}
              >
                <div class="bg-white rounded-lg shadow-lg p-4 m-4">
                  <div class="flex">
                    <div class="w-1/3">
                      <img
                      src={urlFor(certification.image).url()}
                      alt={certification.title}
                      className="h-full w-full object-cover rounded"
                    />
                    </div>
                    <div class="w-2/3 pl-4">
                      <h2 class="text-xl font-bold mb-2">
                        <a
                        href={certification.link}
                        alt={certification.title}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {certification.title}
                      </a>
                      </h2>
                      <p>
                        <span className="text-right">
                        {new Date(certification.date).toLocaleString('en-US', {
                          month: 'long',
                        })}{' '}
                        {new Date(certification.date).getFullYear()}
                      </span>
                      </p>
                      <p>
                      <span>
                        {certification.technologies.map((technology) => (
                          <button
                            key={technology}
                            type="button"
                            className="mr-6 text-xs bg-gray-300 bg-opacity-50 text-gray-700 p-2 rounded uppercase  leading-none mb-2 "
                          >
                            {technology}
                          </button>
                        ))}
                      </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <article className="relative rounded-lg shadow-xl bg-white p-10">
                  <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                    <a
                      href={certification.link}
                      alt={certification.title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {certification.title}
                    </a>
                  </h3>
                  <div className="text-gray-500 text-xs space-x-4 space-y-2">
                    <img
                      src={urlFor(certification.image).url()}
                      alt={certification.title}
                      className="w-full h-64 rounded-t object-cover"
                    />
                    <p className="text-justify text-clip h-20 my-6 text-sm text-gray-700 leading-relaxed !ml-0 !mb-3">
                      {certification.description}
                    </p>
                    Technologies Used:{' '}
                    <span className="text-right">
                      {new Date(certification.date).toLocaleString('en-US', {
                        month: 'long',
                      })}{' '}
                      {new Date(certification.date).getFullYear()}
                    </span>
                    <div className="flex justify-left text-sm ">
                      <div className="flex items-center space-x-2">
                        <span>
                          {certification.technologies.map((technology) => (
                            <button
                              key={technology}
                              type="button"
                              className="mr-6 -ml-4 bg-gray-300 bg-opacity-50 text-gray-700 p-2 rounded uppercase  leading-none mb-2 "
                            >
                              {technology}
                            </button>
                          ))}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      {certification.link ? (
                        <div className="rounded-md   w-1/2">
                          <a
                            href={certification.link}
                            className="w-full flex items-center justify-center px-2 py-2 border border-transparent text-base  rounded-md text-white bg-red-500 hover:bg-red-400  md:text-sm md:-ml-4"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Certificate{' '}
                          </a>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </article> */}
              </div>
            ))}
          </div>
          <div
            id="about-section"
            className="min-h-screen p-10 text-gray-900 flex justify-center"
          >
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-5xl flex justify-center cursive">ABOUT ME</h1>
              <hr className="w-10 mt-1 h-1.5 bg-red-500 rounded-full" />
              <p className="text-lg text-gray-600  text-center mb-12 space-x-4 w-4/6 ">
                Here you will find more information about me, what I do, and my
                current skills mostly in terms of programming and technology.
                I&apos;m a <b>Web & Mobile Developer</b>
                building the Front-end of Websites and Mobile Applications that
                leads to the success of the overall product. Check out some of
                my work in the Projects section. I also like sharing content
                related to the stuff that I have learned over the years in Web
                Development so it can help other people of the Dev Community.
                Feel free to Connect or Follow me on my
                <a href="https://www.linkedin.com/in/akash-kaushik-5292351a9/">
                  <b>Linkedin</b>
                </a>
                where I post useful content related to
                <strong>Mobile Development</strong> and Programming I&apos;m
                open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don&apos;t hesitate to contact me.
              </p>
            </div>
          </div>

          {/* <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl text-gray-900 flex justify-left mb-12">
              My Skills
            </h2>
            <div>
              React.js | React Native | Angular
              <div className="w-full bg-gray-200 h-1 mb-6">
                <div className="w-4/6 h-full bg-green-500"></div>
              </div>
            </div>
            <div>
              JavaScript
              <div className="w-full bg-gray-200 h-1 mb-6">
                <div className="w-3/4 h-full bg-blue-500"></div>
              </div>
            </div>
            <div>
              Tailwind CSS | Bootstrap | Material UI | SCSS
              <div className="w-full bg-gray-200 h-1 mb-6">
                <div className="w-3/4 h-full bg-yellow-500"></div>
              </div>
            </div>
            <div>
              NodeJS | PHP
              <div className="w-full bg-gray-200 h-1 mb-6">
                <div className="w-3/5 h-full bg-green-500"></div>
              </div>
            </div>
            <div>
              MongoDB | MySQL | Firebase | Sanity(Basic)
              <div className="w-full bg-gray-200 h-1 mb-6">
                <div className="w-3/4 h-full bg-red-500"></div>
              </div>
            </div>
          </div> */}
          {/* <div className="flex flex-col items-center justify-center">
            <h3 className="text-5xl flex justify-center cursive">EDUCATION</h3>
            <hr className="w-10 mt-1 h-1.5 bg-red-500 rounded-full" />
          </div> */}

          {/* <div className="flex flex-col items-center justify-center">
            <h3 className="text-5xl flex justify-center cursive">CONTACT ME</h3>
            <hr className="w-10 mt-1 h-1.5 bg-red-500 rounded-full" />
          </div> */}
        </>
      </div>
    </>
  );
}
