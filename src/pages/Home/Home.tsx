import "./Home.css";

export const Home = () => {
  //

  return (
    <>
      <div id="aria-polite" aria-live="polite" />
      <div id="aria-assertive" aria-live="assertive" />
      <nav aria-label="Skip to content" className="skip-content">
        <ul>
          <li>
            <a href="#main-navigation" className="sr-only sr-only-focusable">Skip to main navigation</a>
          </li>
          <li>
            <a href="#main-search" className="sr-only sr-only-focusable">Skip to search</a>
          </li>
          <li>
            <a href="#main-content" className="sr-only sr-only-focusable">Skip to main content</a>
          </li>
        </ul>
      </nav>

      <header className="header" id="page-header">
        <div className="primary with-right-background">
          <div className="container">
            <div className="primary-right-background clearfix">
              <a href="/en/" className="logo">
                <span className="sr-only">UEF</span>
                <img src="/assets/headerImage.png" alt="UEF" />
              </a>
              <ul className="header-tools">
                <li className="language-dropdown dropdown">
                  <button data-toggle="dropdown" className="language_btn"
                          aria-label="Select language" aria-expanded="false" data-loaded="true"
                  >
                    <i className="icon icon-globe" aria-hidden="true" />
                  </button>
                  <div className="dropdown-container">
                    <ul className="language-selector dropdown-menu">
                      <li className="selected">
                        <a href="/en/">English</a>
                      </li>
                      <li>
                        <a href="/zh/">中文</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main id="page-content">
        <div className="page-section page-section-home page-section-home-index">
          <section className="page-section-header page-section-header-home page-section-header-home-index no-backdrop-image" data-stickyheader style={{}}>
            <div className="container">
              <div className="header">
                <h1 className="title">Welcome to Ho Chi Minh City University of Economics and Finance - UEF</h1>
              </div>
              <div className="search-bar-wrapper">
                <div className="global-search-wrapper">
                  <form id="main-search" onSubmit={(e) => {e.preventDefault()}} className="search-form">
                    <div className="global-search">
                      <div className="field-button-wrapper">
                        <div className="search-field">
                          <label className="sr-only" htmlFor="global-search-input">Explore profiles, expertise and research at UEF</label>
                          <input type="text" id="global-search-input" className="search-field" name="search" autoComplete="off" autoFocus="autofocus" />
                        </div>
                        <div className="advanced-SearchBox-Container hidden" style={{ width: "526.172px" }}>
                          <div id="search-as-headline" className="advanced-search-header">Search as:</div>
                          <ul className="advanced-search-list" aria-labelledby="search-as-headline" data-searchlocale="en">
                            <li className="concepts-suggestion" data-value="RelatedConcepts">
                              <a className="linkValConcept">
                                <div className="aria-content">
                                  <output id="RelatedConcepts" className="advanced-search-label" />
                                  <span>concept</span>
                                </div>
                              </a>
                              <div className="tooltip-container">
                                <button type="button" aria-expanded="false" aria-describedby="search_index_relatedconcepts" aria-label="Search as concept, help">
                                  <i className="icon icon-info-circled" aria-hidden="true" />
                                </button>
                                <span className="tooltip-popup align-right" role="tooltip"
                                      id="search_index_relatedconcepts">Search across key concepts extracted from titles and abstracts</span>
                              </div>
                            </li>
                            <li className="index-suggestion" data-value="PartOfNameOrTitle">
                              <a className="linkValIndex">
                                <div className="aria-content">
                                  <output id="PartOfNameOrTitle" className="advanced-search-label" />
                                  <output className="advanced-search-message">matching text</output>
                                </div>
                              </a>
                              <div className="tooltip-container">
                                <button type="button" aria-expanded="false"
                                        aria-describedby="search_index_partofnameortitle"
                                        aria-label="Search as matching text, help">
                                  <i className="icon icon-info-circled" aria-hidden="true" />
                                </button>
                                <span className="tooltip-popup align-right" role="tooltip"
                                      id="search_index_partofnameortitle">Search across indexed text content in Pure, such as names, titles, descriptions etc.</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="search-submit">
                          <button id="normalSearch" type="submit" value="false" name="isCopyPasteSearch"
                                  aria-label="Search">
                            <i className="icon icon-magnifying-glass" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <nav aria-label="Search navigation">
                    <ul className="search-menu ">
                      <li>
                        <a aria-label="Go to advanced search" href="/en/searchAll/advanced/">
                          Advanced search
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          <div id="main-content" className="page-section-content page-section-content-home page-section-content-home-index no-margin">
            <section id="search_banner" className="has-image">
              <div className="container">
                <a href="/en/searchAll/index/?search=%24b" className="banner-link">
                  <p className="description">We're committed to doing all we can to assist in the global response to the Coronavirus (COVID-19) pandemic.</p>
                  <p className="linktext">Explore all our related research and expertise</p>
                </a>
              </div>
            </section>
            <section className="home-menu">
              <div className="secondary">
                <div className="container">
                  <nav id="main-navigation" aria-label="Main navigation" className="content-navigation">
                    <ul className="has-overflow-navigation" data-value="More" role="menubar">
                      <li className="persons" role="none">
                        <a className="portal_link" role="menuitem" href="/en/persons" tabIndex="0" data-loaded="true">
                          <span>
                            <i className="icon icon-persons" aria-hidden="true" />
                            <span className="count increment-counter">1832</span>
                            <span className="label">Profiles</span>
                          </span>
                        </a>
                      </li>
                      <li className="organisations" role="none">
                        <a className="portal_link" role="menuitem" href="/en/organisations" tabIndex="-1" data-loaded="true">
                          <span>
                            <i className="icon icon-organisations" aria-hidden="true" />
                            <span className="count increment-counter">242</span>
                            <span className="label">Research units</span>
                          </span>
                        </a>
                      </li>
                      <li className="publications" role="none">
                        <a className="portal_link" role="menuitem" href="/en/publications" tabIndex="-1" data-loaded="true">
                          <span>
                            <i className="icon icon-publications" aria-hidden="true" />
                            <span className="count increment-counter">116713</span>
                            <span className="label">Research output</span>
                          </span>
                        </a>
                      </li>
                      <li className="projects" role="none">
                        <a className="portal_link" role="menuitem" href="/en/projects" tabIndex="-1" data-loaded="true">
                          <span>
                            <i className="icon icon-projects" aria-hidden="true" />
                            <span className="count increment-counter">24454</span>
                            <span className="label">Projects</span>
                          </span>
                        </a>
                      </li>
                      <li className="studentTheses overflow-listitem" role="none">
                        <a className="portal_link" role="menuitem" href="/en/studentTheses" tabIndex="-1" data-loaded="true">
                          <span>
                            <i className="icon icon-studentTheses" aria-hidden="true" />
                            <span className="count increment-counter">16580</span>
                            <span className="label">Student theses</span>
                          </span>
                        </a>
                      </li>
                      <li className="equipments overflow-listitem" role="none">
                        <a className="portal_link" role="menuitem" href="/en/equipments" tabIndex="-1" data-loaded="true">
                          <span>
                            <i className="icon icon-equipments" aria-hidden="true" />
                            <span className="count increment-counter">165</span>
                            <span className="label">Equipment</span>
                          </span>
                        </a>
                      </li>
                      <li role="none" className="dropdown-overflow" style={{}}>
                        <button className="dropdown-toggle" data-toggle="dropdown" role="menuitem" aria-haspopup="true"
                                aria-expanded="false" aria-label="More navigation options" data-loaded="true"
                        >
                          <i className="icon icon-dots">
                            <span className="count increment-counter">23</span>
                          </i>
                          <span className="label">More</span>
                        </button>
                        <div className="dropdown-container">
                          <ul className="dropdown-menu" role="menu">
                            <li className="prizes overflow-listitem" role="none">
                              <a className="portal_link" role="menuitem" href="/en/prizes/">
                                <span>
                                  <i className="icon icon-prizes" aria-hidden="true" />
                                  <span className="count increment-counter">5</span>
                                  <span className="label">Prizes</span>
                                </span>
                              </a>
                            </li>
                            <li className="activities overflow-listitem" role="none">
                              <a className="portal_link" role="menuitem" href="/en/activities/">
                                <span>
                                  <i className="icon icon-activities" aria-hidden="true" />
                                  <span className="count increment-counter">18</span>
                                  <span className="label">Activities</span>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </section>
            <section className="page-section welcome">
              <div className="container">
                <h2>Welcome to [ Research UEF! ]</h2>
                <div className="text-block">
                  [ Research NCKU ! ] showcases National Cheng Kung University's researchers and their publications.
                  This innovative information technology should promote development of intramural and extramural
                  collaborations, enabling NCKU researchers to identify new funding opportunities and potential
                  partnerships with academia, industry or broader science communities. National Cheng Kung University
                  was established in 1931. With a core value of "Pursuit of truth through exhaustive reasoning", NCKU
                  has had substantial success in interdisciplinary research that has promoted national development and
                  strengthened application of science in daily life. For any inquiries regarding [ Research NCKU ! ], do
                  email us at <a href="mailto:barry89@mail.ncku.edu.tw" target="_top">barry89@mail.ncku.edu.tw</a>.
                </div>
              </div>
            </section>
            <section id="sdg_banner" className="page-section sdg_banner">
              <div className="container">
                <div className="sdg_info">
                  <h2>UN Sustainable Development Goals</h2>
                  <p>In September 2015, 193 countries agreed to adopt a set of global goals to end poverty, protect the planet and ensure prosperity for all. Click on a goal to the right to explore how our researchers and their work are contributing towards achieving it.</p>
                </div>


                <ul className="sdg_icons" role="menubar">
                  <li role="none" className="dropdown-overflow">
                    <button role="menuitem" className="no_poverty dropdown-toggle" tabIndex="0" data-loaded="true">
                      <img alt="" title="" className="no_poverty" src="./assets/sdg_icons/no_poverty-152d4285ffa99f63d2c24faa8c6ae1e6.svg" />
                    </button>
                    <div className="dropdown-container">
                      <ul className="dropdown-menu">
                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/persons/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fno_poverty"
                             tabIndex="0"
                          >
                            <span>
                              <i className="icon icon-persons" aria-hidden="true" />
                              <strong>2</strong>
                              <span className="label">Profiles</span>
                            </span>
                          </a>
                        </li>
                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/organisations/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fno_poverty"
                             tabIndex="0"
                          >
                            <span>
                              <i className="icon icon-organisations" aria-hidden="true" />
                              <strong>2</strong>
                              <span className="label">Research units</span>
                            </span>
                          </a>
                        </li>
                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/publications/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fno_poverty"
                             tabIndex="0"
                          >
                            <span>
                              <i className="icon icon-publications" aria-hidden="true" />
                              <strong>2</strong>
                              <span className="label">Research output</span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li role="none" className="dropdown-overflow">
                    <button role="menuitem" className="zero_hunger dropdown-toggle" tabIndex="-1" data-loaded="true">
                      <img alt="" title="" className="zero_hunger" src="./assets/sdg_icons/zero_hunger-8f35b7109bd9ecb88f3262e1349afb33.svg" />
                    </button>
                    <div className="dropdown-container">
                      <ul className="dropdown-menu">
                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/persons/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fzero_hunger"
                          >
                            <span>
                              <i className="icon icon-persons" aria-hidden="true" />
                              <strong>54</strong>
                              <span className="label">Profiles</span>
                            </span>
                          </a>
                        </li>
                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/organisations/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fzero_hunger"
                          >
                            <span>
                              <i className="icon icon-organisations" aria-hidden="true" />
                              <strong>42</strong>
                              <span className="label">Research units</span>
                            </span>
                          </a>
                        </li>
                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/publications/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fzero_hunger"
                          >
                            <span>
                              <i className="icon icon-publications" aria-hidden="true" />
                              <strong>69</strong>
                              <span className="label">Research output</span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li role="none" className="dropdown-overflow">
                    <button role="menuitem" className="good_health_and_well_being dropdown-toggle" tabIndex="-1" data-loaded="true">
                      <img alt="" title="" className="good_health_and_well_being" src="./assets/sdg_icons/good_health_and_well_being-ca66cb937719976ce918816020def2ec.svg" />
                    </button>
                    <div className="dropdown-container">
                      <ul className="dropdown-menu">
                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/persons/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fgood_health_and_well_being"
                          >
                            <span>
                              <i className="icon icon-persons" aria-hidden="true" />
                              <strong>921</strong>
                              <span className="label">Profiles</span>
                            </span>
                          </a>
                        </li>
                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/organisations/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fgood_health_and_well_being"
                          >
                            <span>
                              <i className="icon icon-organisations" aria-hidden="true" />
                              <strong>169</strong>
                              <span className="label">Research units</span>
                            </span>
                          </a>
                        </li>
                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/publications/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fgood_health_and_well_being"
                          >
                            <span>
                              <i className="icon icon-publications" aria-hidden="true" />
                              <strong>5852</strong>
                              <span className="label">Research output</span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li role="none" className="dropdown-overflow">
                    <button role="menuitem" className="quality_education dropdown-toggle" tabIndex="-1" data-loaded="true">
                      <img alt="" title="" className="quality_education" src="./assets/sdg_icons/quality_education-b37c6b2dd2b60bc918ec5feef320cb1d.svg" />
                    </button>
                    <div className="dropdown-container">
                      <ul className="dropdown-menu">
                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/persons/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fquality_education"
                          >
                            <span>
                              <i className="icon icon-persons" aria-hidden="true" />
                              <strong>26</strong>
                              <span className="label">Profiles</span>
                            </span>
                          </a>
                        </li>
                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/organisations/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fquality_education"
                          >
                            <span>
                              <i className="icon icon-organisations" aria-hidden="true" />
                              <strong>18</strong>
                              <span className="label">Research units</span>
                            </span>
                          </a>
                        </li>
                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/publications/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fquality_education"
                          >
                            <span>
                              <i className="icon icon-publications" aria-hidden="true" />
                              <strong>30</strong>
                              <span className="label">Research output</span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li role="none" className="dropdown-overflow">
                    <button role="menuitem" className="gender_equality dropdown-toggle" tabIndex="-1" data-loaded="true">
                      <img alt="" title="" className="gender_equality" src="./assets/sdg_icons/gender_equality-82c7ba20a0e86cfd713c389ca3176225.svg" />
                    </button>
                    <div className="dropdown-container">
                      <ul className="dropdown-menu">
                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/persons/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fgender_equality"
                          >
                            <span>
                              <i className="icon icon-persons" aria-hidden="true" />
                              <strong>25</strong>
                              <span className="label">Profiles</span>
                            </span>
                          </a>
                        </li>
                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/organisations/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fgender_equality"
                          >
                            <span>
                              <i className="icon icon-organisations" aria-hidden="true" />
                              <strong>20</strong>
                              <span className="label">Research units</span>
                            </span>
                          </a>
                        </li>
                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/publications/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fgender_equality"
                          >
                            <span>
                              <i className="icon icon-publications" aria-hidden="true" />
                              <strong>45</strong>
                              <span className="label">Research output</span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li role="none" className="dropdown-overflow">
                    <button role="menuitem" className="clean_water_and_sanitation dropdown-toggle" tabIndex="-1" data-loaded="true">
                      <img alt="" title="" className="clean_water_and_sanitation" src="./assets/sdg_icons/clean_water_and_sanitation-8884b7035ac6e3b41dc71f42a6e3e897.svg" />
                    </button>
                    <div className="dropdown-container">
                      <ul className="dropdown-menu">
                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/persons/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fclean_water_and_sanitation"
                          >
                            <span>
                              <i className="icon icon-persons" aria-hidden="true" />
                              <strong>32</strong>
                              <span className="label">Profiles</span>
                            </span>
                          </a>
                        </li>
                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/organisations/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fclean_water_and_sanitation"
                          >
                            <span>
                              <i className="icon icon-organisations" aria-hidden="true" />
                              <strong>19</strong>
                              <span className="label">Research units</span>
                            </span>
                          </a>
                        </li>
                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/publications/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fclean_water_and_sanitation"
                          >
                            <span>
                              <i className="icon icon-publications" aria-hidden="true" />
                              <strong>46</strong>
                              <span className="label">Research output</span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li role="none" className="dropdown-overflow">
                    <button role="menuitem" className="affordable_and_clean_energy dropdown-toggle" tabIndex="-1" data-loaded="true">
                      <img alt="" title="" className="affordable_and_clean_energy" src="./assets/sdg_icons/affordable_and_clean_energy-3ef7b8830c5ae63dc37fecf9e07b7fb8.svg" />
                    </button>
                    <div className="dropdown-container">
                      <ul className="dropdown-menu">
                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/persons/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Faffordable_and_clean_energy"><span>
                                            <i className="icon icon-persons" aria-hidden="true">
                                            </i>
                                            <strong>410</strong>
                                            <span className="label">Profiles</span>
                                        </span></a>
                        </li>


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/organisations/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Faffordable_and_clean_energy"><span>
                                            <i className="icon icon-organisations" aria-hidden="true">
                                            </i>
                                            <strong>107</strong>
                                            <span className="label">Research units</span>
                                        </span></a>
                        </li>


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/publications/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Faffordable_and_clean_energy"><span>
                                            <i className="icon icon-publications" aria-hidden="true">
                                            </i>
                                            <strong>3058</strong>
                                            <span className="label">Research output</span>
                                        </span></a>
                        </li>

                      </ul>
                    </div>

                  </li>

                  <li role="none" className="dropdown-overflow">


                    <button role="menuitem" className="decent_work_and_economic_growth dropdown-toggle" tabIndex="-1"
                            data-loaded="true">
                      <img alt="SDG 8 - Decent Work and Economic Growth" title="SDG 8 - Decent Work and Economic Growth"
                           className="decent_work_and_economic_growth"
                           src="./assets/sdg_icons/decent_work_and_economic_growth-f82f7cc7255870c88a43e48b79772f97.svg" />
                    </button>

                    <div className="dropdown-container">
                      <ul className="dropdown-menu">


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/persons/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fdecent_work_and_economic_growth"><span>
                                            <i className="icon icon-persons" aria-hidden="true">
                                            </i>
                                            <strong>98</strong>
                                            <span className="label">Profiles</span>
                                        </span></a>
                        </li>


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/organisations/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fdecent_work_and_economic_growth"><span>
                                            <i className="icon icon-organisations" aria-hidden="true">
                                            </i>
                                            <strong>49</strong>
                                            <span className="label">Research units</span>
                                        </span></a>
                        </li>


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/publications/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fdecent_work_and_economic_growth"><span>
                                            <i className="icon icon-publications" aria-hidden="true">
                                            </i>
                                            <strong>205</strong>
                                            <span className="label">Research output</span>
                                        </span></a>
                        </li>

                      </ul>
                    </div>

                  </li>

                  <li role="none" className="dropdown-overflow">


                    <button role="menuitem" className="industry_innovation_and_infrastructure dropdown-toggle"
                            tabIndex="-1" data-loaded="true">
                      <img alt="SDG 9 - Industry, Innovation, and Infrastructure"
                           title="SDG 9 - Industry, Innovation, and Infrastructure"
                           className="industry_innovation_and_infrastructure"
                           src="./assets/sdg_icons/industry_innovation_and_infrastructure-f6ac329b3d6b0c40b72e8bb0c46a88d9.svg" />
                    </button>

                    <div className="dropdown-container">
                      <ul className="dropdown-menu">


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/persons/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Findustry_innovation_and_infrastructure"><span>
                                            <i className="icon icon-persons" aria-hidden="true">
                                            </i>
                                            <strong>77</strong>
                                            <span className="label">Profiles</span>
                                        </span></a>
                        </li>


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/organisations/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Findustry_innovation_and_infrastructure"><span>
                                            <i className="icon icon-organisations" aria-hidden="true">
                                            </i>
                                            <strong>45</strong>
                                            <span className="label">Research units</span>
                                        </span></a>
                        </li>


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/publications/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Findustry_innovation_and_infrastructure"><span>
                                            <i className="icon icon-publications" aria-hidden="true">
                                            </i>
                                            <strong>127</strong>
                                            <span className="label">Research output</span>
                                        </span></a>
                        </li>

                      </ul>
                    </div>

                  </li>

                  <li role="none" className="dropdown-overflow">


                    <button role="menuitem" className="reduced_inequalities dropdown-toggle" tabIndex="-1"
                            data-loaded="true">
                      <img alt="SDG 10 - Reduced Inequalities" title="SDG 10 - Reduced Inequalities"
                           className="reduced_inequalities"
                           src="./assets/sdg_icons/reduced_inequalities-8bb4302575a086560a67ee5f8961db72.svg" />
                    </button>

                    <div className="dropdown-container">
                      <ul className="dropdown-menu">


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/persons/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Freduced_inequalities"><span>
                                            <i className="icon icon-persons" aria-hidden="true">
                                            </i>
                                            <strong>26</strong>
                                            <span className="label">Profiles</span>
                                        </span></a>
                        </li>


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/organisations/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Freduced_inequalities"><span>
                                            <i className="icon icon-organisations" aria-hidden="true">
                                            </i>
                                            <strong>24</strong>
                                            <span className="label">Research units</span>
                                        </span></a>
                        </li>


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/publications/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Freduced_inequalities"><span>
                                            <i className="icon icon-publications" aria-hidden="true">
                                            </i>
                                            <strong>38</strong>
                                            <span className="label">Research output</span>
                                        </span></a>
                        </li>

                      </ul>
                    </div>

                  </li>

                  <li role="none" className="dropdown-overflow">


                    <button role="menuitem" className="sustainable_cities_and_communities dropdown-toggle" tabIndex="-1"
                            data-loaded="true">
                      <img alt="SDG 11 - Sustainable Cities and Communities"
                           title="SDG 11 - Sustainable Cities and Communities"
                           className="sustainable_cities_and_communities"
                           src="./assets/sdg_icons/sustainable_cities_and_communities-31bf806f901b93759d828884fd5df53f.svg" />
                    </button>

                    <div className="dropdown-container">
                      <ul className="dropdown-menu">


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/persons/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fsustainable_cities_and_communities"><span>
                                            <i className="icon icon-persons" aria-hidden="true">
                                            </i>
                                            <strong>164</strong>
                                            <span className="label">Profiles</span>
                                        </span></a>
                        </li>


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/organisations/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fsustainable_cities_and_communities"><span>
                                            <i className="icon icon-organisations" aria-hidden="true">
                                            </i>
                                            <strong>58</strong>
                                            <span className="label">Research units</span>
                                        </span></a>
                        </li>


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/publications/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fsustainable_cities_and_communities"><span>
                                            <i className="icon icon-publications" aria-hidden="true">
                                            </i>
                                            <strong>409</strong>
                                            <span className="label">Research output</span>
                                        </span></a>
                        </li>

                      </ul>
                    </div>

                  </li>

                  <li role="none" className="dropdown-overflow">


                    <button role="menuitem" className="responsible_consumption_and_production dropdown-toggle"
                            tabIndex="-1" data-loaded="true">
                      <img alt="SDG 12 - Responsible Consumption and Production"
                           title="SDG 12 - Responsible Consumption and Production"
                           className="responsible_consumption_and_production"
                           src="./assets/sdg_icons/responsible_consumption_and_production-309b9599b314a8ef34f446a7e4215de6.svg" />
                    </button>

                    <div className="dropdown-container">
                      <ul className="dropdown-menu">


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/persons/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fresponsible_consumption_and_production"><span>
                                            <i className="icon icon-persons" aria-hidden="true">
                                            </i>
                                            <strong>111</strong>
                                            <span className="label">Profiles</span>
                                        </span></a>
                        </li>


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/organisations/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fresponsible_consumption_and_production"><span>
                                            <i className="icon icon-organisations" aria-hidden="true">
                                            </i>
                                            <strong>56</strong>
                                            <span className="label">Research units</span>
                                        </span></a>
                        </li>


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/publications/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fresponsible_consumption_and_production"><span>
                                            <i className="icon icon-publications" aria-hidden="true">
                                            </i>
                                            <strong>278</strong>
                                            <span className="label">Research output</span>
                                        </span></a>
                        </li>

                      </ul>
                    </div>

                  </li>

                  <li role="none" className="dropdown-overflow">


                    <button role="menuitem" className="climate_action dropdown-toggle" tabIndex="-1" data-loaded="true">
                      <img alt="SDG 13 - Climate Action" title="SDG 13 - Climate Action" className="climate_action"
                           src="./assets/sdg_icons/climate_action-bf9936c5a1e66601be3cd2b75da7ce3f.svg" />
                    </button>

                    <div className="dropdown-container">
                      <ul className="dropdown-menu">


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/persons/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fclimate_action"><span>
                                            <i className="icon icon-persons" aria-hidden="true">
                                            </i>
                                            <strong>168</strong>
                                            <span className="label">Profiles</span>
                                        </span></a>
                        </li>


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/organisations/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fclimate_action"><span>
                                            <i className="icon icon-organisations" aria-hidden="true">
                                            </i>
                                            <strong>80</strong>
                                            <span className="label">Research units</span>
                                        </span></a>
                        </li>


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/publications/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fclimate_action"><span>
                                            <i className="icon icon-publications" aria-hidden="true">
                                            </i>
                                            <strong>355</strong>
                                            <span className="label">Research output</span>
                                        </span></a>
                        </li>

                      </ul>
                    </div>

                  </li>

                  <li role="none" className="dropdown-overflow">


                    <button role="menuitem" className="life_below_water dropdown-toggle" tabIndex="-1"
                            data-loaded="true">
                      <img alt="SDG 14 - Life Below Water" title="SDG 14 - Life Below Water"
                           className="life_below_water"
                           src="./assets/sdg_icons/life_below_water-ab710e5d53fa05458473f4b2cb73dd74.svg" />
                    </button>

                    <div className="dropdown-container">
                      <ul className="dropdown-menu">


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/persons/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Flife_below_water"><span>
                                            <i className="icon icon-persons" aria-hidden="true">
                                            </i>
                                            <strong>102</strong>
                                            <span className="label">Profiles</span>
                                        </span></a>
                        </li>


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/organisations/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Flife_below_water"><span>
                                            <i className="icon icon-organisations" aria-hidden="true">
                                            </i>
                                            <strong>50</strong>
                                            <span className="label">Research units</span>
                                        </span></a>
                        </li>


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/publications/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Flife_below_water"><span>
                                            <i className="icon icon-publications" aria-hidden="true">
                                            </i>
                                            <strong>256</strong>
                                            <span className="label">Research output</span>
                                        </span></a>
                        </li>

                      </ul>
                    </div>

                  </li>

                  <li role="none" className="dropdown-overflow">


                    <button role="menuitem" className="life_on_land dropdown-toggle" tabIndex="-1" data-loaded="true">
                      <img alt="SDG 15 - Life on Land" title="SDG 15 - Life on Land" className="life_on_land"
                           src="./assets/sdg_icons/life_on_land-f1b7e3dbbb3a9410964d6fbb4b31f821.svg" />
                    </button>

                    <div className="dropdown-container">
                      <ul className="dropdown-menu">


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/persons/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Flife_on_land"><span>
                                            <i className="icon icon-persons" aria-hidden="true">
                                            </i>
                                            <strong>80</strong>
                                            <span className="label">Profiles</span>
                                        </span></a>
                        </li>


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/organisations/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Flife_on_land"><span>
                                            <i className="icon icon-organisations" aria-hidden="true">
                                            </i>
                                            <strong>39</strong>
                                            <span className="label">Research units</span>
                                        </span></a>
                        </li>


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/publications/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Flife_on_land"><span>
                                            <i className="icon icon-publications" aria-hidden="true">
                                            </i>
                                            <strong>223</strong>
                                            <span className="label">Research output</span>
                                        </span></a>
                        </li>

                      </ul>
                    </div>

                  </li>

                  <li role="none" className="dropdown-overflow">


                    <button role="menuitem" className="peace_justice_and_strong_institutions dropdown-toggle"
                            tabIndex="-1" data-loaded="true">
                      <img alt="SDG 16 - Peace, Justice and Strong Institutions"
                           title="SDG 16 - Peace, Justice and Strong Institutions"
                           className="peace_justice_and_strong_institutions"
                           src="./assets/sdg_icons/peace_justice_and_strong_institutions-05bb2c5c2784243923979f91286779c0.svg" />
                    </button>

                    <div className="dropdown-container">
                      <ul className="dropdown-menu">


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/persons/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fpeace_justice_and_strong_institutions"><span>
                                            <i className="icon icon-persons" aria-hidden="true">
                                            </i>
                                            <strong>77</strong>
                                            <span className="label">Profiles</span>
                                        </span></a>
                        </li>


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/organisations/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fpeace_justice_and_strong_institutions"><span>
                                            <i className="icon icon-organisations" aria-hidden="true">
                                            </i>
                                            <strong>44</strong>
                                            <span className="label">Research units</span>
                                        </span></a>
                        </li>


                        <li className="overflow-listitem">
                          <a className="portal_link" role="menuitem"
                             href="/en/publications/?indexableKeyword=%2Fdk%2Fatira%2Fpure%2Fsustainabledevelopmentgoals%2Fpeace_justice_and_strong_institutions"><span>
                                            <i className="icon icon-publications" aria-hidden="true">
                                            </i>
                                            <strong>131</strong>
                                            <span className="label">Research output</span>
                                        </span></a>
                        </li>

                      </ul>
                    </div>

                  </li>

                </ul>










              </div>
            </section>
            <section className="page-section">
              <div className="page-section network-collaborations">
                <div className="container">
                  <div className="network-description">
                    <h2>Collaborations and top research areas from the last five years</h2>
                    <p>
                      Click dots and donuts to bring up details or {" "}
                      <button id="showCountries">Select a country/territory from the list</button>
                    </p>
                  </div>
                  <div style={{ display: "none" }} role="dialog" id="countryList" aria-modal="true"
                       aria-labelledby="modal-heading" aria-describedby="modal-description">
                    <div className="header">

                      <h1 className="title" id="modal-heading">

                        Dive into details

                      </h1>


                      <p id="modal-description">Select a country/territory to view shared publications and projects</p>


                    </div>
                    <button className="close-filter map">
                      Close
                    </button>
                    <div id="groupcontainer">
                      <div className="filtergroup" tabIndex="0"><label>Asia</label>
                        <ol className="country-list">
                          <li>
                            <button className="toggle_country_node" data-country-id="af"
                                    data-loaded="true">Afghanistan<i className="icon icon-up-open"
                                                                     aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="az" data-loaded="true">Azerbaijan<i
                              className="icon icon-up-open" aria-hidden="true"/></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="bd" data-loaded="true">Bangladesh<i
                              className="icon icon-up-open" aria-hidden="true"/></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="bn" data-loaded="true">Brunei
                              Darussalam<i className="icon icon-up-open" aria-hidden="true"/></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="cn" data-loaded="true">China<i
                              className="icon icon-up-open" aria-hidden="true"/></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="hk" data-loaded="true">Hong Kong<i
                              className="icon icon-up-open" aria-hidden="true"/></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="in" data-loaded="true">India<i
                              className="icon icon-up-open" aria-hidden="true"/></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="id" data-loaded="true">Indonesia<i
                              className="icon icon-up-open" aria-hidden="true"/></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="ir" data-loaded="true">Iran,
                              Islamic Republic of<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="iq" data-loaded="true">Iraq<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="il" data-loaded="true">Israel<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="jp" data-loaded="true">Japan<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="jo" data-loaded="true">Jordan<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="kz" data-loaded="true">Kazakhstan<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="kp" data-loaded="true">Korea,
                              Democratic People's Republic of<i className="icon icon-up-open" aria-hidden="true" />
                            </button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="kr" data-loaded="true">Korea,
                              Republic of<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="kw" data-loaded="true">Kuwait<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="lb" data-loaded="true">Lebanon<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="mo" data-loaded="true">Macao<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="my" data-loaded="true">Malaysia<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="mn" data-loaded="true">Mongolia<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="mm" data-loaded="true">Myanmar<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="np" data-loaded="true">Nepal<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="pk" data-loaded="true">Pakistan<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="ps" data-loaded="true">Palestine,
                              State of<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="ph"
                                    data-loaded="true">Philippines<i className="icon icon-up-open"
                                                                     aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="qa" data-loaded="true">Qatar<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="sa" data-loaded="true">Saudi Arabia<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="sg" data-loaded="true">Singapore<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="lk" data-loaded="true">Sri Lanka<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="tw" data-loaded="true">Taiwan<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="th" data-loaded="true">Thailand<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="ae" data-loaded="true">United Arab
                              Emirates<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="vn" data-loaded="true">Viet Nam<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="ye" data-loaded="true">Yemen<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                        </ol>
                      </div>
                      <div className="filtergroup" tabIndex="0"><label>America</label>
                        <ol className="country-list">
                          <li>
                            <button className="toggle_country_node" data-country-id="ar" data-loaded="true">Argentina<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="bo" data-loaded="true">Bolivia,
                              Plurinational State of<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="br" data-loaded="true">Brazil<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="ab" data-loaded="true">Alberta,
                              Canada<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="bc" data-loaded="true">British
                              Columbia, Canada<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="qc" data-loaded="true">Quebec,
                              Canada<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="on" data-loaded="true">Ontario,
                              Canada<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="ca" data-loaded="true">Canada (No
                              Province/Territory Affiliation Provided)<i className="icon icon-up-open"
                                                                         aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="cl" data-loaded="true">Chile<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="co" data-loaded="true">Colombia<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="cr" data-loaded="true">Costa Rica<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="cu" data-loaded="true">Cuba<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="do" data-loaded="true">Dominican
                              Republic<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="ec" data-loaded="true">Ecuador<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="gt" data-loaded="true">Guatemala<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="gy" data-loaded="true">Guyana<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="mx" data-loaded="true">Mexico<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="pa" data-loaded="true">Panama<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="pe" data-loaded="true">Peru<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="pr" data-loaded="true">Puerto
                              Rico<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="mn"
                                    data-loaded="true">Minnesota, United States<i className="icon icon-up-open"
                                                                                  aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="nm" data-loaded="true">New
                              Mexico, United States<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="ne"
                                    data-loaded="true">Nebraska, United States<i className="icon icon-up-open"
                                                                                 aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="co"
                                    data-loaded="true">Colorado, United States<i className="icon icon-up-open"
                                                                                 aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="de"
                                    data-loaded="true">Delaware, United States<i className="icon icon-up-open"
                                                                                 aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="dc" data-loaded="true">District
                              of Columbia, United States<i className="icon icon-up-open" aria-hidden="true" />
                            </button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="mo"
                                    data-loaded="true">Missouri, United States<i className="icon icon-up-open"
                                                                                 aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="mi"
                                    data-loaded="true">Michigan, United States<i className="icon icon-up-open"
                                                                                 aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="nh" data-loaded="true">New
                              Hampshire, United States<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="oh" data-loaded="true">Ohio,
                              United States<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="wi"
                                    data-loaded="true">Wisconsin, United States<i className="icon icon-up-open"
                                                                                  aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="fl" data-loaded="true">Florida,
                              United States<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="sd" data-loaded="true">South
                              Dakota, United States<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="ks" data-loaded="true">Kansas,
                              United States<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="nc" data-loaded="true">North
                              Carolina, United States<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="ri" data-loaded="true">Rhode
                              Island, United States<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="il"
                                    data-loaded="true">Illinois, United States<i className="icon icon-up-open"
                                                                                 aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="or" data-loaded="true">Oregon,
                              United States<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="ma"
                                    data-loaded="true">Massachusetts, United States<i className="icon icon-up-open"
                                                                                      aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="wa"
                                    data-loaded="true">Washington, United States<i className="icon icon-up-open"
                                                                                   aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="ny" data-loaded="true">New
                              York, United States<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="ia" data-loaded="true">Iowa,
                              United States<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="ga" data-loaded="true">Georgia,
                              United States<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="va"
                                    data-loaded="true">Virginia, United States<i className="icon icon-up-open"
                                                                                 aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="ms"
                                    data-loaded="true">Mississippi, United States<i className="icon icon-up-open"
                                                                                    aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="ar"
                                    data-loaded="true">Arkansas, United States<i className="icon icon-up-open"
                                                                                 aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="az" data-loaded="true">Arizona,
                              United States<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="al" data-loaded="true">Alabama,
                              United States<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="ct"
                                    data-loaded="true">Connecticut, United States<i className="icon icon-up-open"
                                                                                    aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="sc" data-loaded="true">South
                              Carolina, United States<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="pa"
                                    data-loaded="true">Pennsylvania, United States<i className="icon icon-up-open"
                                                                                     aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="md"
                                    data-loaded="true">Maryland, United States<i className="icon icon-up-open"
                                                                                 aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="in" data-loaded="true">Indiana,
                              United States<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="ca"
                                    data-loaded="true">California, United States<i className="icon icon-up-open"
                                                                                   aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="ky"
                                    data-loaded="true">Kentucky, United States<i className="icon icon-up-open"
                                                                                 aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="ut" data-loaded="true">Utah,
                              United States<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="tx" data-loaded="true">Texas,
                              United States<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="tn"
                                    data-loaded="true">Tennessee, United States<i className="icon icon-up-open"
                                                                                  aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="nv" data-loaded="true">Nevada,
                              United States<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="la"
                                    data-loaded="true">Louisiana, United States<i className="icon icon-up-open"
                                                                                  aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="nj" data-loaded="true">New
                              Jersey, United States<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="us" data-loaded="true">United
                              States (No State Affiliation Provided)<i className="icon icon-up-open"
                                                                       aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="uy" data-loaded="true">Uruguay<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="ve" data-loaded="true">Venezuela,
                              Bolivarian Republic of<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                        </ol>
                      </div>
                      <div className="filtergroup" tabIndex="0"><label>Europe</label>
                        <ol className="country-list">
                          <li>
                            <button className="toggle_country_node" data-country-id="al" data-loaded="true">Albania<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="am" data-loaded="true">Armenia<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="at" data-loaded="true">Austria<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="by" data-loaded="true">Belarus<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="be" data-loaded="true">Belgium<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="bg" data-loaded="true">Bulgaria<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="hr" data-loaded="true">Croatia<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="cy" data-loaded="true">Cyprus<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="cz" data-loaded="true">Czech
                              Republic<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="dk" data-loaded="true">Denmark<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="ee" data-loaded="true">Estonia<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="fi" data-loaded="true">Finland<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="fr" data-loaded="true">France<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="ge" data-loaded="true">Georgia<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="de" data-loaded="true">Germany<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="gi" data-loaded="true">Gibraltar<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="gr" data-loaded="true">Greece<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="hu" data-loaded="true">Hungary<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="is" data-loaded="true">Iceland<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="ie" data-loaded="true">Ireland<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="it" data-loaded="true">Italy<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="lv" data-loaded="true">Latvia<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="lt" data-loaded="true">Lithuania<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="lu" data-loaded="true">Luxembourg<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="mk" data-loaded="true">Macedonia,
                              The Former Yugoslav Republic of<i className="icon icon-up-open" aria-hidden="true" />
                            </button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="mt" data-loaded="true">Malta<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="md" data-loaded="true">Moldova,
                              Republic of<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="mc" data-loaded="true">Monaco<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="nl"
                                    data-loaded="true">Netherlands<i className="icon icon-up-open"
                                                                     aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="no" data-loaded="true">Norway<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="pl" data-loaded="true">Poland<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="pt" data-loaded="true">Portugal<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="ro" data-loaded="true">Romania<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="ru" data-loaded="true">Russian
                              Federation<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="rs" data-loaded="true">Serbia<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="sk" data-loaded="true">Slovakia<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="si" data-loaded="true">Slovenia<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="es" data-loaded="true">Spain<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="se" data-loaded="true">Sweden<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="ch"
                                    data-loaded="true">Switzerland<i className="icon icon-up-open"
                                                                     aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="tr" data-loaded="true">Turkey<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="ua" data-loaded="true">Ukraine<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="gb" data-loaded="true">United
                              Kingdom<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                        </ol>
                      </div>
                      <div className="filtergroup" tabIndex="0"><label>Australia and Oceania</label>
                        <ol className="country-list">
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="nsw" data-loaded="true">New
                              South Wales, Australia<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="qld"
                                    data-loaded="true">Queensland, Australia<i className="icon icon-up-open"
                                                                               aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="vic"
                                    data-loaded="true">Victoria, Australia<i className="icon icon-up-open"
                                                                             aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-subdivision-id="wa" data-loaded="true">Western
                              Australia, Australia<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="au" data-loaded="true">Australia
                              (No State Affiliation Provided)<i className="icon icon-up-open" aria-hidden="true" />
                            </button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="nz" data-loaded="true">New
                              Zealand<i className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                        </ol>
                      </div>
                      <div className="filtergroup" tabIndex="0"><label>Africa</label>
                        <ol className="country-list">
                          <li>
                            <button className="toggle_country_node" data-country-id="dz" data-loaded="true">Algeria<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="cm" data-loaded="true">Cameroon<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="eg" data-loaded="true">Egypt<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="et" data-loaded="true">Ethiopia<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="gm" data-loaded="true">Gambia<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="gh" data-loaded="true">Ghana<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="ke" data-loaded="true">Kenya<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="ly" data-loaded="true">Libya<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="mw" data-loaded="true">Malawi<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="ma" data-loaded="true">Morocco<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="na" data-loaded="true">Namibia<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="ng" data-loaded="true">Nigeria<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="rw" data-loaded="true">Rwanda<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="za" data-loaded="true">South Africa<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="sd" data-loaded="true">Sudan<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="sz" data-loaded="true">Swaziland<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="tn" data-loaded="true">Tunisia<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="ug" data-loaded="true">Uganda<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                          <li>
                            <button className="toggle_country_node" data-country-id="zw" data-loaded="true">Zimbabwe<i
                              className="icon icon-up-open" aria-hidden="true" /></button>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "none" }} id="filter-popup-bgoverlay" />

                  {/*  */}

 <ul id="network-map-concepts" style={{}} role="menubar">
                    <li className="concept-badge-large-container" role="none">
                      <button className="world-map-concept concept-badge-large dropdown-toggle" data-loaded="false"
                              role="menuitem" type="button" aria-expanded="false"
                              data-concept-uuid="245c3722-4f99-4cab-ba7e-4e0e665f8c50" data-rank-thickness="8"
                              data-rank-size="32" data-rank-value="1"><span className="concept-wrapper"><span
                        className="rank"><canvas width="32" height="32"></canvas></span><span
                        className="concept">Therapeutics</span><span
                        className="thesauri">Medicine &amp; Life Sciences</span></span></button>
                      <div className="dropdown-container"></div>
                    </li>
                    <li className="concept-badge-large-container" role="none">
                      <button className="world-map-concept concept-badge-large dropdown-toggle" data-loaded="false"
                              role="menuitem" type="button" aria-expanded="false"
                              data-concept-uuid="6c631410-8f5e-4478-bef7-e4d97b48a1c9" data-rank-thickness="8"
                              data-rank-size="32" data-rank-value="2.216983303780365"><span className="concept-wrapper"><span
                        className="rank"><canvas width="32" height="32"></canvas></span><span
                        className="concept">Databases</span><span
                        className="thesauri">Medicine &amp; Life Sciences</span></span></button>
                      <div className="dropdown-container"></div>
                    </li>
                    <li className="concept-badge-large-container" role="none">
                      <button className="world-map-concept concept-badge-large dropdown-toggle" data-loaded="false"
                              role="menuitem" type="button" aria-expanded="false"
                              data-concept-uuid="d60c34a8-8053-43e7-a3b3-7d302faad087" data-rank-thickness="8"
                              data-rank-size="32" data-rank-value="2.339415970674149"><span className="concept-wrapper"><span
                        className="rank"><canvas width="32" height="32"></canvas></span><span className="concept">Deep learning</span><span
                        className="thesauri">Engineering &amp; Materials Science</span></span></button>
                      <div className="dropdown-container"></div>
                    </li>
                    <li className="concept-badge-large-container" role="none">
                      <button className="world-map-concept concept-badge-large dropdown-toggle" data-loaded="false"
                              role="menuitem" type="button" aria-expanded="false"
                              data-concept-uuid="cd72babf-b39f-43ad-89b6-81de89716ac2" data-rank-thickness="8"
                              data-rank-size="32" data-rank-value="2.470122222774055"><span className="concept-wrapper"><span
                        className="rank"><canvas width="32" height="32"></canvas></span><span
                        className="concept">Population</span><span
                        className="thesauri">Medicine &amp; Life Sciences</span></span></button>
                      <div className="dropdown-container"></div>
                    </li>
                    <li className="concept-badge-large-container" role="none">
                      <button className="world-map-concept concept-badge-large dropdown-toggle" data-loaded="false"
                              role="menuitem" type="button" aria-expanded="false"
                              data-concept-uuid="8b5200fd-c1e7-4da4-9c00-b700d65c2139" data-rank-thickness="8"
                              data-rank-size="32" data-rank-value="2.5240725092685485"><span
                        className="concept-wrapper"><span className="rank"><canvas width="32"
                                                                                   height="32"></canvas></span><span
                        className="concept">Health</span><span className="thesauri">Medicine &amp; Life Sciences</span></span>
                      </button>
                      <div className="dropdown-container"></div>
                    </li>
                    <li className="concept-badge-large-container" role="none">
                      <button className="world-map-concept concept-badge-large dropdown-toggle" data-loaded="false"
                              role="menuitem" type="button" aria-expanded="false"
                              data-concept-uuid="7a152b5a-2460-4593-979a-fcd31bd7d33a" data-rank-thickness="8"
                              data-rank-size="32" data-rank-value="2.534574628174402"><span className="concept-wrapper"><span
                        className="rank"><canvas width="32" height="32"></canvas></span><span className="concept">Machine learning</span><span
                        className="thesauri">Engineering &amp; Materials Science</span></span></button>
                      <div className="dropdown-container"></div>
                    </li>
                    <li className="concept-badge-large-container" role="none">
                      <button className="world-map-concept concept-badge-large dropdown-toggle" data-loaded="false"
                              role="menuitem" type="button" aria-expanded="false"
                              data-concept-uuid="2f1b4ae8-6c7a-4933-8c0f-5cbdf641f550" data-rank-thickness="8"
                              data-rank-size="32" data-rank-value="2.678429036677522"><span className="concept-wrapper"><span
                        className="rank"><canvas width="32" height="32"></canvas></span><span className="concept">Cohort Studies</span><span
                        className="thesauri">Medicine &amp; Life Sciences</span></span></button>
                      <div className="dropdown-container"></div>
                    </li>
                    <li className="concept-badge-large-container" role="none">
                      <button className="world-map-concept concept-badge-large dropdown-toggle" data-loaded="false"
                              role="menuitem" type="button" aria-expanded="false"
                              data-concept-uuid="171f392f-a941-4a87-86ba-5c439eb0c091" data-rank-thickness="8"
                              data-rank-size="32" data-rank-value="3.0456710106243974"><span
                        className="concept-wrapper"><span className="rank"><canvas width="32"
                                                                                   height="32"></canvas></span><span
                        className="concept">Pandemics</span><span
                        className="thesauri">Medicine &amp; Life Sciences</span></span></button>
                      <div className="dropdown-container"></div>
                    </li>
                    <li className="concept-badge-large-container" role="none">
                      <button className="world-map-concept concept-badge-large dropdown-toggle" data-loaded="false"
                              role="menuitem" type="button" aria-expanded="false"
                              data-concept-uuid="b89e33ce-546f-4c76-9075-168660363009" data-rank-thickness="8"
                              data-rank-size="32" data-rank-value="3.180666122866867"><span className="concept-wrapper"><span
                        className="rank"><canvas width="32" height="32"></canvas></span><span
                        className="concept">Experiments</span><span className="thesauri">Engineering &amp; Materials Science</span></span>
                      </button>
                      <div className="dropdown-container"></div>
                    </li>
                    <li className="concept-badge-large-container" role="none">
                      <button className="world-map-concept concept-badge-large dropdown-toggle" data-loaded="false"
                              role="menuitem" type="button" aria-expanded="false"
                              data-concept-uuid="cc0e7dfa-b19b-4b2c-9a58-018b6f59255c" data-rank-thickness="8"
                              data-rank-size="32" data-rank-value="3.2599041473227195"><span
                        className="concept-wrapper"><span className="rank"><canvas width="32"
                                                                                   height="32"></canvas></span><span
                        className="concept">method</span><span
                        className="thesauri">Earth &amp; Environmental Sciences</span></span></button>
                      <div className="dropdown-container"></div>
                    </li>
                    <li className="concept-badge-large-container" role="none">
                      <button className="world-map-concept concept-badge-large dropdown-toggle" data-loaded="false"
                              role="menuitem" type="button" aria-expanded="false"
                              data-concept-uuid="e6b05550-8441-4cc1-a7e5-24f752f8f1f3" data-rank-thickness="8"
                              data-rank-size="32" data-rank-value="3.4093326209295127"><span
                        className="concept-wrapper"><span className="rank"><canvas width="32"
                                                                                   height="32"></canvas></span><span
                        className="concept">Costs</span><span
                        className="thesauri">Engineering &amp; Materials Science</span></span></button>
                      <div className="dropdown-container"></div>
                    </li>
                    <li className="concept-badge-large-container" role="none">
                      <button className="world-map-concept concept-badge-large dropdown-toggle" data-loaded="false"
                              role="menuitem" type="button" aria-expanded="false"
                              data-concept-uuid="e779b469-51e1-42d1-b630-60aa1a9b4842" data-rank-thickness="8"
                              data-rank-size="32" data-rank-value="3.420807286132336"><span className="concept-wrapper"><span
                        className="rank"><canvas width="32" height="32"></canvas></span><span
                        className="concept">Neoplasms</span><span
                        className="thesauri">Medicine &amp; Life Sciences</span></span></button>
                      <div className="dropdown-container"></div>
                    </li>
                    <li className="concept-badge-large-container" role="none">
                      <button className="world-map-concept concept-badge-large dropdown-toggle" data-loaded="false"
                              role="menuitem" type="button" aria-expanded="false"
                              data-concept-uuid="69ccd672-085b-47d4-be8e-b053a48462cf" data-rank-thickness="8"
                              data-rank-size="32" data-rank-value="3.430824573741588"><span className="concept-wrapper"><span
                        className="rank"><canvas width="32" height="32"></canvas></span><span
                        className="concept">Energy</span><span className="thesauri">Chemical Compounds</span></span>
                      </button>
                      <div className="dropdown-container"></div>
                    </li>
                    <li className="concept-badge-large-container" role="none">
                      <button className="world-map-concept concept-badge-large dropdown-toggle" data-loaded="false"
                              role="menuitem" type="button" aria-expanded="false"
                              data-concept-uuid="5e58977f-3a79-45d7-8b6e-5c72d7e59a27" data-rank-thickness="8"
                              data-rank-size="32" data-rank-value="3.5536071732236723"><span
                        className="concept-wrapper"><span className="rank"><canvas width="32"
                                                                                   height="32"></canvas></span><span
                        className="concept">Time</span><span className="thesauri">Chemical Compounds</span></span>
                      </button>
                      <div className="dropdown-container"></div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div id="new-modal-overlay"></div>
        </div>
      </main>

      <footer id="page-footer" className="main-footer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="content-navigation ">
              <div dir="ltr" className="footer-columns">
                <div className="footer-column">
                  <p>
                    Powered by{" "}
                    <a href="http://www.elsevier.com/online-tools/research-intelligence/products-and-services/pure">Pure</a>,{" "}
                    <a href="http://www.scopus.com/">Scopus</a> &amp;{" "}
                    <a href="https://www.elsevier.com/products/elsevier-fingerprint-engine">Elsevier Fingerprint Engine™</a>
                  </p>
                  <p>
                    All content on this site: Copyright © 2024 <a href="http://www.elsevier.com">Elsevier B.V.</a> or
                    its licensors and contributors. All rights are reserved, including those for text and data mining,
                    AI training, and similar technologies. For all open access content, the Creative Commons licensing
                    terms apply
                  </p>
                  <p>We use cookies to help provide and enhance our service and tailor content. By continuing you agree
                    to the <a href="/en/about/cookies/">use of cookies</a>
                  </p>
                  <p><a href="https://researchoutput.ncku.edu.tw/admin/workspace.xhtml">Log in to Pure</a></p>
                  <p />
                </div>
                <div className="footer-column">
                  <p>
                    <a href="/en/web-accessibility/" rel="nofollow" target="_blank">About web accessibility</a>
                  </p>
                  <p />
                  <p />
                  <p>
                    <a href="https://elsevier.responsibledisclosure.com/hc/en-us/requests/new" target="_blank"
                       rel="nofollow">Report vulnerability</a>
                  </p>
                </div>
                <div className="footer-column">
                  <p>
                    <a href="/en/contact/index/">Contact us</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="back-to-top" style={{display: "block"}}>
          <a href="#" className="back-to-top" aria-label="Go to top"><i className="icon icon-up-open"></i></a>
        </div>
      </footer>
    </>
  )
}
