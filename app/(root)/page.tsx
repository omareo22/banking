import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  const loggedIn = {
    firstName: "Omar",
    lastName: "Doe",
    email: "123@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transcations"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1200.35}
          />
        </header>
        RECENT TRANSACTION
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 100},{currentBalance: 102}]} />
    </section>
  );
};

export default Home;
