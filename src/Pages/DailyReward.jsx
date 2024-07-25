import React, { useContext, useEffect, useState } from "react";
import dollar from "../../src/assets/dollar.png";
import Loader from "../components/Loader";
import { UserDataContext } from "../Utils/userDataContext";

const dailyRewardData = [
  {
    id: 1,
    day: "01",
    amount: 1000,
    label: "1k",
  },
  {
    id: 2,
    day: "02",
    amount: 2000,
    label: "2k",
  },
  {
    id: 3,
    day: "03",
    amount: 3000,
    label: "3k",
  },
  {
    id: 4,
    day: "04",
    amount: 4000,
    label: "4k",
  },
  {
    id: 5,
    day: "05",
    amount: 5000,
    label: "5k",
  },
  {
    id: 6,
    day: "06",
    amount: 6000,
    label: "6k",
  },
  {
    id: 7,
    day: "07",
    amount: 7000,
    label: "7k",
  },
  {
    id: 8,
    day: "08",
    amount: 8000,
    label: "8k",
  },
  {
    id: 9,
    day: "09",
    amount: 9000,
    label: "9k",
  },
  {
    id: 10,
    day: "10",
    amount: 10000,
    label: "10k",
  },
  {
    id: 11,
    day: "11",
    amount: 11000,
    label: "11k",
  },
  {
    id: 12,
    day: "12",
    amount: 12000,
    label: "12k",
  },
  {
    id: 13,
    day: "13",
    amount: 13000,
    label: "13k",
  },
  {
    id: 14,
    day: "14",
    amount: 14000,
    label: "14k",
  },
  {
    id: 15,
    day: "15",
    amount: 15000,
    label: "15k",
  },
  {
    id: 16,
    day: "16",
    amount: 16000,
    label: "16k",
  },
  {
    id: 17,
    day: "17",
    amount: 17000,
    label: "17k",
  },
  {
    id: 18,
    day: "18",
    amount: 18000,
    label: "18k",
  },
  {
    id: 19,
    day: "19",
    amount: 19000,
    label: "19k",
  },
  {
    id: 20,
    day: "20",
    amount: 20000,
    label: "20k",
  },
  {
    id: 21,
    day: "21",
    amount: 21000,
    label: "21k",
  },
  {
    id: 22,
    day: "22",
    amount: 22000,
    label: "22k",
  },
  {
    id: 23,
    day: "23",
    amount: 23000,
    label: "23k",
  },
  {
    id: 24,
    day: "24",
    amount: 24000,
    label: "24k",
  },
  {
    id: 25,
    day: "25",
    amount: 25000,
    label: "25k",
  },
  {
    id: 26,
    day: "26",
    amount: 26000,
    label: "26k",
  },
  {
    id: 27,
    day: "27",
    amount: 27000,
    label: "27k",
  },
  {
    id: 28,
    day: "28",
    amount: 28000,
    label: "28k",
  },
  {
    id: 29,
    day: "29",
    amount: 29000,
    label: "29k",
  },
  {
    id: 30,
    day: "30",
    amount: 30000,
    label: "30k",
  },
];

const DailyReward = () => {
  const { userData, updateUserData } = useContext(UserDataContext);

  const [isLoading, setIsLoading] = useState(true);

  const ClaimHandler = (reward) => {
    const dailyreward = userData.DailyReward
    dailyreward[reward.id-1]=true
    const newCoinValue = userData.coin + reward.amount;
    const newMaxCoinValue = userData.maxCoin + reward.amount;

    updateUserData({
      DailyReward: dailyreward,
      coin: newCoinValue,
      maxCoin: newMaxCoinValue,
    });
  };



  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />; // Display the loader while the content is loading
  }

  function extractDayFromTimestamp(timestamp) {
    if (timestamp) {
      const milliseconds =
        timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000;
      const date = new Date(milliseconds);
      const day = date.getDate();
      const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
      const fullDateString = date.toDateString();
      return {
        dayOfMonth: day,
        dayName: dayName,
        fullDate: fullDateString,
      };
    }
  }

  

  return (
    <div className="text-black ">
      <div className="flex flex-col items-center my-10">
        <img src={dollar} alt="" className="h-16" />
        <h1 className="text-3xl font-bold">Daily Coins</h1>
      </div>
      <div className="flex  flex-col items-center h-[60vh] overflow-y-auto py-1">
        <div className="grid grid-cols-4 justify-center gap-3  ">
          {dailyRewardData.map((reward, index) => (
            <div key={reward.id} className="">
              { (
                <>
                  <div className="bg-[#FA891B] text-center text-white w-20">
                    Day{" " + reward.day}
                  </div>
                  <div className="w-full flex flex-col items-center border-2 border-[#FA891B] bg-[#FDE5C1] border-collapse">
                    <img src={dollar} alt="" className="" />
                    <h1 className="font-bold">{reward.label}</h1>
                  </div>
                  <button
                    className="w-full border-2 bg-[#FA7A16] border-white text-white my-0.5"
                    disabled={
                      userData.created_at + index <= new Date().getDate()
                        ? false
                        : true
                    }
                    onClick={() => {
                      // if (userData.DailyReward[index] === false) {
                        ClaimHandler(reward);
                      // }
                    }}
                  >
                    {userData.DailyReward[index] === true ? "Claimed" : "Claim"}
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyReward;
