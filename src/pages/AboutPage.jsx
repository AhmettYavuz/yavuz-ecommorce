import image1 from "../assets/TeamCard.jpg";

import { AboutClients } from "../components/about/AboutClients";
import { AboutContent } from "../components/about/AboutContent";
import { AboutHeader } from "../components/about/AboutHeader";
import { AboutTestimonials } from "../components/about/AboutTestimonials";
import { AboutVideo } from "../components/about/AboutVideo";
import { TeamCard } from "../components/team/TeamCard";

const AboutPage = () => {
  const data = [image1, image1, image1];

  return (
    <>
      <AboutHeader />
      <AboutContent />
      <AboutVideo />
      <TeamCard data={data} />
      <AboutClients />
      <AboutTestimonials />
    </>
  );
};

export default AboutPage;
