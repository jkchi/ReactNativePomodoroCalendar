import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Line, Polyline, Text, Circle, Rect,TSpan } from 'react-native-svg';

const LineChart = ({ data,title }) => {
  const width = 330;
  const height = 250;
  const padding = 30;
  const axisColor = '#a0a0a0'; 
  const gridColor = '#d0d0d0'; 
  const lineColor = '#007BFF'; 

  const maxValue = Math.max(...data.map((d) => d.value), 0);
  const points = data.map((d, index) => {
    const x = padding + 20 + (index * (width - padding * 2 - 40)) / (data.length - 1); 
    const y = height - ((d.value - 0) / maxValue) * (height - padding);
    return { x, y, value: d.value };
  });

  return (
    <View style={styles.chartContainer}>
      <Svg height={height + padding} width={width + padding}>

      <Text
          x={(width + padding) / 2}
          y={20}
          fontSize={16}
          fill="black"
          fontWeight="bold"
          textAnchor="middle"
        >
          {title}
        </Text>

        {/* Background Border */}
        <Rect
          x={0}
          y={0}
          width={width + padding}
          height={height + padding}
          fill="none"
          stroke="#a0a0a0"
          strokeWidth={1}
          rx={10} 
        />

        {/* Background Grid Lines */}
        {[0.25, 0.5, 0.75, 1].map((fraction) => (
          <Line
            key={`grid-${fraction}`}
            x1={padding}
            y1={height - fraction * (height - padding)}
            x2={width - 20}
            y2={height - fraction * (height - padding)}
            stroke={gridColor}
            strokeWidth={1}
            strokeDasharray="4 4"
          />
        ))}

        {/* Y-Axis Labels */}
        {[0.25, 0.5, 0.75, 1].map((fraction, index) => (
          <Text
            key={`y-label-${index}`}
            x={padding - 10}
            y={height - fraction * (height - padding) + 4}
            fontSize={10}
            fill={axisColor}
            textAnchor="end"
          >
            <TSpan>{(maxValue * fraction).toFixed(0)}</TSpan>
            <TSpan x={padding - 6} dy={12}>mins</TSpan>
          </Text>
        ))}

        {/* Line Chart */}
        <Polyline
          points={points.map((p) => `${p.x},${p.y}`).join(' ')}
          fill="none"
          stroke={lineColor}
          strokeWidth={2}
        />

        {/* Data Points */}
        {points.map((point, index) => (
          <Circle
            key={`circle-${index}`}
            cx={point.x}
            cy={point.y}
            r={4}
            fill={lineColor}
          />
        ))}

        {/* X-Axis */}
        <Line
          x1={padding}
          y1={height}
          x2={width - 20}
          y2={height}
          stroke={axisColor}
          strokeWidth={2}
        />

        {/* X-Axis Labels */}
        {data.map((d, index) => {
          const x = padding + 20 + (index * (width - padding * 2 - 40)) / (data.length - 1);
          const date = new Date(d.timestamp);
          const formattedDate = `${date.getMonth() + 1}-${date.getDate()}`;
          return (
            <Text
              key={`x-label-${index}`}
              x={x}
              y={height + 20}
              fontSize={10}
              fill={axisColor}
              textAnchor="middle"
            >
              {formattedDate}
            </Text>
          );
        })}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    // flex:1,
    backgroundColor: '#ffffff',
  },
  title:{
    color:'pink',
    marginTop:30,
    marginBottom:20,
    fontSize:25,
    fontWeight:'bold',
    textAlign: 'center'
  },
});


export default LineChart