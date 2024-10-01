import "./Login.scss";
import "./Login2.scss";
import "./Login3.scss";
import "./LoginMobile.scss";

export const Login = () => {
  //

  return (
    <>
      <div id="wb-head">
        <div id="wb-head-in">

          <header>
            <nav role="navigation">
              <div id="gcwu-gcnb"><h2><span>Site</span> menu</h2>
                <div id="gcwu-gcnb-in">
                  <div id="gcwu-gcnb-fip">
                    <div id="gcwu-sig">
                      <div id="gcwu-sig-in">
                        <div id="gcwu-sig-eng" title="Government of Canada"><img id="Header_imgSIG"
                                                                                 src="/assets/login/sig-eng.gif"
                                                                                 alt="Government of Canada"
                                                                                 style={{height:"20px",width:"214px",position:"absolute", top:"-10px", left:0,}}/>
                        </div>
                      </div>
                    </div>
                    <ul>
                      <li id="gcwu-gcnb1"><a id="Header_hlCanadaGcCa" rel="external"
                                             href="http://www.canada.ca/home.html" target="_blank">Canada.ca</a></li>
                      <li id="gcwu-gcnb2"><a id="Header_hlServices" rel="external"
                                             href="http://www.canada.ca/en/services/index.html"
                                             target="_blank">Services</a></li>
                      <li id="gcwu-gcnb3"><a id="Header_hlDepartment" rel="external"
                                             href="http://www.canada.ca/depts/major/depind-eng.html"
                                             target="_blank">Departments</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>

            <div id="gcwu-bnr" role="banner">
              <div id="gcwu-bnr-in">
                <div id="gcwu-wmms">
                  <div id="gcwu-wmms-in">
                    <div id="gcwu-wmms-fip" title="Symbol of the Government of Canada"
                         style={{position:"absolute", right: 0, width:"147px", height:"39px"}}>
                      <img id="Header_imgWMMS" src="/assets/login/wmms.gif"
                           alt="Symbol of the Government of Canada" style={{width:"126px", height:"30px", marginLeft:"20px"}}/>
                    </div>
                  </div>
                </div>
                <div id="gcwu-title"><p id="gcwu-title-in"><a id="Header_hlSysHome" href="../db-tb/db-tb.aspx">Research
                  Portal</a>
                </p></div>
              </div>
            </div>
            <script>
              var Confirmed = false;
            </script>
          </header>
        </div>
      </div>

      <div id="wb-core">
        <div id="wb-core-in" className="equalize">
          {/*<div id="wb-main" role="main" style={{minHeight: "509px"}}>*/}
          <div id="wb-main" role="main">
            <div id="wb-main-in">
              <h1 id="wb-cont">
                Welcome to the Research Portal
              </h1>

              <div className="span-8">
                <div className="span-5 row-start">
                  <p>
                    The Research Portal is only for UEF Staff, Lecturers and Employees, individuals involved
                    in the process of scientific research, preparation of proposals, research projects for
                    funding from the University, in the process of award management and in the process of
                    evaluating the merits of the funding application.
                  </p>
                  <p>
                    Before using the Research Portal, you must read the Terms and Conditions and Transparency
                    (see below). By logging in and using this system, it means that you understand these
                    policies and conditions and you agree to use your personal information for management
                    purposes.
                  </p>
                </div>


                <div id="crmform" className="span-3 background-light row-end">
                  <h2 className="background-accent">
                    Sign In</h2>
                  <div id="cphMainContent_lgnSiteLogin_vlsSiteLoginValidationSummary" className="module-attention"
                       style={{display:"none"}}>

                  </div>

                  <label htmlFor="ctl00_cphMainContent_lgnSiteLogin_UserName"
                         id="cphMainContent_lgnSiteLogin_lblUserName">Email:</label>
                  <span id="cphMainContent_lgnSiteLogin_UserNameRequired" className="color-attention"
                        style={{visibility:"hidden"}}>*</span><br/>
                  <span id="ctl00_cphMainContent_lgnSiteLogin_UserName_wrapper"
                        className="riSingle RadInput RadInput_Default" style={{width:"160px"}}><input
                  id="ctl00_cphMainContent_lgnSiteLogin_UserName" name="ctl00$cphMainContent$lgnSiteLogin$UserName"
                  size={20} className="riTextBox riEnabled width-90" required placeholder="Email" type="text"
                  value="" /><input id="ctl00_cphMainContent_lgnSiteLogin_UserName_ClientState"
                                  name="ctl00_cphMainContent_lgnSiteLogin_UserName_ClientState" type="hidden"
                                  autoComplete="off"
                                  value="{&quot;enabled&quot;:true,&quot;emptyMessage&quot;:&quot;&quot;,&quot;validationText&quot;:&quot;&quot;,&quot;valueAsString&quot;:&quot;&quot;,&quot;lastSetTextBoxValue&quot;:&quot;&quot;}" /></span>
                  <label htmlFor="ctl00_cphMainContent_lgnSiteLogin_Password"
                         id="cphMainContent_lgnSiteLogin_lblPassword">Password:</label>
                  <span id="cphMainContent_lgnSiteLogin_PasswordRequired" className="color-attention"
                        style={{visibility:"hidden"}}>*</span><br/>
                  <span id="ctl00_cphMainContent_lgnSiteLogin_Password_wrapper"
                        className="riSingle RadInput RadInput_Default" style={{width:"160px"}}><input
                    id="ctl00_cphMainContent_lgnSiteLogin_Password" name="ctl00$cphMainContent$lgnSiteLogin$Password"
                    size={20} className="riTextBox riEnabled width-60" required placeholder="Password"
                    type="password" autoComplete="off" /><input
                    id="ctl00_cphMainContent_lgnSiteLogin_Password_ClientState"
                    name="ctl00_cphMainContent_lgnSiteLogin_Password_ClientState" type="hidden" autoComplete="off"
                    value="{&quot;enabled&quot;:true,&quot;emptyMessage&quot;:&quot;&quot;,&quot;validationText&quot;:&quot;&quot;,&quot;valueAsString&quot;:&quot;&quot;,&quot;lastSetTextBoxValue&quot;:&quot;&quot;}" /></span>


                  <div className="margin-top-medium">

                    <span id="ctl00_cphMainContent_lgnSiteLogin_btnLogin"
                          className="RadButton RadButton_Default rbLinkButton rbRounded button button-accent"
                          onClick={() => {}} tabIndex={0}><span>Sign In</span><input
                      id="ctl00_cphMainContent_lgnSiteLogin_btnLogin_ClientState"
                      name="ctl00_cphMainContent_lgnSiteLogin_btnLogin_ClientState" type="hidden" autoComplete="off"
                      value="{&quot;text&quot;:&quot;Sign In&quot;,&quot;value&quot;:&quot;&quot;,&quot;checked&quot;:false,&quot;target&quot;:&quot;&quot;,&quot;navigateUrl&quot;:&quot;&quot;,&quot;commandName&quot;:&quot;Login&quot;,&quot;commandArgument&quot;:&quot;&quot;,&quot;autoPostBack&quot;:true,&quot;selectedToggleStateIndex&quot;:0,&quot;validationGroup&quot;:null,&quot;readOnly&quot;:false,&quot;primary&quot;:false,&quot;enabled&quot;:true}" /></span>
                  </div>
                  <p className="margin-bottom-small">
                    New here? <a id="cphMainContent_lgnSiteLogin_hlkSignUp" href="reg-insc.aspx">Create account</a></p>
                  <p className="margin-top-small">
                    I forgot my{" "}
                    <a id="cphMainContent_lgnSiteLogin_hlkForgotPassword" rel="external" href="pr-cmp.aspx">password</a>.
                  </p>
                </div>

              </div>
              <div className="clear" />


              <dl id="gcwu-date-mod" role="contentinfo">
                <dt>Version:</dt>
                <dd>46.0.2408.16 ..</dd>
              </dl>

              <div className="clear"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="wb-foot">
        <div id="wb-foot-in">
          <footer><h2 id="wb-nav">
            Footer</h2>
            <nav role="navigation">
              <div id="gcwu-sft"><h3>Site footer</h3>
                <div id="gcwu-sft-in">
                  <div id="gcwu-tctr">
                    <ul>
                      <li className="gcwu-tc"><a id="Footer_hlTermsandCond" title="Terms and conditions" rel="license"
                                                 href="tc-avis.aspx">Terms and conditions</a></li>
                      <li className="gcwu-tr"><a id="Footer_hlTransparency" title="Transparency"
                                                 href="/s/transparency-transparence.aspx">Transparency</a></li>
                    </ul>
                  </div>
                  <div className="clear"></div>
                  <div className="span-2">
                    <div className="gcwu-col-head"><a id="Footer_hlAboutUs" title="About us" href="about-propos.aspx">About
                      us</a></div>
                  </div>
                  <div className="span-2">
                    <div className="gcwu-col-head"><a id="Footer_hlHelp" title="Link to help page"
                                                      href="help-aide.aspx">Help</a></div>
                  </div>
                  <div className="span-2">
                    <div className="gcwu-col-head"><a id="Footer_hlContactUs" title="This link opens in a new window"
                                                      href="contact.aspx">Contact us</a></div>
                  </div>
                  <div className="span-2">
                    <div className="gcwu-col-head">
                      <a id="Footer_LoginStatus1" title="Sign in" href="#">Sign in</a></div>
                  </div>
                </div>
              </div>
            </nav>

            <nav role="navigation">
              <div id="gcwu-gcft"><h3>Government of Canada footer</h3>
                <div id="gcwu-gcft-in">
                  <div id="gcwu-gcft-fip">
                    <ul>
                      <li><a id="Footer_hlkHealthCanada" title="Health (This link opens in a new window)" rel="external"
                             href="http://healthycanadians.gc.ca/index-eng.php" target="_blank"><span>Health</span></a>
                      </li>
                      <li><a id="Footer_hlkTravel" title="Travel (This link opens in a new window)" rel="external"
                             href="http://www.voyage.gc.ca/index-eng.asp" target="_blank"><span>Travel</span></a></li>
                      <li><a id="Footer_Service" title="Service Canada (This link opens in a new window)" rel="external"
                             href="http://www.servicecanada.gc.ca/eng/home.shtml"
                             target="_blank"><span>Service Canada</span></a></li>
                      <li><a id="Footer_hlkJobs" title="Jobs (This link opens in a new window)" rel="external"
                             href="http://www.jobbank.gc.ca/intro-eng.aspx" target="_blank"><span>Jobs</span></a></li>
                      <li><a id="Footer_hlkEconomy" title="Economy (This link opens in a new window)" rel="external"
                             href="http://actionplan.gc.ca/en" target="_blank"><span>Economy</span></a></li>
                      <li id="gcwu-gcft-ca">
                        <div><a id="Footer_hlkCanada" title="Canada.ca (This link opens in a new window)" rel="external"
                                href="http://www.canada.ca/home.html" target="_blank">Canada.ca</a></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </footer>
        </div>
      </div>
    </>
  )
}
