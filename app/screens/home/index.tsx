import { useState, FC, useMemo, Fragment } from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { LineChart } from "react-native-chart-kit";
import Switcher from "@/app/components/switcher";
import CrypoItem from "@/app/components/crypoItem";
import Skeleton from "@/app/components/skeleton";

import styles from "./styles";

const Home: FC = () => {
  const [index, setIndex] = useState(0);
  const { eth, eth_data, btc, btc_data } = useSelector(
    (state) => state?.cryptoReducer
  );
  const { width } = Dimensions.get("screen");
  let [position, setPosition] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });

  const BTC_DATA = useMemo(
    () => btc_data.map((item) => parseFloat(item?.p).toFixed(2)),
    [btc_data]
  );

  const ETH_DATA = useMemo(
    () => eth_data.map((item) => parseFloat(item?.p).toFixed(2)),
    [btc_data]
  );

  return (
    <View style={styles.container}>
      <View>
        <Switcher index={index} setIndex={setIndex} />
      </View>

      <View style={[styles.mt2, styles.mb]}>
        <CrypoItem
          price={"Last Price"}
          ticker={"Ticker Code"}
          change={"Change Percentage"}
          header
        />
      </View>

      <ScrollView>
        {index === 0 ? (
          <Fragment>
            {btc?.s ? (
              <CrypoItem
                price={parseFloat(btc?.p).toFixed(2)}
                ticker={btc?.s}
                change={parseFloat(btc?.dc).toFixed(2)}
              />
            ) : (
              <View style={styles.mb}>
                <Skeleton width={"100%"} height={40} />
              </View>
            )}

            <View
              style={{
                borderWidth: 1,
                overflow: "hidden",
              }}
            >
              {btc?.s ? (
                <LineChart
                  style={{
                    marginHorizontal: -30,
                  }}
                  data={{
                    labels: [""],
                    datasets: [
                      {
                        data: BTC_DATA,
                      },
                    ],
                    legend: [btc?.s],
                  }}
                  width={width}
                  height={256}
                  verticalLabelRotation={30}
                  withHorizontalLabels={false}
                  withVerticalLines={false}
                  chartConfig={{
                    backgroundGradientFrom: "#FFFFFF",
                    backgroundGradientTo: "#FFFFFF",
                    strokeWidth: 1,
                    color: (opacity = 1) => `rgba(38, 194, 129, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgba(22, 39, 102, ${opacity})`,
                    barPercentage: 0.5,
                  }}
                  bezier
                  decorator={() => {
                    if (position.visible) {
                      return (
                        <View
                          style={{
                            left: position.x,
                            top: position.y,
                            width: 80,
                            height: 30,
                            backgroundColor: "green",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{ textAlign: "center", color: "#FFFFFF" }}
                          >
                            {position.value}
                          </Text>
                        </View>
                      );
                    }
                    return null;
                  }}
                  onDataPointClick={(data) => {
                    let isSamePoint =
                      position.x === data.x && position.y === data.y;

                    isSamePoint
                      ? setPosition((previousState) => {
                          return {
                            ...previousState,
                            value: data.value,
                            visible: !previousState.visible,
                          };
                        })
                      : setPosition({
                          x: data.x,
                          value: data.value,
                          y: data.y,
                          visible: true,
                        });
                  }}
                />
              ) : (
                <View style={styles.mb}>
                  <Skeleton width={"100%"} height={300} />
                </View>
              )}
            </View>
          </Fragment>
        ) : (
          <Fragment>
            {eth?.s ? (
              <CrypoItem
                price={parseFloat(eth?.p).toFixed(2)}
                ticker={eth?.s}
                change={parseFloat(eth?.dc).toFixed(2)}
              />
            ) : (
              <View style={styles.mb}>
                <Skeleton width={"100%"} height={40} />
              </View>
            )}

            <View
              style={{
                borderWidth: 1,
                overflow: "hidden",
              }}
            >
              {eth?.s ? (
                <LineChart
                  style={{
                    marginHorizontal: -30,
                  }}
                  data={{
                    labels: [""],
                    datasets: [
                      {
                        data: ETH_DATA,
                      },
                    ],
                    legend: [eth?.s],
                  }}
                  width={width}
                  height={256}
                  verticalLabelRotation={30}
                  withHorizontalLabels={false}
                  withVerticalLines={false}
                  chartConfig={{
                    backgroundGradientFrom: "#FFFFFF",
                    backgroundGradientTo: "#FFFFFF",
                    strokeWidth: 1,
                    color: (opacity = 1) => `rgba(38, 194, 129, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgba(22, 39, 102, ${opacity})`,
                    barPercentage: 0.5,
                  }}
                  bezier
                  decorator={() => {
                    if (position.visible) {
                      return (
                        <View
                          style={{
                            borderWidth: 1,
                            left: position.x,
                            top: position.y,
                            width: 80,
                            height: 30,
                            backgroundColor: "green",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{ textAlign: "center", color: "#FFFFFF" }}
                          >
                            {position.value}
                          </Text>
                        </View>
                      );
                    }
                    return null;
                  }}
                  onDataPointClick={(data) => {
                    let isSamePoint =
                      position.x === data.x && position.y === data.y;

                    isSamePoint
                      ? setPosition((previousState) => {
                          return {
                            ...previousState,
                            value: data.value,
                            visible: !previousState.visible,
                          };
                        })
                      : setPosition({
                          x: data.x,
                          value: data.value,
                          y: data.y,
                          visible: true,
                        });
                  }}
                />
              ) : (
                <View style={styles.mb}>
                  <Skeleton width={"100%"} height={300} />
                </View>
              )}
            </View>
          </Fragment>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
