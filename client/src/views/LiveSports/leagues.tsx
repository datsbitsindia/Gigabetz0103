// @ts-nocheck
import axios from "axios";
import { Descriptions, message, Collapse, Row, Col, Card, Button } from "antd";
import { useAuth } from "../../context/auth-context";

import { asyncWrap } from "../../utils/utils";
import { useEffect, useState } from "react";
import LeagueMatches from "./LeagueMatches";
import MatchScore from "./matchScore";
import BetModal from "./BetModal";
import "../../css/style1.css";
import { withRouter } from "react-router-dom";
import leaguesData from "./leaguesData";
import matchdata from "./matchData";

const { Panel } = Collapse;

const Leagues = (props: any) => {
  const { sportsid, changeID } = props;
  const [matchId, setMatchId] = useState<any>();
  const [leagues, setLeagues] = useState<any>();
  const [leagueList, setLeagueList] = useState<any>([]);
  const [gamedata, setgamedata] = useState<any>();
  const [matches, setMatches] = useState<any>();
  const [tableData, setTableData] = useState<any>([]);
  const [currentMatchId, setCurrentMatchId] = useState<any>("");
  const [openBet, setOpenBet] = useState<boolean>(false);

  const [eventName, setEventName] = useState<string>();
  const [betId, setBetId] = useState<number>();
  const [fiId, setFiId] = useState<number>();
  const [itId, setitId] = useState<number>();
  const [odValue, setOdValue] = useState<string>();
  const [marketGroup, setMarketGroup] = useState<string>();

  const { user } = useAuth();

  const columns = [
    {
      title: "Matches",
      render: (item: any) => (
        <p>
          {item.home.name} - {item.away.name}
        </p>
      ),
    },
    {
      title: "Home",
    },
    {
      title: "Draw",
    },
    {
      title: "Away",
    },
  ];

  const TABLE_CONSTANTS = {
    MG: "MG",
    MA: "MA",
    PA: "PA",
    NA: "NA",
  };

  const tableParser = (rawData: any) => {
    SubmitJsonData(rawData, 1);
    SubmitResultData();
    const aTables = [];
    let table: any;
    let row = -1;
    let column = -1;

    rawData.forEach(
      ({
        type,
        NA,
        OD,
        // FI, ID, IT, OR, SU, PY, SY, FF, HA
      }) => {
        switch (type) {
          case TABLE_CONSTANTS.MG:
            if (table) {
              row = -1;
              column = -1;
              aTables.push(table);
            }
            table = {
              title: NA,
              columns: [],
              rows: [],
            };
            break;

          case TABLE_CONSTANTS.MA:
            column++;
            row = -1;
            table.columns.push(NA);
            break;

          case TABLE_CONSTANTS.PA:
            {
              row++;
              const key = table.columns[column] || NA;
              const cellValue = OD || NA;
              const rowItem = table.rows[row];
              table.rows[row] = rowItem?.length
                ? [
                    ...rowItem,
                    {
                      [key]: cellValue,
                      // FI, ID, IT, OR, SU, PY, SY, FF, HA
                    },
                  ]
                : [
                    {
                      [key]: cellValue,
                      //  FI, ID, IT, OR, SU, PY, SY, FF, HA
                    },
                  ];
            }
            break;

          default:
            break;
        }
      }
    );

    if (table && table?.title !== aTables[aTables.length - 1]?.title) {
      aTables.push(table);
    }
    SubmitJsonData(aTables, 2);
    return aTables;
  };

  // const TABLE_CONSTANTS = {
  //   MG: "MG", // Market Group, table title
  //   MA: "MA", // Market, Table Row
  //   PA: "PA", // Participant, Table Row Column
  //   NA: "NA", // Name
  // };

  // const tableParser = (rawData: any) => {
  //   const aTables = [];
  //   let table;
  //   let column = -1;

  //   rawData.forEach(({ type, ...rest }) => {
  //     switch (type) {
  //       case TABLE_CONSTANTS.MG:
  //         if (table) {
  //           column = -1;
  //           aTables.push(table);
  //         }
  //         table = { ...rest };
  //         break;

  //       case TABLE_CONSTANTS.MA:
  //         column++;
  //         if (!table["Column"]) {
  //           table["Column"] = [{ ...rest, ROWS: [] }];
  //         } else {
  //           table["Column"].push({ ...rest, ROWS: [] });
  //         }
  //         break;

  //       case TABLE_CONSTANTS.PA:
  //         {
  //           table["Column"][column]["ROWS"].push({ ...rest });
  //         }
  //         break;

  //       default:
  //         break;
  //     }
  //   });

  //   if (Object.keys(table).length) {
  //     aTables.push(table);
  //   }
  //   console.log(aTables);
  //   return aTables;
  // };

  const leagueParser = (rawData: any) => {
    let LeagueData = [];
    let leagueList = [];
    for (let i = 0; i < rawData.length; i++) {
      if (i === 0) {
        setMatchId(rawData[i].league.id);
      }
      if (rawData[i].league && rawData[i].league.id) {
        if (LeagueData.indexOf(rawData[i].league.id) === -1) {
          LeagueData.push(rawData[i].league.id);
          leagueList.push(rawData[i].league);
        }
      }
    }
    return leagueList;
  };

  const getMatchesData = async () => {
    // uncomment for api
    // console.log(currentMatchId);
    // if (currentMatchId) {
    //   const [err, result] = await asyncWrap(
    //     axios.get(`/api/matches?match_id=${currentMatchId}`)
    //   );
    //   if (err) {
    //     return message.error({
    //       content: "something went wrong",
    //       style: { margintop: "5vh" },
    //     });
    //   }
    //   setTableData(tableParser(result.data.data.results[0]));
    //   newParser(result.data.data.results[0]);
    //   setgamedata(result.data.data.results[0]);
    // }

    // comment if there is api
    if (currentMatchId) {
      setTableData(tableParser(matchdata[0]));
      setgamedata(matchdata[0]);
    }
  };

  const getMatchesScore = async (Id) => {
    const [err, result] = await asyncWrap(
      axios.get(`/api/matches?match_id=` + Id)
    );
    if (err) {
      return message.error({
        content: "something went wrong",
        style: { margintop: "5vh" },
      });
    }
    return tableParser(result.data.data.results[0]);
  };

  const getData = async () => {
    // uncomment this for api
    // const [err, result] = await asyncWrap(
    //   axios.get(`/api/sports?sports_id=${sportsid}`)
    // );
    // if (err) {
    //   return message.error({
    //     content: "something went wrong",
    //     style: { margintop: "5vh" },
    //   });
    // }

    // // for api
    // setLeagueList(leagueParser(result.data.data.results));
    // setLeagues(result.data.data.results);

    //for raw data
    setLeagueList(leagueParser(leaguesData));
    setLeagues(leaguesData);
  };

  const SubmitJsonData = async (json, id) => {
    const data = {
      sportId: sportsid,
      ITID: id,
      FIID: currentMatchId,
      jsonString: JSON.stringify(json),
    };
    const [error, result] = await asyncWrap(axios.post("json-result", data));
    if (!result) {
      console.log(error);
    }
  };

  const SubmitResultData = async () => {
    const [error, result] = await asyncWrap(
      axios.get(`/api/result?match_id=${currentMatchId}&sportId=${sportsid}`)
    );
    if (!result) {
      console.log(error);
    }
  };

  const ShowMatchList = () => {
    if (matchId && leagues) {
      return leagues.map((item, i) => {
        if (item.league.id === matchId) {
          return (
            <>
              <div
                className="col-lg-8"
                onClick={() => setCurrentMatchId(item.id)}
              >
                <div
                  className="data"
                  style={{
                    borderBottom: "1px solid rgba(0,0,0,.125)",
                  }}
                >
                  {/* <span>01:30</span> */}
                  <p
                    style={{
                      color: "#a3a3a3",
                    }}
                  >
                    {item.home.name} - {item.away.name}
                  </p>
                  {/* <div className=" icon-red icon-cashout" />
                  <div className=" icon-red icon-channel-inplay " /> */}
                </div>
              </div>
              <MatchScore matchId={item.id} sportId={sportsid} />
            </>
          );
        }
      });
    } else {
      return "";
    }
  };

  const LeagueListTable = () => {
    return leagueList.map((item, i) => {
      return (
        <div
          onClick={() => setMatchId(item.id)}
          className="mainContent"
          data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[cricket].cricket.MAIN_WIDGET_CONTAINER"
        >
          <div
            className="topGroupEventList"
            data-widget="TopGroupEventListWidget[cricket]"
          >
            <div
              className="eventListContainer"
              data-container="EVENT_TABLE_LIST[SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[cricket].TopGroupEventListWidget[cricket],cricket]"
            >
              <div
                className="eventTableItemCollection"
                data-widget="EventTableListWidget[cricket_international_twenty20-internationals, cricket_international_twenty20-internationals]"
              >
                <div className="collapsablePanel cricket_international_twenty20-internationals_2021-11-19">
                  <div
                    className="collapsableHeader"
                    // collapsed="false"
                    data-tap-recogniser="true"
                  >
                    <div className="arrow iconHolder">
                      <div className="arrowIcon icon-arrow-down" />
                    </div>
                    <div className="titleTextWrapper">
                      <div className="titleText">{item.name}</div>
                      <div className="subTitle" />
                    </div>
                    <div className="Message" />
                    <div
                      className="marketFilteringHeaderContainer"
                      data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[cricket].TopGroupEventListWidget[cricket].EventTableListWidget[cricket_international_twenty20-internationals, cricket_international_twenty20-internationals].MarketFilteringWidgetContainer[cricket_international_twenty20-internationals_2021-11-19]"
                    >
                      <div
                        className="marketFilteringHeaderWrapper"
                        data-widget="MarketFilteringHeaderWidget[cricket_international_twenty20-internationals_2021-11-19, cricket_international_twenty20-internationals]"
                      >
                        <div className="headerLoaderWrapper displayNone">
                          <div className="loading" />
                        </div>
                        <div className="headerContainer headers2x">
                          <div className="0">
                            <span>{/* Home */}</span>
                          </div>
                          <div className="1">
                            <span>{/* Away */}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="collapsableContent"
                    // collapsed="false"
                    data-container="SpinSport.Application.mainLayout.firstRowContainer.ConfiguredLayoutWidget[sports-home-layout].9250.TopCategoriesFirstGroupWidget.CategoryTopGroupWithHeaderWidget[cricket].TopGroupEventListWidget[cricket].EventTableListWidget[cricket_international_twenty20-internationals, cricket_international_twenty20-internationals].EventListWidgetContainer[cricket_international_twenty20-internationals_2021-11-19]"
                  >
                    <div
                      className="eventItemCollection"
                      data-tap-recogniser="true"
                      data-widget="EventListWidget[cricket_international_twenty20-internationals, 2021-11-19]"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="spinner displayNone">
              <div className="emptyTextWrapper">
                <div className="empty displayNone">
                  <div className="emptyText" />
                </div>
                <div className="loading" />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  // need to add logic of rediect
  const CheckUserLoggedIn = () => {
    if (!user) {
      props.history.push("/login");
    } else {
      setOpenBet(true);
    }
  };

  const SetValues = (eventName, fiId, betId, itId, odValue, marketGroup) => {
    setFiId(fiId);
    setBetId(betId);
    setEventName(eventName);
    setitId(itId);
    setOdValue(odValue);
    setMarketGroup(marketGroup);
    setOpenBet(true);
  };

  const calculate = (odValue) => {
    let some = odValue.split(",");
    let result = 1;
    for (let i = 0; i < some.length; i++) {
      let val = some[i].split("/");
      result = result + val[0] / val[1];
    }
    let formattedResult = result.toFixed(2);
    if (isNaN(formattedResult)) {
      return odValue;
    } else {
      return formattedResult;
    }
  };

  const AddTable = () => {
    return tableData.map((item, i) => {
      return (
        <Collapse style={{ color: "#2f3541" }}>
          <Panel style={{ color: "#2f3541" }} header={item.title} key={i}>
            {item.columns &&
              item.columns.map((col, keys) => {
                return (
                  <>
                    <div class="card-header custom-card-header">
                      <div class="row align-items-center">
                        <div class="col-lg-6">
                          <span>{col}</span>
                          <div class="data-text"></div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}

            {item.rows.map((row) => {
              return (
                <span>
                  {row.map((od) => {
                    return (
                      <span>
                        {Object.keys(od).map((key) => {
                          return (
                            <div
                              id="accordion "
                              class="football-data highlight "
                            >
                              <div data-parent="#accordion">
                                <div class="card-body">
                                  <div class="data-wrapper ">
                                    <div class="border-bottom">
                                      <div class="row">
                                        <div class="col-lg-4">
                                          <div class="number d-flex">
                                            {key !== "ID" &&
                                            key !== "FI" &&
                                            key !== "SU" &&
                                            key !== "HA" &&
                                            key !== "FF" &&
                                            key !== "SY" &&
                                            key !== "PY" &&
                                            key !== "IT" ? (
                                              <Descriptions
                                                column={{
                                                  xxl: 4,
                                                  xl: 3,
                                                  lg: 3,
                                                  md: 3,
                                                  sm: 2,
                                                  xs: 1,
                                                }}
                                              >
                                                <Descriptions.Item
                                                  onClick={() =>
                                                    SetValues(
                                                      item.title,
                                                      row.FI,
                                                      row.IT,
                                                      row.ID,
                                                      row[key],
                                                      item.title
                                                    )
                                                  }
                                                  label={key}
                                                >
                                                  {calculate(od[key])}
                                                </Descriptions.Item>
                                              </Descriptions>
                                            ) : (
                                              ""
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </Panel>
        </Collapse>
      );
    });
  };

  useEffect(() => {
    setLeagues(null);
    getData();
    setCurrentMatchId("");
  }, [sportsid]);

  useEffect(() => {
    setCurrentMatchId("");
    setTableData([]);
  }, [changeID]);

  useEffect(() => {
    setCurrentMatchId("");
    ShowMatchList();
  }, [leagues]);

  useEffect(() => {
    getMatchesData();
  }, [currentMatchId]);

  // useEffect(() => {
  //   var interval = setInterval(() => {
  //     getMatchesData();
  //     setTableData([]);
  //   }, 5000);
  // }, [currentMatchId]);

  // const getDataEvery3Sec = () => {
  //   var interval;
  //   if (currentMatchId) {
  //     interval = setInterval(() => {

  //     }, 5000);
  //   }
  //   return () => clearInterval(interval);
  // };

  const extra = () => {
    return (
      <div style={{ width: "200px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#9e9e9e",
          }}
        >
          <p>Home</p>
          <p>Draw</p>
          <p>Away</p>
        </div>
      </div>
    );
  };

  return (
    <>
      {openBet && (
        <BetModal
          visible={openBet}
          setVisible={setOpenBet}
          betId={betId}
          fiId={fiId}
          eventName={eventName}
          sportsId={sportsid}
          odValue={odValue}
        />
      )}
      <div className="highlight">
        <Card
          title="Leagues"
          style={{
            backgroundColor: "#2f3541",
            fontSize: "13px",
            color: "#656565",
            fontWeight: 800,
            maxHeight: "500px",
            overflow: "auto",
            border: "1px solid rgba(90 90 90)",
          }}
          headStyle={{
            fontSize: "13px",
            color: "#9e9e9e",
            fontWeight: 800,
            border: "1px solid rgba(90 90 90)",
          }}
        >
          <Row>
            {leagueList.slice(0, 8).map((item, i) => (
              <Col lg={12}>
                <div className="card-body">
                  <div
                    className="data-wrapper"
                    style={{
                      backgroundColor: "#434c5b",
                      padding: "0 10px",
                      margin: "0.5px",
                      borderBottom: "1px solid rgba(90 90 90) !important",
                      display: "flex",
                    }}
                  >
                    <p
                      onClick={() => setMatchId(item.id)}
                      style={{
                        fontSize: "13px",
                        color: "#9e9e9e",
                        fontWeight: 800,
                        marginBottom: "10px",
                      }}
                    >
                      {item.name}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Card>

        <Card
          extra={extra()}
          headStyle={{
            fontSize: "13px",
            color: "#9e9e9e",
            fontWeight: 800,
            border: "1px solid rgba(90 90 90)",
          }}
          title="Matches"
          style={{
            backgroundColor: "#2f3541",
            marginTop: "20px",
            border: "1px solid rgba(90 90 90)",
          }}
        >
          <div className="card-body">
            <div className="data-wrapper">
              <div className="row">{matchId && ShowMatchList()}</div>
            </div>
          </div>
        </Card>
      </div>
      {tableData && AddTable()}
    </>
  );
};

export default withRouter(Leagues);
