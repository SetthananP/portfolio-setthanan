import React from 'react';
import ProjectCard from './ProjectCard';


import BokbokImg from '../../assets/bokbokImg.png';
import NonghidroImg from '../../assets/nonghidroLogo.png';
import EbookImg from '../../assets/e-book.png';
import BtsImg from '../../assets/bts.png';
import SudokuImg from '../../assets/sudoku.png';
import RabbitImg from '../../assets/rabbit.png';


const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
            <ProjectCard 
                title="BOKBOK Website" 
                main="Developed a website using HTML/CSS/JS to assist in finding homes for stray dogs." 
                img={BokbokImg}
                showDemoButton={true}
                demoLink= 'https://bokbok-official.onrender.com/'
                sourceLink='https://github.com/SetthananP/BOKBOK'
            />

            <ProjectCard 
                title="Nong Hidro" 
                main="Developed the Nong Hidro app using Dart/Flutter and Firebase to display real-time data from an Arduino, showing temperature, humidity, and nutrient levels for hydroponic vegetables." 
                img={NonghidroImg} 
                sourceLink='https://github.com/SetthananP/Nong-Hidro'
            />
            <ProjectCard 
                title="E-book" 
                main="Developed an e-book reader app using Dart/Flutter, allowing users to read and listen to audio explanations anywhere, with secure storage for their collection." 
                img={EbookImg}
                sourceLink='https://github.com/SetthananP/E-Book'
            />
            <ProjectCard 
                title="MRT_Node_Finding" 
                main="Developed a website using HTML/CSS/JS to find the fastest metro routes and calculate travel times." 
                img={BtsImg}
                showDemoButton={true}
                demoLink='https://mrt-bts-node-finding.onrender.com/'
                sourceLink='https://github.com/SetthananP/MRT-BTS_Node_Finding'
            />
            <ProjectCard 
                title="Sudoku Game" 
                main="Developed a Sudoku game using C, incorporating a server-client model and threaded programming to enable real-time interactions." 
                img={SudokuImg}
                sourceLink='https://github.com/SetthananP/Sudoku-Game'
            />
            <ProjectCard 
                title="Rabbit Bill Payment Gateway Tester Flutter." 
                main="In this project, I fetched data from backend APIs and displayed it on both Android and iOS applications. Additionally, I converted JavaScript code to Dart." 
                img={RabbitImg}
                sourceLink='https://github.com/SetthananP/Rabbit-Bill-Payment-Gateway'
            />

        </div>
    </div>
  );
}

export default Projects;
