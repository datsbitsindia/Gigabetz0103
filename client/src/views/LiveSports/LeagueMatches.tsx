
import axios from "axios";
import { Button, message, Row, Col, Card, Table } from "antd";

import { asyncWrap } from "../../utils/utils";
import { useEffect, useState } from "react";

const LeagueMatches = (props: any) => {
  const { leagueId } = props;
  const [leagues, setLeagues] = useState<any>([
    {
      id: "110209621",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10041493",
        name: "Thailand Premier League",
      },
      home: {
        id: "10423073",
        name: "Nong Bua Pitchaya",
      },
      away: {
        id: "10423066",
        name: "BG Pathum United",
      },
      ss: "2-1",
      our_event_id: "4268181",
      r_id: "110209621C1A",
      ev_id: "15675263132C1",
      updated_at: "1637156716",
    },
    {
      id: "110839912",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10043230",
        name: "Romania Cup Women",
      },
      home: {
        id: "10440960",
        name: "Atletic Drobeta Women",
      },
      away: {
        id: "10435947",
        name: "Banat Girls Women",
      },
      ss: "0-4",
      our_event_id: "4339625",
      r_id: "110839912C1A",
      ev_id: "15675279332C1",
      updated_at: "1637156716",
    },
    {
      id: "110916170",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10041266",
        name: "Thailand Division 2",
      },
      home: {
        id: "10414639",
        name: "Trat FC",
      },
      away: {
        id: "10414633",
        name: "Chiang Mai FC",
      },
      ss: "3-1",
      our_event_id: "4268259",
      r_id: "110916170C1A",
      ev_id: "15675343942C1",
      updated_at: "1637156716",
    },
    {
      id: "110907272",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10068015",
        name: "Norway Toppserien Women Play-Offs",
      },
      home: {
        id: "10362148",
        name: "Lyn Fotball Women",
      },
      away: {
        id: "10422763",
        name: "Asane Women",
      },
      ss: "2-1",
      our_event_id: "4340550",
      r_id: "110907272C1A",
      ev_id: "15675369832C1",
      updated_at: "1637156715",
    },
    {
      id: "110903573",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10068033",
        name: "Poland League Women",
      },
      home: {
        id: "10425129",
        name: "UKS Staszkowka Jelna Women",
      },
      away: {
        id: "10433481",
        name: "SWD Wodzislaw Slaski Women",
      },
      ss: "2-1",
      our_event_id: "4339074",
      r_id: "110903573C1A",
      ev_id: "15675447762C1",
      updated_at: "1637156716",
    },
    {
      id: "110848294",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10040553",
        name: "Argentina Reserve League",
      },
      home: {
        id: "10408919",
        name: "Union Santa Fe Reserves",
      },
      away: {
        id: "10410237",
        name: "Defensa y Justicia Reserves",
      },
      ss: "1-1",
      our_event_id: "4338015",
      r_id: "110848294C1A",
      ev_id: "15675318442C1",
      updated_at: "1637156716",
    },
    {
      id: "110848291",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10040553",
        name: "Argentina Reserve League",
      },
      home: {
        id: "10409009",
        name: "Racing Club Reserves",
      },
      away: {
        id: "10408916",
        name: "Colon Reserves",
      },
      ss: "1-1",
      our_event_id: "4338031",
      r_id: "110848291C1A",
      ev_id: "15675318332C1",
      updated_at: "1637156716",
    },
    {
      id: "110848289",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10040553",
        name: "Argentina Reserve League",
      },
      home: {
        id: "10410235",
        name: "Estudiantes LP Reserves",
      },
      away: {
        id: "10408920",
        name: "Huracan Reserves",
      },
      ss: "1-2",
      our_event_id: "4338014",
      r_id: "110848289C1A",
      ev_id: "15675318182C1",
      updated_at: "1637156716",
    },
    {
      id: "110848282",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10040553",
        name: "Argentina Reserve League",
      },
      home: {
        id: "10408280",
        name: "Arsenal de Sarandi Reserves",
      },
      away: {
        id: "10408923",
        name: "Newell's Reserves",
      },
      ss: "0-2",
      our_event_id: "4338013",
      r_id: "110848282C1A",
      ev_id: "15675318172C1",
      updated_at: "1637156716",
    },
    {
      id: "110839939",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10043230",
        name: "Romania Cup Women",
      },
      home: {
        id: "10436191",
        name: "Ladies Targu Mures Women",
      },
      away: {
        id: "10427982",
        name: "Heniu Prundu Bargaului Women",
      },
      ss: "0-5",
      our_event_id: "4339629",
      r_id: "110839939C1A",
      ev_id: "15675279482C1",
      updated_at: "1637156716",
    },
    {
      id: "110839933",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10043230",
        name: "Romania Cup Women",
      },
      home: {
        id: "10771240",
        name: "Coltea 1920 Brasov Women",
      },
      away: {
        id: "10529385",
        name: "AS Magura Cisnadie Women",
      },
      ss: "0-1",
      our_event_id: "4339627",
      r_id: "110839933C1A",
      ev_id: "15675279442C1",
      updated_at: "1637156716",
    },
    {
      id: "110839917",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10043230",
        name: "Romania Cup Women",
      },
      home: {
        id: "10416335",
        name: "Carmen Bucuresti Women",
      },
      away: {
        id: "10427990",
        name: "CSS Targoviste Women",
      },
      ss: "5-1",
      our_event_id: "4339626",
      r_id: "110839917C1A",
      ev_id: "15675279402C1",
      updated_at: "1637156716",
    },
    {
      id: "110839909",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10043230",
        name: "Romania Cup Women",
      },
      home: {
        id: "10533103",
        name: "ASU Politehnica Timisoara Women",
      },
      away: {
        id: "10427984",
        name: "Piros Security Women",
      },
      ss: "0-2",
      our_event_id: "4339624",
      r_id: "110839909C1A",
      ev_id: "15675279212C1",
      updated_at: "1637156716",
    },
    {
      id: "110209743",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10041266",
        name: "Thailand Division 2",
      },
      home: {
        id: "10462022",
        name: "Muangkan Utd",
      },
      away: {
        id: "10459913",
        name: "Nakhon Pathom FC",
      },
      ss: "1-1",
      our_event_id: "4268260",
      r_id: "110209743C1A",
      ev_id: "15675343062C1",
      updated_at: "1637156716",
    },
    {
      id: "110839903",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10036576",
        name: "Poland Ekstraklasa Women",
      },
      home: {
        id: "10435358",
        name: "Czarni Sosnowiec Women",
      },
      away: {
        id: "10411709",
        name: "Gornik Leczna Women",
      },
      ss: "2-3",
      our_event_id: "4289621",
      r_id: "110839903C1A",
      ev_id: "15675276352C1",
      updated_at: "1637156716",
    },
    {
      id: "110839833",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10040532",
        name: "Greece Amateur Cup",
      },
      home: {
        id: "10506272",
        name: "AE Eginas",
      },
      away: {
        id: "10771051",
        name: "Ethnikos OFPF",
      },
      ss: "0-3",
      our_event_id: "4338724",
      r_id: "110839833C1A",
      ev_id: "15675254622C1",
      updated_at: "1637156716",
    },
    {
      id: "110839785",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10036567",
        name: "Czech Republic Division 1 Women",
      },
      home: {
        id: "10400812",
        name: "Slavia Prague Women",
      },
      away: {
        id: "10359229",
        name: "Slovacko Women",
      },
      ss: "2-1",
      our_event_id: "4337349",
      r_id: "110839785C1A",
      ev_id: "15675253542C1",
      updated_at: "1637156715",
    },
    {
      id: "110839779",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10040543",
        name: "Czech Republic 5. Ligy",
      },
      home: {
        id: "10506811",
        name: "TJ Svitavy",
      },
      away: {
        id: "10499590",
        name: "FK Jiskra Hermanuv Mestec",
      },
      ss: "4-2",
      our_event_id: "4337440",
      r_id: "110839779C1A",
      ev_id: "15675253402C1",
      updated_at: "1637156715",
    },
    {
      id: "110839776",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10040543",
        name: "Czech Republic 5. Ligy",
      },
      home: {
        id: "10506810",
        name: "FC Irp Cesky Tesin",
      },
      away: {
        id: "10770807",
        name: "Jakubcovice",
      },
      ss: "0-1",
      our_event_id: "4337404",
      r_id: "110839776C1A",
      ev_id: "15675253382C1",
      updated_at: "1637156715",
    },
    {
      id: "110839701",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10037178",
        name: "Bosnia & Herzegovina 1st League",
      },
      home: {
        id: "10435594",
        name: "Slavija Sarajevo",
      },
      away: {
        id: "10411482",
        name: "FK Zvijezda 09",
      },
      ss: "4-0",
      our_event_id: "4101434",
      r_id: "110839701C1A",
      ev_id: "15675319012C1",
      updated_at: "1637156716",
    },
    {
      id: "110839672",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10037430",
        name: "Argentina Championship Women",
      },
      home: {
        id: "10400017",
        name: "UAI Urquiza Women",
      },
      away: {
        id: "10362215",
        name: "Racing Club Women",
      },
      ss: "3-2",
      our_event_id: "4337787",
      r_id: "110839672C1A",
      ev_id: "15675248042C1",
      updated_at: "1637156716",
    },
    {
      id: "110812573",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10037148",
        name: "Slovakia 3. Liga",
      },
      home: {
        id: "10495658",
        name: "TJ Imel",
      },
      away: {
        id: "10712435",
        name: "Slovan Levice",
      },
      ss: "4-1",
      our_event_id: "4338849",
      r_id: "110812573C1A",
      ev_id: "15675339352C1",
      updated_at: "1637156716",
    },
    {
      id: "110812568",
      sport_id: "1",
      time: "1637150400",
      time_status: "1",
      league: {
        id: "10037148",
        name: "Slovakia 3. Liga",
      },
      home: {
        id: "10401699",
        name: "FC Nitra",
      },
      away: {
        id: "10465623",
        name: "Tj Druzstevnik Velke Ludince",
      },
      ss: "4-2",
      our_event_id: "4338848",
      r_id: "110812568C1A",
      ev_id: "15675256772C1",
      updated_at: "1637156716",
    },
  ]);

  const matches = leagues.filter((item: any) => item.league.id === leagueId);

  // useEffect(() => {
  //   getSports();
  // }, []);

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

  return (
    <Card title={matches[0].league.name}>
      <Table
        dataSource={matches}
        columns={columns}
        bordered
        pagination={false}
      />
    </Card>
  );
};

export default LeagueMatches;
