import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Vimeo from "@u-wave/react-vimeo";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

function InterviewSwiper() {
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1} // Show only one slide at a time
        navigation // Enable navigation
        modules={[Navigation]} // Add Navigation module
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src="media/interviews-imgs/1.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="media/interviews-imgs/2.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="media/interviews-imgs/3.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="media/interviews-imgs/4.jpeg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="media/interviews-imgs/5.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="media/interviews-imgs/6.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="media/interviews-imgs/7.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="media/interviews-imgs/8.jpg" alt="Slide 1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default function Interviews() {
  return (
    <main className="interview pt-5">
      <div className="container">
        <h2>Interviews</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Radio interview by Mariana Salgado for Diseño y Diáspora
            </Accordion.Header>
            <Accordion.Body>
              <div className="row">
                <div className="col-12 col-md-6">
                  <InterviewSwiper />
                </div>
                <div className="col-12 col-xl-6 mt-4">
                  <a
                    className="btn btn-lg btn-interviews"
                    target="_blank"
                    rel="noreferrer"
                    alt="Radio interview by Mariana Salgado for Diseño y Diáspora"
                    href="https://disenoydiaspora.org/417-experimentos-etnograficos-espana-estonia-una-entrevista-con-francisco-martinez/"
                  >
                    Click Here For A Radio interview by Mariana Salgado for
                    Diseño y Diáspora &#8594;
                  </a>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Francisco Martinez: Decline, Endurance and Anti-Arrogance
            </Accordion.Header>
            <Accordion.Body>
              <div className="">
                <div className="row ">
                  <div className="col-12 col-xl-6 interview-img-container">
                    <img
                      className="interview-img"
                      alt="Francisco Martinez: Decline, Endurance and Anti-Arrogance"
                      src="media/interviews-imgs/9.jpeg"
                    ></img>
                  </div>
                  <div className="col-12 col-xl-6">
                    <a
                      className="btn btn-lg btn-interviews"
                      target="_blank"
                      rel="noreferrer"
                      alt="Not-Growing: Decline, Endurance, Anti-Arrogance"
                      href="https://www.academia.edu/97099561/Not_Growing_Decline_Endurance_Anti_Arrogance"
                    >
                      Click Here To See Full PDF &#8594;
                    </a>
                    <h3>
                      Francisco Martinez: Decline, Endurance and Anti-Arrogance
                    </h3>
                    <p className="fst-italic">
                      Interview by Eik Hermann in Ehituskunst, 2021
                    </p>
                    <h5 className="mt-4">Things in Time</h5>
                    <p>
                      My recent work, as an anthropologist, deals with the
                      concepts of endurance and decline, especially in relation
                      to the county of Ida-Virumaa. Both concepts contest the
                      modern arrogance of always wanting to create new things.
                      Indeed, too little attention has been paid to the kind of
                      interventions and care that are required to make things
                      last in time. I truly believe that things are beautiful
                      not because they were made, but because they endure and
                      pass through different generations and political regimes.
                      I also think that past things deserve a second chance.
                      Relationships, furniture, cars, umbrellas, lamps… you name
                      it. In some cases, they had fallen apart because of wrong
                      use, improper materials, or because of not being
                      maintained enough. While repairing things, we can learn
                      the way objects, relations and histories are made, and
                      eventually how they can be also re-made differently.
                    </p>
                  </div>
                  <div className="col-12 mt-4">
                    <h5>Resilience and Endurance</h5>
                    <p>
                      Resilience has become one of these fashionable concepts
                      used by everyone, just like “creative city”. It is an
                      empty signifier that can be applied to anything and used
                      in politics in suspicious ways: when the state says about
                      some community that it is resilient, it is in fact
                      avoiding the responsibility to intervene.
                    </p>
                    <p>
                      Endurance, on the other hand, refers to an organic
                      intervention in the realm of ordinary life: how someone
                      engages with a concrete matter of concern and a specific
                      socio-material configuration. It is manifested differently
                      in, for example, Narva and Kohtla-Järve. In Narva, it has
                      been more bottom up in the sense that local neighbors, for
                      instance, around the datcha area, try to maintain the life
                      and socio-material stability of their cottages by doing
                      things themselves, engaging with the surroundings through
                      ordinary interventions. In Kohtla-Järve, the ongoing
                      projects of endurance are top down and paradoxically done
                      through demolishing buildings. The idea is that if we
                      demolish some of the many empty apartment buildings in the
                      town, the price of those left will increase and people
                      will be more motivated to take care of them. The
                      infrastructure is scaled down to preserve the urbanity.
                      The problem is that municipality itself denies the
                      political charge of that intervention: they say that there
                      is no shrinkage, only a one-off liquidation of a couple of
                      apartment buildings. It is a rejection of the idea of
                      de-growing as if it were per se negative, while it could
                      be a way of making things last in time, from the
                      infrastructure to the urbanity of the town.
                    </p>
                    <h5>Shrinkage and Decline</h5>
                    <p>
                      A lot has been written about shrinkage and not so much
                      about decline. The difference between the two is that
                      shrinkage as a concept is mostly focused on economic and
                      demographic issues. It is more calculative and
                      programmatic, leaving aside the affective, cognitive and
                      anthropological aspects of that process, which are
                      included in decline. In this sense, decline is better able
                      to show how deterioration influences the way people
                      project themselves towards the future. Shrinkage is more
                      useful to planners, but not for giving a holistic picture
                      of what is going on.
                    </p>
                    <p>
                      Decline is a condition of discontinuity or rupture, as if
                      it were a crisis. Yet, unlike crisis, which entails a
                      return to normality at some point, in decline the rupture
                      lasts in time. Crisis impels one to look into the past and
                      critically assess how it was brought about. Decline, on
                      the other hand, is more future-oriented: because of its
                      enduring nature and the general devaluation of everything
                      from apartments to the skills of people to the technology
                      used. So, dealing with decline means revaluing the things
                      around you and re-organize what you have.
                    </p>
                    <p>
                      Decline is always site-specific. In Ida-Virumaa, it is
                      related to the mining industry and the biochemical
                      processing, but also to how the region was populated after
                      the Second World War, with many of the inhabitants coming
                      in from all corners of Soviet Union and the local
                      residents not allowed to come back to their home towns. It
                      is also related to what happened in the 1990s – the
                      restitution policies and the disinvestment. Last but not
                      least, it is based on how the region is integrated to the
                      rest of the country and to the global economy.
                    </p>
                    <h5>Over-Emphasized Detachment </h5>
                    <p>
                      It is not a secret that Ida-Virumaa has been stigmatized
                      in the media for many years. It has been presented as the
                      other, the polluted corner, with the local inhabitants
                      being too emotional and with obsolete skills. Likewise,
                      the Estonian state has used a passive-aggressive approach
                      towards Ida-Virumaa, blaming it for its problems and at
                      the same time not investing into the area.
                    </p>
                    <p>
                      The media often presents Ida-Virumaa as disconnected from
                      the global economy. That’s certainly not precise. It’s
                      still connected to market and finances through the natural
                      resources that are extracted here, or these days also
                      brought here, to be further processed by chemical plants,
                      and later exported to other places where the big profit
                      stays. For example, recently I’ve been reading about the
                      new crypto-mining happening in Ida-Virumaa: the
                      infrastructure of the energy plants in the area is not
                      always in use, so both Estonian and international
                      companies have installed energy-intensive crypto-mining
                      facilities there. A new form of mining – and a new form of
                      pollution and of colonialism – is replacing the old one.
                      None of the money stays in Ida-Virumaa.
                    </p>
                    <p>
                      Usually, the pollution of the mining activities is
                      associated with the Soviet era, but in reality it started
                      during the first period of independence and is continuing
                      in the second period. Indeed, we can question if the
                      Soviet modernity was more polluting than the capitalist
                      one, for example, in United States. In my view, pollution
                      has less to do with communism and more with the modernist
                      arrogance of treating the planet as a resource that could
                      be infinitely used without any side effects.
                    </p>
                    <h5>Urban Obesity and Peripheralization </h5>
                    <p>
                      Tallinn is becoming too obese. It’s becoming a boring
                      European capital in the bad sense – taking its political
                      and economic models of urbanity from Copenhagen and such
                      places, while erasing many previous layers and elements
                      that were part of the identity of the town. There is a
                      certain arrogance in this, but also a lack of imagination
                      and, most importantly, a lack of valuing of what is
                      already there. In terms of the complexity of the
                      morphology and of the social practices, this makes for a
                      poorer city.
                    </p>
                    <p>
                      At the same time, the rest of the country is
                      systematically malnourished and peripheralized. The state
                      is closing down schools and medical services in rural
                      areas, because of austerity ideology, reducing all
                      policies to number-based calculations and ignoring the
                      actual socio-cultural contribution of local schools or
                      hospitals.
                    </p>
                    <h5>New Urban Centers</h5>
                    <p>
                      I believe the interventions in the town squares by
                      bringing beautiful designs – the Great Public Space
                      program – are positive, but not enough. They are simply
                      mitigating a bigger socio-material problem. The
                      intellectual and financial investment to these towns is so
                      limited that we might consider these interventions a lost
                      opportunity. Also, instead of local residents, the program
                      seems to be arranged to help the politicians who
                      commission the designs and to the architects who design
                      them.
                    </p>
                    <p>
                      What people often miss when working with decline is that
                      such a phenomenon entails a general devaluation of
                      everything. So, a more successful intervention into a
                      declining context has three requirements: firstly, to
                      really know the existing local resources; secondly, the
                      appreciation of local knowledge, skills and habits; and
                      thirdly, mobilizing resources to revalue and re-organize
                      what is already there.
                    </p>
                    <p>
                      This is a complete opposite to an intervention from
                      outside by an expert who comes in, says how things should
                      be and then disappears. That is why the policies and
                      models sent in from Tallinn or Brussels are hardly
                      working. It is a common pattern of modernity, also
                      characterizing architects and planners, which is to aim at
                      heroic human interventions that “solve” a problem and
                      “reactivate” a place magically. For me, this mindset is
                      obsolete.
                    </p>
                    <h5>Anthropology, Architecture and Design</h5>
                    <p>
                      All over the world, more and more anthropologists take
                      part in design and urban planning. An Estonian example is
                      RAK (Centre of Applied Anthropology) who have been
                      included in an increasing number of projects. However,
                      anthropologists are often hired to talk to locals in order
                      to legitimize the designs that have already been done. The
                      real difference would come if we would also be included in
                      the first phases, so that the designers would become aware
                      of the locality in a more grounded way; likewise,
                      anthropologists could also be implicated in monitoring,
                      application and communication phases – not just gathering
                      data to be used later on. The problem is that it requires
                      time and resources. Another problem is that
                      anthropologists hardly produce final knowledge or models
                      that could be uniformly applied in all places and times.
                      We are at our best in problematizing things and studying
                      knowledge-in-the-making. We are professional strangers.
                    </p>
                    <p>
                      At the same time, the gap between designers and
                      anthropologists is narrowing. Classical anthropology was
                      based on the method of participant observation: one should
                      be observing, but in a detached way, being part of the
                      locality of the community, but not intervening into it. It
                      made sense as a way of legitimizing anthropology as an
                      academic discipline, combining the scientific approach of
                      the detachment with the humanistic one of participating.
                      However, even if you are detached, you are already
                      influencing, making use of concepts and tools that you
                      brought in from your home university. At the same time,
                      the detachment is preventing us from engaging with many
                      contemporary conditions, which are complex and changing in
                      a very fast speed. Most importantly, it is preventing us
                      from taking part in important public discussions about,
                      for example, about the green transition and the
                      rural-urban relations. So, nowadays, I think, intervening
                      is something that has to be welcomed. From this
                      perspective, we anthropologists have, in turn, a lot to
                      learn from designers who are masters of intervening, of
                      bringing the future to the present, always thinking of
                      scenarios and projections.
                    </p>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Francisco Martínez and Corina Apostol converse about their current
              curatorial projects, Life in Decline
            </Accordion.Header>
            <Accordion.Body>
              <div className="">
                <div className="row ">
                  <div className="col-12 col-xl-6 interview-img-container">
                    <img
                      className="interview-img"
                      src="media/interviews-imgs/10.jpeg"
                      alt="Interview"
                    ></img>
                  </div>
                  <div className="col-12 col-xl-6">
                    <a
                      className="btn btn-lg btn-interviews"
                      target="_blank"
                      rel="noreferrer"
                      alt="We live in a time of historical amnesia"
                      href="https://arterritory.com/en/visual_arts/topical_qa/25822-we_live_in_a_time_of_historical_amnesia/"
                    >
                      Click Here To Read On Arterritory &#8594;
                    </a>
                    <h3>
                      Francisco Martínez and Corina Apostol converse about their
                      current curatorial projects, Life in Decline (Estonian
                      Mining Museum) and What Makes Another World Possible?
                      (Tallinn Art Hall).
                    </h3>
                    <p className=" fw-bold fst-italic">Arterritory, 2021.</p>

                    <p>
                      <span className="fst-italic">Francisco:</span>
                      <br />
                      “The main revolution to be done is to raise awareness of
                      the value of things around us”. “It is not fair to put the
                      responsibility of resolving collective problems on the
                      shoulders of artists”
                    </p>
                    <p className="p-interviewer">
                      <span className="">Corina:</span>
                      <br />
                      “We live in a time of historical amnesia”
                      <br />
                      “Can we imagine an alternative system of values based on a
                      different meaning of progress?”
                    </p>
                  </div>
                  <div className="col-12 mt-4">
                    <p>
                      Francisco Martínez is an anthropologist dealing with
                      contemporary issues of material culture through
                      ethnographic experiments. In his work, he explores how the
                      materiality around us frames the way we know the world,
                      making use of exhibitions as a methodology for social
                      research. In 2018, he was awarded with the Early Career
                      Prize of the European Association of Social
                      Anthropologists. Francisco has published different books,
                      including: Ethnographic Experiments with Artists,
                      Designers and Boundary Objects (UCL Press, 2021) and
                      Remains of the Soviet Past in Estonia (UCL Press, 2018).
                    </p>
                    <p>
                      Art historian Corina L. Apostol is a curator at the
                      Tallinn Art Hall. She has edited with Nato Thompson the
                      book Making Another World Possible (Routledge, 2019).
                      Corina is also the curator of the Estonian pavilion of the
                      next Venice Biennale, working with artists Kristina
                      Norman, Bita Razavi and Emilie Rosalie Saal. Her work has
                      been recognized with nominations for the 2015 Fundation
                      Prince Pierre de Monaco Prize, the 2016 Kandinsky Prize,
                      and the 2020 Sergey Kuryokhin Award.
                    </p>
                    <h5>1</h5>
                    <p>
                      FM. I believe that our exhibitions have very different
                      starting points. The trigger of Life in Decline was to
                      understand how the world is put together again and again,
                      even under a condition of negative capability and a
                      context of environmental disaster, such as those present
                      in Eastern Estonia. Hence, I believe that our main task is
                      not to make another world possible, but rather to take
                      care of the one we already have.
                    </p>
                    <p>
                      Also, my exhibition is part of a wider anthropological
                      study that intends to understand the fragility of the
                      things we construct and how socio-material stability is
                      maintained, sometimes against the grain. It assumes that
                      such purpose requires experimental collaborations with
                      different stakeholders, and a creative combination of the
                      aesthetic and the analytical, thus turning the exhibition
                      into a method for research.
                    </p>
                    <p>
                      So, while your exhibition places an emphasis on artistic
                      interventions aiming to change the world, mine tries to
                      understand the ordinary actions that make the world last
                      in time. In reality, these are two different forms of
                      intervention: yours refers to heroic attempts at changing
                      things in the modern utopian sense, whereas mine instead
                      focuses on the minor key maintenance work, practicing
                      micro-utopias. Thought I do not want to reduce our
                      political horizons to questions of palliation that exclude
                      the possibility of radical transformation…
                    </p>
                    <p className="p-interviewer">
                      CA. I based the exhibition What Makes Another World
                      Possible? on the book I co-edited with Nato Thompson
                      entitled Making Another World Possible, which came out
                      right before the global pandemic in the framework of the
                      tenth anniversary of the Creative Time Summit. This
                      international convention was held to discuss the field of
                      socially engaged art and contemporary political issues.
                      Since the Summits began in 2008, I strongly believe that
                      socially engaged art has moved from the periphery of the
                      art world to occupy a central part of the discussion on
                      contemporary art and politics. Since the crisis of 2020,
                      this shift has taken place against the backdrop of a
                      dramatically changing world, one where there is a growing
                      global consciousness or awareness of shared environmental,
                      political, and economic fate; a world defined by a shared
                      perception of crisis. In my exhibition, I have sought to
                      bring these two strands together – art activism and global
                      politics – with a particular focus on the last decade in
                      the Baltics, East-Central Europe and Russia.{" "}
                    </p>
                    <p className="p-interviewer">
                      Like Francisco’s exhibition Life in Decline, each artistic
                      project is based on research undertaken over a longer
                      period of time. During this decade, right-wing governments
                      of i-liberal democracies have grown to consolidate their
                      power. However, as we have witnessed, their approach to
                      the pandemic crisis did not result in progressive
                      political change. The spread of conspiracy theories,
                      continued violence against migrants, people of color and
                      the queer community, and repressions of women’s rights,
                      among others, have only served to bolster the support of
                      nationalist and anti-democratic politics in our societies.
                      Within this context, where the local and global are
                      closely interconnected, my exhibition asks, ‘What other
                      world is possible that is built on the premise of a new,
                      emancipatory politics?’
                    </p>
                    <h5>2</h5>
                    <p>
                      FM. You argue that the key aim of socially engaged art is
                      to address and challenge power structures, yet the way of
                      doing so is not the same in the 1960s as it is nowadays.
                      In this sense, I appreciate how you trace back activist
                      ideas and collectives; however, I believe that the
                      breakdown of both things and people is our epistemic and
                      experiential reality in the present. This, and the
                      awareness of the limits of the world, are, in my view, our
                      key contemporary problems.
                    </p>
                    <p>
                      We are in a new epoch, the Anthropocene, so political
                      engagement cannot be the same as it was in terms of
                      practices and topics, as well as with whom. Nowadays, one
                      way of being political and critical starts by recognizing
                      that the world we inhabit is not just for us, reserved for
                      later use and with resources available for extraction. In
                      Estonia, we keep ignoring the fact that many of the things
                      that we discard, demolish or abandon have value. We are
                      blinded by our arrogant obsession with newness, growth and
                      innovation. In many contexts, the main revolution to be
                      done is to raise awareness of the value of things around
                      us.
                    </p>
                    <p className="p-interviewer">
                      CA. A core component of my exhibition is its attention to
                      history, tracing back connections between art, politics
                      and engagement. Timothy Snyder, the author of On Tyranny,
                      has rightly pointed out that “democracies depend on
                      history.” In his book, Snyder discusses tyranny and
                      authoritarianism, which we can think about at the macro
                      level; for example, Trumpism in the US. But what has
                      happened is that these practices also trickle down to
                      educational institutions, where some people decide that
                      alternative facts or fake news are viable and should be
                      taught to young people. Democracy is the ability to
                      recognize that you’ve made mistakes and that you can do
                      better. I strongly believe we live in a time of historical
                      amnesia, where younger generations are increasingly
                      detached from learning history. If we don’t have a
                      history, we cannot correct ourselves, and we don’t know
                      what happened in the past, which is why I invited artists
                      like Lia Perjovschi and the collective Chto Delat? to
                      intervene in the exhibition. Lia has adapted her recent
                      work, ‘Key Words 2020’, to the context of Estonia during
                      the pandemic by connecting it to other such crises in
                      human history and possible solutions, while I have worked
                      in close collaboration with Chto Delat? to create an
                      artistic timeline resource and reference archive that
                      deals with post-WW2 forms of political activism and
                      socially engaged art.
                    </p>
                    <p className="p-interviewer">
                      In relation to the concept of the Anthropocene, in my
                      book, I prefer to draw on Isabelle Stengers’ concept of
                      ‘Cosmopolitics’, where diverse stories, perspectives, and
                      practices connect to lay the foundation for new strategies
                      and radical possibilities. In my book, I presented a
                      diverse range of approaches to the ecological crisis and
                      its economic, social, and cultural affects and effects. In
                      the exhibition, I invited artist Sandra Kosorotova, who
                      works between Tallinn and Narva, to create a site-specific
                      installation revealingly titled ‘Grassroots: How to Resist
                      like a Weed?’ that deals with resilience in the face of
                      environmental degradation, as well as the hateful
                      vocabulary around these plants and the anxieties about
                      national character and purity.
                    </p>
                    <h5>3</h5>
                    <p>
                      FM. Our exhibitions produce a different aesthetic
                      experience for the visitor. The exhibition space of Life
                      in Decline was designed as a twilight zone, a sort of
                      conceptual area meant to generate a suspension of
                      knowledge and characterized by being undefined,
                      intermediate and mysterious. For that, we intensively made
                      use of the existing materiality in the former
                      administrative building of the Kohtla mine, approaching
                      these artefacts as affect triggers and mnemonic objects,
                      while also contributing to produce an atmosphere in which
                      the pre-defined cognitive tools of visitors somehow stop
                      working. Some of the comments written in the guest book
                      show that several visitors noted our exhibition design.
                      For instance, one visitor wrote: “it feels as if workers
                      had just left the building”.{" "}
                    </p>
                    <p className="p-interviewer">
                      CA. When thinking about the aesthetics and meanings of my
                      exhibition, I had several categories of audience in mind.
                      First, I wanted to create a space for knowledge and
                      inspiration for the committed – those already involved in
                      socially engaged art in the region. Then, I also wanted to
                      create an experience for those art world insiders to
                      communicate and build interest among artists, students and
                      cultural professionals in the Baltics and further afield
                      who would like to learn about, pursue or support socially
                      engaged art. Further, I have in mind those political
                      activists whom I would like to offer both a resource and a
                      source of inspiration for connecting artists with those
                      working in more traditional forms of activism. Finally, I
                      want to reach an audience of those who are directly
                      concerned, and, of course, impacted by the issues
                      highlighted in the exhibition (i.e. the militarization of
                      society, the proliferation of surveillance, entrenched
                      economic inequalities, rising social movements, the
                      displacement of peoples, cosmopolitics, anti-racism
                      struggles, creative education in crisis, queerness and
                      political expression, and new devices enabling political
                      action), including those who are curious about finding
                      ways to connect with others and possibly even get involved
                      in challenging the status quo through socially engaged art
                      and community-building projects.{" "}
                    </p>
                    <h5>4</h5>
                    <p>
                      FM. The aesthetics of our exhibitions are different
                      because the ambitions of our projects are different. While
                      yours is a genealogy of socially engaged art and makes
                      extensive use of narratives and poster-like visuals, mine
                      was based on tangible, site-specific installations that
                      were profoundly embedded in the surroundings, including
                      different found objects. Some of these installations were
                      more conceptual, and some others more multimodal, but they
                      all engaged with local material culture and had a touch of
                      contemporary archaeology.
                    </p>
                    <p>
                      Our different ambitions are also manifested in the fact
                      that the exhibitions were curated in different
                      institutions. One is an Art Hall at the center of Tallinn,
                      the other is a post-industrial museum that has never
                      hosted art shows and is located at the center of the
                      problem that I am discussing. This note does not entail
                      romanticizing the gesture of organizing an art exhibition
                      in Eastern Estonia; instead, it emphasizes the multiple
                      risks and learnings that I faced during the process. There
                      were indeed many complications and, at some point, I also
                      discovered that most of the visitors of the Mining Museum
                      are tourists, coming from elsewhere. But doing the
                      exhibition in Eastern Estonia also intensified our
                      research process and also our learning, allowing us to
                      exhibit knowledge-in-the making, while in your case, the
                      key ideas of the show, even if critical, were already
                      pre-established and indeed previously explained in your
                      book.
                    </p>
                    <p className="p-interviewer">
                      CA. It is significant that my exhibition is taking place
                      in one of the most established art institutions in
                      Estonia. Indeed, I was very aware of the challenges and
                      contradictions inherent in exhibiting multimedia,
                      interdisciplinary, community-oriented projects of socially
                      engaged artists in this center of power. The aesthetics of
                      the exhibition are driven by the approaches of the artists
                      themselves, who, because of their background and
                      experiences of coming to maturity in politicized contexts,
                      have adopted strategies of self-historicization,
                      archiving, and discursive practices, together with irony,
                      humor and the absurd. Some of the works deal with the
                      local material culture familiar in Estonia; for example,
                      Urmas Viik’s comic series Dark Planet presented as a
                      series of black and white posters and a publication
                      dealing with the virulent discourse of the far right
                      through the lens of science-fiction. Others, such as Vala
                      Foltyn’s In Roses with Trust, are based on an archive of a
                      villa in Krakow, which has housed different generations of
                      political activists, from antifascist feminist resistance
                      figures to queer cultural leaders. The archive has been
                      digitized and presented on textile materials, which give a
                      nod to the history of the villa as a tailor’s shop and the
                      materiality of Catholic rituals that Vala relates to. Dan
                      Perjovschi’s drawings, which the artist created directly
                      on the windows of the Art Hall, are a reference to the
                      tradition of journalism and newspapers from his native
                      Romania and are meant as a dialogue between the space of
                      the institution and Freedom Square, whose rich historical
                      layers pertain to Estonia’s recent history of occupation
                      and independence.{" "}
                    </p>
                    <h5>5</h5>
                    <p>
                      FM. It is a bit like comparing Bayern Munich with Narva
                      Trans, if speaking in football terms. But the inspiration
                      behind Life in Decline derived from two exhibitions I saw
                      at the Fondazione Prada in Venice: Jannis Kounellis (2019)
                      and The Boat is Leaking. The Captain Lied (2017). Both
                      exhibitions felt like having crossed a liminal threshold,
                      as if you had entered into the hole of Alice in
                      Wonderland, forcing you to reconfigure everything you knew
                      beforehand.
                    </p>
                    <p>
                      Personally, I’m not interested in pedagogical art and
                      exhibitions that establish historical canons. Indeed, I
                      find them rather boring, and instead appreciate shows that
                      create a suspension of knowledge, making you unlearn
                      things instead of solidifying what you know. These days, I
                      feel that there are too many pedagogical and historical
                      exhibitions with a normative ambition in Tallinn, aiming
                      to teach the audience about what art is and establishing
                      how things should be interpreted according to a top-down
                      canon; hence, I miss exhibitions that are explorative,
                      experimental, non-conclusive.
                    </p>
                    <p className="p-interviewer">
                      CA. First of all, I think it should be clear that every
                      artist in my show approaches the history of socially
                      engaged art and the recent past in general through their
                      own subjective lens. The past is so prevalent in my
                      exhibition so that we do not feel guilty about it, but
                      that we should feel responsible for it. It is not about
                      establishing this cannon or another, although that
                      inevitably happens when making these artistic endeavors
                      that are about self-historicization and reflection. If we
                      don’t feel responsible, there is no transformation.
                      History is about things that make us feel uncomfortable
                      and make us reflect on our present and how we see our
                      collective futures. I hope that after engaging with
                      installations such as Tanja Ostojic’s ‘Misplaced Women?’,
                      which looks at migrants, and in particular, women’s
                      rights, people feel uncomfortable about current politics
                      in Europe regarding exodus. To create her performances,
                      which are presented as photographs, videos and testimonies
                      recorded over the course of a decade, Ostojić invited
                      women to carry packed suitcases in public spaces in front
                      of train stations, airports, borders crossings, police
                      stations and refugee camps. I hope we can all feel a sense
                      of responsibility as citizens to change things as we go
                      forward and learn from history.
                    </p>
                    <h5>6</h5>
                    <p>
                      FM. Certainly, art can be a form of activism, but it is
                      not convenient nor fair to put the responsibility of
                      resolving collective social problems on the shoulders of
                      individual artists. Current art activism can also be seen
                      as part of a depoliticizing tendency, by which those who
                      actually have the means and responsibility to deal with
                      these issues transfer their tasks to common people and
                      justify the non-intervention of the state. It is a way of
                      privatizing risks, the a-b-c of neoliberalism. You also
                      are aware that activist art can be done to please
                      collectors and institutions, and some of these
                      well-intentioned works end up commodified in the art
                      market, or that some of the political messages get
                      co-opted by institutions, city-branding, creative city
                      discourse... doing the cooking of neoliberal governments
                      while foregrounding financial interests and placing an
                      emphasis on individual entrepreneurship.
                    </p>
                    <p>
                      Good intentions are not enough to produce a positive
                      outcome. Doing something that one considers noble and
                      necessary does not have to lead to a wider benefit than
                      whitening our consciousness. Likewise, our sense of
                      possessing the truth won’t automatically lead to general
                      concern or social transformation. Instead of asking
                      artists to be involved in changing the world, I would
                      suggest to critically question the structures that make
                      them suffer from precarity and mental problems, which are
                      a contemporary plague not discussed often enough.
                    </p>
                    <p className="p-interviewer">
                      CA. For me, regarding the notion of art activism, socially
                      engaged art is, at its core, something that stems from
                      non-commodifiable artistic impulses, even though the art
                      market and some institutions may package them as
                      commodities. I agree there is a distinction between art
                      and traditional activism, and art and community work. The
                      artists I have invited to participate in this exhibition
                      are more interested in creating a shift in consciousness
                      and, first and foremost, consider themselves as creators
                      and concerned citizens, not merely as community
                      organizers. It is about working with communities,
                      especially those that are vulnerable or at-risk, in a way
                      that is transformational intellectually and emotionally,
                      and then taking those experiences to the viewer in the art
                      exhibition to show how we are responsible and can
                      intervene in the socio-political make-up of our worlds.
                      Finally, I hope the exhibition serves as a welcoming space
                      for solidarity and learning in common, which will inspire
                      new artistic experiments, sensitivities, connections and
                      communications.
                    </p>
                    <h5>7</h5>
                    <p>
                      FM. Each of us, as curators and as audience, have our own
                      taste or interest. In my case, I truly enjoy art that is
                      practiced as a salvaging operation through various
                      exercises of tracing, rescue and repair, though more in
                      the sense of Kader Attia than in Forensic Architecture…
                      thus posing questions that are at once archaic and
                      current, timeless and intrinsically contemporary.{" "}
                    </p>
                    <p>
                      I believe my work is political without being activist. It
                      is political in all the phases of the production – by the
                      topics I discuss, as well as how, with whom, and to whom.
                      Like you do, I also invite people to reconsider the value
                      of things, to talk about what and how things are
                      perceived. However, it is very difficult to move beyond
                      simply raising awareness. Art activism should aim to
                      inspire alternatives, build communities, foster dialogue,
                      and eventually, have a socio-material impact, not just a
                      discursive one, limited to revealing reality; yet, my work
                      does not do that – I merely try to engage with the
                      micro-politics of contemporary life, paying attention to
                      small gestures of care and moments of cognition. In
                      literary terms, it would be a Pessoan or Camusian form of
                      curation.
                    </p>
                    <p>
                      Nevertheless, we have to be careful with over-promising,
                      because conveying a message is just that – conveying a
                      message. Information does not imply concern, and even less
                      action. And if “the whole world is watching”, if only to
                      forget about it shortly after.
                    </p>
                    <p className="p-interviewer">
                      CA. I really appreciate your observation that we are
                      inviting people to reconsider the value of things and how
                      things are perceived. In this sense, our exhibitions can
                      be seen as complementary to each other. For me, accessing
                      the past through artistic research is a way to engender a
                      civic, democratic future. The subjectivities of those
                      generations, who are now facing something as historically
                      unprecedented as our planet, have never in recorded human
                      history confronted so many absolute threats, should be
                      shaped by an understanding of exemplary mobilizations,
                      activities, assemblies, and meetings of the movements at
                      the intersection of climate justice, anti-gentrification,
                      anti-racism and so on, because all these urgencies are
                      related. There is a direct relationship between the past
                      and the future. In many ways, my exhibition is about the
                      future and what kind of futures we want, and what kind of
                      worlds we can imagine where the inspiring things we value
                      can form the basis of a more dignified life. I encourage
                      all the visitors of the exhibition to construct their own
                      proposals for a different society that corresponds to the
                      global challenges of the twenty-first century.
                    </p>
                    <h5>8</h5>
                    <p>
                      FM. You placed an emphasis on learning history; however,
                      in Estonia, the past has not been a preparation for the
                      present, precisely because of memory politics and how the
                      national canon has been established; that is, by reducing
                      anything that is Soviet or Russian to zero-value – to
                      waste. That’s why repair practices are important: making
                      complicated legacies available to new generations,
                      allowing new access to them and contributing to revaluing
                      the things that were made obsolete in the meantime, from
                      people to ideas.
                    </p>
                    <p>
                      To continue with the football metaphor, I would say that
                      Estonian contemporary art plays in the first European
                      league. We can see it, for instance, in the level of art
                      exhibitions here, in the number of artists exhibiting
                      abroad, in the quality of the Pavilions in Venice (this
                      year in the Giardini), in private galleries taking part in
                      international art fairs, and in the knowledge about the
                      field created through publications, teaching, databases,
                      etc. I do not take all this for granted. An active and
                      inspiring art field is a very fragile thing and requires
                      constant maintenance work and support. If one pays
                      attention to what the Estonian state invests in other
                      fields, from the military to language politics and sports,
                      as well as in other cultural fields, in comparison to the
                      actual support to contemporary art, the results in our
                      field are outstanding. See for example the work of EKKM
                      (Contemporary Art Museum of Estonia) or the program of
                      ‘Artists in Collections’…
                    </p>
                    <p className="p-interviewer">
                      The conflicts and struggles in the field of art and
                      education in Estonia are at the core of determining what
                      kind of subjectivities will shape the culture(s) of future
                      generations in the Baltics. It is very important to
                      carefully analyze what is currently at stake in these
                      specific fields of cultural processes and how they are
                      linked with what is happening in and around established
                      institutions, academies and centres. I believe
                      institutions such as EKKM and dwindling artist-run spaces
                      and groups the likes of Feministeerium need our full
                      support to resist pressing commercial demands for flexible
                      and “creative” subjectivities and to defend themselves
                      from neoliberal, right-wing political groups’ desires to
                      make examples of or erase them entirely. Can we imagine an
                      alternative system of values based on a different meaning
                      of progress?
                    </p>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Conversation with Francisco Martinez on his work on the afterlife
              of Soviet cultural heritage
            </Accordion.Header>
            <Accordion.Body>
              <div className="">
                <div className="row ">
                  <div className="col-12 col-xl-6 interview-img-container">
                    <img
                      className="interview-img"
                      src="media/interviews-imgs/11.jpeg"
                      alt="Interview"
                    ></img>
                  </div>
                  <div className="col-12 col-xl-6">
                    <a
                      className="btn btn-lg btn-interviews"
                      target="_blank"
                      rel="noreferrer"
                      alt="Conversation with Francisco Martinez on his work on the afterlife of Soviet cultural heritage"
                      href="https://allegralaboratory.net/conversation-with-francisco-martinez-on-his-work-on-post-socialist-ruins/"
                    >
                      Click Here To Read On Allegralab &#8594;
                    </a>
                    <h3>
                      Conversation with Francisco Martinez on his work on the
                      afterlife of Soviet cultural heritage.
                    </h3>

                    <p>
                      “In postsocialist countries, the past has not been a
                      preparation for the present
                      <br />
                      “Things are beautiful not because of being made, but
                      because they last in time”
                    </p>
                    <p className=" fw-bold fst-italic">
                      By Keiti Kljavin for Allegra.
                    </p>
                    <p className="p-interviewer">
                      - KK: Francisco, what was the original trigger of Remains
                      of the Soviet Past in Estonia? How did you become
                      interested in the concepts of waste and repair?
                    </p>
                    <p>
                      FM: I wanted to understand the afterlives that the Soviet
                      legacy was experiencing in Estonia. Then, I started to pay
                      more attention to repair as a coping mechanism, as a sort
                      of vernacular resource for adapting to radical changes.
                      The idea of repair appeared as a way of working through
                      the past, both empirically and analytically, and with
                      interesting material and generational nuances. For
                      example, while talking to repair workers whose skills had
                      been devaluated in postsocialism, I realised that
                      repairing grants a person dignity. Based on this, my book
                      proposes to extend that approach to Soviet legacies, not
                      for whitening them, but as a way of making legacies
                      available to new generations. The recuperation of wasted
                      legacies sets the bases for epistemic repair, making the
                      past available in a different way.
                    </p>
                  </div>
                  <div className="col-12 mt-4">
                    <p>
                      While studying how remains of the past are reworked in the
                      present, I also learnt that Soviet legacies were reduced
                      to waste as part of the official strategy to build up the
                      new state. Neglect had thus a practical use in building up
                      national identity and making the state legible; that’s
                      what I tried to capture with the concepts of “active
                      negligence”, “condemnation of memory” and “wasted
                      legacies”.
                    </p>
                    <p className="p-interviewer">
                      - KK: Don’t you not think that a great deal of stressing
                      of the continuities with the pre-war Estonian Republic and
                      the illegality of Soviet rule were understandable, given
                      that in 1991 the survival of the re-independent country
                      was uncertain?
                    </p>
                    <p>
                      FM. Any new political regime inevitably involves a high
                      degree of active forgetting as a consequence of a novel
                      articulation of collective memory. Memory produces neglect
                      by selecting what to care, and the new tends to make the
                      old superfluous and redundant. But the Soviet past remains
                      as a meaning-making reference. We can even say that
                      postsocialism has been a way of reconstructing the recent
                      past even more negatively than it was in order to measure
                      the new present against it.
                    </p>
                    <p>
                      Then, for a couple of decades, the European Union brought
                      normative and economic stability to Estonia; but we are
                      now learning that such form of political solidity and
                      wellbeing might end anytime, returning again to abrupt
                      changes as the condition of existence of Estonia as a
                      country. The making of Estonian citizenship and identity
                      also remains an incomplete project until the grey
                      passports problem is resolved politically, not
                      biologically. Personally, I am also surprised that Russian
                      is still not recognised as an official language in
                      Estonia, at least in Ida-Virumaa (Eastern region). In
                      2020, it is a political anomaly.{" "}
                    </p>
                    <p>
                      I’m not interested in assessing if officially arranged
                      forgetting is understandable or not, but to study the
                      side-effects of such institutional strategy and the
                      material and social disinvestments that it entails.
                      Likewise, it is not my intention to judge whether
                      forgetting is wrong or necessary, but rather to put the
                      ethnographic eye on the iterance, traces and affects that
                      forgetting generates. My way of being political is
                      different than the one of a policy-maker.
                    </p>
                    <p className="p-interviewer">- KK: How? </p>
                    <p>
                      I believe that my research is political by what makes
                      visible, not by indicating to politicians what to do. For
                      instance, my work makes visible how forgetting was a
                      desirable goal and positive process for some social
                      actors, but not necessarily for the whole society,
                      especially when a community shows a diverse ethnic
                      composition, as it is the case of the Estonian. Forgetting
                      entails a separation, relegating certain histories, people
                      and spaces to the margins of normality. Does it mean that
                      collective memory is wrong? Of course not! Rather it
                      raises the question of whether people have any past to
                      share as a plural community. And it also shows that, in
                      postsocialist countries, the past has not been a
                      preparation for the present.{" "}
                    </p>
                    <p className="p-interviewer">
                      - KK: How does the Estonian case question the analytical
                      value of postsocialism as a concept?
                    </p>
                    <p>
                      FM. When combined with other ingredients, postsocialism is
                      still a tasty concept. Try out, for instance, ‘illiberal
                      postsocialism’, ‘architectural postsocialism’,
                      ‘short-minded postsocialism’, ‘standardizing
                      postsocialism’, ‘post-post-socialism’, ‘forensic
                      postsocialism’… we could stay the whole afternoon figuring
                      out interesting combinations.
                    </p>
                    <p>
                      More seriously, I started my fieldwork relying on Caroline
                      Humphrey’s observation that generational replacement will
                      make postsocialism disappear as a category, but during the
                      research I changed my view and learnt that this concept is
                      rather mutating, acquiring new meanings and explanatory
                      potential, while leaving behind some others, and also
                      travelling to other regions. So, still postsocialism is
                      helpful for understanding contemporary experiences and for
                      engaging with wider debates around the world, but in ways
                      that might be different from those who worked with the
                      concept in the 1990s. Hence, more attention should be paid
                      to how the first post-Soviet generation makes use of
                      concepts such as postsocialism and Eastern Europe.
                    </p>
                    <p>
                      Overall, the book demonstrates that the socialist legacy
                      is still essential to an understanding of current
                      developments in Estonia. However, my intention was not
                      simply to reclaim the Soviet legacy and its value, but to
                      assess what postsocialism does and how it takes place and
                      time in a multi-scalar picture.
                    </p>
                    <p className="p-interviewer">
                      - KK: The chapter that studies the afterlife of the
                      Linnahall, the multi-purpose venue designed for the 1980
                      Moscow Olympics is one of the bests. But in this case, you
                      advocate that the building should be left as “a curated
                      ruin”.{" "}
                    </p>
                    <p>
                      FM. This could be my favourite chapter in the book too. It
                      is the first one I started writing and the last one I
                      finished, because I wanted to make the whole structure
                      more dialogical and to give more voice to the janitors,
                      for example by including a series of photos taken by
                      Peter, instead of simply including their statements as
                      informants.{" "}
                    </p>
                    <p>
                      In Linnahall, one gets an impression of how certain
                      buildings can be instrumental in reconciling the past,
                      present, and future of a city. As a premature ruin,
                      Linnahall is paradigmatic of what I mean by “wasted
                      legacies”, referring to vestiges that cannot be integrated
                      within newly created structures and orders of worth,
                      mostly because of political reasons yet also due to
                      infrastructural issues.{" "}
                    </p>
                    <p>
                      As waste, Linnahall stands in excess. My suggestion to
                      take care of the building as a curated ruin is one among
                      other different proposals for the building; it is inspired
                      by the work of Caitlin DeSilvey and Gabriel Moshenka, a
                      geographer and an archaeologist. This shows the
                      multidisciplinary character of my research, what I called
                      in the book “a fringy anthropology”.{" "}
                    </p>
                    <p className="p-interviewer">
                      - KK: Can you explain more, what’s fringy in this type of
                      doing anthropology?{" "}
                    </p>
                    <p>
                      Fringy means to decentring ourselves a bit more in the
                      field, in a horizontal, or dialogical way. It is
                      increasingly important to acknowledge the capacity to
                      analyse complex information of our informants, instead of
                      always writing vertically the knowledge of others.
                    </p>
                    <p>
                      As I see it, the main aim of anthropology is to become
                      aware of the limits and fragility of one’s own world.
                      Traditionally, we have done so by acting as professional
                      strangers, borrowing epistemic positions. But nowadays our
                      ethnographic subjects have become makers of analytical
                      knowledge, and not simply knowledge holders, as colleagues
                      like Marcus, Collier, Ferguson, Estalella and Sánchez
                      Criado have noted.{" "}
                    </p>
                    <p>
                      Indeed, the most interesting anthropological ideas are
                      nowadays appearing outside traditional disciplinary gates
                      and academia. Policing the boundaries of anthropology is,
                      therefore, counter-productive; more a sign of weakness
                      than of strength.
                    </p>
                    <p className="p-interviewer">
                      - KK: The focus on repair, and how it contests the
                      short-term thinking incentivised by neoliberal capitalism,
                      is interesting. You interview a number of people whose
                      skills depend on repairing rather than producing, which
                      have obviously become less useful in a late-modern
                      society.{" "}
                    </p>
                    <p>
                      The study of repair is important and fruitful because it
                      helps us to understand the current shifts in the relation
                      between technology and power, and also between politics
                      and bodies. It is paradoxical how discourses of ‘newness’
                      and innovation influence the public discussion of today’s
                      Estonia. While, on the other hand, there is an increasing
                      fascination with old past forms, translated into memory,
                      souvenirs, utopia, nostalgia, stranger things, and what
                      not. It is even more complex, since despite current
                      discourses of sustainability, we see a certain arrogance
                      towards the recent old. Modern ideals make us believe that
                      the urgent is to create more new things, while the
                      important is actually to make things durable. Things are
                      beautiful not because of being made, but because they last
                      in time.
                    </p>
                    <p className="p-interviewer">
                      - KK. This tension generated by how the vanquishing of old
                      traces follows a different time than the political is also
                      reflected in two other concepts of your book “aesthetics
                      of amalgamation” and “architectural taxidermy”. Could you
                      expand on this?
                    </p>
                    <p>
                      In my research, I am interested in overcoming the
                      preservation / demolition dichotomy, and explored the
                      possibility of having a category in-between, such as
                      “architectural taxidermy”, which is a form of chimaera, a
                      hybrid thing composed of parts from different
                      architectural bodies. In the book, this concept applies to
                      the way buildings come to terms with the new values,
                      technology and social organisation. However, this notion
                      of “coming to term” would be too rational, since it is a
                      rather sinister form of domestication.{" "}
                    </p>
                    <p>
                      These concepts are an invitation to think temporal regimes
                      in terms of mutation and side-effects; instead of a
                      straight linear evolution. Less than ever, social and
                      material changes won’t be comprehended if merely applying
                      a diachronic study, as many historians do. We need
                      multiple ways of temporal representation, to combine
                      heterochrony and dyssynchrony in academic research, as
                      done, for instance, in contemporary art and contemporary
                      archaeology.
                    </p>
                    <p>
                      An example of this is the former Postimaja (in Tallinn),
                      designed by Raine Karp, and nowadays transformed into a
                      shopping mall. The taxidermic renovation was based on the
                      belief that past traces were not needed, only a
                      recognizable face of the corpse for domesticated
                      touristification. What was originally proposed as a form
                      of historic preservation, in practical terms it meant
                      killing the building. Unfortunately, post-war architecture
                      is still not thoroughly protected in Estonia. Because of
                      being made during the Soviet time, they have been too
                      often dismantled by pretending that they were being
                      renovated, as if it were architectural taxidermy.
                    </p>
                    <p>
                      Regarding the other concept, I approached Tallinn’s
                      cityscape as an archive, paying attention to composing and
                      decomposing materialities. Unfortunately, there is an
                      intense uniformisation going on in town, and also efforts
                      to cleanse the city’s historical complexity, as in the
                      case of the Maarjamäe Memorial.
                    </p>
                    <p className="p-interviewer">
                      - KK: One of the most affective parts of the book is about
                      your repeated visits to Jaama Turg (Railway Station
                      Market) and your conversations with the people there. What
                      do you think the city has lost with its removal?
                    </p>
                    <p>
                      FM. I am also fond of this chapter because it combines
                      politics, material culture and methodological experiments
                      in an intertwined way. Obviously, there has been
                      improvement in the material conditions of the market,
                      after the input of the new real-estate company. What I
                      suggested in the chapter, however, was to go beyond the
                      good and bad dichotomies, in order to see what has been
                      lost in the process of change, and what is the
                      contribution of the new place to the city at large.
                      Despite being materially and economically precarious, the
                      former market enabled diversity, was a gateway to the city
                      centre for people living in the suburbs, and a space of
                      camaraderie for those who were on the losing end of
                      postsocialist transformations and globalisation, remaining
                      more isolated and invisible in the suburbs these days.{" "}
                    </p>
                    <p>
                      Inclusiveness and accessibility are important in Tallinn,
                      a city in which nearly half of the population is Russian
                      speaking and the other half use Estonian, and with
                      increasing economic inequality. With the new market,
                      Tallinn has gained a new space for retailing services in
                      the form of a shopping mall for hipsters, yet it has lost
                      a place that was distinct. It could have been otherwise,
                      if the municipality would have invested some resources in
                      upgrading the market, and applied regulations to limit
                      ongoing gentrification.
                    </p>
                    <p className="p-interviewer">
                      - KK: Your chapter about Narva reflects the plurality of
                      experiences and identities found there by including the
                      views of local people, who are variously positive,
                      negative and completely indifferent towards the subjects
                      of Estonia, Russia and the existence of a border
                      separating them from Ivangorod across the river.{" "}
                    </p>
                    <p>
                      FM. In the book launch at the Püant bookshop, (human
                      geographer) Tauri Tuvikene said that he read Remains of
                      the Soviet Past in Estonia as an ethnography of Tallinn,
                      and that the chapters about Narva and Tartu were placed as
                      mirrors of the capital. To be honest, I did not think my
                      research in these terms, but it made sense what Tauri
                      observed.
                    </p>
                    <p>
                      I wanted to show that Narva is ordinary in its own terms;
                      catching a bit of the way of getting something done that
                      is there, in contrast to the rest of Estonia. This is why
                      the chapter has a kind of dialogical structure, as if the
                      reader was taking a walk in the city and chatting with the
                      people encountered on the way. Local narratives show a
                      wide range of levels of adhesion and deviation; for
                      instance, ethnic Estonians might be presented as
                      neighbours, rather than as belonging to one and the same
                      family. But this does not mean that the rest are
                      anti-Estonian, or non-Estonian; rather that they extend
                      the political, cultural and religious meaning of what is
                      to be Estonian, redrawing the contours of the
                      nation-building project.
                    </p>
                    <p>
                      We tend to think of politics as a process of gaining
                      consciousness about our surroundings, but quite often to
                      be political is not a choice, one might become politicised
                      also from external factors or actors, by being born in the
                      wrong place, by their gender or sexual orientation, or by
                      having a particular ethnicity. In many cases, people do
                      not cross the line of politics, but it is the very line
                      which crossed them, presenting rare features that could be
                      well experienced as normal. This is the case of Narva, a
                      city that is now on the border of the EU and NATO, and in
                      which people who were calmly living in what they
                      considered their country still have no citizenship or
                      jobs. They became separated people, in the sense of living
                      in-between, being neither fully Russians nor Estonians;
                      but somehow from a divorced family.
                    </p>
                    <p>
                      Taking Narva as a centre out there will help this society
                      become more inclusive and considerate of differences.
                      Estonia is a small country, but not everybody here
                      partakes of official narratives about the past and future.
                      Nor it should be like that.
                    </p>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Francisco Martínez: «Viajas pero siempre acabas en el círculo de
              lo propio»
            </Accordion.Header>
            <Accordion.Body>
              <div className="row ">
                <div className="col-12 col-xl-6 interview-img-container">
                  <img
                    className="interview-img"
                    src="media/interviews-imgs/12.jpeg"
                    alt="Interview"
                  ></img>
                </div>
                <div className="col-12 col-xl-6">
                  <a
                    className="btn btn-lg btn-interviews"
                    target="_blank"
                    rel="noreferrer"
                    alt="Francisco Martínez: «Viajas pero siempre acabas en el círculo de lo propio»"
                    href="https://www.laverdad.es/ababol/libros/viajas-siempre-acabas-20210501002336-ntvo.html"
                  >
                    Click Here To Read On La Verdad &#8594;
                  </a>
                  <h3>
                    Francisco Martínez: «Viajas pero siempre acabas en el
                    círculo de lo propio»
                  </h3>
                  <p className=" fw-bold fst-italic">
                    Entrevista de Manuel Madrid para La Verdad de Murcia.
                  </p>

                  <p>
                    Profesor asociado en el Instituto de Humanidades de Tallin
                    (Estonia), el periodista, antropólogo y comisario de arte
                    muleño Francisco Martínez está especializado en
                    antropología, diseño y arte, cultura material y metodología
                    etnográfica. 'Paseo circular' (Editorial Bifurcaciones,
                    2021) no es su primera historia publicada fuera de España.
                    Apareció en enero en Chile y tenía previsto presentarla este
                    mes en Murcia, donde coincidió con LA VERDAD en un encuentro
                    fugaz, si bien tendrá que aplazarse a nueva fecha –por
                    problemas logísticos los libros no llegaron a tiempo–.
                    «Paseo circular es un accidente», reconoce el autor, que
                    cita a Pessoa («No evoluciono. Viajo») y a Franco Battiato
                    («La línea horizontal empuja contra la materia, la vertical
                    contra el espíritu») antes de comenzar su historia:
                  </p>
                  <p>
                    «Viajar, un sueño. Viajar, un cuento. Viajar, una impostura,
                    un complot privado, una gran mentira que te cuentas a ti
                    mismo, como todo lo que he hecho en los últimos años».{" "}
                  </p>
                </div>
                <div className="col-12 mt-4">
                  <p>
                    «Todo ha sido muy accidental», explica Martínez. «Yo
                    escribía una especie de diario con ambiciones literarias
                    cuando vivía en Berlín, entre 2008 y 2011. Fue un par de
                    años, y no era consistente. Tenía tiempo para pasear y
                    escribir entonces. Tomaba notas, que no tenían intención
                    antropológica porque ni siquiera lo era entonces. Observaba,
                    leía y anotaba cosas interesantes. Diez años después, en un
                    congreso en Estocolmo, un antropólogo chileno me comentó si
                    no tenía nada escrito, porque conocía a una editorial local.
                    Tenía estos textos, que no era una novela ni tampoco tengo
                    intención de ser novelista, pero dos personas los leyeron e
                    hicieron informes favorables, y aquí está el resultado». Los
                    textos de 'Paseo circular' fueron reescritos con un aire más
                    novelesco: «El material ha sido retrabajado, e introduje
                    elementos de ficción para hacer la lectura más entretenida y
                    para reducir la carga de verdad, que me hacía sentir
                    incómodo».{" "}
                  </p>
                  <p>
                    Este volumen, como reconoce el muleño, es «un artefacto
                    extraño», que podría describirse como «una novela
                    etnográfica o cuento antropológico que no fue escrito para
                    ser publicado», algo que no entra en ningún género. «Un
                    manco puede contar los antropólogos que hayan escrito una
                    novela decente», se reafirma. «Tengo algún amigo que dice
                    que un antropólogo no es más que un novelista fallido. Y yo
                    creo que soy la prueba de eso», bromea. En su caso, es un
                    antropólogo con pasado periodístico reconvertido en
                    comisario de exposiciones. «Yo estudié Periodismo porque era
                    una forma de salir de Fuente Librilla. Del Periodismo me
                    interesaba la comunicación [«ni es una ciencia ni es
                    exacta», dice]. Una de las cosas que he descubierto
                    recientemente es que lo que me gusta es ser 'storyteller',
                    la persona que escribe cuentos para ser contados en público.
                    Todo esto viene de mi bisabuelo Paco, El Chengo viejo, un
                    gran contador de historias, viajante y ganadero. Los
                    antropólogos y los cuentacuentos, y los antropólogos y los
                    periodistas, somos todos primos hermanos. La antropología es
                    periodismo con tiempo». En su caso, también tiene un máster
                    en Economía Internacional y estudió Diplomacia. En realidad,
                    ha sido un escapista. Ha vivido en San Petersburgo,
                    Estambul, Lisboa, Berlín... Toda esa curiosidad por contar
                    historias con diferentes materiales físicos y discursivos
                    está en 'Paseo circular', donde dice que «la calidad de una
                    persona se puede medir por su talento para la pausa. A
                    algunos nos cuesta ser relajados, loose, como dicen los
                    ingleses. Pero al intentar escapar de nuestro destino,
                    siempre lo acabamos acelerando».
                  </p>
                  <p>
                    <span className="fw-bold">
                      «La calidad de una persona se puede medir por su talento
                      para la pausa»
                    </span>{" "}
                    Confiesa que le gusta estar en la periferia, «pero con una
                    pierna en lo institucional y otra en lo transgresor, porque
                    fuera de la institución hay un páramo, un desierto, y pasas
                    hambre y frío, y tienes que establecer dependencias y
                    lealtades institucionales». Ahora está en la Universidad de
                    Tallin, ciudad a la que le une ya una familia, pero, como
                    dice en el libro, muchas veces fue un errante caballero:
                    «Como un Quijote cervantino, unas veces huía sin saber de
                    qué, y otras esperaba sin saber a quién». Escribe, en el
                    fondo, sobre el sentimiento de extranjería, sobre lo que se
                    desaprende viajando. En el siglo XIX se escribía mucho sobre
                    esos hombres que iban del campo a la ciudad y ganaban
                    conocimiento. Y en este sentido Martínez firma una
                    contrahistoria, el reverso del 'Bildungsroman'. Él parece
                    siempre empeñado en entorpecer su destino: «En los sueños al
                    final todos los personajes que aparecen eres tú. Hay algo de
                    esto en la novela, yo hablo de mi hermano en Calnegre, de la
                    gente que conozco en Berlín... de otras personas que yo he
                    ficcionado y que soy yo mismo. Cuando hablo de mi hermano en
                    Calnegre, a quien le invitan a hacer un trío, que es el
                    final de la novela, yo también soy eso». El viaje, dice,
                    acaba en el círculo de lo propio.
                  </p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <h2>Public Talks</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              The values of multimodal projects. Online seminar series, HU
              Berlin
            </Accordion.Header>
            <Accordion.Body>
              <div className="row">
                <div className="col-12 col-xl-6 interview-img-container">
                  <img
                    style={{ width: "30rem" }}
                    src="media/interviews-imgs/13.jpg"
                    alt="Interview"
                  ></img>
                </div>
                <div className="col-12 col-xl-6 d-flex justify-content-center mt-2 mt-xl-0">
                  <Vimeo video="712849865" />
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              La invención etnográfica: &quot;Cómo curar (y cuidar) de nuestras
              preguntas etnográficas&quot;. Xcol.
            </Accordion.Header>
            <Accordion.Body>
              <div className="row">
                <div className="col-12 col-xl-6 interview-img-container">
                  <img
                    style={{ width: "30rem" }}
                    src="media/interviews-imgs/14.png"
                    alt="Interview"
                  ></img>
                </div>

                <div className="col-12 col-xl-6 mt-2 mt-xl-0">
                  <LiteYouTubeEmbed
                    id="lSvkloru51g"
                    title='La invención etnográfica 2: "Cómo curar (y cuidar) de nuestras preguntas etnográficas"'
                  />
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </main>
  );
}
