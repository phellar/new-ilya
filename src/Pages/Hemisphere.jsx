import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import './Hemisphere.css';
import Header from '../Component/Header';

const Hemisphere = () => {
  // Step 1: Accordion data
  const accordionData = [
    {
      title: "EKO",
      items: [
        "ILYA du TECCO ( Yaba school of Technology)",
        "ILYA du LAGOON (University of Lagos, Akoka.)",
        "ILYA du AKETE (Lagos State University, Ojoo.)",
        "ILYA du LACOED (Lagos State University of Education, Ijanikin.)",
        "ILYA du SHARK (Institute of Oceanography and Marine, VI Lagos.)",
        "ILYA du LASCOHET (Lagos State College of Health)",
        "Ilya Du PEN (Nigeria Institute of Journalism, Ogba)"
      ]
    },
    {
      title: "OGUN",
      items: [
        "ILYA du Olumo (Moshood Abiola Polytechnic, Abeokuta.)",
        "Ilya du Oronna (Federal Polytechnic, Ilaro.)",
        "Ilya du Fatika (Federal College of Education, Abeokuta, Osiele.)",
        "Ilya du Meleki (Onabanjo Olabisi University, Ago Iwoye.)",
        "Ilya du Lisabi (Federal University of Agriculture, Abeokuta.)",
        "Ilya du Moromoji (Tai Solarin University of Education, Ijagun)",
        "Ilya Molusi (Abraham Adesanya Polytechnic, Ijebu Igbo.)",
        "Ilya Ogun (Tai Solarin College of Education, Ijebu Ode.)",
        "Ilya Du Sapade (Gateway Polytechnic, Sapade)",
        "Ilya Du Awori (Gateway Polytechnic, Igbesa)",
      ]
    },
    {
      title: "OSUN",
      items: [
            "Ilya Du Mountain (Osun State College of Technology, Esa-Oke.)", 
            "Ilya Du Ula (College of Education, Ila-Orangun)",
            "Ilya Du Onion (Osun State Polytechnic, Iree)",
            "Ilya Du Chalk (University of Education, Ilesa)",
            "Ilya Du Agbale (Federal Polytechnic, Ede)",
            "Ilya Du Healtheco (School of Health Tech, Ilesa)",
            "World Headquarters (Obafemi Awolowo University, Ile-Ife)"     
      ]
    },
    {
      title: "OYO",
      items: [
            "National Headquarters (University of Ibadan)",
            "Ilya Du Poly Mother Shrine (The Polytechnic, Ibadan)",
            "Ilya Du Sped (Federal College of Education ‘SPECIAL’)",
            "Ilya Du Survey (Federal School of Surveying, Oyo)",
            "Ilya Du Moor (Federal College of Agriculture Moor Plantation, Ibadan)",
            "Ilya Du Atiba (Emmanuel Alayande University of Education)",
            "Ilya Du Akolu (Adeseun Ogundoyin Polytechnic, Eruwa)",
            "Ilya Du Asabari (The Oke Ogun Polytechnic, Saki)",
            "Ilya Du Kakanfo (Ladoke Akintola University of Technology, Ogbomoso)",
            "Ilya Du Timber (Federal School of Forestry, Ibadan)",
            "Ilya Du Coop (Federal Cooperative College, Ibadan)",
            "Ilya Du Twins (Oyo State College of Agriculture, Igbo Ora)"
      ]
    },
    {
      title: "ONDO - EKITI",
      items: [
            "Ilya Odua (Ekiti State University, Ado-Ekiti)",
            "Ilya Olosunta (Bamidele Olumilua University of Science and Technology, Ikere-Ekiti)    ",
             " IIlya Fedeco 2/3 (Federal Poly, Ado-Ekiti)      ",
             " Ilya Du Hill (Adekunle Ajasin University, Akungba)",
            "Ilya Imade (Rufus Giwa Polytechnic, Owo)   ",
            "Ilya Ondo (Adeyemi University of Education, Ondo)",
            "Ilya Oyemekun (Federal University of Technology, Akure)   ",
            "Ilya Du Tractor (Federal College of Agriculture, Akure)   ",
            "Ilya Harmattan (Federal University, Oye Ekiti)   ",
      ]
    },
    {
      title: "KWARA",
      items: [
            "Ilya Du Potato (Federal Poly, Offa)",
            "Ilya Kwateco (Kwara State Polytechnic, Ilorin)",
            "Ilya Afonja (Kwara State College of Education, Ilorin)",
            "Ilya Du UNILORIN (University of Ilorin)"
      ]
    },
    {
      title: "EDO",
      items: [
            "Ilya Du VHF (College of Education, Ekiadolor)",
            "Ilya Du BENSU (Ambrose Alli University, Ekpoma)",
            "Ilya Ovia (University of Benin)",
            "Ilya Awure (Edo State Polytechnic, Usen)",
            "Ilya Du Poly (The Polytechnic, Auchi)"
      ]
    },
    {
      title: "DELTA",
      items: [
            "Ilya Du Mickey Ocean (Delta State Polytechnic, Otefe)",
            "Ilya Du Terra (Delta State Polytechnic, Ogwashi-Uku)",
            "Ilya Du DESPO (Delta State Polytechnic, Ozoro)",
            "Ilya Du Bishop (Delta State University, Abraka)",
            "Ilya Du Excess (Petroleum Training Institute, Warri)",
            "Ilya DU CEDAG (College of Education, Agbor)",
            "Ilya Du Asanwai (Delta State University, AIWAN CAMPUS)",
            "Ilya Du EDUKEGGERS (College of Education, Warri)"
      ]
    },
    {
      title: "RIVERS",
      items: [
            
      ]
    },
    {
      title: "IMO",
      items: [
        "Ilya Ekiti (Benjamin Uwajumogu State College of Education, Ihitte Uboma)",
        "Ilya Umuagwo (University of Agriculture, Imo State)",
        "Ilya Lake (Imo state University, Owerri)",
        "Ilya du Ice (Alvan Ikoku Federal University of Education, Owerri)",
        "Ilya Omuma (Imo State Polytechnic, Omuma)",
        "Ilya Du Poly Nekede (Federal Polytechnic Nekede)",
        "Ilya Du Ehime (Imo state polytechnic, Ehime Mbano",
        "Ilya Du Futo (Federal University of Technology, Owerri)",
        "Ilya Du Soil (Federal College of Land Resources Technology)",
      ]
    },
    {
      title: "ABIA",
      items: [
            
      ]
    },
    {
      title: "ANAMAUABO",
      items: [
            
      ]
    },
    {
      title: "AKWACROSS",
      items: [
            
      ]
    },
    
    {
      title: "NORTHERN",
      items: [
            "Ilya Du Solar (Federal Polytechnic, Bida)",
            "Ilya Du Komputa (Federal University of Technology, Minna)",
            "Ilya Du Rock (University of Jos, Jos)",
            "Ilya Du Kotang (Federal College of Education, Kotangora)",
            "Ilya Du Arewa (Kaduna Polytechnic, Kaduna)",
            "Ilya Du Desert (Federal Polytechnic, Birnin-Kebbi)",
            "Ilya Du Turban (Ahmadu Bello University, Zaria)",
            "Ilya Du ZauZau (College of Education, Zaria)",
            "Ilya Du Rima (Usman Dan Fodio University, Sokoto)"
      ]
    },
    {
      title: "UNITED KINGDOM",
      items: [
            "Ilya Du Queen (University of East London)   "
      ]
    },
    {
      title: "INDIA",
      items: [
            "Ilya Du Punjab (Punjab University, Chandigrah Punjab)"
      ]
    },

  ];


  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Header />
      <section className="hem">
        <div className="container">
          <div className="hem-box">
            <h1>
              The <span className="highlight">Kegites Club</span> Hemisphere
            </h1>
            <p>Here are list of The Kegites Club and their location</p>
          </div>
          {accordionData.map((accordion, index) => (
            <div className="question" key={index}>
              <div className="fa">
                <h1>THE KEGITES CLUB <span className='highlight'>{accordion.title}</span> HEMISPHERE</h1>
                {activeIndex === index ? (
                  <ul>
                    {accordion.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <p onClick={() => handleToggle(index)}>
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hemisphere;
