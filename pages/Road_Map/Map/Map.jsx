import { Swiper, SwiperSlide } from "swiper/react";
import { roadMapProps } from "../../../src/sliderProps";
const RoadMapSlider = () => {
  return (
      <div className="grid-container mt-4 pl-[20%] pr-[10%]">
        <h3
          className="fn__maintitle big"
          data-text="RoadMap"
          data-align="center"
        >
          RoadMap
        <p className="">⍀⍜⏃⎅⋔⏃⌿</p>
        </h3>
        <div className="fn_cs_roadmap">
          <div className="step_holder">
            <div className="step_in" />
          </div>
          <div className="slider_holder">
            <Swiper {...roadMapProps} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 01</span>
                    <div className="item_in">
                      <p className="date">Q1 2023</p>
                      <h3 className="title">“Foundation”</h3>
                      <p className="desc">
                      Fundings form both public and private investors. Incubation will commence as well, during this phase the foundational works for Medoria will be built 

                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 02</span>
                    <div className="item_in">
                      <p className="date">Q3 2023</p>
                      <h3 className="title">“MDRI”</h3>
                      <p className="desc">
                      Launch of tokens and heavy game development. Announcements on  the pre game box will be released as well. MDRI can be used for both trading on the secondary marketplace and voting.

                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 03</span>
                    <div className="item_in">
                      <p className="date">Q4 2023</p>
                      <h3 className="title">“Test net”</h3>
                      <p className="desc">
                      First gameplay test net. A selective group of users will be chosen to test the earliest version of the game. All testers will be rewarded with tokens
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 04</span>
                    <div className="item_in">
                      <p className="date">Q1 2024</p>
                      <h3 className="title">“Welcome to Medoria, our metaverse”</h3>
                      <p className="desc">
                      Allow early visitors to Genesis huh, the neutral hub away from all the chaos and fights happening outside of this zone. Players will get to experience our early stage metaverse.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 05</span>
                    <div className="item_in">
                      <p className="date">Q3 2024</p>
                      <h3 className="title">“Survival of the fittest”</h3>
                      <p className="desc">
                      Soft launch of the pre game mint box alongside early combat and base building test works. Only players who have mint the pregame box will be eligible as testers
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
  );
};
export default RoadMapSlider;
