import { useEffect, useState } from "react";
import { Table, Card, message, Checkbox, Button } from "antd";
import { asyncWrap } from "../../utils/utils";
import axios from "axios";
import DepositModal from "./Modals/DepositModal";
import WithdrawalModal from "./Modals/WithdrawalModal";
import MinMaxOddsModal from "./Modals/MinMaxOddsModal";
import ExposureLimitModal from "./Modals/ExposureModal";
import CreditModal from "./Modals/CreditModal";
import PasswordModal from "./Modals/PasswordModal";
import SuperMasterModal from "./Modals/SuperMaster";
import ChangeStatusModal from "./Modals/ChangeStatus";
import GeneratePointsModal from "./Modals/GeneratePointsModal";
import { PlusCircleFilled } from "@ant-design/icons";

const UserDetails = (props: any) => {
  const [userData, setUserData] = useState<any>();
  const [generateBalance, setGenerateBalance] = useState<boolean>(false);
  const [Deposit, setDeposit] = useState<boolean>(false);
  const [withdrawal, setWithdrawal] = useState<boolean>(false);
  const [minMaxOdds, setMinMaxOdds] = useState<boolean>(false);
  const [exposureLimit, setExposureLimit] = useState<boolean>(false);
  const [credit, setCredit] = useState<boolean>(false);
  const [password, setPassword] = useState<boolean>(false);
  const [superMaster, setSuperMaster] = useState<boolean>(false);
  const [changeStatus, setChangeStatus] = useState<boolean>(false);
  const [userId, setUserId] = useState();

  const getUserDetails = async () => {
    const [err, result] = await asyncWrap(axios.get("/user-details"));
    if (err) {
      message.error({
        content: "Something went wrong",
        style: { marginTop: "5vh" },
      });
    }
    setUserData(result.data.data);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const addUser = () => {
    return (
      <div
        onClick={() => props.history.push("/admin/add-user")}
        key={"add"}
        style={{
          width: "90px",
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
          color: "green",
          flexDirection: "row-reverse",
        }}
      >
        Add User
        <PlusCircleFilled style={{ fontSize: "20px", color: "green" }} />
      </div>
    );
  };

  const columns = [
    {
      title: "User Name",
      dataIndex: "UserName",
      key: "UserName",
    },
    {
      title: "Credit Reference",
      dataIndex: "CreditReference",
      key: "CreditReference",
    },
    {
      title: "Balance",
      dataIndex: "UserBalance",
      key: "UserBalance",
    },
    {
      title: "Client(P/L)",
      dataIndex: "ClientPL",
      key: "ClientPL",
    },
    {
      title: "Exposure",
      dataIndex: "Exposure",
      key: "Exposure",
    },
    {
      title: "Available balance",
      dataIndex: "AvailableBalance",
      key: "AvailableBalance",
    },
    {
      title: "UST",
      key: "UST",
      render: (item: any) => <Checkbox checked={item.UST} />,
    },
    {
      title: "BST",
      key: "BST",
      render: (item: any) => <Checkbox checked={item.BST} />,
    },
    {
      title: "Cricket",
      key: "Cricket",
      render: (item: any) => <Checkbox checked={item.Cricket} />,
    },
    {
      title: "Soccer",
      key: "Soccer",
      render: (item: any) => <Checkbox checked={item.Soccer} />,
    },
    {
      title: "Tennis",
      key: "Tennis",
      render: (item: any) => <Checkbox checked={item.Tennis} />,
    },
    {
      title: "Video",
      key: "Casino",
      render: (item: any) => <Checkbox checked={item.Casino} />,
    },
    {
      title: "Exposure Limit",
      dataIndex: "ExposureLimit",
      key: "ExposureLimit",
    },
    {
      title: "Default %",
      dataIndex: "DefaultPercent",
      key: "DefaultPercent",
    },
    {
      title: "Account Type",
      dataIndex: "RoleName",
      key: "RoleName",
    },
    {
      title: "Actions",
      key: "address",
      render: (item: any) => (
        <div>
          <Button
            onClick={() => {
              setUserId(item.UserID);
              setGenerateBalance(true);
            }}
          >
            G
          </Button>
          <Button
            onClick={() => {
              setUserId(item.UserID);
              setDeposit(true);
            }}
          >
            D
          </Button>
          <Button
            onClick={() => {
              setUserId(item.UserID);
              setWithdrawal(true);
            }}
          >
            W
          </Button>
          <Button
            onClick={() => {
              setUserId(item.UserID);
              setMinMaxOdds(true);
            }}
          >
            O
          </Button>
          <Button
            onClick={() => {
              setUserId(item.UserID);
              setExposureLimit(true);
            }}
          >
            L
          </Button>
          <Button
            onClick={() => {
              setUserId(item.UserID);
              setCredit(true);
            }}
          >
            C
          </Button>
          <Button
            onClick={() => {
              setUserId(item.UserID);
              setPassword(true);
            }}
          >
            P
          </Button>
          <Button
            onClick={() => {
              setUserId(item.UserID);
              setChangeStatus(true);
            }}
          >
            S
          </Button>
          <Button
            onClick={() => {
              setUserId(item.UserID);
              setSuperMaster(true);
            }}
          >
            Access
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Card title="User Details" extra={addUser()}>
        <Table
          scroll={{ x: "1500px" }}
          columns={columns}
          bordered
          dataSource={userData}
        />
      </Card>
      {userId && (
        <>
          <GeneratePointsModal
            userId={userId}
            visible={generateBalance}
            setVisible={setGenerateBalance}
            setUserId={setUserId}
          />
          <DepositModal
            userId={userId}
            visible={Deposit}
            setVisible={setDeposit}
            setUserId={setUserId}
          />
          <WithdrawalModal
            userId={userId}
            visible={withdrawal}
            setVisible={setWithdrawal}
            setUserId={setUserId}
          />
          <MinMaxOddsModal
            userId={userId}
            visible={minMaxOdds}
            setVisible={setMinMaxOdds}
            setUserId={setUserId}
          />
          <ExposureLimitModal
            visible={exposureLimit}
            userId={userId}
            setVisible={setExposureLimit}
            setUserId={setUserId}
          />
          <CreditModal
            userId={userId}
            setVisible={setCredit}
            visible={credit}
            setUserId={setUserId}
          />
          <PasswordModal
            userId={userId}
            setVisible={setPassword}
            visible={password}
            setUserId={setUserId}
          />
          <ChangeStatusModal
            userId={userId}
            setVisible={setChangeStatus}
            visible={changeStatus}
            setUserId={setUserId}
          />
          <SuperMasterModal
            userId={userId}
            setVisible={setSuperMaster}
            visible={superMaster}
            setUserId={setUserId}
          />
        </>
      )}
    </div>
  );
};

export default UserDetails;
