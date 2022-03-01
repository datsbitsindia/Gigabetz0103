import axios from "axios";
import { asyncWrap } from "../../utils/utils";
import { Layout, Menu, message } from "antd";
import { useEffect, useState } from "react";
import Leagues from "./leagues";
import { Content } from "antd/lib/layout/layout";
import cricket from "../../img/015-cricket.png";

const { Sider } = Layout;
const { SubMenu } = Menu;

const AllSportsDetails = () => {
  const [menu, setMenu] = useState<any>();
  const [sportsid, setsportsid] = useState<any>();
  const [changeID, setchangeID] = useState<any>();

  const getSports = async () => {
    const [err, result] = await asyncWrap(axios.get("/sports"));
    if (err) {
      message.error({
        content: "Something went wrong",
        style: { marginTop: "5vh" },
      });
    }
    setsportsid(result.data.data[0].SportID);
    setchangeID(Math.random());
    setMenu(result.data.data);
  };

  useEffect(() => {
    getSports();
  }, []);

  return (
    <>
      <div>
        <div data-application-root className="data-container root">
          <div
            className="layout Application collection vertical"
            data-widget="Application"
          >
            <div
              className="announcementToastShunt node"
              data-container="SpinSport.Application.announcementToastShunt"
            >
              <div
                className="toastShuntLayer displayNone"
                data-widget="ToastShuntAnnouncementsWidget"
              >
                <div
                  className="toastShuntLayerContent empty"
                  data-container="SpinSport.Application.ToastShuntAnnouncementsWidget.TOAST_SHUNT_LAYER"
                />
              </div>
            </div>
            <div
              className="topBar node"
              data-container="SpinSport.Application.topBar"
              style={{ transform: "translate(0px, 0px)" }}
            >
              <div
                className="layout topBarLayout collection vertical"
                data-widget="topBarLayout"
              >
                <div className="firstRow collection horizontal">
                  <div
                    className="menuChannelSelector node"
                    data-container="SpinSport.Application.topBarLayout.menuChannelSelector"
                  >
                    <div
                      data-containerprefix="SpinSport.Application.topBarLayout.MenuWidget[11]"
                      className="brandSelectorContainer"
                      data-containercount={5}
                      data-widget="MenuWidget[11]"
                    >
                      <div
                        className="widgetContainerCollectionItem"
                        data-container="SpinSport.Application.topBarLayout.MenuWidget[11][322437]"
                      >
                        <a
                          className="menuItem selected brandSelectorItem"
                          data-tap-recogniser="true"
                          href="#"
                          style={{
                            color: "rgb(0, 168, 38)",
                            borderColor: "rgb(0, 168, 38)",
                          }}
                          data-widget="BrandSelectableMenuItemWidget[11, 322437]"
                        >
                          <div className="menuLinkIcon iconHolder defaultMenuIconContainer">
                            <div className="defaultMenuIcon" />
                          </div>
                          <div className="menuLinkText">sports</div>
                        </a>
                      </div>
                      <div
                        className="widgetContainerCollectionItem"
                        data-container="SpinSport.Application.topBarLayout.MenuWidget[11][322438]"
                      >
                        <a
                          className="menuItem brandSelectorItem"
                          data-tap-recogniser="true"
                          href="#"
                          style={{
                            color: "rgb(102, 202, 224)",
                            borderColor: "rgb(102, 202, 224)",
                          }}
                          data-widget="BrandSelectableMenuItemWidget[11, 322438]"
                        >
                          <div className="menuLinkIcon iconHolder defaultMenuIconContainer">
                            <div className="defaultMenuIcon" />
                          </div>
                          <div className="menuLinkText">live casino</div>
                        </a>
                      </div>
                      <div
                        className="widgetContainerCollectionItem"
                        data-container="SpinSport.Application.topBarLayout.MenuWidget[11][322439]"
                      >
                        <a
                          className="menuItem brandSelectorItem"
                          data-tap-recogniser="true"
                          href="#"
                          style={{
                            color: "rgb(100, 34, 130)",
                            borderColor: "rgb(100, 34, 130)",
                          }}
                          data-widget="BrandSelectableMenuItemWidget[11, 322439]"
                        >
                          <div className="menuLinkIcon iconHolder defaultMenuIconContainer">
                            <div className="defaultMenuIcon" />
                          </div>
                          <div className="menuLinkText">esports</div>
                        </a>
                      </div>
                      <div
                        className="widgetContainerCollectionItem"
                        data-container="SpinSport.Application.topBarLayout.MenuWidget[11][322440]"
                      >
                        <a
                          className="menuItem brandSelectorItem"
                          data-tap-recogniser="true"
                          href="#"
                          style={{
                            color: "rgb(129, 195, 65)",
                            borderColor: "rgb(129, 195, 65)",
                          }}
                          data-widget="BrandSelectableMenuItemWidget[11, 322440]"
                        >
                          <div className="menuLinkIcon iconHolder defaultMenuIconContainer">
                            <div className="defaultMenuIcon" />
                          </div>
                          <div className="menuLinkText">blog</div>
                        </a>
                      </div>
                      <div
                        className="widgetContainerCollectionItem"
                        data-container="SpinSport.Application.topBarLayout.MenuWidget[11][322441]"
                      >
                        <a
                          className="menuItem brandSelectorItem"
                          data-tap-recogniser="true"
                          style={{
                            color: "rgb(255, 196, 33)",
                            borderColor: "rgb(255, 196, 33)",
                          }}
                          data-widget="BrandSelectableMenuItemWidget[11, 322441]"
                        >
                          <div className="menuLinkIcon iconHolder defaultMenuIconContainer">
                            <div className="defaultMenuIcon" />
                          </div>
                          <div className="menuLinkText">promotions</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="secondRow collection horizontal">
                  <div
                    className="logo node"
                    data-container="SpinSport.Application.topBarLayout.logo"
                  >
                    <div
                      data-tap-recogniser="true"
                      className="siteLogo"
                      data-widget="SimpleButtonWidget[abfda4bf-a8c4-4c9b-8cb6-4662b1f817a1]"
                    />
                  </div>
                  <div
                    className="siteControls node"
                    data-container="SpinSport.Application.topBarLayout.siteControls"
                  >
                    <div
                      className="configuredLayoutComponent sports-site-controls"
                      data-widget="ConfiguredLayoutWidget[sports-site-controls]"
                    >
                      <div className="configuredLayoutLoaderWrapper loadingSpinnerWrapper displayNone">
                        <div className="loadingSpinner">
                          <div className="spinnerWrapper">
                            <div className="spinnerIconWrapper">
                              <div className="loading" />
                            </div>
                            <div className="spinnerCaptionWrapper">
                              <label className="spinnerCaption" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="configuredLayoutContainer"
                        data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls]_CONFIGURED_LAYOUT_CONTAINER"
                      >
                        <div
                          className="layout controls collection horizontal"
                          data-widget="controls"
                        >
                          <div
                            className="odds node re-di-no"
                            data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls].controls.odds"
                          >
                            <div
                              className="dropdownContainer dropdownSquared"
                              data-widget="SquaredOddsTypeSettingOptionWidget[ODDS_TYPE]"
                            >
                              <div
                                className="dropdownSelectedOption re-di-no"
                                data-tap-recogniser="true"
                              >
                                <div className="dropdownSelectedOptionTextContainer">
                                  <div className="dropdownSelectedOptionText">
                                    Decimal
                                  </div>
                                </div>
                                <div className="iconHolder icon-dropdownarrows" />
                              </div>
                              <div className="dropdownOptionsContainer">
                                <div
                                  className="dropdownOptions"
                                  data-tap-recogniser="true"
                                >
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Fractional</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="true"
                                  >
                                    <div className="itemLabel">Decimal</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">American</div>
                                  </div>
                                </div>
                                <div className="dropdownLoading displayNone">
                                  <span className="loading" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="support node re-di-no"
                            data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls].controls.support"
                          >
                            <div
                              className="dropdownContainer dropdownSquared"
                              data-widget="SupportDropdownMenuWidget[2]"
                            >
                              <div
                                className="dropdownSelectedOption re-di-no"
                                data-tap-recogniser="true"
                              >
                                <div className="dropdownSelectedOptionTextContainer">
                                  <div className="dropdownSelectedOptionText">
                                    Support
                                  </div>
                                </div>
                                <div className="iconHolder icon-dropdownarrows" />
                              </div>
                              <div className="dropdownOptionsContainer">
                                <div
                                  className="dropdownOptions"
                                  data-tap-recogniser="true"
                                >
                                  <a
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Help</div>
                                  </a>
                                </div>
                                <div className="dropdownLoading displayNone">
                                  <span className="loading" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="language node re-di-no"
                            data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls].controls.language"
                          >
                            <div
                              className="dropdownContainer dropdownSquared"
                              data-widget="SquaredLanguageOptionWidget"
                            >
                              <div
                                className="dropdownSelectedOption re-di-no"
                                data-tap-recogniser="true"
                              >
                                <div className="dropdownSelectedOptionTextContainer">
                                  <div className="dropdownSelectedOptionText">
                                    English
                                  </div>
                                </div>
                                <div className="iconHolder icon-dropdownarrows" />
                              </div>
                              <div className="dropdownOptionsContainer">
                                <div className="dropdownLoading displayNone">
                                  <span className="loading" />
                                </div>
                                <div
                                  className="dropdownOptions"
                                  data-tap-recogniser="true"
                                >
                                  <div
                                    className="dropdownItem"
                                    data-isselected="true"
                                  >
                                    <div className="itemLabel">English</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Deutsch</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Norsk</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Suomi</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Français</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Dansk</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Español</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Italiano</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Português</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Русский</div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">
                                      Português (Brasil)
                                    </div>
                                  </div>
                                  <div
                                    className="dropdownItem"
                                    data-isselected="false"
                                  >
                                    <div className="itemLabel">Hindi</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bank node"
                            data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls].controls.bank"
                          >
                            <div
                              className="empty"
                              data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls].controls.LoginWidgetSwitcher[SIMPLE_INTENT_TEXT_BUTTON, BANKING_BUTTON]SwitcherWidgetContainer"
                              data-widget="LoginWidgetSwitcher[SIMPLE_INTENT_TEXT_BUTTON, BANKING_BUTTON]"
                            />
                          </div>
                          <div
                            className="signin node"
                            data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls].controls.signin"
                          >
                            <div
                              data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls].controls.LoginWidgetSwitcher[ACCOUNT_MENU, DROPDOWN, LOGIN, HORIZONTAL_LOGIN]SwitcherWidgetContainer"
                              data-widget="LoginWidgetSwitcher[ACCOUNT_MENU, DROPDOWN, LOGIN, HORIZONTAL_LOGIN]"
                            >
                              <div
                                className="loginWidgetComponent loginHorizontalWidget"
                                data-widget="LoginWidget"
                              >
                                <form className="loginForm">
                                  <input
                                    className="registerButton button"
                                    defaultValue="Register"
                                    type="button"
                                    data-tap-recogniser="true"
                                  />
                                  <div className="loginInputs">
                                    <div className="errorContainer" />
                                    <div className="inputContainer usernameInput">
                                      <input
                                        type="text"
                                        placeholder="Username"
                                        maxLength={20}
                                        autoComplete="off"
                                        spellCheck="false"
                                        autoCapitalize="off"
                                      />
                                      <div
                                        className="clearButton displayNone"
                                        data-tap-recogniser="true"
                                      >
                                        <div className="icon-cross" />
                                      </div>
                                    </div>
                                    <div className="inputContainer passwordInput">
                                      <input
                                        type="password"
                                        placeholder="Password"
                                        maxLength={20}
                                      />
                                      <div
                                        className="clearButton displayNone"
                                        data-tap-recogniser="true"
                                      >
                                        <div className="icon-cross" />
                                      </div>
                                    </div>
                                    <div className="linksHolder">
                                      <div
                                        className="forgottenPassword"
                                        data-tap-recogniser="true"
                                      >
                                        Forgot Login?
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="loginButton button submitButton"
                                    data-tap-recogniser="true"
                                  >
                                    <span className="content innerText">
                                      Log in
                                    </span>
                                    <div className="loading displayNone" />
                                  </div>
                                  <input
                                    className="loginSubmit"
                                    defaultValue="Log in"
                                    type="submit"
                                  />
                                </form>
                              </div>
                            </div>
                          </div>
                          <div
                            className="quickSearchIconButton node"
                            data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls].controls.quickSearchIconButton"
                          >
                            <div
                              data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls].controls.ConditionalContentWidget[3311185090].CONDITIONAL_CONTENT_WIDGET_CONTAINER_KEY"
                              data-widget="ConditionalContentWidget[3311185090]"
                            >
                              <div
                                className="quickSearchButtonWidgetComponent searchButton"
                                data-widget="QuickSearchButtonWidget[d44313ca-5188-47f8-88b0-5136cbdc87ab]"
                              >
                                <div
                                  className="searchButtonIcon icon-search"
                                  data-tap-recogniser="true"
                                />
                                <div
                                  className="searchCloseIcon icon-cross displayNone"
                                  data-tap-recogniser="true"
                                />
                                <div
                                  className="searchOverlay empty"
                                  data-container="SpinSport.Application.topBarLayout.ConfiguredLayoutWidget[sports-site-controls].controls.ConditionalContentWidget[3311185090].QuickSearchButtonWidget[ef0f9f62-7c2d-4dbb-8449-ba3b37ed741b].SEARCH_OVERLAY_WIDGET_CONTAINER_KEY"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="regulatoryLobbyTopBar node empty"
                  data-container="SpinSport.Application.topBarLayout.regulatoryLobbyTopBar"
                />
                <div
                  className="topBarThirdRow node"
                  data-container="SpinSport.Application.topBarLayout.topBarThirdRow"
                >
                  <div
                    className="layout thirdRowContainer collection horizontal"
                    data-widget="thirdRowContainer"
                  >
                    <div
                      className="primaryLinks node"
                      data-container="SpinSport.Application.topBarLayout.thirdRowContainer.primaryLinks"
                    >
                      <div
                        data-containerprefix="SpinSport.Application.topBarLayout.thirdRowContainer.MenuWidget[6]"
                        className="primaryLinksMenuWidget"
                        data-containercount={2}
                        data-widget="MenuWidget[6]"
                      >
                        <div
                          className="widgetContainerCollectionItem"
                          data-container="SpinSport.Application.topBarLayout.thirdRowContainer.MenuWidget[6][305777]"
                        >
                          <a
                            className="menuItem primaryLinksMenuItemWidget primaryLinksInPlayMenuItemWidget"
                            data-tap-recogniser="true"
                            href="#/in-play"
                            style={{
                              color: "rgb(0, 168, 38)",
                              borderColor: "rgb(0, 168, 38)",
                            }}
                            data-widget="InPlayScreenMenuItemWidget[6, 305777]"
                          >
                            <div className="menuLinkIcon iconHolder">
                              <div className="icon-channel-inplay" />
                            </div>
                            <div className="menuLinkText">In-Play</div>
                          </a>
                        </div>
                        <div
                          className="widgetContainerCollectionItem"
                          data-container="SpinSport.Application.topBarLayout.thirdRowContainer.MenuWidget[6][305778]"
                        >
                          <a
                            className="menuItem primaryLinksMenuItemWidget"
                            data-tap-recogniser="true"
                            style={{
                              color: "rgb(255, 196, 33)",
                              borderColor: "rgb(255, 196, 33)",
                            }}
                            data-widget="MenuItemWidget[6, 305778]"
                          >
                            <div className="menuLinkIcon iconHolder">
                              <div className="icon-betwayplus" />
                            </div>
                            <div className="menuLinkText">Promotions</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="favouriteLinks node"
                      data-container="SpinSport.Application.topBarLayout.thirdRowContainer.favouriteLinks"
                    >
                      <div
                        className="categoryListLayout grid"
                        data-widget="CategoryListWidget[true]"
                      >
                        <div
                          className="categoryList baseCategoryListItem"
                          data-tap-recogniser="true"
                        >
                          <a className="categoryListItem" href="#">
                            <div className="categoryListItemWrapper">
                              <div className="icon_container">
                                <img
                                  className="ic_sports"
                                  src={cricket}
                                  // src={require('../img/015-cricket.png')}
                                />
                                <img
                                  className="categoryBadge"
                                  //   // badge_type="live"
                                  src="img/live.png"
                                />
                              </div>
                              <div className="textWrapper">
                                <div className="button_text">Cricket</div>
                              </div>
                            </div>
                          </a>
                          <a className="categoryListItem" href="#">
                            <div className="categoryListItemWrapper">
                              <div className="icon_container">
                                <img
                                  className="ic_sports"
                                  src="img/045-soccer.png"
                                />
                                <img
                                  className="categoryBadge"
                                  //   // badge_type="live"
                                  src="img/live.png"
                                />
                              </div>
                              <div className="textWrapper">
                                <div className="button_text">Football</div>
                              </div>
                            </div>
                          </a>
                          <a className="categoryListItem" href="#">
                            <div className="categoryListItemWrapper">
                              <div className="icon_container">
                                <img
                                  className="ic_sports"
                                  src="img/048-tennis.png"
                                />
                                <img
                                  className="categoryBadge"
                                  //   // badge_type="live"
                                  src="img/live.png"
                                />
                              </div>
                              <div className="textWrapper">
                                <div className="button_text">Tennis</div>
                              </div>
                            </div>
                          </a>
                          <a className="categoryListItem" href="#">
                            <div className="categoryListItemWrapper">
                              <div className="icon_container">
                                <img
                                  className="ic_sports"
                                  src="img/060-betway-boosts.png"
                                />{" "}
                                <img
                                  className="categoryBadge displayNone"
                                  //   // badge_type="live"
                                />
                              </div>
                              <div className="textWrapper">
                                <div className="button_text">Betway Boosts</div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="main pt-280 node"
              data-container="SpinSport.Application.main"
            >
              <div
                className="layout mainLayout collection vertical"
                data-widget="mainLayout"
              >
                <div
                  className="firstRow node"
                  data-container="SpinSport.Application.mainLayout.firstRow"
                >
                  <div
                    className="layout firstRowContainer collection horizontal"
                    data-widget="firstRowContainer"
                  >
                    <div className="sidebar collection vertical">
                      <div
                        className="quickSearch node empty"
                        data-container="SpinSport.Application.mainLayout.firstRowContainer.quickSearch"
                      />

                      <div
                        className="quickNavigation node"
                        data-container="SpinSport.Application.mainLayout.firstRowContainer.quickNavigation"
                      >
                        <div
                          className="layout categoryListLayout collection vertical"
                          data-widget="categoryListLayout"
                        >
                          <div
                            className="categoryListHeaderBar node"
                            data-container="SpinSport.Application.mainLayout.firstRowContainer.categoryListLayout.categoryListHeaderBar"
                          >
                            <div
                              className="headerBar"
                              data-widget="HeaderBarWidget[CategoryList]"
                            >
                              <div className="headerBarContent">
                                <div className="headerIcon" />
                                <div className="headerTitle">All Sports</div>
                                <div className="headerSubtitle" />
                              </div>
                            </div>
                          </div>
                          <div
                            className="categoryListContent node"
                            data-container="SpinSport.Application.mainLayout.firstRowContainer.categoryListLayout.categoryListContent"
                          >
                            <div
                              className="categoryListLayout stacked"
                              data-widget="CategoryListWidget[true]"
                            >
                              <div
                                className="categoryList baseCategoryListItem"
                                data-tap-recogniser="true"
                              >
                                {menu &&
                                  menu.map((item: any) => (
                                    <a
                                      className="categoryListItem"
                                      onClick={() => setsportsid(item.SportID)}
                                      key={item.SportID}
                                    >
                                      <div className="categoryListItemWrapper">
                                        <span className="button_text">
                                          {item.SportName}
                                        </span>{" "}
                                        <img
                                          className="categoryBadge"
                                          //   // badge_type="live"
                                          src="img/live.png"
                                        />
                                      </div>
                                    </a>
                                  ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mainPanel collection vertical">
                      <div className="header collection horizontal">
                        <div className="pageTitle collection vertical">
                          <div
                            className="breadcrumbs node empty"
                            data-container="SpinSport.Application.mainLayout.firstRowContainer.breadcrumbs"
                          ></div>
                          <div
                            className="title node empty"
                            data-container="SpinSport.Application.mainLayout.firstRowContainer.title"
                          ></div>
                        </div>
                        <div
                          className="headerContainer node empty"
                          data-container="SpinSport.Application.mainLayout.firstRowContainer.headerContainer"
                        ></div>
                      </div>
                      <div
                        className="quickNavigationHeaderContainer node empty"
                        data-container="SpinSport.Application.mainLayout.firstRowContainer.quickNavigationHeaderContainer"
                      ></div>
                      <div
                        className="mainPromotion node"
                        data-container="SpinSport.Application.mainLayout.firstRowContainer.mainPromotion"
                      >
                        <div
                          className="promotionCollectionAreaComponent"
                          data-widget="PromotionCarouselAreaWidget[Hero]"
                        >
                          <div className="promotionCollectionAreaLoader displayNone">
                            <div className="promoLoader">
                              <div className="loadingLogo">
                                <div className="loadingGraphic">
                                  <div className="loadingContent">
                                    <div className="spinnerContainer">
                                      <div className="spinner"></div>
                                    </div>
                                    <div className="loadingTextContainer">
                                      <div className="loadingText">
                                        Loading…
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div
                            className="endpoint node"
                            data-container="SpinSport.Application.mainLayout.firstRowContainer.endpoint"
                          >
                            <div
                              className="configuredLayoutComponent sports-home-layout"
                              data-widget="ConfiguredLayoutWidget[sports-home-layout]"
                            >
                              <div className="configuredLayoutLoaderWrapper loadingSpinnerWrapper displayNone">
                                <div className="loadingSpinner">
                                  <div className="spinnerWrapper">
                                    <div className="spinnerIconWrapper">
                                      <div className="loading" />
                                    </div>
                                    <div className="spinnerCaptionWrapper">
                                      <label className="spinnerCaption" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="configuredLayoutContainer"
                                data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout]_CONFIGURED_LAYOUT_CONTAINER"
                              >
                                <div
                                  className="layout 9250 collection vertical"
                                  data-widget={9250}
                                >
                                  <div
                                    className="9253 node"
                                    data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.9253"
                                  ></div>
                                  <div
                                    className="9254 node"
                                    data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.9254"
                                  >
                                    <div
                                      className="inplayScreenContent"
                                      data-widget="premium"
                                    >
                                      <div className="selectionBar"></div>

                                      <div className="scrollableAreaMask displayNone">
                                        <div className="loadingWrapper displayNone">
                                          <div className="loadingModal">
                                            <div className="loading" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="9255 node"
                                    data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.9255"
                                  >
                                    <div
                                      className="topCategoriesFirstGroup homePageTheme bottomSeparator"
                                      data-widget="TopCategoriesFirstGroupWidget"
                                    ></div>
                                  </div>
                                  {sportsid && (
                                    <Leagues
                                      sportsid={sportsid}
                                      changeID={changeID}
                                    />
                                  )}
                                  <div
                                    className="9256 node 9256"
                                    data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.9256"
                                  >
                                    <div
                                      className="promotionListAreaLayout displayNone"
                                      data-widget="PromotionListAreaWidget[BoostsPromotionContentArea]"
                                    >
                                      <div className="promotionListHeaderBar">
                                        <div
                                          className="headerBarWidgetContainer empty"
                                          data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.PromotionListAreaWidget[BoostsPromotionContentArea].HEADER_WIDGET_CONTAINER"
                                        />
                                      </div>
                                      <div
                                        className="promotionListItems"
                                        data-containerprefix="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.PromotionListAreaWidget[BoostsPromotionContentArea]"
                                      />
                                      <div className="promotionListAreaEmptyComponentContainer displayNone">
                                        <div className="emptyTextWrapper promotionListAreaWaitingSpinner">
                                          <div className="empty displayNone">
                                            <div className="emptyText" />
                                          </div>
                                          <div className="loading" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="9257 node empty"
                                    data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.9257"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="dynamicContent node empty"
                            data-container="SpinSport.Application.mainLayout.firstRowContainer.dynamicContent"
                          />
                        </div>

                        <div className="marketingBar collection vertical">
                          <div
                            className="stats node empty"
                            data-container="SpinSport.Application.mainLayout.firstRowContainer.stats"
                          />
                          <div
                            className="promotions node"
                            data-container="SpinSport.Application.mainLayout.firstRowContainer.promotions"
                          >
                            <div
                              className="promotionListAreaLayout displayNone"
                              data-widget="PromotionListAreaWidget[RightSideBarPromotions]"
                            >
                              <div className="promotionListHeaderBar">
                                <div className="headerBarWidgetContainer" />
                              </div>
                              <div
                                className="promotionListItems"
                                data-containerprefix="SpinSport.Application.mainLayout.firstRowContainer.PromotionListAreaWidget[RightSideBarPromotions]"
                              />
                              <div className="promotionListAreaEmptyComponentContainer displayNone" />
                            </div>
                          </div>
                          <div
                            className="crossSell node"
                            data-container="SpinSport.Application.mainLayout.firstRowContainer.crossSell"
                          >
                            <div
                              data-container="SpinSport.Application.mainLayout.firstRowContainer.ExternalIntegrationsSwitcher[EMBEDDED_EXTERNAL_INTEGRATION, EXTERNAL_INTEGRATIONS_MARKETING_SIDEBAR, , ]SwitcherWidgetContainer"
                              data-widget="ExternalIntegrationsSwitcher[EMBEDDED_EXTERNAL_INTEGRATION, EXTERNAL_INTEGRATIONS_MARKETING_SIDEBAR, , ]"
                            >
                              <div
                                className="emptyTextDecorator"
                                data-widget="ResizeableExternalIntegrationWidget[Marketing]"
                              >
                                <div className="innerComponent embeddedExternalIntegrationsWidgetComponent">
                                  <div className="embeddedContentContainer"></div>
                                </div>
                                <div className="emptyTextComponent emptyTextWrapper displayNone embeddedContent">
                                  <div className="empty">
                                    <div className="emptyText">
                                      Content failed to load
                                    </div>
                                  </div>
                                  <div className="loading displayNone" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-links">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12">
                <ul>
                  <li>
                    <a href="#">Betway Corporate</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Affiliate Program</a>
                  </li>
                  <li>
                    <a href="#">Responsible Gaming</a>
                  </li>
                  <li>
                    <a href="#">Privacy &amp; Security</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <ul>
                  <li>
                    <a href="#">Bonus Terms</a>
                  </li>
                  <li>
                    <a href="#">Betting Help</a>
                  </li>
                  <li>
                    <a href="#">Getting Started</a>
                  </li>
                  <li>
                    <a href="#">Online Slots</a>
                  </li>
                  <li>
                    <a href="#">Online Casino</a>
                  </li>
                  <li>
                    <a href="#">Online Roulette</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-12">
                <ul>
                  <li>
                    <a href="#">Online Blackjack</a>
                  </li>
                  <li>
                    <a href="#">Online Betting</a>
                  </li>
                  <li>
                    <a href="#">Betting Sites</a>
                  </li>
                  <li>
                    <a href="#">Football Betting</a>
                  </li>
                  <li>
                    <a href="#">Esports Betting</a>
                  </li>
                  <li>
                    <a href="#">Cricket Betting</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-12">
                <ul>
                  <li>
                    <a href="#">Betting App</a>
                  </li>
                  <li>
                    <a href="#">Horse Racing Betting</a>
                  </li>
                  <li>
                    <a href="#">Tennis Betting</a>
                  </li>
                  <li>
                    <a href="#">Golf Betting</a>
                  </li>
                  <li>
                    <a href="#">Associates</a>
                  </li>
                  <li>
                    <a href="#">Andar Bahar</a>
                  </li>
                  <li>
                    <a href="#">Teen Patti</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="testy-div">
          <div className="testimonial-reel-2 container">
            <div>
              <div className="box">
                <figure className="image">
                  <img className="img-fluid" src="img/12.png" />
                </figure>
              </div>
            </div>
            <div>
              <div className="box">
                <figure className="image">
                  <img className="img-fluid" src="img/123.png" />
                </figure>
              </div>
            </div>
            <div>
              <div className="box">
                <figure className="image">
                  <img className="img-fluid " src="img/124.png" />
                </figure>
              </div>
            </div>
            <div>
              <div className="box">
                <figure className="image">
                  <img className="img-fluid " src="img/125.png" />
                </figure>
              </div>
            </div>
            <div>
              <div className="box">
                <figure className="image">
                  <img className="img-fluid" src="img/12.png" />
                </figure>
              </div>
            </div>
            <div>
              <div className="box">
                <figure className="image">
                  <img className="img-fluid" src="img/123.png" />
                </figure>
              </div>
            </div>
            <div>
              <div className="box">
                <figure className="image">
                  <img className="img-fluid " src="img/124.png" />
                </figure>
              </div>
            </div>
            <div>
              <div className="box">
                <figure className="image">
                  <img className="img-fluid " src="img/125.png" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <p>Copyright © 2021 GIGABITE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AllSportsDetails;
