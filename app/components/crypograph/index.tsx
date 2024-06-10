import { useState, FC, Fragment } from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import CrypoItem from "@/app/components/crypoitem";
import Skeleton from "@/app/components/skeleton";

import styles from "./styles";

type Props = {
  crypto_array: Array<any>;
  current_crypto: any;
};

const CryptoGraph: FC<Props> = ({ crypto_array, current_crypto }) => {
  const { width } = Dimensions.get("screen");
  let [position, setPosition] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });
  return (
    <View testID="graph">
      {current_crypto?.s ? (
        <CrypoItem
          price={parseFloat(current_crypto?.p).toFixed(2)}
          ticker={current_crypto?.s}
          change={parseFloat(current_crypto?.dc).toFixed(2)}
        />
      ) : (
        <View style={styles.mb}>
          <Skeleton width={"100%"} height={40} />
        </View>
      )}

      <View testID="chart" style={styles.container}>
        {current_crypto?.s ? (
          <LineChart
            style={styles.graph}
            data={{
              labels: [""],
              datasets: [
                {
                  data: crypto_array,
                },
              ],
              legend: [current_crypto?.s],
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
              labelColor: (opacity = 1) => `rgba(22, 39, 102, ${opacity})`,
              barPercentage: 0.5,
            }}
            bezier
            decorator={() => {
              if (position.visible) {
                return (
                  <View
                    style={[
                      styles.dot,
                      {
                        left: position.x,
                        top: position.y,
                      },
                    ]}
                  >
                    <Text style={styles.text}>{position.value}</Text>
                  </View>
                );
              }
              return null;
            }}
            onDataPointClick={(data) => {
              let isSamePoint = position.x === data.x && position.y === data.y;

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
    </View>
  );
};

export default CryptoGraph;
