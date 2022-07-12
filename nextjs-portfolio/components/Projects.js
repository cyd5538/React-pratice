import React from "react";
import ProjectsItem from "./ProjectsItem";
import propertyImg from '../public/assets/projects/property.jpg'
import CryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widset uppercase text-[#5641e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectsItem
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
          <ProjectsItem
            title="Crypto App"
            backgroundImg={CryptoImg}
            projectUrl="/Crypto"
          />
          <ProjectsItem
            title="Property Finder"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
          />
          <ProjectsItem
            title="Property Finder"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
